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
    setTimeout(function () {
        $('#style-dict-selector').trigger('chosen:updated');
    }, 1000);

    // Handle input
    $("#text-helper-input").on("input", function () {
        handleInput(this);
    });

    for (var file of styleDictFiles) {
        $.get(`/data/style-dicts/${file}`, function (content) {
            styleDicts.push(content);
            $('#style-dict-selector').append($("<option></option>").attr("value", content.header.name).text(content.header.name));
        });
    }
    loadCustomStyleDicts();
    setTimeout(loadSelectedStyleDicts, 1000);
});

function showCustomStyleDictDocs() {
    show(document.getElementById("custom-style-dict-docs"));
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
                        styleDicts.push(styleDict);
                        customStyleDicts.push(styleDict);
                        saveCustomStyleDicts();
                        $("#style-dict-selector").append(`<option value="${styleDict.header.name}">${styleDict.header.name}</option>`);
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
    const customStyleDicts = JSON.parse(window.localStorage.getItem("customStyleDicts"));
    if (!customStyleDicts || customStyleDicts.length === 0) return;
    for (var dict of customStyleDicts) {
        styleDicts.push(dict);
        $("#style-dict-selector").append(`<option value="${dict.header.name}">${dict.header.name}</option>`);
    }
    return customStyleDicts;
}

function deleteStyleDicts() {
    window.localStorage.removeItem("customStyleDicts");
    location.reload();
}

async function saveSelectedStyleDicts() {
    const selectedStyleDicts = getSelectedNames();
    window.localStorage.setItem("selectedStyleDicts", JSON.stringify(selectedStyleDicts));
}

function loadSelectedStyleDicts() {
    const selectedStyleDicts = JSON.parse(window.localStorage.getItem("selectedStyleDicts"));
    if (!selectedStyleDicts || selectedStyleDicts.length === 0) return;
    for (var dict of selectedStyleDicts) 
    {
        $(`#style-dict-selector option[value="${dict}"]`).attr("selected", true);
    }
    $("#style-dict-selector").trigger("chosen:updated");
    return selectedStyleDicts;
}

function getSelectedNames() {
    let selectedNames = [];

    // Get the selected char style dicts
    $('#style_dict_selector_chosen').find('.search-choice').each(function () {
        var selectedValue = $(this).find('span').text();
        selectedNames.push(selectedValue);
    });

    return selectedNames;
}

function getSelectedFonts() {
    let selectedFonts = [];
    let selectedFontNames = getSelectedNames();
    for (const name of selectedFontNames) {
        const font = styleDicts.find(dict => dict.header.name === name && dict.header.type === "font");
        if (font) selectedFonts.push(font);
    }

    return selectedFonts;
}

function getSelectedEmojis() {
    let selectedEmojis = [];
    let selectedEmojiNames = getSelectedNames();
    for (const name of selectedEmojiNames) {
        const emojiDict = styleDicts.find(dict => dict.header.name === name && dict.header.type === "emojis");
        if (emojiDict) selectedEmojis.push(emojiDict);
    }

    return selectedEmojis;
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

    if (inputText.length > 0) {
        $("#text-helper-output").attr("data-output", "true");
        const selectedFonts = getSelectedFonts();
        const selectedEmojis = getSelectedEmojis();

        // Format the text
        const formatter = new Formatter(inputText, selectedFonts, selectedEmojis);
        const formattedText = formatter.format();
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
    underline: "&n",
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
    "00a": "&1",
    "0a0": "&2",
    "0aa": "&3",
    "a00": "&4",
    "a0a": "&5",
    "fa0": "&6",
    "aaa": "&7",
    "555": "&8",
    "55f": "&9",
    "5f5": "&a",
    "5ff": "&b",
    "f55": "&c",
    "f5f": "&d",
    "ff5": "&e",
    "fff": "&f"
};
const minecraftToHumanFormat = {
    "&l": "bold",
    "&o": "italic",
    "&m": "strikethrough",
    "&n": "underline",
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
    colorCode = colorCode.substring(1).toLowerCase();

    if (colorCode in colorDict) {
        return [colorDict[colorCode], colorCode.length];
    }

    let codeLength = 0;
    if (/^[0-9a-f]{6}/g.test(colorCode)) {
        codeLength = 6;
    } else if (/^[0-9a-f]{3}/g.test(colorCode)) {
        codeLength = 3;
    }
    if (codeLength === 0) return null;

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
        const re = /:[a-zA-Z0-9_]+:/g
        let match;
        while ((match = re.exec(this.text)) != null) {
            const matchEnd = match.index + match[0].length;
            const key = match[0].substring(1, match[0].length - 1);
            console.log(this.emojiDicts);
            for (const dict of this.emojiDicts) {
                const emoji = dict.data[key];
                if (emoji === undefined || emoji === null) continue;
                this.text = this.text.replaceBetween(match.index, matchEnd, emoji);
            }
        }
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
                if (nextChar === null) continue;

                const formatCode = "&" + nextChar;
                if (formatCode in minecraftToHumanFormat) {
                    this.pushToken();
                    const settingsKey = minecraftToHumanFormat[formatCode];
                    this.tokenSettings[settingsKey] = !this.tokenSettings[settingsKey];
                    continue;
                } else if (formatCode === "&r") {
                    this.pushToken();
                    this.resetTokenSettings();
                    continue;
                } else if (/^&[0-9a-f]$/g.test(formatCode)) {
                    this.pushToken();
                    this.tokenSettings.color = colorDict[formatCode];
                    continue;
                }
            }
            if (this.currentChar === "#") {
                let colorCode = this.text.substring(this.currentCharIndex, this.currentCharIndex + 6);
                let [minecraftColorCode, codeLength] = htmlToMinecraftColor(colorCode);
                if (minecraftColorCode !== null) {
                    this.pushToken();
                    this.tokenSettings.color = minecraftColorCode;
                    this.advanceChar(codeLength);
                    continue;
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
        var charArray = text.split('');

        charLoop:
        for (let i = 0; i < charArray.length; i++) {
            for (const font of this.fontDicts) {
                const fontChar = font.data[charArray[i]];
                if (fontChar === undefined || fontChar === null) continue;
                charArray[i] = fontChar;
                continue charLoop;
            }
        }

        return charArray.join('')
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

        for (let j = 0; j < this.endingSpaces; j++) {
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