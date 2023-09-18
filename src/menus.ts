// * Types and Enums

import { mod } from "./math";
import { CameraShots, switchToShot } from "./world";

/**
 * The data stored in items in chest menus
 */
export type ItemData = {
    title?: string;
    description?: string;
    titleColor?: string;
    titleShadow?: string;
    descriptionColor?: string;
    descriptionShadow?: string;
    menu?: keyof MenuElements
};

export type MenuElements = {
    main: HTMLElement | null;
    text_helper: HTMLElement | null;
    command_list: HTMLElement | null;
};

// * Variables

/**
 * Assigns each menu a camera shot.
 */
const MENU_SHOT: { [key in keyof MenuElements]: { closed: keyof CameraShots, open: keyof CameraShots } } = {
    main: {
        closed: "chest",
        open: "chest_open"
    },
    text_helper: {
        closed: "sign",
        open: "sign_open"
    },
    command_list: {
        closed: "command",
        open: "command_open"
    },
};

const MENU_ORDER: (keyof MenuElements)[] = ["main", "text_helper", "command_list"];

const menuElements: MenuElements = {
    main: document.getElementById("inv-holder"),
    text_helper: document.getElementById("inv-holder"),
    command_list: document.getElementById("inv-holder"),
};
var activeMenu: keyof MenuElements = "main";

// HTML Elements
const tooltipHolder = document.getElementById("tooltip-holder");
const inventorySlots = document.querySelectorAll(".inv-item");

// * Event Listeners

document.addEventListener("mousemove", moveTooltip, true);
inventorySlots.forEach((iSlot) => {
    iSlot.addEventListener("mouseleave", endInvHover);
    iSlot.addEventListener("mouseover", () => {
        handleInvHover(iSlot.innerHTML);
    });
    iSlot.addEventListener("click", () => {
        handleInvClick(iSlot.innerHTML);
    });
});

// * Functions

/**
 * Gets a size multiplier depending on the window size.
 * Similar to GUI Scale in Minecraft.
 */
function getElementScale() {
    if (window.innerWidth > 1920 && window.innerHeight > 1080) {
        return 5;
    }
    if (window.innerWidth > 750 && window.innerHeight > 600) {
        return 3;
    }
    return 1;
}

function parseItemData(dataString: string) {
    return dataString.length >= 1 ? JSON.parse(dataString) as ItemData : undefined;
}

// * Menu Functions

function closeActiveMenu() {
    const activeMenuElement = menuElements[activeMenu];

    if (activeMenuElement !== null) {
        // Switch to default styling
        activeMenuElement.style.display = "";
    }
}

/**
 * Closes the currently active and switches to the defined menu.
 */
export function switchToMenu(menu: keyof MenuElements, open: boolean) {
    closeActiveMenu();
    activeMenu = menu;
    switchToShot(open ? MENU_SHOT[menu].open : MENU_SHOT[menu].closed);
}

export function switchMenu(step: number) {
    const newIndex = mod(MENU_ORDER.indexOf(activeMenu) + step, MENU_ORDER.length);
    switchToMenu(MENU_ORDER[newIndex], false);
}

// * Event Handlers

/**
 * Moves the tooltip to the right or left of the mouse depending on the cursors screen position.
 */
function moveTooltip(event: MouseEvent) {
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

/**
 * Handles the hover event for inventory slots.
 * @param innerHtml - The payload stored in the innerHTML of the list element
 */
function handleInvHover(innerHtml: string) {
    const itemData = parseItemData(innerHtml);
    const toolTitle = document.getElementById("tool-title");
    const toolDesc = document.getElementById("tool-desc");

    if (itemData) {
        if (tooltipHolder) {
            // Show tooltip
            tooltipHolder.style.display = "flex";
        }
        if (toolTitle) {
            // Set tooltip title
            toolTitle.innerHTML = itemData.title ?? "";
            toolTitle.style.color = itemData.titleColor ?? "#54fc54";
            toolTitle.style.textShadow =
                `calc(1px * ${getElementScale()}) calc(1px * ${getElementScale()}) ` +
                (itemData.titleShadow ?? "#153e15");
        }
        if (toolDesc) {
            // Set tooltip description
            toolDesc.innerHTML = itemData.description ?? "";
            toolDesc.style.color = itemData.descriptionColor ?? "#a8a8a8";
            toolDesc.style.textShadow =
                `calc(1px * ${getElementScale()}) calc(1px * ${getElementScale()}) ` +
                (itemData.descriptionShadow ?? "#292929");
        }
    } else {
        if (tooltipHolder) {
            // Hide tooltip
            tooltipHolder.style.display = "none";
        }
    }
}

/**
 * Hides the tooltip when a slot is no longer hovered.
 */
function endInvHover() {
    if (tooltipHolder) {
        tooltipHolder.style.display = "none";
    }
}

function handleInvClick(innerHtml: string) {
    const itemData = parseItemData(innerHtml);
    if (itemData && itemData.menu) {
        switchToMenu(itemData.menu, true)
    }
}
