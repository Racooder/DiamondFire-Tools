/**
 * 
 * @param {HTMLElement} inputField 
 */
function handleInput(inputField) {
    var outputField = document.getElementById("text-helper-output");

    inputField.style.height = "5px";
    inputField.style.height = (inputField.scrollHeight) + "px";
    outputField.style.height = "5px";
    outputField.style.height = (outputField.scrollHeight) + "px";

    if (inputField.value.length > 0) {
        outputField.dataset.output = "true";
        const selectedCharFontKeys = $("#char-font-selector").chosen().val();
        var selectedCharFonts = [];
        for (var key of selectedCharFontKeys) {
            selectedCharFonts.push(charFonts.find(font => font._key === key));
        }
        const textFormater = new TextFormater(inputField.value, { htmlColors: true, markdownStyle: true, charFonts: selectedCharFonts });
        textFormater.generateTokens();
        outputField.value = textFormater.diamondString();
    }
    else {
        outputField.dataset.output = "false";
        outputField.value = "&r";
    }
}

function ltrim(str) {
    if(!str) return str;
    return str.replace(/^\s+/g, '');
}

function rtrim(str) {
    if(!str) return str;
    return str.replace(/\s+$/g, '');
}

function Token(text, settings) {
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

class TextFormater {
    #tokenText;
    #tokenSettings;

    constructor(text, settings) {
        this.text = text;
        this.settings = settings;
        this.tokens = [];
    }

    generateTokens() {
        var endingString = "";
        this.#tokenText = "";
        this.#resetTokenSettings();

        for (let i = 0; i < this.text.length; i += 1) {
            const currentChar = this.text[i];
            if (!/\s/.test(currentChar))
                break;
            this.#addTokenText(`&r${currentChar}`);
        }
        if (this.#tokenText.length > 0) {
            this.#addTokenText("&r");
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
            if (this.settings.markdownStyle && currentChar === "_" && nextChar === "_") {
                this.#setTokenSetting("italic", !this.#tokenSettings.italic);
                continue;
            }
            if (this.settings.markdownStyle && currentChar === "~" && nextChar === "~") {
                this.#setTokenSetting("underline", !this.#tokenSettings.underline);
                continue;
            }
            if (this.settings.markdownStyle && currentChar === "ˋ" && nextChar === "ˋ") {
                this.#setTokenSetting("strikethrough", !this.#tokenSettings.strikethrough);
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

        this.#addTokenText(endingString);
        if (this.#tokenText.length > 0)
            this.tokens.push(new Token(this.#tokenText, this.#tokenSettings));
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

    #setTokenSetting(key, value) {
        if (this.#tokenText.length > 0) {
            this.tokens.push(new Token(this.#tokenText, this.#tokenSettings));
            this.#tokenText = "";
        }
        this.#tokenSettings[key] = value;
    }

    #addTokenText(text) {
        charLoop:
            for (let i = 0; i < text.length; i++) {
                const c = text[i];
                for (let j = 0; j < this.settings.charFonts.length; j++) {
                    const font = this.settings.charFonts[j];
                    if (c in font) {
                        this.#tokenText += font[c];
                        continue charLoop;
                    }
                }
                this.#tokenText += c;
            }
    }

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

            dString += token.text;

            lastSettings = token.settings;
        }

        if (dString === "") {
            dString = "&r";
        }

        return dString;
    }
}
