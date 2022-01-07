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

function adaptSize(element){
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

function getInput(){
    var input = document.getElementById("input").value;
    var translation = translate(input.toLowerCase());
    document.getElementById("translation").innerText = translation;
}

function translate(text){
    var translation = '';
    for (const char of text) {
        if (char in dict) {
            translation += dict[char];
            continue;
        }
        translation += char;
    }
    return translation;
}