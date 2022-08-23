/**
 * 
 * @param {HTMLElement} inputField 
 */
function handleInput(inputField) {
    var outputField = document.getElementById("text-helper-output");

    inputField.style.height = "5px";
    inputField.style.height = (inputField.scrollHeight)+"px";
    outputField.style.height = "5px";
    outputField.style.height = (outputField.scrollHeight)+"px";

    if (inputField.value.length > 0) {
        outputField.dataset.output="true";
        const textFormater = new TextFormater(inputField.value, {htmlColors: true, markdownStyle: true});
        outputField.value = textFormater.diamondString();
    }
    else {
        outputField.dataset.output="false";
        outputField.value = "";
    }

}

class TextFormater {
    #formated;
    #outputText;
    #standardSettings;
    #outputSettings;

    /**
     * 
     * @param {string} text 
     * @param {object} settings 
     */
    constructor(text, settings) {
        this.#formated = [];
        this.#outputText = "";
        this.#standardSettings = {
            color: "",
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
            obfuscated: false
        };
        this.#resetSettings();

        for (var i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === "\\") {
                if (i + 1 >= text.length){
                    continue;
                }
                this.#addText(text[i + 1]);
                i++;
                continue;
            }
            if (settings.htmlColors && char === "#") {
                var colorCode = "&x";
                for (let j = 1; j < 7; j++) {
                    if (i + j >= text.length) {
                        break;
                    }
                    const c = text[i + j].toLowerCase();
                    if (c.match(/[0-9]|[a-f]/g) == null){
                        break;
                    }
                    colorCode += `&${c}`
                }
                if (colorCode.length >= 14) {
                    this.#setSetting("color", colorCode.substring(0, 14));
                    i += 6;
                    continue;
                }
                if (colorCode.length >= 8) {
                    this.#setSetting("color", colorCode.substring(0, 8));
                    i += 3;
                    continue;
                }
            }
            if (settings.markdownStyle && char === "*") {
                if (text[i + 1] === "*") {
                    const boldSetting = this.#outputSettings.bold;
                    this.#setSetting("bold", !boldSetting);
                    i++;
                    continue;
                }
            }
            if (settings.markdownStyle && char === "_") {
                if (text[i + 1] === "_") {
                    const italicSetting = this.#outputSettings.italic;
                    this.#setSetting("italic", !italicSetting);
                    i++;
                    continue;
                }
            }
            if (settings.markdownStyle && char === "~") {
                if (text[i + 1] === "~") {
                    const underlineSetting = this.#outputSettings.underline;
                    this.#setSetting("underline", !underlineSetting);
                    i++;
                    continue;
                }
            }
            if (settings.markdownStyle && char === "`") {
                if (text[i + 1] === "`") {
                    const strikethroughSetting = this.#outputSettings.strikethrough;
                    this.#setSetting("strikethrough", !strikethroughSetting);
                    i++;
                    continue;
                }
            }
            if (settings.markdownStyle && char === "§") {
                if (text[i + 1] === "§") {
                    const obfuscatedSetting = this.#outputSettings.obfuscated;
                    this.#setSetting("obfuscated", !obfuscatedSetting);
                    i++;
                    continue;
                }
            }
            if (char === "&") {
                const nextChar = text[i + 1];
                if (nextChar === "r"){
                    this.#endFormat();
                    this.#resetSettings();
                    i++;
                    continue;
                }
                if (i + 1 < text.length && nextChar.match(/[0-9]|[a-f]/g) != null){
                    this.#setSetting("color", "&" + nextChar);
                    i++;
                    continue;
                }
            }
            this.#addText(char);
        }
        if (this.#outputText.length > 0) {
            this.#endFormat();
        }
    }

    /**
     * 
     * @param {string} key 
     * @param {string} value 
     */
    #setSetting(key, value) {
        if (this.#outputText.length > 0)
            this.#endFormat();
        this.#outputSettings[key] = value;
    }

    /**
     * 
     * @param {string} text 
     */
    #addText(text) {
        this.#outputText += text;
    }

    #endFormat() {
        this.#formated.push({
            text: this.#outputText,
            settings: {
                color: this.#outputSettings.color,
                bold: this.#outputSettings.bold,
                italic: this.#outputSettings.italic,
                underline: this.#outputSettings.underline,
                strikethrough: this.#outputSettings.strikethrough,
                obfuscated: this.#outputSettings.obfuscated
            }
        });
        this.#outputText = "";
    }

    #resetSettings() {
        this.#outputSettings = {
            color: this.#standardSettings.color,
            bold: this.#standardSettings.bold,
            italic: this.#standardSettings.italic,
            underline: this.#standardSettings.underline,
            strikethrough: this.#standardSettings.strikethrough,
            obfuscated: this.#standardSettings.obfuscated
        };
    }

    /**
     * 
     * @returns {object[]}
     */
    getFormated() {
        return this.#formated;
    }

    diamondString() {
        var text = "";
        for (const formatedText of this.#formated) {
            text += "&r" + formatedText.settings.color;
            if (formatedText.settings.bold) {
                text += "&l";
            }
            if (formatedText.settings.italic) {
                text += "&o";
            }
            if (formatedText.settings.underline) {
                text += "&n";
            }
            if (formatedText.settings.strikethrough) {
                text += "&m";
            }
            if (formatedText.settings.obfuscated) {
                text += "&k";
            }
            text += formatedText.text;
        }
        if (text.length == 0) {
            return "&r";
        }

        return text;
    }
}
