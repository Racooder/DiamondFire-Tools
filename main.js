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

    var translation = translate(input.toLowerCase());

    translationObject.value = translation;
    translationObject.className = "translation";

    adaptSize(translationObject);
}

function adaptSize(element){
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

function translate(text){
    var translation = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char in dict) {
            translation += dict[char];
            continue;
        }
        if (char == "#"){
            var colorCode = "&x";
            var isColorCode = true;
            for (let j = 1; j < 7; j++) {
                if (i + j >= text.length) {
                    isColorCode = false;
                    break;
                }
                const char = text[i + j];
                if (char.match(/[0-9]|[a-f]/g) == null){
                    isColorCode = false;
                    break;
                }
                colorCode += `&${char}`
            }
            if (isColorCode) {
                translation += colorCode;
                i += 6;
                continue;
            }
        }
        translation += char;
    }
    return translation;
}