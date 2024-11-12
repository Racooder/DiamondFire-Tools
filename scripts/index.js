const functionMap = {
    "closeMenu": closeMenu
}

let menuOpen = false;
if (window.sessionStorage.getItem("menuOpen") === "true") {
    showMenu();
}
setupEventListeners();

function setupEventListeners() {
    const inventorySlots = document.querySelectorAll(".inv-slot");
    document.addEventListener("click", openMenu, true);
    document.addEventListener("mousemove", moveTooltip, true);
    inventorySlots.forEach((iSlot) => {
        setupSlot(iSlot);
        iSlot.addEventListener("mouseleave", endInvHover, true);
        iSlot.addEventListener("mouseover", () => {
            handleInvHover(iSlot);
        }, true);
        iSlot.addEventListener("click", () => {
            handleInvClick(iSlot);
        }, true);
    });
}

function getElementScale() {
    if (window.innerWidth > 1920 && window.innerHeight > 1080) {
        return 5;
    }
    if (window.innerWidth > 750 && window.innerHeight > 600) {
        return 3;
    }
    return 1;
}

function showMenu() {
    const titleScreen = document.getElementById("title-screen");
    titleScreen.style.display = "none";
    document.getElementById("inv-holder").style.display = "block";
    menuOpen = true;
}

function openMenu() {
    const chest = document.getElementById("chest-animation");
    if (!menuOpen) {
        chest.src = "/static/animations/chest_opening.gif"
        let openSound = new Audio("/static/sounds/chest_opening.wav");
        openSound.volume = 0.2;
        openSound.play();
        window.sessionStorage.setItem("menuOpen", "true");
        setTimeout(showMenu, 600);
    }
}

function closeMenu() {
    const chest = document.getElementById("chest-animation");
    const titleScreen = document.getElementById("title-screen");
    document.getElementById("inv-holder").style.display = "none";
    chest.src = "/static/animations/chest_closing.gif"
    titleScreen.style.display = "";
    let closeSound = new Audio("/static/sounds/chest_closing.wav");
    closeSound.volume = 0.2;
    closeSound.play();
    window.sessionStorage.setItem("menuOpen", "false");
    menuOpen = false;
    startDelayedHintTimer();
}

function parseSlotData(element) {
    let slotData = {
        href: element.dataset.href,
        title: element.dataset.title,
        description: element.dataset.description
    };
    if (element.dataset.item) {
        slotData.item = element.dataset.item;
    } else if (element.parentElement.dataset.item) {
        slotData.item = element.parentElement.dataset.item;
    }
    return slotData;
}

function setupSlot(element) {
    const slotData = parseSlotData(element);
    if (slotData.item) {
        element.style.backgroundImage = `url(static/items/${slotData.item}.png)`;
    }
}

function moveTooltip(event) {
    const tooltipHolder = document.getElementById("tooltip-holder");
    if (tooltipHolder) {
        let xPos = event.clientX;
        if (xPos > window.innerWidth / 2) {
            xPos -= tooltipHolder.offsetWidth + 7 * getElementScale();
        } else {
            xPos += 7 * getElementScale();
        }
        tooltipHolder.style.left = xPos + "px";
        tooltipHolder.style.top =
            event.clientY - tooltipHolder.offsetHeight / 2 + "px";
    }
}

function handleInvHover(element) {
    const tooltipHolder = document.getElementById("tooltip-holder");
    const slotData = parseSlotData(element);
    const toolTitle = document.getElementById("tool-title");
    const toolDesc = document.getElementById("tool-desc");

    if (slotData.title || slotData.description) {
        if (tooltipHolder) {
            // Show tooltip
            tooltipHolder.style.display = "flex";
        }
        if (toolTitle) {
            // Set tooltip title
            toolTitle.innerHTML = slotData.title ?? "Unknown Item";
            toolTitle.style.color = slotData.titleColor ?? "#54fc54";
            toolTitle.style.textShadow =
                `calc(1px * ${getElementScale()}) calc(1px * ${getElementScale()}) ` +
                (slotData.titleShadow ?? "#153e15");
        }
        if (toolDesc) {
            // Set tooltip description
            toolDesc.innerHTML = slotData.description ?? "No description available.";
            toolDesc.style.color = slotData.descriptionColor ?? "#a8a8a8";
            toolDesc.style.textShadow =
                `calc(1px * ${getElementScale()}) calc(1px * ${getElementScale()}) ` +
                (slotData.descriptionShadow ?? "#292929");
        }
    } else {
        if (tooltipHolder) {
            // Hide tooltip
            tooltipHolder.style.display = "";
        }
    }
}

function endInvHover() {
    const tooltipHolder = document.getElementById("tooltip-holder");
    if (tooltipHolder) {
        tooltipHolder.style.display = "none";
    }
}

function handleInvClick(element) {
    const slotData = parseSlotData(element);
    if (slotData.href) {
        if (slotData.href.startsWith("js:")) {
            const func = slotData.href.replace("js:", "")
            if (functionMap[func]) {
                functionMap[func]();
            }
        } else {
            window.location.href = slotData.href;
        }
    }
}
