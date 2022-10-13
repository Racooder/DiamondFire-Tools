const lhElements = [
    { href: "index.html", text: "Home", title: "" },
    { href: "text-helper.html", text: "Text Helper", title: "" },
];

const rhElements = [
    { onclick: "", href: "https://github.com/Studio-Racoonia/DiamondFire-Tools", text: "&lt;/&gt;", title: "Code" },
    { onclick: "", href: "https://github.com/Studio-Racoonia/DiamondFire-Tools/issues?q=is%3Aopen+is%3Aissue+label%3Abug", text: "<span style=\"position: relative; bottom: 2px; color: transparent; text-shadow: 0 0 0 white;\">🪲</span>", title: "Report a bug" }
    // Theme button:
    , { onclick: "changeTheme()", href: "", text: "<span id='dark-mode-icon'>🌙</span><span id='light-mode-icon'>🔆</span></span>", title: "Change Theme" }
];

const localization = {
    "en": {
        "independence-declaration": "This is a community-made project. This tool is not endorsed by DiamondFire or DiamondFire staff!",
        "type-here": "Type here...",
        "upload-font": "Upload custom font...",
        "select-font": "Select a font:",
        "how-to-use": "How to use",
        "text-helper-explanation": "Text Helper is a tool that allows you to create stylized text for DiamondFire text values! You can use it to create text for signs, books, chat messages and more!",
        "text-helper-input-fields": "Input fields",
        "color-codes": "Color codes",
        "color-codes-explanation": "On DiamondFire, you have the ability customize your text color using <a href='https://htmlcolorcodes.com/minecraft-color-codes/'>minecraft color codes</a> but with a <code>&</code> instead of a <code>§</code> or html color codes in a special format. Text Helper allows you to write html color codes in their typical format <a href='https://www.w3schools.com/colors/colors_picker.asp'>#rrggbb</a>, and it will automatically convert them to the DiamondFire format.",
        "color-codes-example": "Example: <code>#ff0000red text&3blue text</code> will be converted to <code>&x&f&f&0&0&0&0red text&3blue text</code>",
        "emphasis": "Emphasis",
        "emphasis-explanation": "DiamondFire also allows you to use <a href='https://htmlcolorcodes.com/minecraft-color-codes/'>minecraft color codes</a> (with <code>&</code> instead of <code>§</code>) to emphasize text. For example, <code>&l</code> will make the text bold.",
        "emphasis-explanation-2": "The problem with this feature is that removing single emphasis tags while keeping others can be difficult.<br>If you want to add a word after <code>&lbold &obold+italic</code> which is italic but not bold, you have to remove both tags and reapply the italic tag again. Text Helper allows you to use <a href='https://www.codecademy.com/resources/docs/markdown/emphasis'>markdown-like syntax</a> to make this easier.",
        "emphasis-example": "Example: <code>**This is in bold, _italics_, ~~and strikethrough~~**</code> will be converted to <code>&lThis is in bold, &l&oitalics&r&l, &l&mand strikethrough</code>",
        "emphasis-additional": "Text Helper also supports <code>``underline``</code> and <code>§§obfuscated§§</code>.",
        "fonts": "Fonts",
        "fonts-explanation": "Text Helper also allows you to use char fonts. Char fonts replace specific characters with other characters. For example, the <code>Small Capital</code> font replaces <code>A</code> with <code>ᴀ</code> and <code>DIAMONDFIRE</code> with <code>ᴅɪᴀᴍᴏɴᴅꜰɪʀᴇ</code>. You can use multiple fonts at the same time.",
        "fonts-details": "Full details about fonts can be found <a href='text-helper.html#font-details'>here</a>.",
        "all-tags": "All tags",
        "tag-backslash": "Escapes the next character. For example, <code>\\&r</code> will be converted to <code>&r</code>.",
        "tag-html-color": "Converts the color to the DiamondFire format. For example, <code>#ff0000red text</code> will be converted to <code>&x&f&f&0&0&0&0red text</code>.",
        "tag-df-color": "DiamondFire color codes. For example, <code>&cred text</code> will be displayed red in Minecraft.",
        "tag-emphasis": "Emphasis tags. For example, <code>**bold text**</code> will be converted to <code>&lbold text</code>.",
        "tag-reset": "Resets the styling.",
        "support-capitals-numbers": "Supports capital letters and numbers",
        "support-lowercase-capitals": "Supports lowercase and capital letters",
        "support-numbers": "Supports numbers",
        "support-capitals": "Supports capital letters",
    }
}

$(document).ready(function () {
    document.body.dataset.theme = localStorage.theme || "dark";
    document.body.dataset.lang = "en";

    // var currentMousePos = { x: -1, y: -1 };
    // $(document).mousemove(function(event) {
    //     currentMousePos.x = event.pageX;
    //     currentMousePos.y = event.pageY;
    // });

    var path = window.location.pathname;
    var currentPage = path.split("/").pop();

    for (const lhElement of lhElements) {
        $(".nav-bar").append(`<li class="nav-bar-item${currentPage == lhElement.href ? " active" : ""}"><a href="${lhElement.href}" data-title="${lhElement.title}">${lhElement.text}</a></li>`);
    }

    $(".nav-bar").append('<li id="header-center"></li>');

    for (const rhElement of rhElements) {
        $(".nav-bar").append(`<li class="nav-bar-item${currentPage == rhElement.href ? " active" : ""}"><a href="${rhElement.href}" onclick="${rhElement.onclick}" data-title="${rhElement.title}">${rhElement.text}</a></li>`);
    }

    const lang = document.body.dataset.lang;
    $('*[data-translate="true"]').each(function () {
        $(this).html(localization[lang][$(this).attr("data-content")]);
        $(this).val(localization[lang][$(this).attr("data-value")]);
        $(this).attr("placeholder", localization[lang][$(this).attr("data-placeholder")]);
    });

    // Tooltips:
    // $("a").hover(function () {
    //     var title = $(this).attr("data-title");
    //     if (title != null && title != "" && title != "undefined") {
    //         $('<div/>', {
    //             text: title,
    //             class: 'tooltip',
    //             style: `left: ${currentMousePos.x - (currentMousePos.x < $(document).width() / 2 ? 0 : title.length * 9)}px; top: ${currentMousePos.y}px;`
    //         }).appendTo(this);
    //     }
    // }, function () {
    //     $(document).find("div.tooltip").remove();
    // });
});

function changeTheme() {
    document.body.dataset.theme = document.body.dataset.theme == "dark" ? "light" : "dark";
    localStorage.theme = document.body.dataset.theme;
}
