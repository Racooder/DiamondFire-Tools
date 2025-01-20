"use strict";

// Utility function to escape HTML special characters
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// * Nav Bar Elements
const lhElements = [
    { href: "index.html", text: "nav-home" },
    { href: "text-helper.html", text: "nav-text-helper" },
    { href: "commands.html", text: "nav-commands" },
];

const rhElements = [
    { href: "https://github.com/Studio-Racoonia/DiamondFire-Tools", title: "nav-code", icon:"<i class='fi fi-tr-display-code'></i>" },
    { href: "https://github.com/Studio-Racoonia/DiamondFire-Tools/issues?q=is%3Aopen+is%3Aissue+label%3Abug", title: "nav-report-bug", icon: "<i class='fi fi-rr-bug'></i>" },
    { href: "javascript:changeTheme()", title: "nav-theme", icon: "<i class='dark-mode fi fi-rr-moon-stars'></i><i class='light-mode fi fi-rr-brightness'></i>" },
    { href: "https://www.flaticon.com/uicons", text: "nav-icons-credit" },
];

var langDict;
var fallbackLangDict;
var host;
var translationDone = false;

$(document).ready(function () {
    document.body.dataset.theme = localStorage.theme || "dark";

    host = window.location.host;

    let lang = localStorage.lang || browserLocales(true)[0];

    loadLangDicts(lang).then(function () {
        translateAll();

        // * Nav Bar Setup
        var path = window.location.pathname;
        var currentPage = path.split("/").pop();
    
        for (const lhElement of lhElements) {
            $(".nav-bar").append(`<li class="nav-bar-item${currentPage == lhElement.href ? " active" : ""}"><a href="${lhElement.href}" ${lhElement.title ? 'data-title="' + translate(lhElement.title) : ""}">${lhElement.text ? translate(lhElement.text) : ""}${lhElement.icon ? lhElement.icon : ""}</a></li>`);
        }
    
        $(".nav-bar").append('<li id="header-center"></li>');
    
        for (const rhElement of rhElements) {
            $(".nav-bar").append(`<li class="nav-bar-item${currentPage == rhElement.href ? " active" : ""}"><a href="${rhElement.href}" ${rhElement.title ? 'data-title="' + translate(rhElement.title) : ""}">${rhElement.text ? translate(rhElement.text) : ""}${rhElement.icon ? rhElement.icon : ""}</a></li>`);
        }
        translationDone = true;
    });
});

async function loadLangDicts(lang) {
    await $.get(`/data/localization/en.json`, function (data) {
        fallbackLangDict = data;
        if (!fallbackLangDict) {
            throw "Unable to load english language file";
        }
    })
    if (lang == "en") {
        langDict = fallbackLangDict;
    } else {
        await $.get(`/data/localization/${lang}.json`, function (data) {
            langDict = data;
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
    $(".translate").each(function () {
        let contentKey = $(this).attr("data-content");
        if (contentKey) {
            $(this).append(escapeHtml(translate(contentKey)));
        }
        let valueKey = $(this).attr("data-value");
        if (valueKey) {
            $(this).val((this.value == undefined ? "" : this.value) + translate(valueKey));
        }
        let placeholderKey = $(this).attr("data-placeholder");
        if (placeholderKey) {
            $(this).attr("placeholder", ($(this).attr("placeholder") == undefined ? "" : $(this).attr("placeholder")) + translate(placeholderKey));
        }
    });
}

function translate(key) {
    if (!key) {
        return "";
    }
    let translation = langDict[key];
    if (!translation) {
        translation = fallbackLangDict[key];
        if (!translation) {
            translation = `Missing translation for (${key}). Please report this to the developers.`;
        }
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

function show(element) {
    $(element).show();
}

function hide(element) {
    $(element).hide();
}
