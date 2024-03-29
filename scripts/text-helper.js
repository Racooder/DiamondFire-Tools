"use strict";

const styleDictFiles = [
    "circled.json", 
    "dingbat-circled-numbers.json", 
    "double-circled-numbers.json", 
    "fullwidth.json", 
    "minecraft-emojis.json", 
    "negative-circled-numbers.json",
    "small-capital.json",
    "subscript-numbers.json",
    "superscript-numbers.json"
];
var styleDicts = [];
var customStyleDicts = [];

$(document).ready(function () {
    $('#style-dict-selector').chosen({ width: "200px" });
    $("#style-dict-selector").chosen().change(function () {
        setTimeout(function () {
            saveSelectedStyleDicts();
            handleInput(document.getElementById("text-helper-input"))
        }, 100);
    });

    $("#custom-style-dict-upload").change(function (e) { getCustomStyleDict(e); });

    $('#style-dict-selector').on('chosen:updated', function (event) { });

    // Handle input
    $("#text-helper-input").on("input", function () {
        handleInput(this);
    });

    for (var file of styleDictFiles) {
        $.get(`/data/style-dicts/${file}`, function (content) {
            addStyleDict(content);
        });
    }
    
    loadCustomStyleDicts();
    setTimeout(function () {
        $('#style-dict-selector').trigger('chosen:updated');
        loadSelectedStyleDicts();
        loadTextHelperInput();
    }, 500);
});

function showCustomStyleDictDocs() {
    show(document.getElementById("custom-style-dict-docs"));
} 

function addStyleDict(dict) {
    styleDicts.push(dict);
    $('#style-dict-selector').append($(`<option class='styledict-${dict.header.type}'></option>`).attr("value", dict.header.name).text(dict.header.name));
}

/**
 * Loads a custom style dict from a file
 * @param {Event} evt - The event that triggered the function
 */
function getCustomStyleDict(evt) {
    const files = evt.target.files;
    if (files.length > 0) {
        const file = files[0];
        $('#custom-style-dict-button').val(file.name);
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const styleDict = JSON.parse(e.target.result);
                if (styleDict.header.name && (styleDict.header.type === "font" || styleDict.header.type === "emojis")) {
                    if (styleDicts.find(c => c.header.name === styleDict.header.name)) {
                        alert("Style dict with that name already exists!");
                    }
                    else {
                        addStyleDict(styleDict);
                        customStyleDicts.push(styleDict);
                        saveCustomStyleDicts();
                        $("#style-dict-selector").trigger("chosen:updated");
                    }
                }
                else {
                    alert("Invalid style dict format.");
                }
            }
            catch (e) {
                alert("Invalid style dict file!");
            }
        };
        reader.readAsText(file);
    }
}

async function saveCustomStyleDicts() {
    if (!customStyleDicts || customStyleDicts.length === 0) return;
    window.localStorage.setItem("customStyleDicts", JSON.stringify(customStyleDicts));
}

function loadCustomStyleDicts() {
    const dicts = JSON.parse(window.localStorage.getItem("customStyleDicts"));
    if (!dicts || dicts.length === 0) return;
    for (var dict of dicts) {
        addStyleDict(dict);
        customStyleDicts.push(dict);
    }
    return dicts;
}

function deleteStyleDicts() {
    window.localStorage.removeItem("customStyleDicts");
    location.reload();
}

async function saveSelectedStyleDicts() {
    const selectedStyleDicts = getSelectedIds();
    window.sessionStorage.setItem("selectedStyleDicts", JSON.stringify(selectedStyleDicts));
}

function loadSelectedStyleDicts() {
    const selectedStyleDicts = JSON.parse(window.sessionStorage.getItem("selectedStyleDicts"));
    if (!selectedStyleDicts || selectedStyleDicts.length === 0) return;
    for (var dict of selectedStyleDicts) 
    {
        $(`#style-dict-selector option[value="${dict}"]`).attr("selected", true);
    }
    $("#style-dict-selector").trigger("chosen:updated");
    return selectedStyleDicts;
}

function getSelectedIds() {
    return $('#style-dict-selector').chosen().val();
}

function getSelectedFonts() {
    let selectedFonts = [];
    let selectedFontNames = getSelectedIds();
    for (const name of selectedFontNames) {
        const font = styleDicts.find(dict => dict.header.name === name && dict.header.type === "font");
        if (font) selectedFonts.push(font);
    }

    return selectedFonts;
}

function getSelectedEmojis() {
    let selectedEmojis = [];
    let selectedEmojiNames = getSelectedIds();
    for (const name of selectedEmojiNames) {
        const emojiDict = styleDicts.find(dict => dict.header.name === name && dict.header.type === "emojis");
        if (emojiDict) selectedEmojis.push(emojiDict);
    }

    return selectedEmojis;
}

function loadTextHelperInput() {
    const inputText = window.sessionStorage.getItem("th-inputText");
    if (inputText) {
        $("#text-helper-input").val(inputText);
        handleInput(document.getElementById("text-helper-input"));
    }
}

/**
 * Handles the input of the text helper
 * @param {HTMLElement} inputField 
 */
function handleInput(inputField) {
    // Adapt the height of the input field
    inputField.style.height = "auto";
    inputField.style.height = (inputField.scrollHeight) + "px";
    $("#text-helper-output").css("height", "auto");
    $("#text-helper-output").css("height", ($("#text-helper-output").prop('scrollHeight')) + "px");

    // Get the text
    const inputText = inputField.value.replace(/(\r\n|\n|\r)/gm, "");
    inputField.value = inputText;
    window.sessionStorage.setItem("th-inputText", inputText);

    if (inputText.length > 0) {
        $("#text-helper-output").attr("data-output", "true");
        const selectedFonts = getSelectedFonts();
        const selectedEmojis = getSelectedEmojis();

        // Format the text
        const formatter = new Formatter(inputText, selectedFonts, selectedEmojis);
        let formattedText = formatter.format();
        if (formattedText === "") {
            formattedText = "&r";
        }
        $("#text-helper-output").val(formattedText);
        $("#th-output-tooltip").hide(500);
    }
    else {
        // Handle empty input
        $("#text-helper-output").attr("data-output", "false");
        $("#text-helper-output").val("&r");
        $("#text-helper-output").css("height", "auto");
        $("#th-output-tooltip").show(500);
    }
}


/** Text Formatter */

const formatCodes = {
    bold: "&l",
    italic: "&o",
    strikethrough: "&m",
    underlined: "&n",
    obfuscated: "&k",
    reset: "&r"
};
const settingsDict = {
    "*": ["italic", "bold"],
    "_": ["italic", "underlined"],
    "~": [null, "strikethrough"],
    "§": [null, "obfuscated"]
};
const colorDict = {
    "000000": "&0",
    "0000aa": "&1",
    "00aa00": "&2",
    "00aaaa": "&3",
    "aa0000": "&4",
    "aa00aa": "&5",
    "ffaa00": "&6",
    "aaaaaa": "&7",
    "555555": "&8",
    "5555ff": "&9",
    "55ff55": "&a",
    "55ffff": "&b",
    "ff5555": "&c",
    "ff55ff": "&d",
    "ffff55": "&e",
    "ffffff": "&f",
    "000": "&0",
    "fff": "&f"
};
const minecraftToHumanFormat = {
    "&l": "bold",
    "&o": "italic",
    "&m": "strikethrough",
    "&n": "underlined",
    "&k": "obfuscated"
};

function leftTrim(str) {
    const re = /^\s+/g;
    const match = re.exec(str);
    if (match) {
        return [str.substring(match[0].length), match[0].length];
    }
    return [str, 0];
}

function rightTrim(str) {
    const re = /\s+$/g;
    const match = re.exec(str);
    if (match) {
        return [str.substring(0, str.length - match[0].length), match[0].length];
    }
    return [str, 0];
}

String.prototype.replaceBetween = function (start, end, replacement) {
    return this.substring(0, start) + replacement + this.substring(end);
};

function htmlToMinecraftColor(colorCode) {
    if (colorCode.startsWith("#")) {
        colorCode = colorCode.substring(1).toLowerCase();
    }

    let codeLength = 0;
    if (/^[0-9a-f]{6}/g.test(colorCode)) {
        codeLength = 6;
    } else if (/^[0-9a-f]{3}/g.test(colorCode)) {
        codeLength = 3;
    }
    if (codeLength === 0) return [null, 0];
    colorCode = colorCode.substring(0, codeLength);

    if (colorCode in colorDict) {
        return [colorDict[colorCode], codeLength];
    }

    let minecraftCode = "&x";
    for (let i = 0; i < codeLength; i++) {
        minecraftCode += "&" + colorCode[i];
    }
    return [minecraftCode, codeLength];
}

class Formatter {
    constructor(text, fontDicts, emojiDicts) {
        this.text = text;
        this.fontDicts = fontDicts;
        this.emojiDicts = emojiDicts;
    }

    formatEmojis() {
        let newText = "";
        outLoop:
        for (let i = 0; i < this.text.length; i++) {
            if (this.text[i] === ":") {
                for (let j = i + 1; j < this.text.length; j++) {
                    if (this.text[j] === ":") {
                        const emojiKey = this.text.substring(i + 1, j);
                        let emoji = null;
                        for (const dict of this.emojiDicts) {
                            if (emojiKey in dict.data) {
                                emoji = dict.data[emojiKey];
                                break;
                            }
                        }
                        if (emoji !== null) {
                            newText += emoji;
                            i = j + 1;
                            continue outLoop;
                        }
                    }
                }
            }
            newText += this.text[i];
        }
        this.text = newText;
    }

    advanceChar(steps) {
        steps = (typeof steps === 'undefined') ? 1 : steps;
        this.currentCharIndex += steps;
        if (this.currentCharIndex >= this.text.length) {
            this.currentChar = "";
            return;
        }
        this.currentChar = this.text[this.currentCharIndex];
    }

    pushToken() {
        this.tokens.push({
            text: this.tokenText,
            settings: $.extend({}, this.tokenSettings)
        });
        this.tokenText = "";
    }

    defaultTokenSettings() {
        return {
            "color": "",
            "bold": false,
            "italic": false,
            "underlined": false,
            "strikethrough": false,
            "obfuscated": false
        };
    }

    resetTokenSettings() {
        this.tokenSettings = this.defaultTokenSettings();
    }

    generateTokens() {
        this.resetTokenSettings();
        this.tokens = [];
        this.tokenText = "";
        this.currentCharIndex = -1;

        do {
            this.advanceChar();
            const nextChar = this.currentCharIndex + 1 < this.text.length ? this.text[this.currentCharIndex + 1] : null;

            if (this.currentChar === "\\") {
                this.advanceChar();
                this.tokenText += "\\";
                this.tokenText += this.currentChar;
                continue;
            }
            if (this.currentChar in settingsDict) {
                if (nextChar === this.currentChar) {
                    this.pushToken();
                    const settingsKey = settingsDict[this.currentChar][1];
                    this.tokenSettings[settingsKey] = !this.tokenSettings[settingsKey];
                    this.advanceChar();
                    continue;
                } else if (settingsDict[this.currentChar][0] !== null) {
                    this.pushToken();
                    const settingsKey = settingsDict[this.currentChar][0];
                    this.tokenSettings[settingsKey] = !this.tokenSettings[settingsKey];
                    continue;
                }
            }
            if (this.currentChar === "&") {
                if (nextChar !== null) {
                    const formatCode = "&" + nextChar;
                    if (formatCode in minecraftToHumanFormat) {
                        this.pushToken();
                        const settingsKey = minecraftToHumanFormat[formatCode];
                        this.tokenSettings[settingsKey] = !this.tokenSettings[settingsKey];
                        this.advanceChar();
                        continue;
                    } else if (formatCode === "&r") {
                        this.pushToken();
                        this.resetTokenSettings();
                        this.advanceChar();
                        continue;
                    } else if (/^&[0-9a-f]$/g.test(formatCode)) {
                        this.pushToken();
                        this.tokenSettings.color = formatCode;
                        this.advanceChar();
                        continue;
                    }
                }
            }
            if (this.currentChar === "#") {
                let colorCode = this.text.substring(this.currentCharIndex, this.currentCharIndex + 7);
                if (colorCode.length >= 4) {
                    let [minecraftColorCode, codeLength] = htmlToMinecraftColor(colorCode);
                    if (minecraftColorCode !== null) {
                        this.pushToken();
                        this.tokenSettings.color = minecraftColorCode;
                        this.advanceChar(codeLength);
                        continue;
                    }
                }
            }
            this.tokenText += this.currentChar;
            continue;
        } while (this.currentCharIndex < this.text.length - 1);
        this.pushToken();
        if (this.tokens.length > 1 && this.tokens[0].text === "") {
            this.tokens.shift();
        }
    }

    tokenSettingsChanged(token, lastToken) {
        let changed = {};
        let falseFound = false;

        for (const key in token) {
            if (token[key] !== lastToken[key]) {
                if (token[key] === false) {
                    falseFound = true;
                }
                changed[key] = token[key];
            }
        }

        return [changed, falseFound];
    }

    applyFonts(text) {
        let newText = "";
        let escapeNext = false;

        charLoop:
        for (const char of text) {
            if (escapeNext) {
                newText += char;
                escapeNext = false;
                continue;
            }
            if (char === "\\") {
                escapeNext = true;
                continue;
            }
            for (const font of this.fontDicts) {
                const fontChar = font.data[char];
                if (fontChar === undefined || fontChar === null) continue;
                newText += fontChar;
                continue charLoop;
            }
            newText += char;
        }

        return newText;
    }

    formatTokens() {
        this.formattedText = "";
        if (this.tokens.length === 0) return;

        let lastToken = {
            text: "",
            settings: this.defaultTokenSettings()
        };
        let formatCode;
        for (const token of this.tokens) {
            formatCode = "";
            const [changed, falseFound] = this.tokenSettingsChanged(token.settings, lastToken.settings);
            lastToken = token;
            if (falseFound) {
                this.formattedText += formatCodes.reset;
                for (const key in token.settings) {
                    if (token.settings[key] === true) {
                        formatCode += formatCodes[key];
                    }
                    if (key === "color") {
                        formatCode += token.settings[key];
                    }
                }
            } else {
                for (const key in changed) {
                    if (changed[key] === true) {
                        formatCode += formatCodes[key];
                    }
                    if (key === "color") {
                        formatCode += changed[key];
                    }
                }
            }
            this.formattedText += formatCode;
            this.formattedText += this.applyFonts(token.text);
        }
        this.lastFormatCode = formatCode;
    }

    formatWhitespaces() {
        this.lastFormatCode = this.lastFormatCode || formatCodes.reset;
        
        for (let i = 0; i < this.leadingSpaces; i++) {
            this.formattedText = " " + formatCodes.reset + this.formattedText;
        }
        if (this.leadingSpaces > 0) {
            this.formattedText = formatCodes.reset + this.formattedText;
        }
        
        if (this.endingSpaces >= 1) {
            if (this.tokens[this.tokens.length - 1].text !== "") {
                this.formattedText += this.lastFormatCode;
            } 
            this.formattedText += " ";
        }
        for (let j = 1; j < this.endingSpaces; j++) {
            this.formattedText += this.lastFormatCode + " ";
        }
        if (this.endingSpaces > 0) {
            this.formattedText += this.lastFormatCode;
        }
    }

    format() {
        [this.text, this.leadingSpaces] = leftTrim(this.text);
        [this.text, this.endingSpaces] = rightTrim(this.text);

        this.formatEmojis();
        this.generateTokens();
        this.formatTokens();
        this.formatWhitespaces();

        return this.formattedText;
    }
}
