const tools = [
    {
        name: "Text Helper",
        img: "data/menu/text-helper.png",
        href: "text-helper.html"
    },
    {
        name: "Simple Aritmetic",
        img: "data/menu/simple-aritmetic.png",
        href: "simple-aritmetic.html"
    }
];

var charFonts = [
    {
        _name: "Small Caps",
        _key: "small-caps",
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
        z: "ᴢ",
        A: "ᴀ",
        B: "ʙ",
        C: "ᴄ",
        D: "ᴅ",
        E: "ᴇ",
        F: "ꜰ",
        G: "ɢ",
        H: "ʜ",
        I: "ɪ",
        J: "ᴊ",
        K: "ᴋ",
        L: "ʟ",
        M: "ᴍ",
        N: "ɴ",
        O: "ᴏ",
        P: "ᴘ",
        Q: "ꞯ",
        R: "ʀ",
        S: "ꜱ",
        T: "ᴛ",
        U: "ᴜ",
        V: "ᴠ",
        W: "ᴡ",
        X: "x",
        Y: "ʏ",
        Z: "ᴢ"
    }
]

async function loadMenu() {
    var menuHolder = document.getElementById("tools-menu");
    if (menuHolder) {
        for (var tool of tools) {
            var toolLink = document.createElement("a");
            toolLink.href = tool.href;
            var toolHolder = document.createElement("div");
            toolHolder.classList.add("tool-holder");
            toolHolder.classList.add("rotating-border");
            toolHolder.classList.add("rotating-border--rainbow");
            toolHolder.style.backgroundImage = `url(${tool.img})`;
            var toolName = document.createElement("h3");
            toolName.className = "tool-name";
            toolName.textContent = tool.name;
            toolHolder.appendChild(toolName);
            toolLink.appendChild(toolHolder);
            menuHolder.appendChild(toolLink);
        }
    }
    var charFontSelector = document.getElementById("char-font-selector");
    if (charFontSelector) {
        for (var font of charFonts) {
            var option = document.createElement("option");
            option.value = font._key;
            option.textContent = font._name;
            charFontSelector.appendChild(option);
        }
        $('#char-font-selector').trigger("chosen:updated");
    }
}
