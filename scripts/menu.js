const tools = [
    {
        "name": "Text Helper",
        "img": "data/menu/text-helper.png",
        "href": "text-helper.html"
    },
    {
        "name": "Simple Aritmetic",
        "img": "data/menu/simple-aritmetic.png",
        "href": "simple-aritmetic.html"
    }
];

async function loadMenu() {
    var menuHolder = document.getElementById("tools-menu");
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
