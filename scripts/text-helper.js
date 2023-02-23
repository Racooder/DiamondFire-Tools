"use strict";

const fontFiles = ["circled.json", "dingbat-circled-numbers.json", "double-circled-numbers.json", "fullwidth.json", "negative-circled-numbers.json", "small-capital.json", "subscript-numbers.json", "superscript-numbers.json"];
var charFonts = [];

$(document).ready(function () {
    // Handle font selection
    $('#char-font-selector').chosen({ width: "200px" });
    $("#char-font-selector").chosen().change(function () {
        setTimeout(function () {
            handleInput(document.getElementById("text-helper-input"))
        }, 100);
    });

    // Handle upload of custom fonts
    $("#custom-font-upload").change(function (e) { getCustomFont(e); });

    $('#char-font-selector').on('chosen:updated', function (event) {});
    setTimeout(function () {
        $('#char-font-selector').trigger('chosen:updated');
    }, 1000);

    // Handle input
    $("#text-helper-input").on("input", function () {
        handleInput(this);
    });

    // Load fonts
    for (var fontFile of fontFiles) {
        $.get(`/data/char-fonts/${fontFile}`, function (font) {
            charFonts.push(font);
            $('#char-font-selector').append($("<option></option>").attr("value", font.header.name).text(font.header.name));
        });
    }
});

/**
 * Loads a custom font from a file
 * @param {Event} evt - The event that triggered the function
 */
function getCustomFont(evt) {
    const files = evt.target.files;
    if (files.length > 0) {
        const file = files[0];
        $('#custom-font-button').val(file.name);
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const font = JSON.parse(e.target.result);
                if (font.header.name) {
                    if (charFonts.find(c => c.header.name === font.header.name)) {
                        alert("Font with that name already exists!");
                    }
                    else {
                        charFonts.push(font);
                        $("#char-font-selector").append(`<option value="${font.header.name}">${font.header.name}</option>`);
                        $("#char-font-selector").trigger("chosen:updated");
                    }
                }
                else {
                    alert("Invalid font file.");
                }
            }
            catch (e) {
                alert("Invalid font file!");
            }
        };
        reader.readAsText(file);
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

    if (inputText.length > 0) {
        $("#text-helper-output").attr("data-output", "true");
        var selectedCharFontNames = [];

        // Get the selected char fonts
        $('#char_font_selector_chosen').find('.search-choice').each(function () {
            var selectedValue = $(this).find('span').text();
            selectedCharFontNames.push(selectedValue);
        });
        var selectedCharFonts = [];
        for (var name of selectedCharFontNames) {
            selectedCharFonts.push(charFonts.find(font => font.header.name === name));
        }

        // Format the text
        const textFormater = new TextFormater(inputText, { htmlColors: true, markdownStyle: true, charFonts: selectedCharFonts });
        textFormater.generateTokens();
        $("#text-helper-output").val(textFormater.diamondString());
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

/**
 * Removes whitespaces from the start of a string
 * @param {string} str - The string to trim
 * @returns {string} The trimed string
 */
function ltrim(str) {
    if (!str) return str;
    return str.replace(/^\s+/g, '');
}

/**
 * Removes whitespaces from the end of a string
 * @param {string} str - The string to trim
 * @returns {string} The trimed string
 */
function rtrim(str) {
    if (!str) return str;
    return str.replace(/\s+$/g, '');
}

class TextToken {
    /**
     * @param {string} text - The token text
     * @param {any} settings - The settings for the token
     */
    constructor(text, settings) {
        this.text = text;
        this.settings = {
            color: settings.color,
            bold: settings.bold,
            italic: settings.italic,
            underlined: settings.underlined,
            strikethrough: settings.strikethrough,
            obfuscated: settings.obfuscated,
        };
    }
}

class TextFormater {
    #tokenText;
    #tokenSettings;

    /**
     * @param {string} text - The text to format
     * @param {any} settings - The settings for the formater
     */
    constructor(text, settings) {
        this.text = text;
        this.settings = settings;
        this.tokens = [];
    }

    /**
     * Generates the tokens for the text
     * @returns {TextToken[]} The formatted text
     */
    generateTokens() {
        var endingString = "";
        this.#tokenText = "";
        this.#resetTokenSettings();

        for (let i = 0; i < this.text.length; i += 1) {
            const currentChar = this.text[i];
            if (!/\s/.test(currentChar))
                break;
            this.#tokenText += `&r${currentChar}`;
        }
        if (this.#tokenText.length > 0) {
            this.#tokenText += "&r";
            this.text = ltrim(this.text);
        }

        for (let i = this.text.length - 1; i >= 0; i -= 1) {
            const currentChar = this.text[i];
            if (!/\s/.test(currentChar))
                break;
            endingString += `&r${currentChar}`;
        }
        if (endingString.length > 0) {
            endingString += "&r";
            this.text = rtrim(this.text);
        }

        for (let i = 0; i < this.text.length; i += 2) {
            const currentChar = this.text[i];
            var nextChar = "";
            if (i + 1 < this.text.length) {
                nextChar = this.text[i + 1];
            }

            if (currentChar === "\\") {
                this.#addTokenText(nextChar);
                continue;
            }
            if (this.settings.htmlColors && currentChar === "#") {
                var colorCode = "&x";

                for (let j = i + 1; j < this.text.length && j - i - 1 < 7; j++) {
                    const c = this.text[j].toLowerCase();

                    if (c.match(/[0-9]|[a-f]/g) == null) {
                        break;
                    }
                    colorCode += `&${c}`;
                }

                if (colorCode.length >= 14) {
                    this.#setTokenSetting("color", colorCode.substring(0, 14))
                    i += 5;
                    continue;
                }
                if (colorCode.length >= 8) {
                    this.#setTokenSetting("color", colorCode.substring(0, 8))
                    i += 2;
                    continue;
                }
            }
            if (this.settings.markdownStyle && currentChar === "*" && nextChar === "*") {
                this.#setTokenSetting("bold", !this.#tokenSettings.bold);
                continue;
            }
            if (this.settings.markdownStyle && currentChar === "_" || (currentChar === "*" && nextChar !== "*")) {
                this.#setTokenSetting("italic", !this.#tokenSettings.italic);
                i--;
                continue;
            }
            if (this.settings.markdownStyle && currentChar === "~" && nextChar === "~") {
                this.#setTokenSetting("strikethrough", !this.#tokenSettings.strikethrough);
                continue;
            }
            if (this.settings.markdownStyle && currentChar === "ˋ" && nextChar === "ˋ") {
                this.#setTokenSetting("underline", !this.#tokenSettings.underline);
                continue;
            }
            if (this.settings.markdownStyle && currentChar === "§" && nextChar === "§") {
                this.#setTokenSetting("obfuscated", !this.#tokenSettings.obfuscated);
                continue;
            }
            if (currentChar === "&") {
                if (nextChar === "r") {
                    this.#resetTokenSettings;
                    continue;
                }
                if (nextChar.match(/[0-9]|[a-f]/g) != null) {
                    this.#setTokenSetting("color", "&" + nextChar);
                    continue;
                }
            }

            this.#addTokenText(currentChar);
            i--;
        }

        this.#tokenText += endingString;
        if (this.#tokenText.length > 0)
            this.tokens.push(new TextToken(this.#tokenText, this.#tokenSettings));
        return this.tokens;
    }

    #resetTokenSettings() {
        this.#tokenSettings = {
            color: "",
            bold: false,
            italic: false,
            underlined: false,
            strikethrough: false,
            obfuscated: false
        }
    }

    /**
     * @param {string} key - The key of the setting
     * @param {any} value - The value of the setting
     */
    #setTokenSetting(key, value) {
        if (this.#tokenText.length > 0) {
            this.tokens.push(new TextToken(this.#tokenText, this.#tokenSettings));
            this.#tokenText = "";
        }
        this.#tokenSettings[key] = value;
    }

    /**
     * Adds text to the current token
     * @param {string} text - The text to add to the token
     */
    #addTokenText(text) {
        this.#tokenText += text;
    }

    #fontify(text) {
        let fontifiedText = "";
        charLoop:
        for (let i = 0; i < text.length; i++) {
            let c = text[i];
            for (const font of this.settings.charFonts) {
                for (const fontKey in font.data) {
                    if (c === fontKey) {
                        fontifiedText += font.data[fontKey];
                        continue charLoop;
                    }
                    if (fontKey.startsWith(c)) {
                        for (let j = i + 1; j < text.length; j++) {
                            const nextChar = text[j];
                            if (fontKey === c + nextChar) {
                                fontifiedText += font.data[fontKey];
                                i = j;
                                continue charLoop;
                            }
                            if (fontKey.startsWith(c + nextChar)) {
                                c += nextChar;
                                continue;
                            }
                            break;
                        }
                    }
                }
            }
            fontifiedText += text[i];
        }

        return fontifiedText;
    }

    /**
     * @returns {string} The formatted text
     */
    diamondString() {
        var dString = "";
        var lastSettings = undefined;

        for (const token of this.tokens) {
            if (lastSettings !== undefined) {
                for (const key of Object.keys(token.settings)) {
                    if ((token.settings[key] === false && lastSettings[key] === true) || (token.settings.color === "" && lastSettings.color !== "")) {
                        dString += "&r";
                        break;
                    }
                }
            }

            if (lastSettings === undefined || lastSettings.color !== token.settings.color) {
                dString += token.settings.color;
            }

            if (token.settings.bold) {
                dString += "&l";
            }
            if (token.settings.italic) {
                dString += "&o";
            }
            if (token.settings.underline) {
                dString += "&n";
            }
            if (token.settings.strikethrough) {
                dString += "&m";
            }
            if (token.settings.obfuscated) {
                dString += "&k";
            }

            dString += this.#fontify(token.text);

            lastSettings = token.settings;
        }

        if (dString === "") {
            dString = "&r";
        }

        return dString;
    }
}

function showCustomFontDocs() {
    show(document.getElementById("custom-font-docs"));
} 
