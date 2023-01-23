"use strict";
// * Nav Bar Elements
const lhElements = [
    { href: "index.html", text: "Home", title: "" },
    { href: "text-helper.html", text: "Text Helper", title: "" },
    { href: "commands.html", text: "Commands", title: "" },
];

const rhElements = [
    { onclick: "", href: "https://github.com/Studio-Racoonia/DiamondFire-Tools", text: "&lt;/&gt;", title: "Code" },
    { onclick: "", href: "https://github.com/Studio-Racoonia/DiamondFire-Tools/issues?q=is%3Aopen+is%3Aissue+label%3Abug", text: "<span style=\"position: relative; bottom: 2px; color: transparent; text-shadow: 0 0 0 white;\">🪲</span>", title: "Report a bug" }
    // Theme button:
    , { onclick: "changeTheme()", href: "", text: "<span id='dark-mode-icon'>🌙</span><span id='light-mode-icon'>🔆</span></span>", title: "Change Theme" }
];

var langDict;
var fallbackLangDict;

$(document).ready(function () {
    document.body.dataset.theme = localStorage.theme || "dark";

    let lang = localStorage.lang || browserLocales(true)[0];

    loadLangDicts(lang).then(function () {
        translateAll();
    });

    // * Nav Bar Setup
    var path = window.location.pathname;
    var currentPage = path.split("/").pop();

    for (const lhElement of lhElements) {
        $(".nav-bar").append(`<li class="nav-bar-item${currentPage == lhElement.href ? " active" : ""}"><a href="${lhElement.href}" data-title="${lhElement.title}">${lhElement.text}</a></li>`);
    }

    $(".nav-bar").append('<li id="header-center"></li>');

    for (const rhElement of rhElements) {
        $(".nav-bar").append(`<li class="nav-bar-item${currentPage == rhElement.href ? " active" : ""}"><a href="${rhElement.href}" onclick="${rhElement.onclick}" data-title="${rhElement.title}">${rhElement.text}</a></li>`);
    }
});

async function loadLangDicts(lang) {
    await $.get(`https://raw.githubusercontent.com/Studio-Racoonia/DiamondFire-Tools/main/data/localization/en.json`, function (data) {
        fallbackLangDict = JSON.parse(data);
        if (!fallbackLangDict) {
            throw "Unable to load english language file";
        }
    })
    if (lang == "en") {
        langDict = fallbackLangDict;
    } else {
        await $.get(`https://raw.githubusercontent.com/Studio-Racoonia/DiamondFire-Tools/main/data/localization/${lang}.json`, function (data) {
            langDict = JSON.parse(data);
            if (!langDict) {
                if (lang != "en") {
                    langDict = fallbackLangDict;
                } else {
                    throw "Unable to load english language file";
                }
            }
        });
    }
}

/**
 * Loads the page in the specified language.
 * @param {string} lang - The language key
 */
async function translateAll() {
    $('*[data-translate="true"]').each(function () {
        $(this).html(translate($(this).attr("data-content")));
        $(this).val(translate($(this).attr("data-value")));
        $(this).attr("placeholder", translate($(this).attr("data-placeholder")));
    });
}

function translate(key) {
    let translation = langDict[key];
    if (!translation) {
        translation = fallbackLangDict[key];
    }
    return translation;
}

function browserLocales(languageCodeOnly = false) {
    return navigator.languages.map((locale) =>
        languageCodeOnly ? locale.split("-")[0] : locale,
    );
}

/**
 * Changes the theme of the page.
 */
async function changeTheme() {
    document.body.dataset.theme = document.body.dataset.theme == "dark" ? "light" : "dark";
    localStorage.theme = document.body.dataset.theme;
}
