function onload() {
    loadTheme();

    if (typeof loadMenu === "function")
        loadMenu();
}

function loadTheme() {
    document.getElementById("body").dataset.theme = "rainbow";
}