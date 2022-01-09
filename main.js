const dict = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ꞯ",
    r: "ʀ",
    s: "ꜱ",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ"
}

function handleInput(element){
    adaptSize(element);

    var input = element.value;
    var translationObject = document.getElementById("translation");

    if(input.length == 0){
        translationObject.className = "translationField";
        translationObject.value = "";
        return;
    }

    var translation = translate(input);

    translationObject.value = translation;
    translationObject.className = "translation";

    adaptSize(translationObject);
}

function adaptSize(element){
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

var backSlash = false;

function translate(text){
    var translation = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const lowerCaseChar = char.toLowerCase();
        
        if (lowerCaseChar in dict) {
            translation += dict[lowerCaseChar];
            continue;
        }
        if (char == "#"){
            var colorCode = "&x";

            for (let j = 1; j < 7; j++) {
                if (i + j >= text.length) {
                    break;
                }
                const c = text[i + j];
                if (c.match(/[0-9]|[a-f]/g) == null){
                    break;
                }
                colorCode += `&${c}`
            }

            if (colorCode.length >= 14) {
                translation += colorCode.substring(0, 14);
                i += 6;
                continue;
            }
            if (colorCode.length >= 8) {
                translation += colorCode.substring(0, 8);
                i += 3;
                continue;
            }
        }
        if (char == "\\"){
            if (i + 1 >= text.length){
                continue;
            }

            translation += text[i + 1];
            i++;
            continue;
        }
        translation += char;
    }
    return translation;
}
