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

function loadLanguage(lang) {
    $.getJSON(`../data/localization/${lang}.json`, function (langDict) {
        if (!langDict) {
            if (lang != "en") {
                loadLanguage("en");
                return;
            }
            throw "Unable to load english language file";
        }
        $('*[data-translate="true"]').each(function () {
            $(this).html(langDict[$(this).attr("data-content")]);
            $(this).val(langDict[$(this).attr("data-value")]);
            $(this).attr("placeholder", langDict[$(this).attr("data-placeholder")]);
        });
    });
}

$(document).ready(function () {
    document.body.dataset.theme = localStorage.theme || "dark";
    document.body.dataset.lang = "en";

    loadLanguage(document.body.dataset.lang);

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
