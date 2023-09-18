import "./style.css";
import { switchMenu, switchToMenu } from "./menus.ts";
import { setupWorld } from "./world.ts";
import hotkeys, { HotkeysEvent } from "hotkeys-js";

setupWorld();

// * Hotkeys

hotkeys("alt+m,alt+t,alt+c,left,right", handleMenuSwitch);

// * Hotkey Handlers

function handleMenuSwitch(_event: KeyboardEvent, handler: HotkeysEvent) {
    switch (handler.key) {
        case "alt+m":
            switchToMenu("main", true);
            break;
        case "alt+t":
            switchToMenu("text_helper", true);
            break;
        case "alt+c":
            switchToMenu("command_list", true);
            break;
        case "left":
            switchMenu(-1);
            break;
        case "right":
            switchMenu(1);
            break;
        default:
            switchToMenu("main", false);
    }
}
