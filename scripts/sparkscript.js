(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sparkscript = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class CallFunction extends components_1.ActionBlock {
    /**
     * Call a specific function.
     * @param name Function name to call.
     */
    constructor(name) {
        super("call_func", name, []);
    }
}
exports.default = CallFunction;

},{"../core/components":29}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Control extends components_1.ActionBlock {
    /**
     * Control.
     * @param action Action to perform.
     * @param args Arguments to pass.
     */
    constructor(action, ...args) {
        super("control", action, args, false);
    }
}
exports.default = Control;

},{"../core/components":29}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCondition = exports.EntityEvent = exports.EntityAction = void 0;
const components_1 = require("../core/components");
class EntityAction extends components_1.ActionBlock {
    /**
     * Used to do something related to an entity or multiple entities.
     * @param action Action to perform.
     * @param args Arguments to pass.
     */
    constructor(action, target, ...args) {
        super("entity_action", action, args, false, target);
    }
}
exports.EntityAction = EntityAction;
class EntityEvent extends components_1.ActionBlock {
    /**
     * When an entity does something.
     * @param event Event to listen for.
     */
    constructor(event) {
        super("entity_event", event, []);
    }
}
exports.EntityEvent = EntityEvent;
class EntityCondition extends components_1.ConditionalBlock {
    /**
     * If an entity did something.
     * @param condition Action of condition.
     * @param target Target of the condition.
     * @param args Arguments to pass.
     */
    constructor(condition, target, ...args) {
        super("if_entity", condition, args, false, target);
    }
}
exports.EntityCondition = EntityCondition;
exports.default = {
    Action: EntityAction,
    Event: EntityEvent,
};

},{"../core/components":29}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Func extends components_1.DataBlock {
    /**
     * Place a function.
     * @param name Function name.
     * @param args Arguments, can be used as notes since they're not used in the function.
     */
    constructor(name, ...args) {
        super("func", name, args);
    }
}
exports.default = Func;

},{"../core/components":29}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCondition = exports.GameAction = void 0;
const components_1 = require("../core/components");
class GameAction extends components_1.ActionBlock {
    /**
     * Used to do something related to the plot and everyone playing it.
     * @param action Action to perform.
     * @param args Arguments to pass.
     */
    constructor(action, ...args) {
        super("game_action", action, args, false);
    }
}
exports.GameAction = GameAction;
class GameCondition extends components_1.ConditionalBlock {
    /**
     *
     */
    constructor(action, ...args) {
        super("if_game", action, args, false);
    }
}
exports.GameCondition = GameCondition;
exports.default = {
    GameAction,
    GameCondition
};

},{"../core/components":29}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCondition = exports.PlayerEvent = exports.PlayerAction = void 0;
const components_1 = require("../core/components");
class PlayerAction extends components_1.ActionBlock {
    /**
     * Do a player action.
     * @param action Action to perform.
     * @param args Arguments to pass.
     */
    constructor(action, target, ...args) {
        super("player_action", action, args, false, target);
    }
}
exports.PlayerAction = PlayerAction;
class PlayerEvent extends components_1.ActionBlock {
    /**
     * When a player does something.
     * @param event Event to listen for.
     */
    constructor(event) {
        super("event", event, []);
    }
}
exports.PlayerEvent = PlayerEvent;
class PlayerCondition extends components_1.ConditionalBlock {
    /**
     * If a player did something.
     * @param condition Action of condition.
     * @param target Target of the condition.
     * @param args Arguments to pass.
     */
    constructor(condition, target, ...args) {
        super("if_player", condition, args, false, target);
    }
}
exports.PlayerCondition = PlayerCondition;
exports.default = {
    Action: PlayerAction,
    Event: PlayerEvent,
    Condition: PlayerCondition,
};

},{"../core/components":29}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Process extends components_1.DataBlock {
    /**
     * Place a process.
     * @param name Function name.
     * @param args Arguments, can be used as notes since they're not used in the function.
     */
    constructor(name, ...args) {
        super("process", name, args);
    }
}
exports.default = Process;

},{"../core/components":29}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class SelectObject extends components_1.SubActionBlock {
    /**
     * Select an object (Entities, Items, ..etc).
     * @param condition Condition to select by.
     * @param args Arguments to pass specified by the chosen condition.
     */
    constructor(condition, ...args) {
        super("select_obj", condition, "(unimplemented)", args);
    }
}
exports.default = SelectObject;

},{"../core/components":29}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class SetVariable extends components_1.ActionBlock {
    constructor(action, ...args) {
        if (!("scope" in args[0]) || !("name" in args[0]))
            throw new Error("First given argument in a SetVariable block should be a variable.");
        super("set_var", action, args);
        this.variable = args[0];
    }
}
exports.default = SetVariable;

},{"../core/components":29}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class StartProcess extends components_1.ActionBlock {
    /**
     * Start a process thread.
     * @param name Function name.
     * @param args Arguments, can be used as notes since they're not used in the function.
     */
    constructor(name) {
        super("start_process", name, []);
    }
}
exports.default = StartProcess;

},{"../core/components":29}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class VariableCondition extends components_1.ConditionalBlock {
    /**
     * If a specific variable has or is equal to a property.
     * @param condition Condition to match for.
     * @param args Arguments to pass.
     */
    constructor(condition, ...args) {
        super("if_var", condition, args, false);
    }
}
exports.default = VariableCondition;

},{"../core/components":29}],12:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = exports.Func = exports.StartProcess = exports.CallFunction = exports.SelectObject = exports.Control = exports.VariableCondition = exports.SetVariable = exports.GameCondition = exports.GameAction = exports.EntityCondition = exports.EntityEvent = exports.EntityAction = exports.PlayerCondition = exports.PlayerEvent = exports.PlayerAction = void 0;
var Player_1 = require("./Player");
Object.defineProperty(exports, "PlayerAction", { enumerable: true, get: function () { return Player_1.PlayerAction; } });
Object.defineProperty(exports, "PlayerEvent", { enumerable: true, get: function () { return Player_1.PlayerEvent; } });
Object.defineProperty(exports, "PlayerCondition", { enumerable: true, get: function () { return Player_1.PlayerCondition; } });
var Entity_1 = require("./Entity");
Object.defineProperty(exports, "EntityAction", { enumerable: true, get: function () { return Entity_1.EntityAction; } });
Object.defineProperty(exports, "EntityEvent", { enumerable: true, get: function () { return Entity_1.EntityEvent; } });
Object.defineProperty(exports, "EntityCondition", { enumerable: true, get: function () { return Entity_1.EntityCondition; } });
var Game_1 = require("./Game");
Object.defineProperty(exports, "GameAction", { enumerable: true, get: function () { return Game_1.GameAction; } });
Object.defineProperty(exports, "GameCondition", { enumerable: true, get: function () { return Game_1.GameCondition; } });
var SetVariable_1 = require("./SetVariable");
Object.defineProperty(exports, "SetVariable", { enumerable: true, get: function () { return __importDefault(SetVariable_1).default; } });
var VariableCondition_1 = require("./VariableCondition");
Object.defineProperty(exports, "VariableCondition", { enumerable: true, get: function () { return __importDefault(VariableCondition_1).default; } });
var Control_1 = require("./Control");
Object.defineProperty(exports, "Control", { enumerable: true, get: function () { return __importDefault(Control_1).default; } });
var SelectObject_1 = require("./SelectObject");
Object.defineProperty(exports, "SelectObject", { enumerable: true, get: function () { return __importDefault(SelectObject_1).default; } });
// export { default as Repeat }							from "./Repeat":
var CallFunction_1 = require("./CallFunction");
Object.defineProperty(exports, "CallFunction", { enumerable: true, get: function () { return __importDefault(CallFunction_1).default; } });
var StartProcess_1 = require("./StartProcess");
Object.defineProperty(exports, "StartProcess", { enumerable: true, get: function () { return __importDefault(StartProcess_1).default; } });
var Func_1 = require("./Func");
Object.defineProperty(exports, "Func", { enumerable: true, get: function () { return __importDefault(Func_1).default; } });
var Process_1 = require("./Process");
Object.defineProperty(exports, "Process", { enumerable: true, get: function () { return __importDefault(Process_1).default; } });

},{"./CallFunction":1,"./Control":2,"./Entity":3,"./Func":4,"./Game":5,"./Player":6,"./Process":7,"./SelectObject":8,"./SetVariable":9,"./StartProcess":10,"./VariableCondition":11}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
function default_1(block) {
    const result = [];
    if (block instanceof components_1.ConditionalBlock)
        result.push(...components_1.ConditionalBlock.conditionalBlockHandler(block.export()));
    else
        result.push(block.export());
    return result;
}
exports.default = default_1;

},{"../core/components":29}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultOption = exports.getDefaultSlot = exports.getActionTags = void 0;
const values_1 = require("../values");
const codeDump_1 = require("../core/codeDump");
function getActionTags(type, action) {
    let result = [];
    for (const _ in (0, codeDump_1.getDump)().actionsWithTags) {
        const checkAction = _;
        if (checkAction !== action)
            continue;
        const tags = (0, codeDump_1.getDump)().actionsWithTags[action];
        if (!tags)
            break;
        for (const t of tags) {
            //@ts-ignore //! TODO: idk how to fix this.
            const tagValue = new values_1.BLTag(type, action, t);
            result.push(tagValue);
        }
    }
    return result;
}
exports.getActionTags = getActionTags;
function getDefaultSlot(tag) {
    return (0, codeDump_1.getDump)().actionTags[tag].slot;
}
exports.getDefaultSlot = getDefaultSlot;
function getDefaultOption(tag) {
    return (0, codeDump_1.getDump)().actionTags[tag].defaultOption;
}
exports.getDefaultOption = getDefaultOption;

},{"../core/codeDump":19,"../values":47}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEditorSettings(name) {
    return {
        usingCodeutils: false,
        cuConf: {
            port: 31371,
            host: "localhost",
            protocol: "ws",
            endpoint: "codeutilities/item"
        },
        name
    };
}
exports.default = getEditorSettings;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Template_1 = tslib_1.__importDefault(require("../../core/components/Template"));
const Value_1 = tslib_1.__importDefault(require("../../core/components/Value"));
const values_1 = require("../../values");
const codeblocks_1 = require("../../codeblocks");
const mapper_1 = tslib_1.__importDefault(require("../../mapper"));
const mapperUtils_1 = require("../mapperUtils");
const utilities_1 = require("../utilities");
const codeDump_1 = require("../../core/codeDump");
/**
 * Generate a quick editor.
 * @param _template Template to edit.
 * @param customActionOptions Action definitons and doCustomAction function
 * @returns The quick editor.
 */
function getEditor(_template, customActionOptions) {
    let template;
    if (!_template)
        template = new Template_1.default(false);
    else
        template = _template;
    const actDefs = customActionOptions.actDefs || {};
    const doCustomAction = customActionOptions.doCustomAction;
    const editor = {
        _from: (other) => {
            template._blocks = other.blocks;
        },
        getTemplate: () => template,
        get: (index) => {
            var _a;
            return (_a = template.blocks[index]) !== null && _a !== void 0 ? _a : null;
        },
        //* Spark stuff.
        defAction: (name, cbOrAction) => {
            actDefs[name] = cbOrAction;
            getEditor.applyActions(editor, actDefs, doCustomAction);
        },
        action: getEditor.defaultActDefs,
        //* Values.
        item: (id, name, amount, slot) => new values_1.MinecraftItem(id, name, amount, slot),
        mc: (id, name, amount, slot) => new values_1.MinecraftItem(id, name, amount, slot),
        text: (text, slot) => new values_1.Text(text, slot),
        txt: (text, slot) => new values_1.Text(text, slot),
        number: (number, slot) => new values_1.Number(number, slot),
        num: (number, slot) => new values_1.Number(number, slot),
        variable: (name, scope, slot) => new values_1.Variable(name, scope, slot),
        var: (name, scope, slot) => new values_1.Variable(name, scope, slot),
        location: (x, y, z, pitch, yaw, slot) => new values_1.Location(x, y, z, pitch, yaw, slot),
        loc: (x, y, z, pitch, yaw, slot) => new values_1.Location(x, y, z, pitch, yaw, slot),
        potion: (potion, duration, amplifier, slot) => new values_1.Potion(potion, duration, amplifier, slot),
        pot: (potion, duration, amplifier, slot) => new values_1.Potion(potion, duration, amplifier, slot),
        sound: (sound, volume, pitch, slot) => new values_1.Sound(sound, volume, pitch, slot),
        snd: (sound, volume, pitch, slot) => new values_1.Sound(sound, volume, pitch, slot),
        vector: (x, y, z, slot) => new values_1.Vector(x, y, z, slot),
        vec: (x, y, z, slot) => new values_1.Vector(x, y, z, slot),
        true: new values_1.Number(1),
        false: new values_1.Number(0),
        game: {
            //* Game value.
            value: (value, target, slot) => new values_1.GameValue(value, target, slot),
            val: (value, target, slot) => new values_1.GameValue(value, target, slot),
            //* Game action.
            action: (action, ...args) => template.add(new codeblocks_1.GameAction(action, ...args)),
            act: (action, ...args) => template.add(new codeblocks_1.GameAction(action, ...args)),
            //* Game condition.
            condition: (condition, ...args) => template.add(new codeblocks_1.GameCondition(condition, ...args)),
            if: (condition, ...args) => template.add(new codeblocks_1.GameCondition(condition, ...args)),
        },
        //* Codeblocks.
        player: {
            action: (action, ...args) => template.add(new codeblocks_1.PlayerAction(action, "Default", ...args)),
            act: (action, ...args) => template.add(new codeblocks_1.PlayerAction(action, "Default", ...args)),
            event: (event) => template.add(new codeblocks_1.PlayerEvent(event)),
            evt: (event) => template.add(new codeblocks_1.PlayerEvent(event)),
            condition: (condition, ...args) => template.add(new codeblocks_1.PlayerCondition(condition, "Default", ...args)),
            if: (condition, ...args) => template.add(new codeblocks_1.PlayerCondition(condition, "Default", ...args)),
        },
        entity: {
            action: (action, ...args) => template.add(new codeblocks_1.EntityAction(action, "Default", ...args)),
            act: (action, ...args) => template.add(new codeblocks_1.EntityAction(action, "Default", ...args)),
            event: (event) => template.add(new codeblocks_1.EntityEvent(event)),
            evt: (event) => template.add(new codeblocks_1.EntityEvent(event)),
            condition: (condition, ...args) => template.add(new codeblocks_1.EntityCondition(condition, "Default", ...args)),
            if: (condition, ...args) => template.add(new codeblocks_1.EntityCondition(condition, "Default", ...args)),
        },
        function: (name, ...args) => template.add(new codeblocks_1.Func(name, ...args)),
        func: (name, ...args) => template.add(new codeblocks_1.Func(name, ...args)),
        callFunction: (name) => template.add(new codeblocks_1.CallFunction(name)),
        callFunc: (name) => template.add(new codeblocks_1.CallFunction(name)),
        process: (name, ...args) => template.add(new codeblocks_1.Process(name, ...args)),
        proc: (name, ...args) => template.add(new codeblocks_1.Process(name, ...args)),
        startProcess: (name) => template.add(new codeblocks_1.StartProcess(name)),
        startProc: (name) => template.add(new codeblocks_1.StartProcess(name)),
        setVariable: (action, variable, ...args) => template.add(new codeblocks_1.SetVariable(action, variable, ...args)),
        setVar: (action, variable, ...args) => template.add(new codeblocks_1.SetVariable(action, variable, ...args)),
        ifVariable: (condition, ...args) => template.add(new codeblocks_1.VariableCondition(condition, ...args)),
        ifVar: (condition, ...args) => template.add(new codeblocks_1.VariableCondition(condition, ...args)),
        select: (condition, ...args) => template.add(new codeblocks_1.SelectObject(condition, ...args)),
        sel: (condition, ...args) => template.add(new codeblocks_1.SelectObject(condition, ...args)),
        control: (action, ...args) => template.add(new codeblocks_1.Control(action, ...args)),
        ctrl: (action, ...args) => template.add(new codeblocks_1.Control(action, ...args)),
    };
    return editor;
}
/**
 * Default custom action executor.
 * @param tempToModify Template to act on.
 * @param actDefs Action definitions.
 * @param name Name of action.
 * @param args Arguments to pass to the action.
 * @returns User-specified output.
 */
getEditor.doCustomAction = (tempToModify, actDefs, name, ...args) => {
    if (actDefs[name]) {
        const action = actDefs[name];
        if (typeof action === "string") {
            const actionOwnerType = (0, codeDump_1.getActionOwner)(action)["0"];
            if (!actionOwnerType)
                throw new Error(`Action ${action} doesn't exist. The action dump may be outdated..`);
            const parsedArgs = args.map((a) => {
                if (typeof a === "string")
                    return new values_1.Text(a);
                if (typeof a === "number")
                    return new values_1.Number(a);
                if (typeof a === "symbol")
                    return new values_1.Text(a.toString());
                if (a instanceof Value_1.default)
                    return a;
                else
                    throw new Error(`Can only convert primitive strings and numbers to DiamondFire values. Got ${typeof a} instead`);
            });
            if (!(0, mapperUtils_1.codeblockSupported)(actionOwnerType))
                throw new Error(`Type "${actionOwnerType}" (from action ${action}) cannot be recongized as a DiamondFire block type; this might be a bug.`);
            if (actionOwnerType.includes("if"))
                (0, utilities_1.sparkscriptWarn)("Can only create action blocks");
            const instance = (0, mapper_1.default)(actionOwnerType, {
                action, args: { items: [] },
                id: "block", target: "Selection",
                block: actionOwnerType,
                inverted: ""
            });
            instance.args = parsedArgs;
            tempToModify.push(instance);
        }
        else
            return action(...args);
    }
    else
        throw new Error(`Action ${name} is not defined.`);
};
getEditor.defaultActDefs = {};
getEditor.applyActions = (editor, actDefs, doCustomAction) => {
    for (const name in actDefs) {
        editor.action[name] = (...args) => {
            doCustomAction ? doCustomAction(name, ...args) : getEditor.doCustomAction(editor.getTemplate(), actDefs, name, ...args);
        };
    }
    ;
};
/**
 * Quickly generate an editor, with default specifications.
 */
getEditor.default = (t) => getEditor(typeof t !== "string" ? (t || false) : new Template_1.default(`${t}`), { actDefs: {} });
exports.default = getEditor;

},{"../../codeblocks":12,"../../core/codeDump":19,"../../core/components/Template":27,"../../core/components/Value":28,"../../mapper":36,"../../values":47,"../mapperUtils":17,"../utilities":18,"tslib":107}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOfTypeValue = exports.valueSupported = exports.codeblockSupported = exports.valueMap = exports.blockMap = void 0;
const codeblocks_1 = require("../codeblocks");
const values_1 = require("../values");
exports.blockMap = {
    "bracket": ({}, _) => { throw new Error("Cannot parse a bracket block."); },
    "else": ({}, _) => { throw new Error("(unimplemented)"); },
    "event": ({ action }, _) => new codeblocks_1.PlayerEvent(action),
    "player_action": ({ action, target }, args) => new codeblocks_1.PlayerAction(action, target, ...args),
    "if_player": ({}, args) => { args; throw new Error("(unimplemented)"); },
    "entity_event": ({ action }, _) => new codeblocks_1.EntityEvent(action),
    "entity_action": ({ action, target }, args) => new codeblocks_1.EntityAction(action, target, ...args),
    "if_entity": ({}, args) => { args; throw new Error("(unimplemented)"); },
    "game_action": ({ action }, args) => new codeblocks_1.GameAction(action, ...args),
    "if_game": ({}, args) => { args; throw new Error("(unimplemented)"); },
    "control": ({ action }, args) => new codeblocks_1.Control(action, ...args),
    "select_obj": ({ action }, args) => new codeblocks_1.SelectObject(action, ...args),
    "repeat": ({}, args) => { args; throw new Error("(unimplemented)"); },
    "set_var": ({ action }, args) => new codeblocks_1.SetVariable(action, ...args),
    "if_var": ({}, args) => { args; throw new Error("(unimplemented)"); },
    "func": ({ data }, args) => new codeblocks_1.Func(data, ...args),
    "call_func": ({ data }, _) => new codeblocks_1.CallFunction(data),
    "process": ({ data }, args) => new codeblocks_1.Process(data, ...args),
    "start_process": ({ data }, _) => new codeblocks_1.StartProcess(data),
};
const NBT = require("nbt-ts");
exports.valueMap = {
    "bl_tag": ({ v, s }) => new values_1.BLTag(v.block, v.action, v.tag, v.option, s),
    "txt": ({ v, s }) => new values_1.Text(v.name, s),
    "num": ({ v, s }) => values_1.Number.parse(v.name, s),
    "var": ({ v, s }) => new values_1.Variable(v.name, (v.scope || "unsaved"), s),
    "loc": ({ v, s }) => new values_1.Location(v.loc.x, v.loc.y, v.loc.z, v.loc.pitch, v.loc.yaw, s),
    "pot": ({ v, s }) => new values_1.Potion(v.pot, v.dur, v.amp, s),
    "g_val": ({ v, s }) => new values_1.GameValue(v.type, v.target, s),
    "item": ({ v, s }) => values_1.MinecraftItem.fromNBT(typeof v.item === "string" ? v.item : NBT.stringify(v.item), s),
    "vec": ({ v, s }) => new values_1.Vector(v.x, v.y, v.z, s),
    "snd": ({ v, s }) => new values_1.Sound(v.sound, v.vol, v.pitch, s),
};
/**
 * Check if a codeblock is supported.
 * @param type Codeblock codename to check.
 * @returns `true` if `type` is supported in sparkscript, otherwise `false`.
 */
function codeblockSupported(type) {
    if (typeof type !== "string")
        return false;
    return type in exports.blockMap;
}
exports.codeblockSupported = codeblockSupported;
/**
 * Check if a value type is supported.
 * @param type Value codename to check.
 * @returns `true` if `type` is supported in sparkscript, otherwise `false`.
 */
function valueSupported(type) {
    return type in exports.valueMap;
}
exports.valueSupported = valueSupported;
function isOfTypeValue(test) {
    if (!test || typeof test !== "object")
        return false;
    if (!("data" in test))
        return false;
    return true;
}
exports.isOfTypeValue = isOfTypeValue;

},{"../codeblocks":12,"../values":47,"nbt-ts":74}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyItems = exports.makeStringifier = exports.sparkscriptWarn = exports.createKeybindComponent = void 0;
function createKeybindComponent(keybind, stringify = true) {
    if (stringify)
        return JSON.stringify({ keybind: `key.${keybind}` });
    return { keybind: `key.${keybind}` };
}
exports.createKeybindComponent = createKeybindComponent;
function sparkscriptWarn(message, traceInstead = false) {
    if (!traceInstead)
        console.warn(`[sparkscript] WARNING: ${message}`);
    else
        console.trace(`[sparkscript] WARNING: ${message}`);
}
exports.sparkscriptWarn = sparkscriptWarn;
function makeStringifier(type, value) {
    return `<${type}>${value}`;
}
exports.makeStringifier = makeStringifier;
makeStringifier.serializable = (value) => makeStringifier("@", value);
makeStringifier.component = (comp, type, value) => makeStringifier(type, JSON.stringify(Object.assign({ COMPONENT: comp }, value)));
function removeEmptyItems(arr, replacer) {
    for (let i = 0; i < arr.length; i++)
        !!arr[i] ? void 0 : arr[i] = replacer;
    return arr;
}
exports.removeEmptyItems = removeEmptyItems;
exports.default = {
    sparkscriptWarn,
    createKeybindComponent,
    makeStringifier,
    removeEmptyItems,
};

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodeblockType = exports.getCodeblockActions = exports.getActionOwner = exports.getCodeblockByName = exports.getCodeblockByType = exports.loadDump = exports.getDump = exports.validateDump = void 0;
const tslib_1 = require("tslib");
const ssActiondump_1 = tslib_1.__importDefault(require("./ssActiondump")); // "sparkscript actiondump".
let laodedDump = null;
function validateDump(test) {
    if (!test || typeof test !== "object")
        throw new Error(`Expected a type of object, got ${typeof test} instead. Make sure you're passing the actiondump object and not the file path.`);
    if (!("codeblocks" in test))
        throw new Error("Invalid action dump. A 'codeblocks' property with accurate fields are required. For more info read the documentation.");
    if (!test.codeblocks || typeof test.codeblocks !== "object" || Array.isArray(test.codeblocks))
        throw new Error(`Invalid action dump. "codeblocks" is either not an object or an array. For more info read the documentation.`);
}
exports.validateDump = validateDump;
/**
 * Get the currently loaded actiondump.
 * @returns The actiondump.
 */
function getDump() {
    if (!laodedDump)
        return ssActiondump_1.default;
    return laodedDump;
}
exports.getDump = getDump;
;
/**
 * Load the actiondump.
 * @param maybeDump The actiondump object.
 */
function loadDump(maybeDump) {
    validateDump(maybeDump);
    laodedDump = maybeDump;
}
exports.loadDump = loadDump;
;
exports.default = {
    loadDump,
    getDump,
};
function getCodeblockByType(type) {
    const codeblock = getDump().codeblocks[type];
    if (!codeblock)
        return null;
    return codeblock;
}
exports.getCodeblockByType = getCodeblockByType;
function getCodeblockByName(name) {
    return getDump().codeblocks[getDump().codeblockNames[name]];
}
exports.getCodeblockByName = getCodeblockByName;
function getActionOwner(action) {
    return (getDump().actions[action].codeblockType || null);
}
exports.getActionOwner = getActionOwner;
function getCodeblockActions(type) {
    return getDump().codeblocks[type].actions;
}
exports.getCodeblockActions = getCodeblockActions;
function getCodeblockType(name) {
    return getDump().codeblockNames[name];
}
exports.getCodeblockType = getCodeblockType;

},{"./ssActiondump":33,"tslib":107}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utilities_1 = require("../../common/utilities");
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
const blockTagUtils_1 = require("../../common/blockTagUtils");
;
/**
 * ### Action block.
 *
 * @template T Block codename.
 * @template Target Selection to target.
 */
class ActionBlock extends SerializableComponent_1.default {
    /**
     * Create a new action codeblock.
     * @param type Type of the codeblock.
     * @param action The action to perform.
     * @param args Arguments to pass.
     * @param isInverted If the codeblock is inverted (mostly for conditional blocks).
     * @param target The target for the action.
     */
    constructor(type, action, args, isInverted = false, target = "Default") {
        super("action block");
        this.type = type;
        this.action = action;
        this.args = args;
        this.isInverted = isInverted;
        this.target = target;
        /**
         * The tags of the action on this action block.
         * @remark Will be an empty array if the action has no tags.
         */
        this.tags = (0, blockTagUtils_1.getActionTags)(this.type, this.action);
    }
    toString() {
        return utilities_1.makeStringifier.component(this._componentName, this.type, {
            action: this.action,
            target: this.target,
            inverted: !!this.isInverted,
            args: this.args.map(a => a.toString()),
            tags: this.tags.map(t => t.toString())
        });
    }
    export() {
        return {
            id: "block",
            block: this.type,
            args: { items: this.args.map(arg => arg.export(this.args)) },
            action: this.action,
            target: this.target,
            inverted: this.isInverted ? "NOT" : ""
        };
    }
    /**
     * Invert into a 'NOT' action (mostly for conditional blocks).
     * @returns True if inverted, otherwise false.
     */
    invert() {
        return this.isInverted = !this.isInverted;
    }
    setAction(action) {
        this.action = action;
        return this;
    }
    setArgs(...args) {
        this.args = args;
        return this;
    }
    setTarget(target) {
        this.target = target;
        return this;
    }
    setInverted(isInverted) {
        this.isInverted = isInverted;
        return this;
    }
}
exports.default = ActionBlock;

},{"../../common/blockTagUtils":14,"../../common/utilities":18,"./SerializableComponent":25,"tslib":107}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
/**
 * ### Bracket block.
 *
 * @template T Bracket type.
 * @ŧemplate S Bracket Direction.
 */
class BracketBlock extends SerializableComponent_1.default {
    /**
     * Transform raw data into readable sparkscript data.
     * @description Most typings are lost due to abstraction.
     * @param raw Raw action codeblock data.
     * @returns New instance of the respective sparkscript class.
     */
    static from(raw) {
        return new BracketBlock(raw.direct, raw.type);
    }
    /**
     * Create a new bracket block.
     * @param direction Specify is the bracket is closing or opening.
     * @param type Variant of the bracket.
     */
    constructor(direction, type) {
        super(`${direction}-${type} bracket`);
        this.direction = direction;
        this.type = type;
    }
    /**
     * Serialize the object into a readable DiamondFire format.
     * @returns DiamondFire JSON-ified codeblock.
     */
    export() {
        return {
            id: "bracket",
            direct: this.direction,
            type: this.type
        };
    }
}
exports.default = BracketBlock;

},{"./SerializableComponent":25,"tslib":107}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const blockTagUtils_1 = require("../../common/blockTagUtils");
const utilities_1 = require("../../common/utilities");
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
const BracketBlock_1 = tslib_1.__importDefault(require("./BracketBlock"));
const Template_1 = tslib_1.__importDefault(require("./Template"));
/**
 * ### Conditional block.
 *
 * @template T Block codename.
 * @template Target Selection to target.
 */
class ConditionalBlock extends SerializableComponent_1.default {
    static conditionalBlockHandler(raw) {
        if (!raw.__sparkscriptBracketPairType || !raw.__sparkscriptInternalBlocks)
            throw new Error(`silly :P :^) !! :bangbang:`);
        const opening = new BracketBlock_1.default("open", raw.__sparkscriptBracketPairType).export();
        const closing = new BracketBlock_1.default("close", raw.__sparkscriptBracketPairType).export();
        const content = raw.__sparkscriptInternalBlocks;
        delete raw.__sparkscriptInternalBlocks;
        delete raw.__sparkscriptBracketPairType;
        return [raw, opening, ...content, closing];
    }
    /**
     * Create a new conditional codeblock.
     * @param type Type of the codeblock.
     * @param action The action to check for.
     * @param args Arguments to pass.
     * @param isInverted If the condition is inverted.
     * @param target Target of the action.
     */
    constructor(type, action, args, isInverted = false, target = "Default") {
        super("conditional block");
        this.type = type;
        this.action = action;
        this.args = args;
        this.isInverted = isInverted;
        this.target = target;
        /**
         * Reference property to the opening bracket of this conditional block.
         */
        this.openingBracket = new BracketBlock_1.default("open", "norm");
        /**
         * Reference property to the closing bracket of this conditional block.
         */
        this.closingBracket = new BracketBlock_1.default("close", "norm");
        /**
         * Inside template.
         */
        this._internalTemplate = new Template_1.default("conditional block");
        /**
         * The tags of the action on this conditional block.
         * @remark Will be an empty array if the action has no tags.
         */
        this.tags = (0, blockTagUtils_1.getActionTags)(this.type, this.action);
    }
    /**
     * Add to inside blocks.
     * @param blocks Codeblock(s) to add to the template.
     */
    push(...blocks) {
        this._internalTemplate.push(...blocks);
        return this;
    }
    /**
     * Remove from inside blocks.
     * @param index Index of the codeblock to remove.
     */
    pop(index) {
        this._internalTemplate.pop(index);
        return this;
    }
    /**
     * Toggle the 'NOT' inversion.
     * @returns True if's inverted, otherwise false.
     */
    invert() {
        return this.isInverted = !this.isInverted;
    }
    /**
     * Stringify the component into JSON pseudo-code.
     * @returns String representation
     */
    toString() {
        return utilities_1.makeStringifier.component(this._componentName, this.type, {
            action: this.action,
            target: this.target,
            inverted: !!this.isInverted,
            args: this.args.map(a => a.toString())
        });
    }
    export() {
        return {
            id: "block",
            block: this.type,
            args: { items: this.args.map(arg => arg.export(this.args)) },
            action: this.action,
            target: this.target,
            inverted: this.isInverted ? "NOT" : "",
            __sparkscriptInternalBlocks: this._internalTemplate._blocks.map(b => b.export()),
            __sparkscriptBracketPairType: "norm"
        };
    }
    setAction(action) {
        this.action = action;
        return this;
    }
    setArgs(...args) {
        this.args = args;
        return this;
    }
    setTarget(target) {
        this.target = target;
        return this;
    }
    setInverted(isInverted) {
        this.isInverted = isInverted;
        return this;
    }
}
exports.default = ConditionalBlock;

},{"../../common/blockTagUtils":14,"../../common/utilities":18,"./BracketBlock":21,"./SerializableComponent":25,"./Template":27,"tslib":107}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const blockTagUtils_1 = require("../../common/blockTagUtils");
const utilities_1 = require("../../common/utilities");
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
;
/**
 * ### Data block.
 *
 * @template T Block codename.
 */
class DataBlock extends SerializableComponent_1.default {
    /**
     * Create a new codeblock.
     * @param type Type of the codeblock.
     */
    constructor(type, data, args) {
        super(`${type} block`);
        this.type = type;
        this.data = data;
        this.args = args;
        /**
         * The tags of the action on this conditional block.
         * @remark Will be an empty array if the action has no tags.
         */
        //@ts-ignore //! TODO: tf is going on here
        this.tags = (0, blockTagUtils_1.getActionTags)(this.type, "dynamic");
    }
    toString() {
        return utilities_1.makeStringifier.component(this._componentName, this.type, {
            data: this.data,
            args: this.args.map(a => a.toString())
        });
    }
    export() {
        return {
            id: "block",
            block: this.type,
            args: { items: this.args.map(arg => arg.export(this.args)) },
            data: this.data
        };
    }
}
exports.default = DataBlock;

},{"../../common/blockTagUtils":14,"../../common/utilities":18,"./SerializableComponent":25,"tslib":107}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ### Data storage for a value.
 *
 * @template T Value codename.
 * @template ValueData Value object data type.
 */
class DataStorage {
    constructor() {
        this.raw = {};
    }
    /**
     * Create a new DataStorage from a JSON object.
     * @param raw Raw data to be converted to DataStorage.
     * @returns DataStorage object.
     */
    static from(raw) {
        const storage = new DataStorage();
        for (const [k, v] of Object.entries(raw)) {
            if (!k)
                throw new Error(`Key ${JSON.stringify(k)} is an invalid type.`);
            storage.set(k, v);
        }
        return storage;
    }
    /**
     * Set a value in the DataStorage.
     * @param key Key to be set.
     * @param value Value to be set.
     * @returns Chainable DataStorage object.
     */
    set(key, value) {
        this.raw[key] = value;
        return this;
    }
    /**
     * Get a value from the DataStorage.
     * @param key Key to be retrieved.
     * @returns Value of the key.
     */
    get(key) {
        return this.raw[key];
    }
    /**
     * Create a copy of the raw data.
     */
    clone() {
        return Object.assign({}, this.raw);
    }
    /**
     * Alias for `DataStorage.copy()`
     */
    copy() {
        return this.clone();
    }
    /**
     * Check if the DataStorage has a key.
     * @param key Key to be checked.
     * @returns True if the key exists, false otherwise.
     */
    has(key) {
        return key in this.keys;
    }
    /**
     * Alias for `DataStorage.keys`.
     */
    list() {
        return this.keys;
    }
    /**
     * Remove a key from the DataStorage.
     * @param key Key to be removed.
     */
    delete(key) {
        delete this.raw[key];
    }
    get length() {
        return Object.keys(this.raw).length;
    }
    get keys() {
        return Object.keys(this.raw);
    }
    get values() {
        return Object.values(this.raw);
    }
    get entries() {
        return Object.entries(this.raw);
    }
    toString() {
        return JSON.stringify(this.raw);
    }
}
exports.default = DataStorage;

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../common/utilities");
/**
 * ### Exportable & Serializable object.
 *
 * @template T Serialized object type.
 * @template ComponentName Name of the component.
 */
class SerializableComponent {
    /**
     * @param _componentName The component's name
     */
    constructor(_componentName = "serializable") {
        this._componentName = _componentName;
    }
    toString() {
        return utilities_1.makeStringifier.serializable(`{ [${this._componentName}] }`);
    }
}
exports.default = SerializableComponent;

},{"../../common/utilities":18}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utilities_1 = require("../../common/utilities");
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
;
/**
 * ### Subaction block.
 *
 * @template T Block codename.
 */
class SubActionBlock extends SerializableComponent_1.default {
    /**
     * Create a new codeblock.
     * @param type Type of the codeblock.
     * @param action The action to check for.
     * @param args Arguments to pass.
     * @param isInverted If the codeblock is inverted (mostly for conditional blocks).
     */
    constructor(type, action, subAction, args, isInverted = false) {
        super("subaction block");
        this.type = type;
        this.action = action;
        this.subAction = subAction;
        this.args = args;
        this.isInverted = isInverted;
    }
    toString() {
        return utilities_1.makeStringifier.component(this._componentName, this.type, {
            action: this.action,
            subAction: this.subAction,
            inverted: this.isInverted,
            args: this.args.map(a => a.toString())
        });
    }
    /**
     * Export the codeblock to a JSON object.
     * @returns DiamondFire JSON-ified codeblock.
     */
    export() {
        return {
            id: "block",
            block: this.type,
            args: { items: this.args.map(arg => arg.export(this.args)) },
            action: this.action,
            subAction: this.subAction,
            inverted: this.isInverted ? "NOT" : ""
        };
    }
    setAction(action) {
        this.action = action;
        return this;
    }
    setArgs(...args) {
        this.args = args;
        return this;
    }
    setSubAction(subAction) {
        this.subAction = subAction;
        return this;
    }
    setInverted(isInverted) {
        this.isInverted = isInverted;
        return this;
    }
}
exports.default = SubActionBlock;

},{"../../common/utilities":18,"./SerializableComponent":25,"tslib":107}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const zlib_1 = tslib_1.__importDefault(require("zlib"));
const utilities_1 = require("../../common/utilities");
const blockExportHandler_1 = tslib_1.__importDefault(require("../../common/blockExportHandler"));
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
/**
 * ### Template.
 *
 */
class Template extends SerializableComponent_1.default {
    /**
     * Create a new template.
     * @param name Template name, defaults to "untitled".
     * @param author Template author, defaults to "anonymous".
     */
    constructor(name, author) {
        super("template");
        this.name = name;
        this.author = author;
        /**
         * Never use this unless you want to explicitly set the codeblocks array.
         */
        this._blocks = [];
        this.name = name || "untitled";
        this.author = author || "anonymous";
    }
    export() {
        if (this.length == 0)
            (0, utilities_1.sparkscriptWarn)("Exporting an empty template", true);
        const serialized = { blocks: [], name: `${this.name}`, author: `${this.author}` };
        for (const block of this._blocks)
            serialized.blocks.push(...(0, blockExportHandler_1.default)(block));
        const compressed = zlib_1.default.gzipSync(JSON.stringify(serialized)).toString("base64");
        return {
            compressed,
            serialized,
            sendToCodeutils: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (!this.cuSocket)
                    return (0, utilities_1.sparkscriptWarn)("Not connected to the Codeutilities WebSocket.");
                try {
                    this.cuSocket.on("open", () => {
                        if (!this.cuSocket)
                            throw new Error("Connection terminated.");
                        this.cuSocket.send(JSON.stringify({
                            type: "template", source: this.author,
                            data: JSON.stringify(compressed)
                        }));
                        this.cuSocket.addEventListener("message", (e) => {
                            const res = JSON.parse(e.data.toString());
                            if (res.status === "error")
                                throw new Error(res.error);
                            else
                                return true;
                        });
                        this.cuSocket.on("error", (e) => { throw e; });
                    });
                }
                catch (e) {
                    throw e;
                }
            })
        };
    }
    /**
     * Add to.
     * @param blocks Block(s) to add to the template.
     */
    push(...blocks) {
        this._blocks.push(...blocks);
        return this;
    }
    /**
     * Alias for `push`.
     * @param block Block to add.
     * @returns The block that was pushed.
     */
    add(block) {
        this._blocks.push(block);
        return block;
    }
    /**
     * Remove from.
     * @param index Index of the codeblock to remove.
     */
    pop(index) {
        if (index)
            this._blocks.splice(index, 1);
        else
            this._blocks.pop();
        return this;
    }
    get(index) {
        if (index)
            return this._blocks[index];
        else
            return this._blocks[this._blocks.length - 1];
    }
    /**
     * The codeblocks that make up this template.
     */
    get blocks() {
        return [...this._blocks];
    }
    /**
     * Size of the template.
     */
    get length() {
        return this._blocks.length;
    }
    /**
     * Get the last codeblock in the template.
     */
    get last() {
        return this._blocks[this._blocks.length - 1];
    }
    /**
     * Get the first codeblock in the template.
     */
    get first() {
        return this._blocks[0];
    }
}
exports.default = Template;

},{"../../common/blockExportHandler":13,"../../common/utilities":18,"./SerializableComponent":25,"tslib":107,"zlib":53}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utilities_1 = require("../../common/utilities");
const DataStorage_1 = tslib_1.__importDefault(require("./DataStorage"));
const SerializableComponent_1 = tslib_1.__importDefault(require("./SerializableComponent"));
/**
 * ### Value.
 *
 * @template T Value codename.
 * @template DataType Value object data type.
 */
class Value extends SerializableComponent_1.default {
    /**
     * Create a new value.
     * @param type Type of the value.
     * @param value The value property.
     * @param slot Specific slot number.
     */
    constructor(type, value, slot) {
        super(`${type} value`);
        this.type = type;
        this.slot = slot;
        this.data = DataStorage_1.default.from(value);
    }
    /**
     * Stringify the value.
     */
    toString() {
        return (0, utilities_1.makeStringifier)(this.type, JSON.stringify(this.data));
    }
    export(selfValues) {
        return {
            slot: this.slot || selfValues.indexOf(this),
            item: {
                id: this.type,
                data: this.data.raw
            }
        };
    }
}
exports.default = Value;

},{"../../common/utilities":18,"./DataStorage":24,"./SerializableComponent":25,"tslib":107}],29:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftString = exports.SimpleMinecraftString = exports.MinecraftColor = exports.SubActionBlock = exports.ConditionalBlock = exports.ActionBlock = exports.DataBlock = exports.Value = exports.Template = exports.DataStorage = exports.SerializableComponent = void 0;
var SerializableComponent_1 = require("./SerializableComponent");
Object.defineProperty(exports, "SerializableComponent", { enumerable: true, get: function () { return __importDefault(SerializableComponent_1).default; } });
var DataStorage_1 = require("./DataStorage");
Object.defineProperty(exports, "DataStorage", { enumerable: true, get: function () { return __importDefault(DataStorage_1).default; } });
var Template_1 = require("./Template");
Object.defineProperty(exports, "Template", { enumerable: true, get: function () { return __importDefault(Template_1).default; } });
var Value_1 = require("./Value");
Object.defineProperty(exports, "Value", { enumerable: true, get: function () { return __importDefault(Value_1).default; } });
var DataBlock_1 = require("./DataBlock");
Object.defineProperty(exports, "DataBlock", { enumerable: true, get: function () { return __importDefault(DataBlock_1).default; } });
var ActionBlock_1 = require("./ActionBlock");
Object.defineProperty(exports, "ActionBlock", { enumerable: true, get: function () { return __importDefault(ActionBlock_1).default; } });
var ConditionalBlock_1 = require("./ConditionalBlock");
Object.defineProperty(exports, "ConditionalBlock", { enumerable: true, get: function () { return __importDefault(ConditionalBlock_1).default; } });
var SubActionBlock_1 = require("./SubActionBlock");
Object.defineProperty(exports, "SubActionBlock", { enumerable: true, get: function () { return __importDefault(SubActionBlock_1).default; } });
var MinecraftColor_1 = require("./minecraft/MinecraftColor");
Object.defineProperty(exports, "MinecraftColor", { enumerable: true, get: function () { return __importDefault(MinecraftColor_1).default; } });
var SimpleMinecraftString_1 = require("./minecraft/SimpleMinecraftString");
Object.defineProperty(exports, "SimpleMinecraftString", { enumerable: true, get: function () { return __importDefault(SimpleMinecraftString_1).default; } });
var MinecraftString_1 = require("./minecraft/MinecraftString");
Object.defineProperty(exports, "MinecraftString", { enumerable: true, get: function () { return __importDefault(MinecraftString_1).default; } });

},{"./ActionBlock":20,"./ConditionalBlock":22,"./DataBlock":23,"./DataStorage":24,"./SerializableComponent":25,"./SubActionBlock":26,"./Template":27,"./Value":28,"./minecraft/MinecraftColor":30,"./minecraft/MinecraftString":31,"./minecraft/SimpleMinecraftString":32}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ### Minecraft color value.
 *
 * @template R Red color amount.
 * @template G Green color amount.
 * @template B Blue color amount.
 */
class MinecraftColor {
    /**
     * Returns a new MinecraftColor with the given color code.
     * @param code Minecraft color code.
     * @returns A new MinecraftColor.
     */
    static fromCode(code) {
        code = code.replace("§", "");
        if (!MinecraftColor.colorMap[code])
            throw new Error(`Invalid color code "${code}"`);
        const color = MinecraftColor.colorMap[code];
        const rgb = MinecraftColor.colors[color];
        return new MinecraftColor({ red: parseInt(rgb[0], 16), green: parseInt(rgb[1], 16), blue: parseInt(rgb[2], 16) });
    }
    /**
     * Returns a new MinecraftColor from the given hex string.
     * @param hex Hex string representation of the color.
     * @returns A new MinecraftColor.
     */
    static fromHex(hex) {
        hex.replace("#", "");
        if (hex.length !== 6)
            throw new Error(`Invalid hex color "${hex}". I don't think you need more than 6 characters for a hex color`);
        const red = parseInt(hex.substr(0, 2), 16);
        const green = parseInt(hex.substr(2, 2), 16);
        const blue = parseInt(hex.substr(4, 2), 16);
        return new MinecraftColor({ red, green, blue });
    }
    /**
     * Turn vanilla Minecraft color code into a MinecraftColor object.
     * @param hexOrCode Hex string or Minecraft color code.
     * @returns A new MinecraftColor.
     */
    static from(hexOrCode) {
        if (hexOrCode.startsWith("#"))
            return MinecraftColor.fromHex(hexOrCode);
        return MinecraftColor.fromCode(hexOrCode);
    }
    /**
     * Returns a new MinecraftColor with the given RGB values.
     * @param red Red amount.
     * @param green Green amount.
     * @param blue Blue amount.
     */
    constructor(values) {
        if (values.red < 0 || values.red > 255)
            throw new Error(`Expected red color to be in range 0 to 255, got ${values.red}`);
        if (values.green < 0 || values.green > 255)
            throw new Error(`Expected green color to be in range 0 to 255, got ${values.green}`);
        if (values.blue < 0 || values.blue > 255)
            throw new Error(`Expected blue color to be in range 0 to 255, got ${values.blue}`);
        this.red = values.red;
        this.green = values.green;
        this.blue = values.blue;
    }
    /**
     * Stringify the color into a readable format.
     * @param spigotmc Should turn into a SpigotMC compatible color code.
     * @param codeSymbol Character symbol to use for SpigotMC if true.
     * @returns Hex string representation of the color.
     */
    toString(spigotmc, codeSymbol = "&") {
        const r = this.red.toString(16);
        const g = this.green.toString(16);
        const b = this.blue.toString(16);
        if (spigotmc) {
            const c = codeSymbol;
            let result = `${c}x`;
            result += `${c}${r.substring(0, 1)}`;
            result += `${c}${r.substring(1, 2)}`;
            result += `${c}${g.substring(0, 1)}`;
            result += `${c}${g.substring(1, 2)}`;
            result += `${c}${b.substring(0, 1)}`;
            result += `${c}${b.substring(1, 2)}`;
            return result;
        }
        return `#${r}${g}${b}`;
        //* i went a little frisky with types a bit..
    }
    /**
     * Turn into the vanilla Minecraft color code if applicable.
     * @returns The minecraft color code for the color.
     */
    toCode() {
        for (const code in MinecraftColor.colorMap) {
            const color = MinecraftColor.colorMap[code];
            const rgb = MinecraftColor.colors[color];
            if (this.red === parseInt(rgb[0], 16) && this.green === parseInt(rgb[1], 16) && this.blue === parseInt(rgb[2], 16))
                return code;
        }
        throw new Error("Not a vanilla color. Use toString(true) to make it into a spigotmc compatible color code.");
    }
}
/**
 * Object map containing the Minecraft color codes and their corresponding hex values.
 */
MinecraftColor.colors = {
    dark_red: ["AA", "00", "00"],
    red: ["FF", "55", "55"],
    gold: ["FF", "AA", "00"],
    yellow: ["FF", "FF", "55"],
    dark_green: ["00", "AA", "00"],
    green: ["55", "FF", "55"],
    aqua: ["55", "FF", "FF"],
    dark_aqua: ["00", "AA", "AA"],
    dark_blue: ["00", "00", "AA"],
    blue: ["55", "55", "FF"],
    light_purple: ["FF", "55", "FF"],
    dark_purple: ["AA", "00", "AA"],
    white: ["FF", "FF", "FF"],
    gray: ["AA", "AA", "AA"],
    dark_gray: ["55", "55", "55"],
    black: ["00", "00", "00"]
};
/**
 * Object map containing the Minecraft color codes and their corresponding names.
 */
MinecraftColor.colorMap = {
    "1": "dark_blue",
    "2": "dark_green",
    "3": "dark_aqua",
    "4": "dark_red",
    "5": "dark_purple",
    "6": "gold",
    "7": "gray",
    "8": "dark_gray",
    "9": "blue",
    "0": "black",
    "a": "green",
    "b": "aqua",
    "c": "red",
    "d": "light_purple",
    "e": "yellow",
    "f": "white",
};
exports.default = MinecraftColor;

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MinecraftColor_1 = tslib_1.__importDefault(require("./MinecraftColor"));
const SimpleMinecraftString_1 = tslib_1.__importDefault(require("./SimpleMinecraftString"));
/**
 * ### Minecraft exportable string.
 *
 * @template T Raw string to be parsed.
 */
class MinecraftString {
    /**
     * Apply the obfuscated style to the string.
     * @param text The text to obfuscate.
     * @returns A new Minecraft string with obfuscated text.
     */
    static obfuscated(text, color = MinecraftColor_1.default.from("f")) {
        return new SimpleMinecraftString_1.default(text, { obfuscated: true, color });
    }
    /**
     * Apply the bold style to the string.
     * @param text The text to bold.
     * @returns A new Minecraft string with bold text.
     */
    static bold(text, color = MinecraftColor_1.default.from("f")) {
        return new SimpleMinecraftString_1.default(text, { bold: true, color });
    }
    /**
     * Apply the italic style to the string.
     * @param text The text to italicize.
     * @returns A new Minecraft string with italicized text.
     */
    static italic(text, color = MinecraftColor_1.default.from("f")) {
        return new SimpleMinecraftString_1.default(text, { italic: true, color });
    }
    /**
     * Apply the underline style to the string.
     * @param text The text to underline.
     * @returns A new Minecraft string with underlined text.
     */
    static underlined(text, color = MinecraftColor_1.default.from("f")) {
        return new SimpleMinecraftString_1.default(text, { underlined: true, color });
    }
    /**
     * Apply the strikethrough style to the string.
     * @param text The text to strikethrough.
     * @returns A new Minecraft string with strikethrough text.
     */
    static strikethrough(text, color = MinecraftColor_1.default.from("f")) {
        return new SimpleMinecraftString_1.default(text, { strikethrough: true, color });
    }
    static get emptyString() {
        return new MinecraftString("§f§r ");
    }
    /**
     * Construct a Minecraft string from a string of text,
     * can include color and style codes.
     * @param text The text to parse.
     * @param unsafe Test the length against the Java string limit instead of Minecraft's.
     */
    constructor(text, unsafe = false) {
        /**
         * The segments of the Minecraft string.
         */
        this.segments = [];
        text = text.indexOf("§f§r") === -1 ? `§f§r${text}` : text;
        if (text.length > MinecraftString.mcStringLimit || text.length > MinecraftString.javaStringLimit) {
            if (unsafe)
                throw new Error(`A Minecraft string shouldn't surpass the Java String limit. Overshot by ${text.length - MinecraftString.javaStringLimit} chars, includes 4 chars for the default text color "§f§r".`);
            else
                throw new Error(`String too big. limit is ${MinecraftString.mcStringLimit} chars. Overshot by ${text.length - MinecraftString.mcStringLimit} chars, includes 4 chars for the default text color "§f§r".`);
        }
        this.raw = text;
        const colorSegments = text.match(MinecraftString.colorRegex);
        if (!colorSegments)
            throw new Error("Unable to parse: I purposefully added '§f§r' to the beginning at every mc string. How tf do you even manage this.");
        for (let colorSegment of colorSegments) {
            const color = MinecraftColor_1.default.fromCode(colorSegment.substring(1, 2));
            const styleSegments = colorSegment.match(MinecraftString.styleRegex);
            colorSegment = colorSegment.replace(new RegExp(`§${colorSegment.substring(1, 2)}`, "g"), "");
            if (styleSegments)
                colorSegment = colorSegment.replace(new RegExp(`${styleSegments.join("|")}`, "g"), "");
            const colorSegmentOpts = {
                color,
                obfuscated: false,
                bold: false,
                strikethrough: false,
                underlined: false,
                italic: false
            };
            if (colorSegments.length > 0)
                this.segments.push(new SimpleMinecraftString_1.default(colorSegment, { color }));
            if (styleSegments)
                for (let styleSegment of styleSegments) {
                    const styleCode = styleSegment.substring(1, 2);
                    const style = MinecraftString.styleMap[styleCode];
                    styleSegment = styleSegment.replace(new RegExp(`§${styleCode}`, "g"), "");
                    colorSegment = colorSegment.replace(styleSegment, "");
                    if (style === "reset") {
                        colorSegmentOpts.color = undefined;
                        colorSegmentOpts.obfuscated = false;
                        colorSegmentOpts.bold = false;
                        colorSegmentOpts.strikethrough = false;
                        colorSegmentOpts.underlined = false;
                        colorSegmentOpts.italic = false;
                    }
                    else
                        colorSegmentOpts[style] = true;
                    if (styleSegment.length > 0)
                        this.segments.push(new SimpleMinecraftString_1.default(styleSegment, colorSegmentOpts));
                }
        }
        this.text = this.segments.map(s => s.text).join("");
    }
    /**
     * Export the Minecraft string to a list of simple Minecraft strings.
     * @returns Vanilla Minecraft text with the given formatting.
     */
    export(nbt = false) {
        return this.segments.map(s => s.export(nbt));
    }
}
/**
 * Object containing the style codes and their corresponding style.
 */
MinecraftString.styleMap = {
    "l": "bold",
    "o": "italic",
    "m": "strikethrough",
    "n": "underlined",
    "k": "obfuscated",
    "r": "reset",
};
/**
 * Regular expression to match Minecraft color & style codes.
 */
MinecraftString.regex = /§[\dA-FK-OR].*?(?=§[\dA-FK-OR])|§[\dA-FK-OR].*/gi;
MinecraftString.colorRegex = /§[\dA-F].*?(?=§[\dA-F])|§[\dA-F].*/gi;
MinecraftString.styleRegex = /§[K-OR].*?(?=§[K-OR])|§[K-OR].*/gi;
MinecraftString.javaStringLimit = 2147483647;
MinecraftString.mcStringLimit = 262144;
exports.default = MinecraftString;

},{"./MinecraftColor":30,"./SimpleMinecraftString":32,"tslib":107}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MinecraftColor_1 = tslib_1.__importDefault(require("./MinecraftColor"));
const nbt_ts_1 = require("nbt-ts");
const ifNBT = (nbt, mcstring, property) => nbt ? new nbt_ts_1.Byte(mcstring[property] ? 1 : 0) : mcstring[property];
/**
 * ### Simple Minecraft string.
 *
 * @template T String to apply effects on.
 * @template Color Color object with RGB values.
 * @template U Effects to apply.
 */
class SimpleMinecraftString {
    static from(obj) {
        return new SimpleMinecraftString(obj.text, {
            color: obj.color ? MinecraftColor_1.default.from(obj.color) : undefined,
            bold: (typeof obj.bold === "boolean") ? obj.bold : !!obj.bold,
            italic: (typeof obj.italic === "boolean") ? obj.italic : !!obj.italic,
            underlined: (typeof obj.underlined === "boolean") ? obj.underlined : !!obj.underlined,
            strikethrough: (typeof obj.strikethrough === "boolean") ? obj.strikethrough : !!obj.strikethrough,
            obfuscated: (typeof obj.obfuscated === "boolean") ? obj.obfuscated : !!obj.obfuscated
        });
    }
    /**
     * Construct a Minecraft string with basic formatting & options.
     * @param text The text to format.
     * @param options The options to apply to the string.
     * @returns A new Minecraft string with the given formatting.
     */
    constructor(text, options = {}) {
        this.text = text;
        this.bold = options.bold || false;
        this.italic = options.italic || false;
        this.underlined = options.underlined || false;
        this.strikethrough = options.strikethrough || false;
        this.obfuscated = options.obfuscated || false;
        this.color = options.color;
    }
    /**
     * Export the Minecraft string as a JSON object.
     * @returns The serialized version of this string.
     */
    export(nbt) {
        var _a;
        return {
            text: this.text,
            color: (_a = this.color) === null || _a === void 0 ? void 0 : _a.toString(false),
            bold: ifNBT(nbt, this, "bold"),
            italic: ifNBT(nbt, this, "italic"),
            underlined: ifNBT(nbt, this, "underlined"),
            strikethrough: ifNBT(nbt, this, "strikethrough"),
            obfuscated: ifNBT(nbt, this, "obfuscated")
        };
    }
    /**
     * @param altCode An alternate code symbol to use.
     * @returns Vanilla Minecraft text with the given formatting.
     */
    toString(altCode = "&") {
        const color = this.color ? this.color.toString(true) : "";
        const styles = [];
        if (this.bold)
            styles.push("l");
        if (this.italic)
            styles.push("o");
        if (this.strikethrough)
            styles.push("m");
        if (this.underlined)
            styles.push("n");
        if (this.obfuscated)
            styles.push("k");
        return `${altCode ? styles : ""}${styles.join(altCode)}${color}${this.text}`;
    }
}
exports.default = SimpleMinecraftString;

},{"./MinecraftColor":30,"nbt-ts":74,"tslib":107}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "codeblockNames": { "PLAYER ACTION": "player_action", "IF PLAYER": "if_player", "START PROCESS": "start_process", "CALL FUNCTION": "call_func", "CONTROL": "control", "SET VARIABLE": "set_var", "ENTITY EVENT": "entity_event", "PLAYER EVENT": "event", "FUNCTION": "func", "IF ENTITY": "if_entity", "ENTITY ACTION": "entity_action", "IF VARIABLE": "if_var", "SELECT OBJECT": "select_obj", "GAME ACTION": "game_action", "ELSE": "else", "PROCESS": "process", "REPEAT": "repeat", "IF GAME": "if_game" }, "codeblocks": { "player_action": { "name": "PLAYER ACTION", "type": "player_action", "actions": ["SetHotbar", "SetReducedDebug", "CloseInv", "GiveItems", "NoKeepInv", "BossBar", "ParticleSphere", "SetAtkSpeed", "SetVelocity", "Particle", "AddInvRow", "DisablePvp", "NoNatRegen", "DisplayLightning", "ReplaceProj", "Damage", "SetExp", "SendAnimation", "SetXPProg", "SetInventory", "TpSequence", "Heal", "SetSpawnPoint", "ParticleSpiral", "SetInventoryKept", "SetAllowFlight", "LaunchUp", "SetMaxHealth", "RemoveBossBar", "GetTargetEntity", "AdventureMode", "ForceFlight", "LoadInv", "SpectatorMode", "ClearPotions", "Kick", "SetTabListInfo", "EnablePvp", "ProjColl", "HideDisguise", "SpectateTarget", "SurvivalMode", "SetBossBar", "SetSkin", "SetStatus", "SetInvulTicks", "SetCursorItem", "SetAbsorption", "SetFireTicks", "SetGamemode", "RemoveInvRow", "EnableFlight", "DisableBlocks", "LSetHealth", "ParticleEffect", "ClearInv", "SetFreezeTicks", "SetGliding", "SetRotation", "DisallowDrops", "ParticleCircle", "ClearItems", "DisplayBlock", "RideEntity", "WeatherRain", "SetFlying", "RmWorldBorder", "DisplayBlockOpen", "SetHandItem", "SendAdvancement", "Teleport", "ClearChat", "SetAllowPVP", "SetMenuItem", "LaunchToward", "SetArmor", "DisplayGateway", "DisableFlight", "SetDisguiseVisible", "SetArrowsStuck", "GiveExp", "FaceLocation", "SetItems", "KeepInv", "ReplaceItems", "ActionBar", "SetChatTag", "SendMessage", "ShiftWorldBorder", "SetSlotItem", "PlaySoundSeq", "ParticleLineA", "DisplaySignText", "Respawn", "SetSpeed", "ExpandInv", "SetInvName", "LaunchProj", "SetItemCooldown", "SetPlayerWeather", "SendHover", "NoProjColl", "ShowDisguise", "SetAirTicks", "DisplayPickup", "ParticleCuboidA", "ChatColor", "SetWorldBorder", "SetPlayerTime", "NatRegen", "GivePotion", "PlaySound", "SetCompass", "RemoveItems", "RngTeleport", "BoostElytra", "SaveInv", "OpenBook", "SetHealth", "MobDisguise", "BlockDisguise", "NoDeathDrops", "EnableBlocks", "WalkSpeed", "OpenBlockInv", "SetCollidable", "LaunchFwd", "ParticleCircleA", "RemoveBossBar", "SetFallDistance", "CreativeMode", "SetEquipment", "AttackAnimation", "GiveRngItem", "SetDropsEnabled", "RemovePotion", "DisplayHologram", "DisplayFracture", "SetEntityHidden", "AllowDrops", "DeathDrops", "ShowInv", "SetSlot", "ParticleRay", "SetFoodLevel", "PlayerDisguise", "ParticleCuboid", "SendMessageSeq", "SetSaturation", "WeatherClear", "Undisguise", "ParticleSpiralA", "SendTitle", "InstantRespawn", "StopSound", "SetNameColor", "ParticleLine"] }, "if_player": { "name": "IF PLAYER", "type": "if_player", "actions": ["IsLookingAt", "InWorldBorder", "HasRoomForItem", "IsHoldingOff", "NoItemCooldown", "IsUsingItem", "HasAllItems", "IsSwimming", "HasItem", "BlockEquals", "IsWearing", "IsNear", "IsRiding", "StandingOn", "CmdEquals", "IsGrounded", "CursorItem", "SlotEquals", "ItemEquals", "IsHoldingMain", "IsHolding", "MenuSlotEquals", "IsBlocking", "HasPermission", "IsSneaking", "IsFlying", "HasPotion", "NameEquals", "InvOpen", "HasSlotItem", "IsSprinting", "IsGliding", "CmdArgEquals"] }, "start_process": { "name": "START PROCESS", "type": "start_process", "actions": ["dynamic"] }, "call_func": { "name": "CALL FUNCTION", "type": "call_func", "actions": ["dynamic"] }, "control": { "name": "CONTROL", "type": "control", "actions": ["StopRepeat", "Return", "ReturnNTimes", "Skip", "End", "Wait"] }, "set_var": { "name": "SET VARIABLE", "type": "set_var", "actions": ["SetParticleType", "SetItemEnchants", "PurgeVars", "ShiftAllAxes", "GetParticleMat", "SetParticleSprd", "AbsoluteValue", "AppendValue", "%", "ShiftOnVector", "GetItemAttribute", "ClearDict", "+", "ShiftRotation", "-", "GetItemRarity", "MultiplyVector", "/", "GetSignText", "Bitwise", "ParseX", "ShiftOnAxis", "ParseY", "VectorBetween", "ParseZ", "GetVectorComp", "=", "RmText", "AddItemAttribute", "GetCenterLoc", "AlignLoc", "GetSoundVolume", "RandomNumber", "Raycast", "RotateAroundVec", "GetParticleMotion", "SetParticleMotion", "RepeatText", "Average", "WrapNumber", "SetY", "SetMapTexture", "GetBlockData", "SetX", "CrossProduct", "x", "ParseYaw", "DotProduct", "SetZ", "GetPotionType", "SetItemName", "ListLength", "Sine", "DirectionName", "GetItemLore", "ReverseList", "CreateDict", "FaceLocation", "SetVectorLength", "SetPotionDur", "NormalRandom", "SetPotionType", "AlignVector", "SetItemDura", "SetBreakability", "RaycastEntity", "SetDictValue", "SetAllCoords", "RGBColor", "SetCanDestroy", "SplitText", "HSLColor", "GetDirection", "RemoveListIndex", "Logarithm", "SetItemTag", "GetItemAmount", "SetPotionAmp", "RotateAroundAxis", "GetItemName", "GetItemDura", "ShiftInDirection", "ReplaceText", "TextLength", "SetLodestoneLoc", "GetPotionAmp", "GetParticleAmount", "GetDictSize", "SetItemAmount", "SubtractVectors", "SetCase", "SetParticleColor", "GetLight", "GetDictValues", "Vector", "Distance", "SetItemLore", "Root", "SetParticleAmount", "AddItemEnchant", "GetItemType", "GetDirection", "TrimText", "GetParticleType", "GetAllBlockData", "GetDictKeys", "SetParticleMat", "GetCoord", "RemoveItemTag", "SetParticleSize", "GetPotionDur", "RandomLoc", "SetSoundType", "GetLodestoneLoc", "ShiftDirection", "GetContainerName", "GetParticleSprd", "ReflectVector", "GetHeadOwner", "GetItemEnchants", "AppendDict", "GetMaxItemAmount", "GetColorChannels", "SetDirection", "SetListValue", "SetItemEnchants", "SetBookText", "RandomValue", "SetItemType", "GetSoundType", "GetListValue", "Tangent", "Text", "VoronoiNoise", "SetDirection", "HSBColor", "+=", "GetItemColor", "InsertListValue", "SetSoundVolume", "SetCoord", "AddVectors", "SetPitch", "RaycastBlock", "GetItemEnchants", "SetHeadTexture", "PerlinNoise", "WorleyNoise", "SetItemColor", "GetParticleColor", "SetSoundPitch", "SortList", "RemoveDictEntry", "FormatTime", "SetItemFlags", "GetItemEffects", "SetYaw", "SetItemEffects", "-=", "GetItemTag", "CreateList", "AppendList", "GetContainerItems", "ShiftToward", "TrimList", "RemoveText", "Cosine", "SetVectorComp", "ParseNumber", "Exponent", "ShiftAllDirs", "GetValueIndex", "RemItemEnchant", "GetBookText", "ShiftLocation", "RandomizeList", "ClampNumber", "Round", "GetSoundPitch", "JoinText", "TranslateColors", "GetBlockGrowth", "GetAllItemTags", "RemoveListValue", "ShiftAllDirections", "SetCanPlaceOn", "GetBlockType", "ParsePitch", "GetDictValue", "ContainerLock", "GetBlockPower", "GetVectorLength", "SetModelData", "SetCoords", "GetParticleSize"] }, "entity_event": { "name": "ENTITY EVENT", "type": "entity_event", "actions": ["EntityKillEntity", "BlockFall", "EntityDmg", "ProjDmgEntity", "ProjKillEntity", "EntityDeath", "VehicleDamage", "EntityDmgEntity", "FallingBlockLand"] }, "event": { "name": "PLAYER EVENT", "type": "event", "actions": ["CloseInv", "StartFly", "PickupItem", "BreakBlock", "StartSprint", "MobKillPlayer", "ShootBow", "StopFly", "LeftClick", "PlayerTakeDmg", "ProjHit", "KillPlayer", "ClickInvSlot", "Respawn", "SwapHands", "DamageEntity", "Sneak", "PlayerHeal", "ClickPlayer", "Consume", "Death", "PlaceBlock", "Walk", "Dismount", "CloudImbuePlayer", "Leave", "DropItem", "ChangeSlot", "ClickEntity", "HorseJump", "ShootProjectile", "Unsneak", "Fish", "FallDamage", "BreakItem", "LoopEvent", "RightClick", "ClickMenuSlot", "Riptide", "KillMob", "Join", "EntityDmgPlayer", "StopSprint", "Jump", "ProjDmgPlayer", "Command", "PlayerDmgPlayer"] }, "func": { "name": "FUNCTION", "type": "func", "actions": ["dynamic"] }, "if_entity": { "name": "IF ENTITY", "type": "if_entity", "actions": ["IsVehicle", "IsGrounded", "IsType", "IsProj", "IsMob", "HasCustomTag", "IsSheared", "IsItem", "Exists", "IsNear", "IsRiding", "HasPotion", "StandingOn", "NameEquals"] }, "entity_action": { "name": "ENTITY ACTION", "type": "entity_action", "actions": ["SetParrotColor", "Remove", "SetVelocity", "SetGlowSquidDark", "HideName", "Damage", "SetSheepSheared", "SetMobSitting", "SetAxolotlColor", "SendAnimation", "DisableGlowing", "SetHorsePattern", "Heal", "SetAI", "SetRiptiding", "SetProjSource", "SetFoxLeaping", "SetItemOwner", "SetPandaGene", "SetDyeColor", "LaunchUp", "SetMaxHealth", "SetAge", "SetFishingTime", "EndCrystalBeam", "SetProfession", "NoGravity", "SetArmsRaised", "ClearPotions", "ArmorStandParts", "SetInvulnerable", "ProjColl", "ArmorStandTags", "SetPickupDelay", "SetTarget", "DropItems", "SetCreeperPower", "SetMarker", "RemoveCustomTag", "SetNameVisible", "SetInvulTicks", "SetAbsorption", "SetPose", "SetRearing", "CreeperCharged", "SetFireTicks", "SetCloudRadius", "SetGravity", "SetName", "Jump", "SetWitherInvul", "Silence", "SetGliding", "SetRotation", "SetFishPattern", "RideEntity", "NoDrops", "SetHandItem", "EnableGlowing", "SetEndermanBlock", "Teleport", "LaunchToward", "SetArmor", "SetAge/Size", "GetCustomTag", "LSetArmor", "SetCatType", "SetSaddle", "SetBulletTarget", "LaunchProj", "SetDragonPhase", "SetLlamaColor", "SetVillagerBiome", "SetCreeperFuse", "EnableAI", "SetBaby", "MooshroomType", "SetInvisible", "NoProjColl", "SheepEat", "SetCatResting", "GivePotion", "Tame", "SetGlowing", "SetGoatScreaming", "SetHealth", "MobDisguise", "BlockDisguise", "SetMinecartBlock", "FoxSleeping", "SetCollidable", "ArmorStandPose", "LaunchFwd", "SetFallDistance", "MoveToLoc", "SetEquipment", "AttackAnimation", "SetSilenced", "SetBeeNectar", "AttachLead", "SnowmanPumpkin", "SetCustomTag", "RemovePotion", "Gravity", "ShearSheep", "ArmorStandSlots", "SetRabbitType", "SetSize", "NoAI", "ShowName", "PlayerDisguise", "SetAngry", "SetItem", "Explode", "MoveTo", "Undisguise", "SetDeathDrops", "SetPersistent", "SetVillagerExp", "IgniteCreeper", "SetCelebrating", "ProjectileItem", "SetHorseJump", "Unsilence", "SetCarryingChest", "SetFoxType"] }, "if_var": { "name": "IF VARIABLE", "type": "if_var", "actions": ["<=", "DictValueEquals", "ItemHasTag", "StartsWith", "ListValueEq", "VarIsType", "TextMatches", "IsNear", "VarExists", "Legacy!=", "ItemEquals", "ListContains", "Legacy=", "InRange", "LocIsNear", "Contains", "TextMatches", "!=", "<", "=", ">", "EndsWith", ">=", "DictHasKey"] }, "select_obj": { "name": "SELECT OBJECT", "type": "select_obj", "actions": ["LastMob", "RandomPlayer", "LastEntity", "Shooter", "AllMobs", "EntityName", "FilterRandom", "DefaultEntity", "PlayerName", "AllEntities", "Damager", "FilterDistance", "FilterRay", "Reset", "EventTarget", "Killer", "Victim", "EntitiesCond", "AllPlayers", "Invert", "RandomEntity", "FilterCondition", "MobsCond", "FilterSort", "Projectile", "DefaultPlayer", "PlayersCond", "MobName"] }, "game_action": { "name": "GAME ACTION", "type": "game_action", "actions": ["StartLoop", "SetFurnaceSpeed", "BlockDropsOn", "FillContainer", "BreakBlock", "LPFXSpiral", "ParticleSphere", "BoneMeal", "DebugStackTrace", "FallingBlock", "DiscordWebhook", "ChangeSign", "TickBlock", "WebRequest", "ClearScBoard", "HideSidebar", "ReplaceItems", "SetEventProj", "Explosion", "SpawnMob", "ParticleLineA", "SpawnEnderEye", "ShowSidebar", "SpawnPotionCloud", "ParticleSpiral", "SetBlockData", "LaunchProj", "Firework", "SetBlock", "SetEventDamage", "SetBlockGrowth", "Wait", "SetContainerName", "SpawnItem", "SetHead", "RemoveHologram", "RemoveItems", "ShulkerBullet", "SpawnRngItem", "FireworkEffect", "SetRegion", "SetContainer", "SetItemInSlot", "ParticleCircleA", "CloneRegion", "UncancelEvent", "SpawnTNT", "SpawnArmorStand", "SpawnExpOrb", "SetEventHeal", "PFXPath", "ParticleRay", "GenerateTree", "StopLoop", "ClearContainer", "SetScObj", "CancelEvent", "SpawnCrystal", "ParticleEffect", "SpawnFangs", "SetEventSound", "SetCampfireItem", "SetEventXP", "LockContainer", "SpawnVehicle", "Lightning", "ParticleSpiralA", "RemoveScore", "CreateHologram", "SetScore", "ParticleCluster", "ParticleCircle", "BlockDropsOff", "PFXLine[A]", "ClearItems", "ParticleLine"] }, "else": { "name": "ELSE", "type": "else", "actions": [] }, "process": { "name": "PROCESS", "type": "process", "actions": ["dynamic"] }, "repeat": { "name": "REPEAT", "type": "repeat", "actions": ["Adjacent", "Path", "Sphere", "Forever", "Multiple", "Grid", "While", "Range", "ForEachEntry", "ForEach"] }, "if_game": { "name": "IF GAME", "type": "if_game", "actions": ["SignHasTxt", "HasRoomForItem", "EventBlockEquals", "CommandEquals", "EventItemEquals", "ContainerHas", "BlockEquals", "BlockPowered", "HasPlayer", "ContainerHasAll", "CmdArgEquals", "EventCancelled"] } }, "actions": { "SetHotbar": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetHotbar", "hasTags": false }, "SetReducedDebug": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetReducedDebug", "hasTags": true }, "CloseInv": { "codeblockType": ["player_action", "event"], "codeblockName": ["PLAYER ACTION", "PLAYER EVENT"], "name": "CloseInv", "hasTags": false }, "GiveItems": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "GiveItems", "hasTags": false }, "NoKeepInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "NoKeepInv", "hasTags": false }, "BossBar": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "BossBar", "hasTags": true }, "ParticleSphere": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleSphere", "hasTags": false }, "SetAtkSpeed": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetAtkSpeed", "hasTags": false }, "SetVelocity": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetVelocity", "hasTags": true }, "Particle": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "Particle", "hasTags": false }, "AddInvRow": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "AddInvRow", "hasTags": true }, "DisablePvp": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisablePvp", "hasTags": false }, "NoNatRegen": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "NoNatRegen", "hasTags": false }, "DisplayLightning": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayLightning", "hasTags": false }, "ReplaceProj": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ReplaceProj", "hasTags": false }, "Damage": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "Damage", "hasTags": false }, "SetExp": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetExp", "hasTags": true }, "SendAnimation": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SendAnimation", "hasTags": true }, "SetXPProg": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetXPProg", "hasTags": false }, "SetInventory": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetInventory", "hasTags": false }, "TpSequence": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "TpSequence", "hasTags": false }, "Heal": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "Heal", "hasTags": false }, "SetSpawnPoint": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetSpawnPoint", "hasTags": false }, "ParticleSpiral": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleSpiral", "hasTags": false }, "SetInventoryKept": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetInventoryKept", "hasTags": true }, "SetAllowFlight": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetAllowFlight", "hasTags": true }, "LaunchUp": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "LaunchUp", "hasTags": true }, "SetMaxHealth": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetMaxHealth", "hasTags": true }, "RemoveBossBar": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "RemoveBossBar", "hasTags": true }, "GetTargetEntity": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "GetTargetEntity", "hasTags": true }, "AdventureMode": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "AdventureMode", "hasTags": false }, "ForceFlight": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ForceFlight", "hasTags": true }, "LoadInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "LoadInv", "hasTags": false }, "SpectatorMode": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SpectatorMode", "hasTags": false }, "ClearPotions": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "ClearPotions", "hasTags": false }, "Kick": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "Kick", "hasTags": false }, "SetTabListInfo": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetTabListInfo", "hasTags": true }, "EnablePvp": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "EnablePvp", "hasTags": false }, "ProjColl": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "ProjColl", "hasTags": false }, "HideDisguise": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "HideDisguise", "hasTags": false }, "SpectateTarget": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SpectateTarget", "hasTags": false }, "SurvivalMode": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SurvivalMode", "hasTags": false }, "SetBossBar": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetBossBar", "hasTags": true }, "SetSkin": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetSkin", "hasTags": false }, "SetStatus": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetStatus", "hasTags": false }, "SetInvulTicks": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetInvulTicks", "hasTags": false }, "SetCursorItem": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetCursorItem", "hasTags": false }, "SetAbsorption": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetAbsorption", "hasTags": false }, "SetFireTicks": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetFireTicks", "hasTags": false }, "SetGamemode": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetGamemode", "hasTags": true }, "RemoveInvRow": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "RemoveInvRow", "hasTags": true }, "EnableFlight": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "EnableFlight", "hasTags": false }, "DisableBlocks": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisableBlocks", "hasTags": false }, "LSetHealth": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "LSetHealth", "hasTags": true }, "ParticleEffect": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleEffect", "hasTags": false }, "ClearInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ClearInv", "hasTags": true }, "SetFreezeTicks": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetFreezeTicks", "hasTags": false }, "SetGliding": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetGliding", "hasTags": true }, "SetRotation": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetRotation", "hasTags": false }, "DisallowDrops": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisallowDrops", "hasTags": false }, "ParticleCircle": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleCircle", "hasTags": false }, "ClearItems": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ClearItems", "hasTags": false }, "DisplayBlock": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayBlock", "hasTags": false }, "RideEntity": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "RideEntity", "hasTags": false }, "WeatherRain": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "WeatherRain", "hasTags": false }, "SetFlying": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetFlying", "hasTags": true }, "RmWorldBorder": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "RmWorldBorder", "hasTags": false }, "DisplayBlockOpen": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayBlockOpen", "hasTags": true }, "SetHandItem": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetHandItem", "hasTags": true }, "SendAdvancement": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SendAdvancement", "hasTags": true }, "Teleport": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "Teleport", "hasTags": true }, "ClearChat": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ClearChat", "hasTags": false }, "SetAllowPVP": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetAllowPVP", "hasTags": true }, "SetMenuItem": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetMenuItem", "hasTags": false }, "LaunchToward": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "LaunchToward", "hasTags": true }, "SetArmor": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetArmor", "hasTags": false }, "DisplayGateway": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayGateway", "hasTags": true }, "DisableFlight": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisableFlight", "hasTags": false }, "SetDisguiseVisible": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetDisguiseVisible", "hasTags": true }, "SetArrowsStuck": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetArrowsStuck", "hasTags": false }, "GiveExp": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "GiveExp", "hasTags": true }, "FaceLocation": { "codeblockType": ["player_action", "set_var"], "codeblockName": ["PLAYER ACTION", "SET VARIABLE"], "name": "FaceLocation", "hasTags": true }, "SetItems": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetItems", "hasTags": false }, "KeepInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "KeepInv", "hasTags": false }, "ReplaceItems": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ReplaceItems", "hasTags": false }, "ActionBar": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ActionBar", "hasTags": true }, "SetChatTag": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetChatTag", "hasTags": false }, "SendMessage": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SendMessage", "hasTags": true }, "ShiftWorldBorder": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ShiftWorldBorder", "hasTags": false }, "SetSlotItem": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetSlotItem", "hasTags": false }, "PlaySoundSeq": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "PlaySoundSeq", "hasTags": false }, "ParticleLineA": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleLineA", "hasTags": false }, "DisplaySignText": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplaySignText", "hasTags": true }, "Respawn": { "codeblockType": ["player_action", "event"], "codeblockName": ["PLAYER ACTION", "PLAYER EVENT"], "name": "Respawn", "hasTags": false }, "SetSpeed": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetSpeed", "hasTags": true }, "ExpandInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ExpandInv", "hasTags": false }, "SetInvName": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetInvName", "hasTags": false }, "LaunchProj": { "codeblockType": ["player_action", "entity_action", "game_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION", "GAME ACTION"], "name": "LaunchProj", "hasTags": false }, "SetItemCooldown": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetItemCooldown", "hasTags": false }, "SetPlayerWeather": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetPlayerWeather", "hasTags": true }, "SendHover": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SendHover", "hasTags": false }, "NoProjColl": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "NoProjColl", "hasTags": false }, "ShowDisguise": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ShowDisguise", "hasTags": false }, "SetAirTicks": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetAirTicks", "hasTags": false }, "DisplayPickup": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayPickup", "hasTags": false }, "ParticleCuboidA": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ParticleCuboidA", "hasTags": true }, "ChatColor": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ChatColor", "hasTags": false }, "SetWorldBorder": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetWorldBorder", "hasTags": false }, "SetPlayerTime": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetPlayerTime", "hasTags": false }, "NatRegen": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "NatRegen", "hasTags": false }, "GivePotion": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "GivePotion", "hasTags": true }, "PlaySound": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "PlaySound", "hasTags": true }, "SetCompass": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetCompass", "hasTags": false }, "RemoveItems": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "RemoveItems", "hasTags": false }, "RngTeleport": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "RngTeleport", "hasTags": true }, "BoostElytra": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "BoostElytra", "hasTags": false }, "SaveInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SaveInv", "hasTags": false }, "OpenBook": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "OpenBook", "hasTags": false }, "SetHealth": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetHealth", "hasTags": false }, "MobDisguise": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "MobDisguise", "hasTags": false }, "BlockDisguise": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "BlockDisguise", "hasTags": false }, "NoDeathDrops": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "NoDeathDrops", "hasTags": false }, "EnableBlocks": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "EnableBlocks", "hasTags": false }, "WalkSpeed": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "WalkSpeed", "hasTags": false }, "OpenBlockInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "OpenBlockInv", "hasTags": false }, "SetCollidable": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetCollidable", "hasTags": true }, "LaunchFwd": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "LaunchFwd", "hasTags": true }, "ParticleCircleA": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleCircleA", "hasTags": false }, "SetFallDistance": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetFallDistance", "hasTags": false }, "CreativeMode": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "CreativeMode", "hasTags": false }, "SetEquipment": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "SetEquipment", "hasTags": true }, "AttackAnimation": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "AttackAnimation", "hasTags": true }, "GiveRngItem": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "GiveRngItem", "hasTags": false }, "SetDropsEnabled": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetDropsEnabled", "hasTags": true }, "RemovePotion": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "RemovePotion", "hasTags": false }, "DisplayHologram": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayHologram", "hasTags": false }, "DisplayFracture": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DisplayFracture", "hasTags": true }, "SetEntityHidden": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetEntityHidden", "hasTags": true }, "AllowDrops": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "AllowDrops", "hasTags": false }, "DeathDrops": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "DeathDrops", "hasTags": false }, "ShowInv": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ShowInv", "hasTags": false }, "SetSlot": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetSlot", "hasTags": false }, "ParticleRay": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleRay", "hasTags": false }, "SetFoodLevel": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetFoodLevel", "hasTags": false }, "PlayerDisguise": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "PlayerDisguise", "hasTags": false }, "ParticleCuboid": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "ParticleCuboid", "hasTags": true }, "SendMessageSeq": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SendMessageSeq", "hasTags": false }, "SetSaturation": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetSaturation", "hasTags": false }, "WeatherClear": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "WeatherClear", "hasTags": false }, "Undisguise": { "codeblockType": ["player_action", "entity_action"], "codeblockName": ["PLAYER ACTION", "ENTITY ACTION"], "name": "Undisguise", "hasTags": false }, "ParticleSpiralA": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleSpiralA", "hasTags": false }, "SendTitle": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SendTitle", "hasTags": false }, "InstantRespawn": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "InstantRespawn", "hasTags": true }, "StopSound": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "StopSound", "hasTags": true }, "SetNameColor": { "codeblockType": ["player_action"], "codeblockName": ["PLAYER ACTION"], "name": "SetNameColor", "hasTags": false }, "ParticleLine": { "codeblockType": ["player_action", "game_action"], "codeblockName": ["PLAYER ACTION", "GAME ACTION"], "name": "ParticleLine", "hasTags": false }, "IsLookingAt": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsLookingAt", "hasTags": true }, "InWorldBorder": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "InWorldBorder", "hasTags": false }, "HasRoomForItem": { "codeblockType": ["if_player", "if_game"], "codeblockName": ["IF PLAYER", "IF GAME"], "name": "HasRoomForItem", "hasTags": true }, "IsHoldingOff": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsHoldingOff", "hasTags": false }, "NoItemCooldown": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "NoItemCooldown", "hasTags": false }, "IsUsingItem": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsUsingItem", "hasTags": false }, "HasAllItems": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "HasAllItems", "hasTags": false }, "IsSwimming": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsSwimming", "hasTags": false }, "HasItem": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "HasItem", "hasTags": true }, "BlockEquals": { "codeblockType": ["if_player", "if_game"], "codeblockName": ["IF PLAYER", "IF GAME"], "name": "BlockEquals", "hasTags": false }, "IsWearing": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsWearing", "hasTags": true }, "IsNear": { "codeblockType": ["if_player", "if_entity", "if_var"], "codeblockName": ["IF PLAYER", "IF ENTITY", "IF VARIABLE"], "name": "IsNear", "hasTags": false }, "IsRiding": { "codeblockType": ["if_player", "if_entity"], "codeblockName": ["IF PLAYER", "IF ENTITY"], "name": "IsRiding", "hasTags": true }, "StandingOn": { "codeblockType": ["if_player", "if_entity"], "codeblockName": ["IF PLAYER", "IF ENTITY"], "name": "StandingOn", "hasTags": false }, "CmdEquals": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "CmdEquals", "hasTags": true }, "IsGrounded": { "codeblockType": ["if_player", "if_entity"], "codeblockName": ["IF PLAYER", "IF ENTITY"], "name": "IsGrounded", "hasTags": false }, "CursorItem": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "CursorItem", "hasTags": false }, "SlotEquals": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "SlotEquals", "hasTags": false }, "ItemEquals": { "codeblockType": ["if_player", "if_var"], "codeblockName": ["IF PLAYER", "IF VARIABLE"], "name": "ItemEquals", "hasTags": true }, "IsHoldingMain": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsHoldingMain", "hasTags": false }, "IsHolding": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsHolding", "hasTags": true }, "MenuSlotEquals": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "MenuSlotEquals", "hasTags": false }, "IsBlocking": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsBlocking", "hasTags": false }, "HasPermission": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "HasPermission", "hasTags": true }, "IsSneaking": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsSneaking", "hasTags": false }, "IsFlying": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsFlying", "hasTags": false }, "HasPotion": { "codeblockType": ["if_player", "if_entity"], "codeblockName": ["IF PLAYER", "IF ENTITY"], "name": "HasPotion", "hasTags": true }, "NameEquals": { "codeblockType": ["if_player", "if_entity"], "codeblockName": ["IF PLAYER", "IF ENTITY"], "name": "NameEquals", "hasTags": false }, "InvOpen": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "InvOpen", "hasTags": true }, "HasSlotItem": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "HasSlotItem", "hasTags": false }, "IsSprinting": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsSprinting", "hasTags": false }, "IsGliding": { "codeblockType": ["if_player"], "codeblockName": ["IF PLAYER"], "name": "IsGliding", "hasTags": false }, "CmdArgEquals": { "codeblockType": ["if_player", "if_game"], "codeblockName": ["IF PLAYER", "IF GAME"], "name": "CmdArgEquals", "hasTags": true }, "dynamic": { "codeblockType": ["start_process", "call_func", "func", "process"], "codeblockName": ["START PROCESS", "CALL FUNCTION", "FUNCTION", "PROCESS"], "name": "dynamic", "hasTags": true }, "StopRepeat": { "codeblockType": ["control"], "codeblockName": ["CONTROL"], "name": "StopRepeat", "hasTags": false }, "Return": { "codeblockType": ["control"], "codeblockName": ["CONTROL"], "name": "Return", "hasTags": false }, "ReturnNTimes": { "codeblockType": ["control"], "codeblockName": ["CONTROL"], "name": "ReturnNTimes", "hasTags": false }, "Skip": { "codeblockType": ["control"], "codeblockName": ["CONTROL"], "name": "Skip", "hasTags": false }, "End": { "codeblockType": ["control"], "codeblockName": ["CONTROL"], "name": "End", "hasTags": false }, "Wait": { "codeblockType": ["control", "game_action"], "codeblockName": ["CONTROL", "GAME ACTION"], "name": "Wait", "hasTags": true }, "SetParticleType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleType", "hasTags": false }, "SetItemEnchants": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemEnchants", "hasTags": false }, "PurgeVars": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "PurgeVars", "hasTags": true }, "ShiftAllAxes": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftAllAxes", "hasTags": false }, "GetParticleMat": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleMat", "hasTags": false }, "SetParticleSprd": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleSprd", "hasTags": false }, "AbsoluteValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AbsoluteValue", "hasTags": false }, "AppendValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AppendValue", "hasTags": false }, "%": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "%", "hasTags": false }, "ShiftOnVector": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftOnVector", "hasTags": true }, "GetItemAttribute": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemAttribute", "hasTags": true }, "ClearDict": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ClearDict", "hasTags": false }, "+": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "+", "hasTags": false }, "ShiftRotation": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftRotation", "hasTags": true }, "-": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "-", "hasTags": false }, "GetItemRarity": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemRarity", "hasTags": false }, "MultiplyVector": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "MultiplyVector", "hasTags": false }, "/": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "/", "hasTags": true }, "GetSignText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetSignText", "hasTags": true }, "Bitwise": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Bitwise", "hasTags": true }, "ParseX": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ParseX", "hasTags": false }, "ShiftOnAxis": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftOnAxis", "hasTags": true }, "ParseY": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ParseY", "hasTags": false }, "VectorBetween": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "VectorBetween", "hasTags": false }, "ParseZ": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ParseZ", "hasTags": false }, "GetVectorComp": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetVectorComp", "hasTags": true }, "=": { "codeblockType": ["set_var", "if_var"], "codeblockName": ["SET VARIABLE", "IF VARIABLE"], "name": "=", "hasTags": false }, "RmText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RmText", "hasTags": true }, "AddItemAttribute": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AddItemAttribute", "hasTags": true }, "GetCenterLoc": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetCenterLoc", "hasTags": false }, "AlignLoc": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AlignLoc", "hasTags": true }, "GetSoundVolume": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetSoundVolume", "hasTags": false }, "RandomNumber": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RandomNumber", "hasTags": true }, "Raycast": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Raycast", "hasTags": true }, "RotateAroundVec": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RotateAroundVec", "hasTags": true }, "GetParticleMotion": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleMotion", "hasTags": false }, "SetParticleMotion": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleMotion", "hasTags": false }, "RepeatText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RepeatText", "hasTags": false }, "Average": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Average", "hasTags": false }, "WrapNumber": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "WrapNumber", "hasTags": false }, "SetY": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetY", "hasTags": false }, "SetMapTexture": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetMapTexture", "hasTags": false }, "GetBlockData": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetBlockData", "hasTags": false }, "SetX": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetX", "hasTags": false }, "CrossProduct": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "CrossProduct", "hasTags": false }, "x": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "x", "hasTags": false }, "ParseYaw": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ParseYaw", "hasTags": false }, "DotProduct": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "DotProduct", "hasTags": false }, "SetZ": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetZ", "hasTags": false }, "GetPotionType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetPotionType", "hasTags": false }, "SetItemName": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemName", "hasTags": false }, "ListLength": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ListLength", "hasTags": false }, "Sine": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Sine", "hasTags": true }, "DirectionName": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "DirectionName", "hasTags": false }, "GetItemLore": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemLore", "hasTags": false }, "ReverseList": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ReverseList", "hasTags": false }, "CreateDict": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "CreateDict", "hasTags": false }, "SetVectorLength": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetVectorLength", "hasTags": false }, "SetPotionDur": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetPotionDur", "hasTags": false }, "NormalRandom": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "NormalRandom", "hasTags": true }, "SetPotionType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetPotionType", "hasTags": false }, "AlignVector": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AlignVector", "hasTags": false }, "SetItemDura": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemDura", "hasTags": true }, "SetBreakability": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetBreakability", "hasTags": true }, "RaycastEntity": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RaycastEntity", "hasTags": false }, "SetDictValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetDictValue", "hasTags": false }, "SetAllCoords": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetAllCoords", "hasTags": true }, "RGBColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RGBColor", "hasTags": false }, "SetCanDestroy": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetCanDestroy", "hasTags": false }, "SplitText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SplitText", "hasTags": false }, "HSLColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "HSLColor", "hasTags": false }, "GetDirection": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetDirection", "hasTags": false }, "RemoveListIndex": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RemoveListIndex", "hasTags": false }, "Logarithm": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Logarithm", "hasTags": false }, "SetItemTag": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemTag", "hasTags": false }, "GetItemAmount": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemAmount", "hasTags": false }, "SetPotionAmp": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetPotionAmp", "hasTags": false }, "RotateAroundAxis": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RotateAroundAxis", "hasTags": true }, "GetItemName": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemName", "hasTags": false }, "GetItemDura": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemDura", "hasTags": true }, "ShiftInDirection": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftInDirection", "hasTags": true }, "ReplaceText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ReplaceText", "hasTags": true }, "TextLength": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "TextLength", "hasTags": false }, "SetLodestoneLoc": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetLodestoneLoc", "hasTags": true }, "GetPotionAmp": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetPotionAmp", "hasTags": false }, "GetParticleAmount": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleAmount", "hasTags": false }, "GetDictSize": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetDictSize", "hasTags": false }, "SetItemAmount": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemAmount", "hasTags": false }, "SubtractVectors": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SubtractVectors", "hasTags": false }, "SetCase": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetCase", "hasTags": true }, "SetParticleColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleColor", "hasTags": false }, "GetLight": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetLight", "hasTags": true }, "GetDictValues": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetDictValues", "hasTags": false }, "Vector": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Vector", "hasTags": false }, "Distance": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Distance", "hasTags": true }, "SetItemLore": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemLore", "hasTags": false }, "Root": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Root", "hasTags": false }, "SetParticleAmount": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleAmount", "hasTags": false }, "AddItemEnchant": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AddItemEnchant", "hasTags": false }, "GetItemType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemType", "hasTags": true }, "TrimText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "TrimText", "hasTags": false }, "GetParticleType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleType", "hasTags": false }, "GetAllBlockData": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetAllBlockData", "hasTags": true }, "GetDictKeys": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetDictKeys", "hasTags": false }, "SetParticleMat": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleMat", "hasTags": false }, "GetCoord": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetCoord", "hasTags": true }, "RemoveItemTag": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RemoveItemTag", "hasTags": false }, "SetParticleSize": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetParticleSize", "hasTags": false }, "GetPotionDur": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetPotionDur", "hasTags": false }, "RandomLoc": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RandomLoc", "hasTags": false }, "SetSoundType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetSoundType", "hasTags": false }, "GetLodestoneLoc": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetLodestoneLoc", "hasTags": false }, "ShiftDirection": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftDirection", "hasTags": true }, "GetContainerName": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetContainerName", "hasTags": false }, "GetParticleSprd": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleSprd", "hasTags": true }, "ReflectVector": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ReflectVector", "hasTags": false }, "GetHeadOwner": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetHeadOwner", "hasTags": true }, "GetItemEnchants": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemEnchants", "hasTags": false }, "AppendDict": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AppendDict", "hasTags": false }, "GetMaxItemAmount": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetMaxItemAmount", "hasTags": false }, "GetColorChannels": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetColorChannels", "hasTags": true }, "SetDirection": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetDirection", "hasTags": true }, "SetListValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetListValue", "hasTags": false }, "SetBookText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetBookText", "hasTags": false }, "RandomValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RandomValue", "hasTags": false }, "SetItemType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemType", "hasTags": false }, "GetSoundType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetSoundType", "hasTags": false }, "GetListValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetListValue", "hasTags": false }, "Tangent": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Tangent", "hasTags": true }, "Text": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Text", "hasTags": true }, "VoronoiNoise": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "VoronoiNoise", "hasTags": true }, "HSBColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "HSBColor", "hasTags": false }, "+=": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "+=", "hasTags": false }, "GetItemColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemColor", "hasTags": false }, "InsertListValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "InsertListValue", "hasTags": false }, "SetSoundVolume": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetSoundVolume", "hasTags": false }, "SetCoord": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetCoord", "hasTags": true }, "AddVectors": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AddVectors", "hasTags": false }, "SetPitch": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetPitch", "hasTags": false }, "RaycastBlock": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RaycastBlock", "hasTags": true }, "SetHeadTexture": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetHeadTexture", "hasTags": false }, "PerlinNoise": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "PerlinNoise", "hasTags": true }, "WorleyNoise": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "WorleyNoise", "hasTags": true }, "SetItemColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemColor", "hasTags": false }, "GetParticleColor": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleColor", "hasTags": false }, "SetSoundPitch": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetSoundPitch", "hasTags": false }, "SortList": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SortList", "hasTags": true }, "RemoveDictEntry": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RemoveDictEntry", "hasTags": false }, "FormatTime": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "FormatTime", "hasTags": true }, "SetItemFlags": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemFlags", "hasTags": true }, "GetItemEffects": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemEffects", "hasTags": false }, "SetYaw": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetYaw", "hasTags": false }, "SetItemEffects": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetItemEffects", "hasTags": false }, "-=": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "-=", "hasTags": false }, "GetItemTag": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetItemTag", "hasTags": false }, "CreateList": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "CreateList", "hasTags": false }, "AppendList": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "AppendList", "hasTags": false }, "GetContainerItems": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetContainerItems", "hasTags": true }, "ShiftToward": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftToward", "hasTags": false }, "TrimList": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "TrimList", "hasTags": false }, "RemoveText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RemoveText", "hasTags": true }, "Cosine": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Cosine", "hasTags": true }, "SetVectorComp": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetVectorComp", "hasTags": true }, "ParseNumber": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ParseNumber", "hasTags": false }, "Exponent": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Exponent", "hasTags": false }, "ShiftAllDirs": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftAllDirs", "hasTags": true }, "GetValueIndex": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetValueIndex", "hasTags": true }, "RemItemEnchant": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RemItemEnchant", "hasTags": false }, "GetBookText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetBookText", "hasTags": false }, "ShiftLocation": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftLocation", "hasTags": true }, "RandomizeList": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RandomizeList", "hasTags": false }, "ClampNumber": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ClampNumber", "hasTags": false }, "Round": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "Round", "hasTags": true }, "GetSoundPitch": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetSoundPitch", "hasTags": true }, "JoinText": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "JoinText", "hasTags": false }, "TranslateColors": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "TranslateColors", "hasTags": true }, "GetBlockGrowth": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetBlockGrowth", "hasTags": true }, "GetAllItemTags": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetAllItemTags", "hasTags": false }, "RemoveListValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "RemoveListValue", "hasTags": false }, "ShiftAllDirections": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ShiftAllDirections", "hasTags": false }, "SetCanPlaceOn": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetCanPlaceOn", "hasTags": false }, "GetBlockType": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetBlockType", "hasTags": true }, "ParsePitch": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ParsePitch", "hasTags": false }, "GetDictValue": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetDictValue", "hasTags": false }, "ContainerLock": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "ContainerLock", "hasTags": false }, "GetBlockPower": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetBlockPower", "hasTags": false }, "GetVectorLength": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetVectorLength", "hasTags": true }, "SetModelData": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetModelData", "hasTags": false }, "SetCoords": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "SetCoords", "hasTags": false }, "GetParticleSize": { "codeblockType": ["set_var"], "codeblockName": ["SET VARIABLE"], "name": "GetParticleSize", "hasTags": false }, "EntityKillEntity": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "EntityKillEntity", "hasTags": false }, "BlockFall": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "BlockFall", "hasTags": false }, "EntityDmg": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "EntityDmg", "hasTags": false }, "ProjDmgEntity": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "ProjDmgEntity", "hasTags": false }, "ProjKillEntity": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "ProjKillEntity", "hasTags": false }, "EntityDeath": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "EntityDeath", "hasTags": false }, "VehicleDamage": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "VehicleDamage", "hasTags": false }, "EntityDmgEntity": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "EntityDmgEntity", "hasTags": false }, "FallingBlockLand": { "codeblockType": ["entity_event"], "codeblockName": ["ENTITY EVENT"], "name": "FallingBlockLand", "hasTags": false }, "StartFly": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "StartFly", "hasTags": false }, "PickupItem": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "PickupItem", "hasTags": false }, "BreakBlock": { "codeblockType": ["event", "game_action"], "codeblockName": ["PLAYER EVENT", "GAME ACTION"], "name": "BreakBlock", "hasTags": false }, "StartSprint": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "StartSprint", "hasTags": false }, "MobKillPlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "MobKillPlayer", "hasTags": false }, "ShootBow": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ShootBow", "hasTags": false }, "StopFly": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "StopFly", "hasTags": false }, "LeftClick": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "LeftClick", "hasTags": false }, "PlayerTakeDmg": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "PlayerTakeDmg", "hasTags": false }, "ProjHit": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ProjHit", "hasTags": false }, "KillPlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "KillPlayer", "hasTags": false }, "ClickInvSlot": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ClickInvSlot", "hasTags": false }, "SwapHands": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "SwapHands", "hasTags": false }, "DamageEntity": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "DamageEntity", "hasTags": false }, "Sneak": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Sneak", "hasTags": false }, "PlayerHeal": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "PlayerHeal", "hasTags": false }, "ClickPlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ClickPlayer", "hasTags": false }, "Consume": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Consume", "hasTags": false }, "Death": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Death", "hasTags": false }, "PlaceBlock": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "PlaceBlock", "hasTags": false }, "Walk": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Walk", "hasTags": false }, "Dismount": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Dismount", "hasTags": false }, "CloudImbuePlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "CloudImbuePlayer", "hasTags": false }, "Leave": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Leave", "hasTags": false }, "DropItem": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "DropItem", "hasTags": false }, "ChangeSlot": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ChangeSlot", "hasTags": false }, "ClickEntity": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ClickEntity", "hasTags": false }, "HorseJump": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "HorseJump", "hasTags": false }, "ShootProjectile": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ShootProjectile", "hasTags": false }, "Unsneak": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Unsneak", "hasTags": false }, "Fish": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Fish", "hasTags": false }, "FallDamage": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "FallDamage", "hasTags": false }, "BreakItem": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "BreakItem", "hasTags": false }, "LoopEvent": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "LoopEvent", "hasTags": false }, "RightClick": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "RightClick", "hasTags": false }, "ClickMenuSlot": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ClickMenuSlot", "hasTags": false }, "Riptide": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Riptide", "hasTags": false }, "KillMob": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "KillMob", "hasTags": false }, "Join": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Join", "hasTags": false }, "EntityDmgPlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "EntityDmgPlayer", "hasTags": false }, "StopSprint": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "StopSprint", "hasTags": false }, "Jump": { "codeblockType": ["event", "entity_action"], "codeblockName": ["PLAYER EVENT", "ENTITY ACTION"], "name": "Jump", "hasTags": false }, "ProjDmgPlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "ProjDmgPlayer", "hasTags": false }, "Command": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "Command", "hasTags": false }, "PlayerDmgPlayer": { "codeblockType": ["event"], "codeblockName": ["PLAYER EVENT"], "name": "PlayerDmgPlayer", "hasTags": false }, "IsVehicle": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "IsVehicle", "hasTags": false }, "IsType": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "IsType", "hasTags": false }, "IsProj": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "IsProj", "hasTags": false }, "IsMob": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "IsMob", "hasTags": false }, "HasCustomTag": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "HasCustomTag", "hasTags": false }, "IsSheared": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "IsSheared", "hasTags": false }, "IsItem": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "IsItem", "hasTags": false }, "Exists": { "codeblockType": ["if_entity"], "codeblockName": ["IF ENTITY"], "name": "Exists", "hasTags": false }, "SetParrotColor": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetParrotColor", "hasTags": true }, "Remove": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "Remove", "hasTags": false }, "SetGlowSquidDark": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetGlowSquidDark", "hasTags": false }, "HideName": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "HideName", "hasTags": false }, "SetSheepSheared": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetSheepSheared", "hasTags": true }, "SetMobSitting": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetMobSitting", "hasTags": true }, "SetAxolotlColor": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetAxolotlColor", "hasTags": true }, "DisableGlowing": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "DisableGlowing", "hasTags": false }, "SetHorsePattern": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetHorsePattern", "hasTags": true }, "SetAI": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetAI", "hasTags": true }, "SetRiptiding": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetRiptiding", "hasTags": true }, "SetProjSource": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetProjSource", "hasTags": false }, "SetFoxLeaping": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetFoxLeaping", "hasTags": true }, "SetItemOwner": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetItemOwner", "hasTags": false }, "SetPandaGene": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetPandaGene", "hasTags": true }, "SetDyeColor": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetDyeColor", "hasTags": true }, "SetAge": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetAge", "hasTags": true }, "SetFishingTime": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetFishingTime", "hasTags": false }, "EndCrystalBeam": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "EndCrystalBeam", "hasTags": false }, "SetProfession": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetProfession", "hasTags": true }, "NoGravity": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "NoGravity", "hasTags": false }, "SetArmsRaised": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetArmsRaised", "hasTags": true }, "ArmorStandParts": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ArmorStandParts", "hasTags": true }, "SetInvulnerable": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetInvulnerable", "hasTags": true }, "ArmorStandTags": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ArmorStandTags", "hasTags": true }, "SetPickupDelay": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetPickupDelay", "hasTags": false }, "SetTarget": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetTarget", "hasTags": false }, "DropItems": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "DropItems", "hasTags": false }, "SetCreeperPower": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCreeperPower", "hasTags": false }, "SetMarker": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetMarker", "hasTags": true }, "RemoveCustomTag": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "RemoveCustomTag", "hasTags": false }, "SetNameVisible": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetNameVisible", "hasTags": true }, "SetPose": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetPose", "hasTags": true }, "SetRearing": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetRearing", "hasTags": true }, "CreeperCharged": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "CreeperCharged", "hasTags": true }, "SetCloudRadius": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCloudRadius", "hasTags": false }, "SetGravity": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetGravity", "hasTags": true }, "SetName": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetName", "hasTags": true }, "SetWitherInvul": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetWitherInvul", "hasTags": false }, "Silence": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "Silence", "hasTags": false }, "SetFishPattern": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetFishPattern", "hasTags": true }, "NoDrops": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "NoDrops", "hasTags": false }, "EnableGlowing": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "EnableGlowing", "hasTags": false }, "SetEndermanBlock": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetEndermanBlock", "hasTags": false }, "SetAge/Size": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetAge/Size", "hasTags": false }, "GetCustomTag": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "GetCustomTag", "hasTags": false }, "LSetArmor": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "LSetArmor", "hasTags": false }, "SetCatType": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCatType", "hasTags": true }, "SetSaddle": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetSaddle", "hasTags": true }, "SetBulletTarget": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetBulletTarget", "hasTags": false }, "SetDragonPhase": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetDragonPhase", "hasTags": true }, "SetLlamaColor": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetLlamaColor", "hasTags": true }, "SetVillagerBiome": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetVillagerBiome", "hasTags": true }, "SetCreeperFuse": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCreeperFuse", "hasTags": false }, "EnableAI": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "EnableAI", "hasTags": false }, "SetBaby": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetBaby", "hasTags": true }, "MooshroomType": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "MooshroomType", "hasTags": true }, "SetInvisible": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetInvisible", "hasTags": true }, "SheepEat": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SheepEat", "hasTags": false }, "SetCatResting": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCatResting", "hasTags": true }, "Tame": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "Tame", "hasTags": false }, "SetGlowing": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetGlowing", "hasTags": true }, "SetGoatScreaming": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetGoatScreaming", "hasTags": true }, "SetMinecartBlock": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetMinecartBlock", "hasTags": false }, "FoxSleeping": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "FoxSleeping", "hasTags": true }, "ArmorStandPose": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ArmorStandPose", "hasTags": true }, "MoveToLoc": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "MoveToLoc", "hasTags": false }, "SetSilenced": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetSilenced", "hasTags": true }, "SetBeeNectar": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetBeeNectar", "hasTags": true }, "AttachLead": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "AttachLead", "hasTags": false }, "SnowmanPumpkin": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SnowmanPumpkin", "hasTags": true }, "SetCustomTag": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCustomTag", "hasTags": false }, "Gravity": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "Gravity", "hasTags": false }, "ShearSheep": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ShearSheep", "hasTags": false }, "ArmorStandSlots": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ArmorStandSlots", "hasTags": true }, "SetRabbitType": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetRabbitType", "hasTags": true }, "SetSize": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetSize", "hasTags": false }, "NoAI": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "NoAI", "hasTags": false }, "ShowName": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ShowName", "hasTags": false }, "SetAngry": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetAngry", "hasTags": true }, "SetItem": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetItem", "hasTags": false }, "Explode": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "Explode", "hasTags": false }, "MoveTo": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "MoveTo", "hasTags": false }, "SetDeathDrops": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetDeathDrops", "hasTags": true }, "SetPersistent": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetPersistent", "hasTags": true }, "SetVillagerExp": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetVillagerExp", "hasTags": false }, "IgniteCreeper": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "IgniteCreeper", "hasTags": false }, "SetCelebrating": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCelebrating", "hasTags": true }, "ProjectileItem": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "ProjectileItem", "hasTags": false }, "SetHorseJump": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetHorseJump", "hasTags": false }, "Unsilence": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "Unsilence", "hasTags": false }, "SetCarryingChest": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetCarryingChest", "hasTags": true }, "SetFoxType": { "codeblockType": ["entity_action"], "codeblockName": ["ENTITY ACTION"], "name": "SetFoxType", "hasTags": true }, "<=": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "<=", "hasTags": false }, "DictValueEquals": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "DictValueEquals", "hasTags": false }, "ItemHasTag": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "ItemHasTag", "hasTags": false }, "StartsWith": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "StartsWith", "hasTags": true }, "ListValueEq": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "ListValueEq", "hasTags": false }, "VarIsType": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "VarIsType", "hasTags": true }, "TextMatches": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "TextMatches", "hasTags": true }, "VarExists": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "VarExists", "hasTags": false }, "Legacy!=": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "Legacy!=", "hasTags": false }, "ListContains": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "ListContains", "hasTags": false }, "Legacy=": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "Legacy=", "hasTags": false }, "InRange": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "InRange", "hasTags": false }, "LocIsNear": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "LocIsNear", "hasTags": true }, "Contains": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "Contains", "hasTags": true }, "!=": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "!=", "hasTags": false }, "<": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "<", "hasTags": false }, ">": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": ">", "hasTags": false }, "EndsWith": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "EndsWith", "hasTags": true }, ">=": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": ">=", "hasTags": false }, "DictHasKey": { "codeblockType": ["if_var"], "codeblockName": ["IF VARIABLE"], "name": "DictHasKey", "hasTags": false }, "LastMob": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "LastMob", "hasTags": false }, "RandomPlayer": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "RandomPlayer", "hasTags": false }, "LastEntity": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "LastEntity", "hasTags": false }, "Shooter": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Shooter", "hasTags": false }, "AllMobs": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "AllMobs", "hasTags": false }, "EntityName": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "EntityName", "hasTags": false }, "FilterRandom": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "FilterRandom", "hasTags": false }, "DefaultEntity": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "DefaultEntity", "hasTags": false }, "PlayerName": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "PlayerName", "hasTags": false }, "AllEntities": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "AllEntities", "hasTags": false }, "Damager": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Damager", "hasTags": false }, "FilterDistance": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "FilterDistance", "hasTags": true }, "FilterRay": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "FilterRay", "hasTags": true }, "Reset": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Reset", "hasTags": false }, "EventTarget": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "EventTarget", "hasTags": true }, "Killer": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Killer", "hasTags": false }, "Victim": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Victim", "hasTags": false }, "EntitiesCond": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "EntitiesCond", "hasTags": false }, "AllPlayers": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "AllPlayers", "hasTags": false }, "Invert": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Invert", "hasTags": false }, "RandomEntity": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "RandomEntity", "hasTags": false }, "FilterCondition": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "FilterCondition", "hasTags": false }, "MobsCond": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "MobsCond", "hasTags": false }, "FilterSort": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "FilterSort", "hasTags": true }, "Projectile": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "Projectile", "hasTags": false }, "DefaultPlayer": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "DefaultPlayer", "hasTags": false }, "PlayersCond": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "PlayersCond", "hasTags": false }, "MobName": { "codeblockType": ["select_obj"], "codeblockName": ["SELECT OBJECT"], "name": "MobName", "hasTags": false }, "StartLoop": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "StartLoop", "hasTags": false }, "SetFurnaceSpeed": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetFurnaceSpeed", "hasTags": false }, "BlockDropsOn": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "BlockDropsOn", "hasTags": false }, "FillContainer": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "FillContainer", "hasTags": false }, "LPFXSpiral": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "LPFXSpiral", "hasTags": false }, "BoneMeal": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "BoneMeal", "hasTags": true }, "DebugStackTrace": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "DebugStackTrace", "hasTags": false }, "FallingBlock": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "FallingBlock", "hasTags": true }, "DiscordWebhook": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "DiscordWebhook", "hasTags": false }, "ChangeSign": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "ChangeSign", "hasTags": false }, "TickBlock": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "TickBlock", "hasTags": false }, "WebRequest": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "WebRequest", "hasTags": true }, "ClearScBoard": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "ClearScBoard", "hasTags": false }, "HideSidebar": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "HideSidebar", "hasTags": false }, "SetEventProj": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetEventProj", "hasTags": false }, "Explosion": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "Explosion", "hasTags": false }, "SpawnMob": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnMob", "hasTags": false }, "SpawnEnderEye": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnEnderEye", "hasTags": true }, "ShowSidebar": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "ShowSidebar", "hasTags": false }, "SpawnPotionCloud": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnPotionCloud", "hasTags": false }, "SetBlockData": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetBlockData", "hasTags": false }, "Firework": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "Firework", "hasTags": true }, "SetBlock": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetBlock", "hasTags": false }, "SetEventDamage": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetEventDamage", "hasTags": false }, "SetBlockGrowth": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetBlockGrowth", "hasTags": true }, "SetContainerName": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetContainerName", "hasTags": false }, "SpawnItem": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnItem", "hasTags": true }, "SetHead": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetHead", "hasTags": false }, "RemoveHologram": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "RemoveHologram", "hasTags": false }, "ShulkerBullet": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "ShulkerBullet", "hasTags": false }, "SpawnRngItem": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnRngItem", "hasTags": true }, "FireworkEffect": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "FireworkEffect", "hasTags": false }, "SetRegion": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetRegion", "hasTags": false }, "SetContainer": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetContainer", "hasTags": false }, "SetItemInSlot": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetItemInSlot", "hasTags": false }, "CloneRegion": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "CloneRegion", "hasTags": true }, "UncancelEvent": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "UncancelEvent", "hasTags": false }, "SpawnTNT": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnTNT", "hasTags": false }, "SpawnArmorStand": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnArmorStand", "hasTags": true }, "SpawnExpOrb": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnExpOrb", "hasTags": false }, "SetEventHeal": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetEventHeal", "hasTags": false }, "PFXPath": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "PFXPath", "hasTags": false }, "GenerateTree": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "GenerateTree", "hasTags": true }, "StopLoop": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "StopLoop", "hasTags": false }, "ClearContainer": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "ClearContainer", "hasTags": false }, "SetScObj": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetScObj", "hasTags": false }, "CancelEvent": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "CancelEvent", "hasTags": false }, "SpawnCrystal": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnCrystal", "hasTags": true }, "SpawnFangs": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnFangs", "hasTags": false }, "SetEventSound": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetEventSound", "hasTags": false }, "SetCampfireItem": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetCampfireItem", "hasTags": true }, "SetEventXP": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetEventXP", "hasTags": false }, "LockContainer": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "LockContainer", "hasTags": false }, "SpawnVehicle": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SpawnVehicle", "hasTags": false }, "Lightning": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "Lightning", "hasTags": false }, "RemoveScore": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "RemoveScore", "hasTags": false }, "CreateHologram": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "CreateHologram", "hasTags": false }, "SetScore": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "SetScore", "hasTags": false }, "ParticleCluster": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "ParticleCluster", "hasTags": false }, "BlockDropsOff": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "BlockDropsOff", "hasTags": false }, "PFXLine[A]": { "codeblockType": ["game_action"], "codeblockName": ["GAME ACTION"], "name": "PFXLine[A]", "hasTags": false }, "Adjacent": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Adjacent", "hasTags": true }, "Path": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Path", "hasTags": true }, "Sphere": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Sphere", "hasTags": true }, "Forever": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Forever", "hasTags": false }, "Multiple": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Multiple", "hasTags": false }, "Grid": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Grid", "hasTags": false }, "While": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "While", "hasTags": false }, "Range": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "Range", "hasTags": false }, "ForEachEntry": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "ForEachEntry", "hasTags": false }, "ForEach": { "codeblockType": ["repeat"], "codeblockName": ["REPEAT"], "name": "ForEach", "hasTags": true }, "SignHasTxt": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "SignHasTxt", "hasTags": true }, "EventBlockEquals": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "EventBlockEquals", "hasTags": false }, "CommandEquals": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "CommandEquals", "hasTags": true }, "EventItemEquals": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "EventItemEquals", "hasTags": true }, "ContainerHas": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "ContainerHas", "hasTags": false }, "BlockPowered": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "BlockPowered", "hasTags": true }, "HasPlayer": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "HasPlayer", "hasTags": false }, "ContainerHasAll": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "ContainerHasAll", "hasTags": false }, "EventCancelled": { "codeblockType": ["if_game"], "codeblockName": ["IF GAME"], "name": "EventCancelled", "hasTags": false } }, "actionsWithTags": { "SetReducedDebug": ["Reduced Debug Info Enabled"], "BossBar": ["Bar Slot", "Bar Style", "Sky Effect", "Bar Color"], "SetVelocity": ["Add to Current Velocity"], "AddInvRow": ["New Row Position"], "SetExp": ["Set Experience"], "SendAnimation": ["Animation Type"], "SetInventoryKept": ["Inventory Kept"], "SetAllowFlight": ["Allow Flight"], "LaunchUp": ["Add to Current Velocity"], "SetMaxHealth": ["Heal Mob to Max Health"], "GetTargetEntity": ["Ignore Blocks"], "ForceFlight": ["Flight Mode"], "SetTabListInfo": ["Player List Field"], "SetBossBar": ["Bar Style", "Sky Effect", "Bar Color"], "SetGamemode": ["Flight Mode", "Gamemode"], "RemoveInvRow": ["Row to Remove"], "LSetHealth": ["Heal Type"], "ClearInv": ["Clear Mode", "Clear Crafting and Cursor"], "SetGliding": ["Gliding"], "SetFlying": ["Flying"], "DisplayBlockOpen": ["Container State"], "SetHandItem": ["Hand Slot"], "SendAdvancement": ["Toast Type"], "Teleport": ["Keep Current Rotation"], "SetAllowPVP": ["PVP"], "LaunchToward": ["Add to Current Velocity", "Ignore Distance"], "DisplayGateway": ["Animation Type"], "SetDisguiseVisible": ["Disguise Visible"], "GiveExp": ["Give Experience"], "ActionBar": ["Text Value Merging"], "SendMessage": ["Alignment Mode", "Text Value Merging"], "DisplaySignText": ["Text Color"], "SetSpeed": ["Speed Type"], "SetPlayerWeather": ["Weather"], "ParticleCuboidA": ["Fill Type"], "GivePotion": ["Overwrite Effect", "Effect Particles"], "PlaySound": ["Sound Source"], "RngTeleport": ["Keep Current Rotation"], "SetCollidable": ["Collision"], "LaunchFwd": ["Add to Current Velocity", "Launch Axis"], "RemoveBossBar": ["Boss Bar Slot"], "SetEquipment": ["Equipment Slot"], "AttackAnimation": ["Animation Arm"], "SetDropsEnabled": ["Spawn Death Drops"], "DisplayFracture": ["Overwrite Previous Fracture"], "SetEntityHidden": ["Hidden"], "ParticleCuboid": ["Fill Type"], "InstantRespawn": ["Instant Respawn"], "StopSound": ["Sound Source"], "IsLookingAt": ["Fluid Mode"], "HasRoomForItem": ["Check Mode"], "HasItem": ["Check Mode"], "IsWearing": ["Check Mode"], "IsNear": ["Shape"], "IsRiding": ["Compare Text To"], "CmdEquals": ["Check Mode", "Ignore Case"], "IsHolding": ["Hand Slot"], "HasPermission": ["Permission"], "HasPotion": ["Check Properties", "Check Mode"], "InvOpen": ["Inventory Type"], "CmdArgEquals": ["Ignore Case"], "dynamic": ["Is Hidden"], "Wait": ["Delay Unit"], "PurgeVars": ["Match Requirement", "Ignore Case"], "ShiftOnVector": ["Add Location Rotation"], "GetItemAttribute": ["Attribute", "Active Equipment Slot"], "ShiftRotation": ["Rotation Axis"], "/": ["Division Mode"], "GetSignText": ["Sign Line"], "Bitwise": ["Operator"], "ShiftOnAxis": ["Coordinate"], "GetVectorComp": ["Component"], "RmText": ["Regular Expressions"], "AddItemAttribute": ["Attribute", "Operation", "Active Equipment Slot"], "AlignLoc": ["Alignment Mode", "Coordinates", "Rotation"], "RandomNumber": ["Rounding Mode"], "Raycast": ["Entity Collision", "Block Collision"], "RotateAroundVec": ["Angle Units"], "Sine": ["Sine Variant", "Input"], "FaceLocation": ["Face Direction"], "NormalRandom": ["Distribution"], "SetItemDura": ["Durability Type"], "SetBreakability": ["Breakability"], "SetAllCoords": ["Coordinate Type"], "GetDirection": ["Return Type"], "RotateAroundAxis": ["Axis", "Angle Units"], "GetItemDura": ["Durability Type"], "ShiftInDirection": ["Direction"], "ReplaceText": ["Regular Expressions", "Replacement Type"], "SetLodestoneLoc": ["Require Lodestone at Location"], "SetCase": ["Capitalization Type"], "GetLight": ["Light Type"], "Distance": ["Distance Type"], "GetItemType": ["Return Value Type"], "GetAllBlockData": ["Hide Default"], "GetCoord": ["Coordinate Type", "Coordinate"], "ShiftDirection": ["Direction"], "GetParticleSprd": ["Spread"], "GetHeadOwner": ["Text Value"], "GetColorChannels": ["Color Channels"], "Tangent": ["Tangent Variant", "Input"], "Text": ["Text Value Merging"], "VoronoiNoise": ["Cell Edge Type"], "SetDirection": ["Face Direction"], "SetCoord": ["Coordinate Type", "Coordinate"], "RaycastBlock": ["Ignore Passable Blocks", "Fluid Collision"], "PerlinNoise": ["Fractal Type"], "WorleyNoise": ["Cell Edge Type", "Distance Calculation"], "SortList": ["Sort Order"], "FormatTime": ["Format"], "SetItemFlags": ["Hide Color", "Hide Enchantments", "Hide Attributes", "Hide Unbreakable", "Hide Can Destroy", "Hide Can Place On", "Hide Potion Effects"], "GetContainerItems": ["Ignore Empty Slots"], "RemoveText": ["Regular Expressions"], "Cosine": ["Cosine Variant", "Input"], "SetVectorComp": ["Component"], "ShiftAllDirs": ["Ignore Pitch"], "GetValueIndex": ["Search Order"], "ShiftLocation": ["Shift Direction"], "Round": ["Round Mode"], "GetSoundPitch": ["Return Value Type"], "TranslateColors": ["Translation Type"], "GetBlockGrowth": ["Growth Unit"], "GetBlockType": ["Return Value Type"], "GetVectorLength": ["Length Type"], "SetParrotColor": ["Parrot Color"], "SetSheepSheared": ["Sheared"], "SetMobSitting": ["Is Sitting"], "SetAxolotlColor": ["Axolotl Color"], "SetHorsePattern": ["Horse Color", "Horse Markings"], "SetAI": ["AI"], "SetRiptiding": ["Riptiding"], "SetFoxLeaping": ["Leaping"], "SetPandaGene": ["Set Gene", "Gene Type"], "SetDyeColor": ["Dye"], "SetAge": ["Age Lock"], "SetProfession": ["Profession"], "SetArmsRaised": ["Arms Raised"], "ArmorStandParts": ["Arms", "Base Plate"], "SetInvulnerable": ["Invulnerable"], "ArmorStandTags": ["Is Visible", "Is Marker (No Hitbox)", "Allow Item Taking / Adding", "Has Physics / Updates", "Is Small", "Has Arms", "Has Base Plate"], "SetMarker": ["Marker"], "SetNameVisible": ["Name Tag Visible"], "SetPose": ["Pose"], "SetRearing": ["Rearing"], "CreeperCharged": ["Charged"], "SetGravity": ["Gravity"], "SetName": ["Hide Name Tag"], "SetFishPattern": ["Pattern Color", "Body Color", "Pattern"], "SetCatType": ["Skin Type"], "SetSaddle": ["Saddle"], "SetDragonPhase": ["Phase"], "SetLlamaColor": ["Llama Color"], "SetVillagerBiome": ["Biome"], "SetBaby": ["Baby"], "MooshroomType": ["Mooshroom Variant"], "SetInvisible": ["Invisible"], "SetCatResting": ["Resting"], "SetGlowing": ["Glowing"], "SetGoatScreaming": ["Screams"], "FoxSleeping": ["Sleeping"], "ArmorStandPose": ["Armor Stand Part"], "SetSilenced": ["Silenced"], "SetBeeNectar": ["Has Nectar"], "SnowmanPumpkin": ["Pumpkin"], "ArmorStandSlots": ["Interactions", "Equipment Slot"], "SetRabbitType": ["Skin Type"], "SetAngry": ["Angry"], "SetDeathDrops": ["Has Death Drops"], "SetPersistent": ["Persistent"], "SetCelebrating": ["Celebrate"], "SetCarryingChest": ["Carrying Chest"], "SetFoxType": ["Fox Type"], "StartsWith": ["Ignore Case"], "VarIsType": ["Variable Type"], "TextMatches": ["Regular Expressions", "Ignore Case"], "ItemEquals": ["Comparison Mode"], "LocIsNear": ["Shape"], "Contains": ["Ignore Case"], "EndsWith": ["Ignore Case"], "FilterDistance": ["Ignore Y-Axis", "Compare Mode"], "FilterRay": ["Block Collision"], "EventTarget": ["Event Target"], "FilterSort": ["Sort Order"], "BoneMeal": ["Show Particles"], "FallingBlock": ["Hurt Hit Entities", "Reform on Impact"], "WebRequest": ["Request Method", "Content Type"], "SpawnEnderEye": ["End of Lifespan"], "Firework": ["Instant", "Movement"], "SetBlockGrowth": ["Growth Unit"], "SpawnItem": ["Apply Item Motion"], "SpawnRngItem": ["Apply Item Motion"], "CloneRegion": ["Ignore Air", "Clone Block Entities"], "SpawnArmorStand": ["Visibility"], "GenerateTree": ["Tree Type"], "SpawnCrystal": ["Show Bottom"], "SetCampfireItem": ["Campfire Slot"], "Adjacent": ["Change Location Rotation", "Include Origin Block", "Pattern"], "Path": ["Rotate Location"], "Sphere": ["Point Locations Inwards"], "ForEach": ["Allow List Changes"], "SignHasTxt": ["Sign Line", "Check Mode"], "CommandEquals": ["Check Mode", "Ignore Case"], "EventItemEquals": ["Comparison Mode"], "BlockPowered": ["Redstone Power Mode"] }, "actionTags": { "Reduced Debug Info Enabled": { "name": "Reduced Debug Info Enabled", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "SetReducedDebug", "codeblock": "player_action" }, "Bar Slot": { "name": "Bar Slot", "options": ["Slot 1", "Slot 2", "Slot 3", "Slot 4", "Slot 5", "Slot 6", "Slot 7", "Slot 8", "Slot 9"], "defaultOption": "Slot 1", "slot": 23, "action": "BossBar", "codeblock": "player_action" }, "Bar Style": { "name": "Bar Style", "options": ["Solid", "6 segments", "10 segments", "12 segments", "20 segments"], "defaultOption": "Solid", "slot": 25, "action": " SetBossBar ", "codeblock": "player_action" }, "Sky Effect": { "name": "Sky Effect", "options": ["None", "Create fog", "Darken sky", "Both"], "defaultOption": "None", "slot": 24, "action": " SetBossBar ", "codeblock": "player_action" }, "Bar Color": { "name": "Bar Color", "options": ["Red", "Purple", "Pink", "Blue", "Green", "Yellow", "White"], "defaultOption": "Purple", "slot": 26, "action": " SetBossBar ", "codeblock": "player_action" }, "Add to Current Velocity": { "name": "Add to Current Velocity", "options": ["True", "False"], "defaultOption": "True", "slot": 25, "action": "LaunchFwd", "codeblock": "entity_action" }, "New Row Position": { "name": "New Row Position", "options": ["Top row", "Bottom row"], "defaultOption": "Bottom row", "slot": 26, "action": "AddInvRow", "codeblock": "player_action" }, "Set Experience": { "name": "Set Experience", "options": ["Points", "Level", "Level Percentage"], "defaultOption": "Level", "slot": 26, "action": "SetExp", "codeblock": "player_action" }, "Animation Type": { "name": "Animation Type", "options": ["Hurt animation", "Crit particles", "Enchanted hit particles"], "defaultOption": "Hurt animation", "slot": 26, "action": "SendAnimation", "codeblock": "entity_action" }, "Inventory Kept": { "name": "Inventory Kept", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetInventoryKept", "codeblock": "player_action" }, "Allow Flight": { "name": "Allow Flight", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetAllowFlight", "codeblock": "player_action" }, "Heal Player to Max Health": { "name": "Heal Player to Max Health", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "SetMaxHealth", "codeblock": "player_action" }, "Ignore Blocks": { "name": "Ignore Blocks", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "GetTargetEntity", "codeblock": "player_action" }, "Flight Mode": { "name": "Flight Mode", "options": ["Respect Gamemode", "Keep Original"], "defaultOption": "Respect Gamemode", "slot": 25, "action": "SetGamemode", "codeblock": "player_action" }, "Player List Field": { "name": "Player List Field", "options": ["Header", "Footer"], "defaultOption": "Header", "slot": 26, "action": "SetTabListInfo", "codeblock": "player_action" }, "Gamemode": { "name": "Gamemode", "options": ["Survival", "Creative", "Adventure"], "defaultOption": "Survival", "slot": 26, "action": "SetGamemode", "codeblock": "player_action" }, "Row to Remove": { "name": "Row to Remove", "options": ["Top row", "Bottom row"], "defaultOption": "Bottom row", "slot": 26, "action": "RemoveInvRow", "codeblock": "player_action" }, "Heal Type": { "name": "Heal Type", "options": ["Regular Health", "Absorption Health", "Combined Health"], "defaultOption": "Regular Health", "slot": 26, "action": "L SetHealth", "codeblock": "player_action" }, "Clear Mode": { "name": "Clear Mode", "options": ["Entire inventory", "Main inventory", "Upper inventory", "Hotbar", "Armor"], "defaultOption": "Entire inventory", "slot": 26, "action": "ClearInv", "codeblock": "player_action" }, "Clear Crafting and Cursor": { "name": "Clear Crafting and Cursor", "options": ["True", "False"], "defaultOption": "True", "slot": 25, "action": "ClearInv", "codeblock": "player_action" }, "Gliding": { "name": "Gliding", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetGliding", "codeblock": "entity_action" }, "Flying": { "name": "Flying", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetFlying", "codeblock": "player_action" }, "Container State": { "name": "Container State", "options": ["Open", "Closed"], "defaultOption": "Open", "slot": 26, "action": "DisplayBlockOpen", "codeblock": "player_action" }, "Hand Slot": { "name": "Hand Slot", "options": ["Main Hand", "Off Hand"], "defaultOption": "Main Hand", "slot": 26, "action": "SetHandItem", "codeblock": "entity_action" }, "Toast Type": { "name": "Toast Type", "options": ["Advancement", "Goal", "Challenge"], "defaultOption": "Advancement", "slot": 26, "action": "SendAdvancement", "codeblock": "player_action" }, "Keep Current Rotation": { "name": "Keep Current Rotation", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "Teleport", "codeblock": "entity_action" }, "PVP": { "name": "PVP", "options": ["Enable", "Disable"], "defaultOption": "Disable", "slot": 26, "action": "SetAllowPVP", "codeblock": "player_action" }, "Ignore Distance": { "name": "Ignore Distance", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "LaunchToward", "codeblock": "entity_action" }, "Disguise Visible": { "name": "Disguise Visible", "options": ["Enable", "Disable"], "defaultOption": "Disable", "slot": 26, "action": "SetDisguiseVisible", "codeblock": "player_action" }, "Give Experience": { "name": "Give Experience", "options": ["Points", "Levels", "Level percentage"], "defaultOption": "Points", "slot": 26, "action": "GiveExp", "codeblock": "player_action" }, "Text Value Merging": { "name": "Text Value Merging", "options": ["Add spaces", "No spaces"], "defaultOption": "No spaces", "slot": 26, "action": "Text", "codeblock": "set_var" }, "Alignment Mode": { "name": "Alignment Mode", "options": ["Block center", "Lower block corner"], "defaultOption": "Block center", "slot": 26, "action": "AlignLoc", "codeblock": "set_var" }, "Text Color": { "name": "Text Color", "options": ["White", "Orange", "Magenta", "Light blue", "Yellow", "Lime", "Pink", "Gray", "Light gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"], "defaultOption": "Black", "slot": 26, "action": "DisplaySignText", "codeblock": "player_action" }, "Speed Type": { "name": "Speed Type", "options": ["Ground speed", "Flight speed", "Both"], "defaultOption": "Ground speed", "slot": 26, "action": "SetSpeed", "codeblock": "player_action" }, "Weather": { "name": "Weather", "options": ["Clear", "Downfall", "Reset"], "defaultOption": "Downfall", "slot": 26, "action": "SetPlayerWeather", "codeblock": "player_action" }, "Fill Type": { "name": "Fill Type", "options": ["Wireframe", "Hollow", "Solid"], "defaultOption": "Wireframe", "slot": 26, "action": "ParticleCuboid", "codeblock": "player_action" }, "Show Icon": { "name": "Show Icon", "options": ["True", "False"], "defaultOption": "True", "slot": 24, "action": "GivePotion", "codeblock": "player_action" }, "Overwrite Effect": { "name": "Overwrite Effect", "options": ["True", "False"], "defaultOption": "True", "slot": 25, "action": "GivePotion", "codeblock": "entity_action" }, "Effect Particles": { "name": "Effect Particles", "options": ["Regular", "Ambient", "None"], "defaultOption": "Regular", "slot": 26, "action": "GivePotion", "codeblock": "entity_action" }, "Sound Source": { "name": "Sound Source", "options": ["Master", "Music", "Jukebox/Note Blocks", "Weather", "Blocks", "Hostile Creatures", "Friendly Creatures", "Players", "Ambient/Environment", "Voice/Speech"], "defaultOption": "Master", "slot": 26, "action": "StopSound", "codeblock": "player_action" }, "Collision": { "name": "Collision", "options": ["Enable", "Disable"], "defaultOption": "Disable", "slot": 26, "action": "SetCollidable", "codeblock": "entity_action" }, "Launch Axis": { "name": "Launch Axis", "options": ["Pitch and Yaw", "Yaw Only"], "defaultOption": "Pitch and Yaw", "slot": 26, "action": "LaunchFwd", "codeblock": "entity_action" }, "Boss Bar Slot": { "name": "Boss Bar Slot", "options": ["All boss bars", "1", "2", "3", "4", "5", "6", "7", "8", "9"], "defaultOption": "All boss bars", "slot": 26, "action": "RemoveBossBar", "codeblock": "player_action" }, "Equipment Slot": { "name": "Equipment Slot", "options": ["All", "Main hand", "Off hand", "Head", "Chest", "Legs", "Feet"], "defaultOption": "All", "slot": 26, "action": "ArmorStandSlots", "codeblock": "entity_action" }, "Animation Arm": { "name": "Animation Arm", "options": ["Swing main arm", "Swing off arm"], "defaultOption": "Swing main arm", "slot": 26, "action": "AttackAnimation", "codeblock": "entity_action" }, "Spawn Death Drops": { "name": "Spawn Death Drops", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetDropsEnabled", "codeblock": "player_action" }, "Overwrite Previous Fracture": { "name": "Overwrite Previous Fracture", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "DisplayFracture", "codeblock": "player_action" }, "Hidden": { "name": "Hidden", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetEntityHidden", "codeblock": "player_action" }, "Instant Respawn": { "name": "Instant Respawn", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "InstantRespawn", "codeblock": "player_action" }, "Fluid Mode": { "name": "Fluid Mode", "options": ["Ignore fluids", "Detect fluids"], "defaultOption": "Ignore fluids", "slot": 26, "action": "IsLookingAt", "codeblock": "if_player" }, "Check Mode": { "name": "Check Mode", "options": ["Check entire command", "Check beginning"], "defaultOption": "Check entire command", "slot": 26, "action": "CommandEquals", "codeblock": "if_game" }, "Checked Slots": { "name": "Checked Slots", "options": ["Entire inventory", "Main inventory", "Upper inventory", "Hotbar", "Armor"], "defaultOption": "Main inventory", "slot": 25, "action": "HasRoomForItem", "codeblock": "if_player" }, "Shape": { "name": "Shape", "options": ["Sphere", "Circle", "Cube", "Square"], "defaultOption": "Sphere", "slot": 26, "action": "LocIsNear", "codeblock": "if_var" }, "Compare Text To": { "name": "Compare Text To", "options": ["Entity type", "Name or UUID"], "defaultOption": "Entity type", "slot": 26, "action": "IsRiding", "codeblock": "if_entity" }, "Ignore Case": { "name": "Ignore Case", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "CmdArgEquals", "codeblock": "if_game" }, "Permission": { "name": "Permission", "options": ["Owner", "Developer", "Builder", "Developer or builder", "Whitelisted"], "defaultOption": "Developer or builder", "slot": 26, "action": "HasPermission", "codeblock": "if_player" }, "Check Properties": { "name": "Check Properties", "options": ["None", "Amplifier", "Duration", "Amplifier and duration"], "defaultOption": "None", "slot": 25, "action": "HasPotion", "codeblock": "if_entity" }, "Inventory Type": { "name": "Inventory Type", "options": ["Any Inventory", "Plot Menu", "Crafting Table", "Chest", "Double Chest", "Ender Chest", "Shulker Box", "Barrel", "Furnace (any)", "Furnace", "Blast Furnace", "Smoker", "Dropper", "Dispenser", "Beacon", "Hopper", "Anvil", "Brewing Stand", "Cartography Table", "Loom", "Grindstone", "Stonecutter", "Enchanting Table", "Trader Menu (any)", "Villager Menu", "Wandering Trader Menu", "Horse Inventory", "Llama Inventory"], "defaultOption": "Any Inventory", "slot": 26, "action": "InvOpen", "codeblock": "if_player" }, "Target Mode": { "name": "Target Mode", "options": ["With current targets", "With current selection", "With no targets", "For each in selection"], "defaultOption": "With current targets", "slot": 26, "action": "dynamic", "codeblock": "start_process" }, "Local Variables": { "name": "Local Variables", "options": ["Don't copy", "Copy", "Share"], "defaultOption": "Don't copy", "slot": 25, "action": "dynamic", "codeblock": "start_process" }, "Time Unit": { "name": "Time Unit", "options": ["Ticks", "Seconds", "Minutes"], "defaultOption": "Ticks", "slot": 26, "action": "Wait", "codeblock": "control" }, "Match Requirement": { "name": "Match Requirement", "options": ["Entire name", "Full word(s) in name", "Any part of name"], "defaultOption": "Full word(s) in name", "slot": 25, "action": "PurgeVars", "codeblock": "set_var" }, "Add Location Rotation": { "name": "Add Location Rotation", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "ShiftOnVector", "codeblock": "set_var" }, "Attribute": { "name": "Attribute", "options": ["Armor", "Armor toughness", "Attack damage", "Attack speed", "Maximum health", "Knockback resistance", "Movement speed", "Follow range"], "defaultOption": "Armor", "slot": 24, "action": "AddItemAttribute", "codeblock": "set_var" }, "Active Equipment Slot": { "name": "Active Equipment Slot", "options": ["Any", "Main hand", "Off hand", "Head", "Body", "Legs", "Feet"], "defaultOption": "Main hand", "slot": 26, "action": "AddItemAttribute", "codeblock": "set_var" }, "Rotation Axis": { "name": "Rotation Axis", "options": ["Pitch", "Yaw"], "defaultOption": "Pitch", "slot": 26, "action": "ShiftRotation", "codeblock": "set_var" }, "Division Mode": { "name": "Division Mode", "options": ["Default", "Floor result"], "defaultOption": "Default", "slot": 26, "action": "/", "codeblock": "set_var" }, "Sign Line": { "name": "Sign Line", "options": ["1", "2", "3", "4", "All lines"], "defaultOption": "All lines", "slot": 26, "action": "SignHasTxt", "codeblock": "if_game" }, "Operator": { "name": "Operator", "options": ["|", "&", "~", "^", "<<", ">>", ">>>"], "defaultOption": "|", "slot": 26, "action": "Bitwise", "codeblock": "set_var" }, "Coordinate": { "name": "Coordinate", "options": ["X", "Y", "Z", "Pitch", "Yaw"], "defaultOption": "X", "slot": 26, "action": "SetCoord", "codeblock": "set_var" }, "Component": { "name": "Component", "options": ["X", "Y", "Z"], "defaultOption": "X", "slot": 26, "action": "SetVectorComp", "codeblock": "set_var" }, "Regular Expressions": { "name": "Regular Expressions", "options": ["Enable", "Disable"], "defaultOption": "Disable", "slot": 26, "action": " TextMatches ", "codeblock": "if_var" }, "Operation": { "name": "Operation", "options": ["Add number", "Add percentage to base", "Multiply modifier by percentage"], "defaultOption": "Add number", "slot": 25, "action": "AddItemAttribute", "codeblock": "set_var" }, "Coordinates": { "name": "Coordinates", "options": ["All coordinates", "X and Z", "Only Y"], "defaultOption": "All coordinates", "slot": 25, "action": "AlignLoc", "codeblock": "set_var" }, "Rotation": { "name": "Rotation", "options": ["Keep rotation", "Remove rotation"], "defaultOption": "Keep rotation", "slot": 24, "action": "AlignLoc", "codeblock": "set_var" }, "Rounding Mode": { "name": "Rounding Mode", "options": ["Whole number", "Decimal number"], "defaultOption": "Whole number", "slot": 26, "action": "RandomNumber", "codeblock": "set_var" }, "Entity Collision": { "name": "Entity Collision", "options": ["True", "False"], "defaultOption": "False", "slot": 25, "action": "Raycast", "codeblock": "set_var" }, "Block Collision": { "name": "Block Collision", "options": ["All blocks", "Non-fluid blocks", "Solid blocks", "None"], "defaultOption": "Solid blocks", "slot": 26, "action": "FilterRay", "codeblock": "select_obj" }, "Angle Units": { "name": "Angle Units", "options": ["Degrees", "Radians"], "defaultOption": "Degrees", "slot": 26, "action": "RotateAroundAxis", "codeblock": "set_var" }, "Sine Variant": { "name": "Sine Variant", "options": ["Sine", "Inverse sine (arcsine)", "Hyperbolic sine"], "defaultOption": "Sine", "slot": 25, "action": "Sine", "codeblock": "set_var" }, "Input": { "name": "Input", "options": ["Degrees", "Radians"], "defaultOption": "Degrees", "slot": 26, "action": "Cosine", "codeblock": "set_var" }, "Face Direction": { "name": "Face Direction", "options": ["Towards direction", "Towards opposite direction"], "defaultOption": "Towards direction", "slot": 26, "action": "SetDirection", "codeblock": "set_var" }, "Distribution": { "name": "Distribution", "options": ["Normal", "Folded normal"], "defaultOption": "Normal", "slot": 26, "action": "NormalRandom", "codeblock": "set_var" }, "Durability Type": { "name": "Durability Type", "options": ["Get Damage", "Get Damage Percentage", "Get Remaining", "Get Remaining Percentage", "Get Maximum"], "defaultOption": "Get Damage", "slot": 26, "action": "GetItemDura", "codeblock": "set_var" }, "Breakability": { "name": "Breakability", "options": ["Breakable", "Unbreakable"], "defaultOption": "Unbreakable", "slot": 26, "action": "SetBreakability", "codeblock": "set_var" }, "Coordinate Type": { "name": "Coordinate Type", "options": ["Plot coordinate", "World coordinate"], "defaultOption": "Plot coordinate", "slot": 25, "action": "SetCoord", "codeblock": "set_var" }, "Return Type": { "name": "Return Type", "options": ["Text (3D)", "Text (2D)", "Vector"], "defaultOption": "Text (3D)", "slot": 26, "action": " GetDirection ", "codeblock": "set_var" }, "Axis": { "name": "Axis", "options": ["X", "Y", "Z"], "defaultOption": "X", "slot": 25, "action": "RotateAroundAxis", "codeblock": "set_var" }, "Direction": { "name": "Direction", "options": ["Forwards 2D (X/Z)", "Forwards 3D (X/Y/Z)", "Sideways (-L / +R)"], "defaultOption": "Forwards 3D (X/Y/Z)", "slot": 26, "action": "ShiftDirection", "codeblock": "set_var" }, "Replacement Type": { "name": "Replacement Type", "options": ["First occurrence", "All occurrences"], "defaultOption": "All occurrences", "slot": 25, "action": "ReplaceText", "codeblock": "set_var" }, "Require Lodestone at Location": { "name": "Require Lodestone at Location", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "SetLodestoneLoc", "codeblock": "set_var" }, "Capitalization Type": { "name": "Capitalization Type", "options": ["UPPERCASE", "lowercase", "Proper Case", "iNVERT CASE", "RAnDoM cASe"], "defaultOption": "UPPERCASE", "slot": 26, "action": "SetCase", "codeblock": "set_var" }, "Light Type": { "name": "Light Type", "options": ["Combined light", "Sky light", "Block light"], "defaultOption": "Combined light", "slot": 26, "action": "GetLight", "codeblock": "set_var" }, "Distance Type": { "name": "Distance Type", "options": ["Distance 2D (X/Z)", "Distance 3D (X/Y/Z)", "Altitude (Y)"], "defaultOption": "Distance 3D (X/Y/Z)", "slot": 26, "action": "Distance", "codeblock": "set_var" }, "Return Value Type": { "name": "Return Value Type", "options": ["Block ID (oak_log)", "Block name (Oak Log)", "Item"], "defaultOption": "Block ID (oak_log)", "slot": 26, "action": "GetBlockType", "codeblock": "set_var" }, "Hide Default": { "name": "Hide Default", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "GetAllBlockData", "codeblock": "set_var" }, "Spread": { "name": "Spread", "options": ["Horizontal", "Vertical"], "defaultOption": "Horizontal", "slot": 26, "action": "GetParticleSprd", "codeblock": "set_var" }, "Text Value": { "name": "Text Value", "options": ["Owner Name", "Owner UUID"], "defaultOption": "Owner Name", "slot": 26, "action": "GetHeadOwner", "codeblock": "set_var" }, "Color Channels": { "name": "Color Channels", "options": ["RGB", "HSB", "HSL"], "defaultOption": "RGB", "slot": 26, "action": "GetColorChannels", "codeblock": "set_var" }, "Tangent Variant": { "name": "Tangent Variant", "options": ["Tangent", "Inverse tangent (arctangent)", "Hyperbolic tangent"], "defaultOption": "Tangent", "slot": 25, "action": "Tangent", "codeblock": "set_var" }, "Cell Edge Type": { "name": "Cell Edge Type", "options": ["Euclidean", "Manhattan", "Natural"], "defaultOption": "Euclidean", "slot": 25, "action": "WorleyNoise", "codeblock": "set_var" }, "Ignore Passable Blocks": { "name": "Ignore Passable Blocks", "options": ["True", "False"], "defaultOption": "False", "slot": 25, "action": "RaycastBlock", "codeblock": "set_var" }, "Fluid Collision": { "name": "Fluid Collision", "options": ["Ignore fluids", "Detect fluids", "Source blocks only"], "defaultOption": "Ignore fluids", "slot": 26, "action": "RaycastBlock", "codeblock": "set_var" }, "Fractal Type": { "name": "Fractal Type", "options": ["Brownian", "Billow (Dark edges)", "Rigid (Light edges)"], "defaultOption": "Brownian", "slot": 26, "action": "PerlinNoise", "codeblock": "set_var" }, "Distance Calculation": { "name": "Distance Calculation", "options": ["Primary", "Secondary", "Additive", "Subtractive", "Multiplicative", "Divisive"], "defaultOption": "Primary", "slot": 26, "action": "WorleyNoise", "codeblock": "set_var" }, "Sort Order": { "name": "Sort Order", "options": ["Ascending", "Descending"], "defaultOption": "Ascending", "slot": 26, "action": "FilterSort", "codeblock": "select_obj" }, "Format": { "name": "Format", "options": ["Custom", "2020/08/17 17:20:54", "2020/08/17", "Mon, August 17", "Monday", "17:20:54", "5:20 PM", "17h20m54s", "54.229 seconds"], "defaultOption": "2020/08/17 17:20:54", "slot": 26, "action": "FormatTime", "codeblock": "set_var" }, "Hide Color": { "name": "Hide Color", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 20, "action": "SetItemFlags", "codeblock": "set_var" }, "Hide Enchantments": { "name": "Hide Enchantments", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 21, "action": "SetItemFlags", "codeblock": "set_var" }, "Hide Attributes": { "name": "Hide Attributes", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 22, "action": "SetItemFlags", "codeblock": "set_var" }, "Hide Unbreakable": { "name": "Hide Unbreakable", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 23, "action": "SetItemFlags", "codeblock": "set_var" }, "Hide Can Destroy": { "name": "Hide Can Destroy", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 24, "action": "SetItemFlags", "codeblock": "set_var" }, "Hide Can Place On": { "name": "Hide Can Place On", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 25, "action": "SetItemFlags", "codeblock": "set_var" }, "Hide Potion Effects": { "name": "Hide Potion Effects", "options": ["True", "False", "No Change"], "defaultOption": "No Change", "slot": 26, "action": "SetItemFlags", "codeblock": "set_var" }, "Ignore Empty Slots": { "name": "Ignore Empty Slots", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "GetContainerItems", "codeblock": "set_var" }, "Cosine Variant": { "name": "Cosine Variant", "options": ["Cosine", "Inverse cosine (arccosine)", "Hyperbolic cosine"], "defaultOption": "Cosine", "slot": 25, "action": "Cosine", "codeblock": "set_var" }, "Ignore Pitch": { "name": "Ignore Pitch", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "ShiftAllDirs", "codeblock": "set_var" }, "Search Order": { "name": "Search Order", "options": ["Ascending (first index)", "Descending (last index)"], "defaultOption": "Ascending (first index)", "slot": 26, "action": "GetValueIndex", "codeblock": "set_var" }, "Shift Direction": { "name": "Shift Direction", "options": ["(+) Upwards / (-) Downwards", "(+) Forwards / (-) Backwards", "(+) Right / (-) Left"], "defaultOption": "(+) Forwards / (-) Backwards", "slot": 26, "action": "ShiftLocation", "codeblock": "set_var" }, "Round Mode": { "name": "Round Mode", "options": ["Floor", "Nearest", "Ceiling"], "defaultOption": "Nearest", "slot": 26, "action": "Round", "codeblock": "set_var" }, "Translation Type": { "name": "Translation Type", "options": ["From hex to color", "From & to color", "From color to &", "Strip color"], "defaultOption": "From & to color", "slot": 26, "action": "TranslateColors", "codeblock": "set_var" }, "Growth Unit": { "name": "Growth Unit", "options": ["Growth Stage Number", "Growth Percentage"], "defaultOption": "Growth Stage Number", "slot": 26, "action": "SetBlockGrowth", "codeblock": "game_action" }, "Length Type": { "name": "Length Type", "options": ["Length", "Length Squared"], "defaultOption": "Length", "slot": 26, "action": "GetVectorLength", "codeblock": "set_var" }, "Is Hidden": { "name": "Is Hidden", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "dynamic", "codeblock": "process" }, "Parrot Color": { "name": "Parrot Color", "options": ["Red", "Blue", "Green", "Cyan", "Gray"], "defaultOption": "Red", "slot": 26, "action": "SetParrotColor", "codeblock": "entity_action" }, "Sheared": { "name": "Sheared", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetSheepSheared", "codeblock": "entity_action" }, "Is Sitting": { "name": "Is Sitting", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetMobSitting", "codeblock": "entity_action" }, "Axolotl Color": { "name": "Axolotl Color", "options": ["Pink", "Brown", "Yellow", "Cyan", "Blue"], "defaultOption": "Pink", "slot": 26, "action": "SetAxolotlColor", "codeblock": "entity_action" }, "Horse Color": { "name": "Horse Color", "options": ["White", "Buckskin", "Flaxen chestnut", "Bay", "Black", "Dapple gray", "Dark bay", "Don't change"], "defaultOption": "Flaxen chestnut", "slot": 25, "action": "SetHorsePattern", "codeblock": "entity_action" }, "Horse Markings": { "name": "Horse Markings", "options": ["No markings", "Stockings and blaze", "Paint", "Snowflake appaloosa", "Sooty", "Don't change"], "defaultOption": "Stockings and blaze", "slot": 26, "action": "SetHorsePattern", "codeblock": "entity_action" }, "AI": { "name": "AI", "options": ["Sentient", "Insentient", "None"], "defaultOption": "None", "slot": 26, "action": "SetAI", "codeblock": "entity_action" }, "Riptiding": { "name": "Riptiding", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetRiptiding", "codeblock": "entity_action" }, "Leaping": { "name": "Leaping", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetFoxLeaping", "codeblock": "entity_action" }, "Set Gene": { "name": "Set Gene", "options": ["Main gene", "Hidden gene", "Both"], "defaultOption": "Both", "slot": 25, "action": "SetPandaGene", "codeblock": "entity_action" }, "Gene Type": { "name": "Gene Type", "options": ["Aggressive", "Lazy", "Weak", "Worried", "Playful", "Normal", "Brown"], "defaultOption": "Aggressive", "slot": 26, "action": "SetPandaGene", "codeblock": "entity_action" }, "Dye": { "name": "Dye", "options": ["White", "Orange", "Magenta", "Light blue", "Yellow", "Lime", "Pink", "Gray", "Light gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"], "defaultOption": "White", "slot": 26, "action": "SetDyeColor", "codeblock": "entity_action" }, "Heal Mob to Max Health": { "name": "Heal Mob to Max Health", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "SetMaxHealth", "codeblock": "entity_action" }, "Age Lock": { "name": "Age Lock", "options": ["Enable", "Disable", "Don't change"], "defaultOption": "Don't change", "slot": 26, "action": "SetAge", "codeblock": "entity_action" }, "Profession": { "name": "Profession", "options": ["Unemployed", "Armorer", "Butcher", "Cartographer", "Cleric", "Farmer", "Fisherman", "Fletcher", "Leatherworker", "Librarian", "Mason", "Nitwit", "Shepherd", "Toolsmith", "Weaponsmith"], "defaultOption": "Armorer", "slot": 26, "action": "SetProfession", "codeblock": "entity_action" }, "Arms Raised": { "name": "Arms Raised", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetArmsRaised", "codeblock": "entity_action" }, "Arms": { "name": "Arms", "options": ["Enable", "Disable", "Don't change"], "defaultOption": "Enable", "slot": 25, "action": "ArmorStandParts", "codeblock": "entity_action" }, "Base Plate": { "name": "Base Plate", "options": ["Enable", "Disable", "Don't change"], "defaultOption": "Enable", "slot": 26, "action": "ArmorStandParts", "codeblock": "entity_action" }, "Invulnerable": { "name": "Invulnerable", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetInvulnerable", "codeblock": "entity_action" }, "Is Visible": { "name": "Is Visible", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 20, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Is Marker (No Hitbox)": { "name": "Is Marker (No Hitbox)", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 21, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Allow Item Taking / Adding": { "name": "Allow Item Taking / Adding", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 22, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Has Physics / Updates": { "name": "Has Physics / Updates", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 23, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Is Small": { "name": "Is Small", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 24, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Has Arms": { "name": "Has Arms", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 25, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Has Base Plate": { "name": "Has Base Plate", "options": ["True", "False", "Don't change"], "defaultOption": "Don't change", "slot": 26, "action": "ArmorStandTags", "codeblock": "entity_action" }, "Marker": { "name": "Marker", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetMarker", "codeblock": "entity_action" }, "Name Tag Visible": { "name": "Name Tag Visible", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetNameVisible", "codeblock": "entity_action" }, "Pose": { "name": "Pose", "options": ["Standing", "Sleeping", "Swimming", "Sneaking"], "defaultOption": "Standing", "slot": 26, "action": " SetPose ", "codeblock": "entity_action" }, "Rearing": { "name": "Rearing", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetRearing", "codeblock": "entity_action" }, "Charged": { "name": "Charged", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "CreeperCharged", "codeblock": "entity_action" }, "Gravity": { "name": "Gravity", "options": ["Enable", "Disable"], "defaultOption": "Disable", "slot": 26, "action": "SetGravity", "codeblock": "entity_action" }, "Hide Name Tag": { "name": "Hide Name Tag", "options": ["True", "False", "Don't change"], "defaultOption": "False", "slot": 26, "action": "SetName", "codeblock": "entity_action" }, "Pattern Color": { "name": "Pattern Color", "options": ["White", "Orange", "Magenta", "Light blue", "Yellow", "Lime", "Pink", "Gray", "Light gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black", "Don't change"], "defaultOption": "White", "slot": 24, "action": "SetFishPattern", "codeblock": "entity_action" }, "Body Color": { "name": "Body Color", "options": ["White", "Orange", "Magenta", "Light blue", "Yellow", "Lime", "Pink", "Gray", "Light gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black", "Don't change"], "defaultOption": "White", "slot": 25, "action": "SetFishPattern", "codeblock": "entity_action" }, "Pattern": { "name": "Pattern", "options": ["Cardinal (4 blocks)", "Square (8 blocks)", "Adjacent (6 blocks)", "Cube (26 blocks)"], "defaultOption": "Adjacent (6 blocks)", "slot": 26, "action": "Adjacent", "codeblock": "repeat" }, "Skin Type": { "name": "Skin Type", "options": ["Brown", "White", "Black", "Black and White", "Gold", "Salt and Pepper", "Killer"], "defaultOption": "Brown", "slot": 26, "action": "SetRabbitType", "codeblock": "entity_action" }, "Saddle": { "name": "Saddle", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetSaddle", "codeblock": "entity_action" }, "Phase": { "name": "Phase", "options": ["Flying", "Hovering", "Breath attack", "Dying"], "defaultOption": "Flying", "slot": 26, "action": "SetDragonPhase", "codeblock": "entity_action" }, "Llama Color": { "name": "Llama Color", "options": ["Brown", "Creamy", "White", "Gray"], "defaultOption": "Brown", "slot": 26, "action": "SetLlamaColor", "codeblock": "entity_action" }, "Biome": { "name": "Biome", "options": ["Desert", "Jungle", "Plains", "Savanna", "Snow", "Swamp", "Taiga"], "defaultOption": "Desert", "slot": 26, "action": "SetVillagerBiome", "codeblock": "entity_action" }, "Baby": { "name": "Baby", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetBaby", "codeblock": "entity_action" }, "Mooshroom Variant": { "name": "Mooshroom Variant", "options": ["Red", "Brown"], "defaultOption": "Red", "slot": 26, "action": "MooshroomType", "codeblock": "entity_action" }, "Invisible": { "name": "Invisible", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetInvisible", "codeblock": "entity_action" }, "Resting": { "name": "Resting", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetCatResting", "codeblock": "entity_action" }, "Glowing": { "name": "Glowing", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetGlowing", "codeblock": "entity_action" }, "Screams": { "name": "Screams", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetGoatScreaming", "codeblock": "entity_action" }, "Sleeping": { "name": "Sleeping", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "FoxSleeping", "codeblock": "entity_action" }, "Armor Stand Part": { "name": "Armor Stand Part", "options": ["Head", "Body", "Left Arm", "Right Arm", "Left Leg", "Right Leg"], "defaultOption": "Head", "slot": 26, "action": "ArmorStandPose", "codeblock": "entity_action" }, "Silenced": { "name": "Silenced", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetSilenced", "codeblock": "entity_action" }, "Has Nectar": { "name": "Has Nectar", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetBeeNectar", "codeblock": "entity_action" }, "Pumpkin": { "name": "Pumpkin", "options": ["Enable", "Disable"], "defaultOption": "Disable", "slot": 26, "action": "SnowmanPumpkin", "codeblock": "entity_action" }, "Interactions": { "name": "Interactions", "options": ["Take, swap or place item", "Take or swap item", "Take item", "Place item", "None"], "defaultOption": "Take, swap or place item", "slot": 25, "action": "ArmorStandSlots", "codeblock": "entity_action" }, "Angry": { "name": "Angry", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetAngry", "codeblock": "entity_action" }, "Has Death Drops": { "name": "Has Death Drops", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetDeathDrops", "codeblock": "entity_action" }, "Persistent": { "name": "Persistent", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetPersistent", "codeblock": "entity_action" }, "Celebrate": { "name": "Celebrate", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetCelebrating", "codeblock": "entity_action" }, "Carrying Chest": { "name": "Carrying Chest", "options": ["Enable", "Disable"], "defaultOption": "Enable", "slot": 26, "action": "SetCarryingChest", "codeblock": "entity_action" }, "Fox Type": { "name": "Fox Type", "options": ["Red", "Snow"], "defaultOption": "Red", "slot": 26, "action": "SetFoxType", "codeblock": "entity_action" }, "Variable Type": { "name": "Variable Type", "options": ["Number", "Text", "Location", "Item", "List", "Potion effect", "Sound", "Particle", "Vector"], "defaultOption": "Number", "slot": 26, "action": "VarIsType", "codeblock": "if_var" }, "Comparison Mode": { "name": "Comparison Mode", "options": ["Exactly equals", "Ignore stack size/durability", "Material only"], "defaultOption": "Ignore stack size/durability", "slot": 26, "action": "EventItemEquals", "codeblock": "if_game" }, "Ignore Y-Axis": { "name": "Ignore Y-Axis", "options": ["True", "False"], "defaultOption": "False", "slot": 25, "action": "FilterDistance", "codeblock": "select_obj" }, "Compare Mode": { "name": "Compare Mode", "options": ["Nearest", "Farthest"], "defaultOption": "Nearest", "slot": 26, "action": "FilterDistance", "codeblock": "select_obj" }, "Event Target": { "name": "Event Target", "options": ["Default", "Killer", "Damager", "Victim", "Shooter", "Projectile"], "defaultOption": "Default", "slot": 26, "action": "EventTarget", "codeblock": "select_obj" }, "Show Particles": { "name": "Show Particles", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "BoneMeal", "codeblock": "game_action" }, "Hurt Hit Entities": { "name": "Hurt Hit Entities", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "FallingBlock", "codeblock": "game_action" }, "Reform on Impact": { "name": "Reform on Impact", "options": ["True", "False"], "defaultOption": "True", "slot": 25, "action": "FallingBlock", "codeblock": "game_action" }, "Request Method": { "name": "Request Method", "options": ["Post", "Get", "Put", "Delete"], "defaultOption": "Post", "slot": 25, "action": "WebRequest", "codeblock": "game_action" }, "Content Type": { "name": "Content Type", "options": ["text/plain", "application/json"], "defaultOption": "text/plain", "slot": 26, "action": "WebRequest", "codeblock": "game_action" }, "End of Lifespan": { "name": "End of Lifespan", "options": ["Drop item", "Shatter", "Random"], "defaultOption": "Random", "slot": 26, "action": "SpawnEnderEye", "codeblock": "game_action" }, "Instant": { "name": "Instant", "options": ["True", "False"], "defaultOption": "False", "slot": 25, "action": "Firework", "codeblock": "game_action" }, "Movement": { "name": "Movement", "options": ["Upwards", "Directional"], "defaultOption": "Upwards", "slot": 26, "action": "Firework", "codeblock": "game_action" }, "Delay Unit": { "name": "Delay Unit", "options": ["Ticks", "Seconds", "Minutes"], "defaultOption": "Ticks", "slot": 26, "action": "Wait", "codeblock": "game_action" }, "Apply Item Motion": { "name": "Apply Item Motion", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "SpawnRngItem", "codeblock": "game_action" }, "Ignore Air": { "name": "Ignore Air", "options": ["True", "False"], "defaultOption": "False", "slot": 25, "action": "CloneRegion", "codeblock": "game_action" }, "Clone Block Entities": { "name": "Clone Block Entities", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "CloneRegion", "codeblock": "game_action" }, "Visibility": { "name": "Visibility", "options": ["Visible", "Visible (No hitbox)", "Invisible", "Invisible (No hitbox)"], "defaultOption": "Visible", "slot": 26, "action": "SpawnArmorStand", "codeblock": "game_action" }, "Tree Type": { "name": "Tree Type", "options": ["Oak Tree", "Big Oak Tree", "Swamp Tree", "Spruce Tree", "Slightly Taller Spruce Tree", "Big Spruce Tree", "Birch Tree", "Tall Birch Tree", "Jungle Tree", "Big Jungle Tree", "Jungle Bush", "Acacia Tree", "Dark Oak Tree", "Red Mushroom", "Brown Mushroom", "Crimson Fungus", "Warped Fungus", "Chorus Plant"], "defaultOption": "Oak Tree", "slot": 26, "action": "GenerateTree", "codeblock": "game_action" }, "Show Bottom": { "name": "Show Bottom", "options": ["True", "False"], "defaultOption": "True", "slot": 26, "action": "SpawnCrystal", "codeblock": "game_action" }, "Campfire Slot": { "name": "Campfire Slot", "options": ["1", "2", "3", "4"], "defaultOption": "1", "slot": 26, "action": "SetCampfireItem", "codeblock": "game_action" }, "Change Location Rotation": { "name": "Change Location Rotation", "options": ["True", "False"], "defaultOption": "False", "slot": 24, "action": "Adjacent", "codeblock": "repeat" }, "Include Origin Block": { "name": "Include Origin Block", "options": ["True", "False"], "defaultOption": "False", "slot": 25, "action": "Adjacent", "codeblock": "repeat" }, "Rotate Location": { "name": "Rotate Location", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "Path", "codeblock": "repeat" }, "Point Locations Inwards": { "name": "Point Locations Inwards", "options": ["True", "False"], "defaultOption": "False", "slot": 26, "action": "Sphere", "codeblock": "repeat" }, "Allow List Changes": { "name": "Allow List Changes", "options": ["True", "False (copy list)"], "defaultOption": "True", "slot": 26, "action": "ForEach", "codeblock": "repeat" }, "Redstone Power Mode": { "name": "Redstone Power Mode", "options": ["Direct power", "Indirect power"], "defaultOption": "Direct power", "slot": 26, "action": "BlockPowered", "codeblock": "if_game" } }, "sounds": [{ "sound": "Axolotl Attack", "name": "ENTITY_AXOLOTL_ATTACK" }, { "sound": "Axolotl Death", "name": "ENTITY_AXOLOTL_DEATH" }, { "sound": "Axolotl Hurt", "name": "ENTITY_AXOLOTL_HURT" }, { "sound": "Axolotl Ambient Air", "name": "ENTITY_AXOLOTL_IDLE_AIR" }, { "sound": "Axolotl Ambient Water", "name": "ENTITY_AXOLOTL_IDLE_WATER" }, { "sound": "Axolotl Splash", "name": "ENTITY_AXOLOTL_SPLASH" }, { "sound": "Axolotl Swim", "name": "ENTITY_AXOLOTL_SWIM" }, { "sound": "Bat Ambient", "name": "ENTITY_BAT_AMBIENT" }, { "sound": "Bat Death", "name": "ENTITY_BAT_DEATH" }, { "sound": "Bat Fly", "name": "ENTITY_BAT_LOOP" }, { "sound": "Bat Hurt", "name": "ENTITY_BAT_HURT" }, { "sound": "Bat Takeoff", "name": "ENTITY_BAT_TAKEOFF" }, { "sound": "Bee Death", "name": "ENTITY_BEE_DEATH" }, { "sound": "Bee Hurt", "name": "ENTITY_BEE_HURT" }, { "sound": "Bee Loop", "name": "ENTITY_BEE_LOOP" }, { "sound": "Bee Loop (Aggressive)", "name": "ENTITY_BEE_LOOP_AGGRESSIVE" }, { "sound": "Bee Pollinate", "name": "ENTITY_BEE_POLLINATE" }, { "sound": "Bee Sting", "name": "ENTITY_BEE_STING" }, { "sound": "Cat Ambient", "name": "ENTITY_CAT_AMBIENT" }, { "sound": "Cat Beg For Food", "name": "ENTITY_CAT_BEG_FOR_FOOD" }, { "sound": "Cat Death", "name": "ENTITY_CAT_DEATH" }, { "sound": "Cat Eat", "name": "ENTITY_CAT_EAT" }, { "sound": "Cat Hiss", "name": "ENTITY_CAT_HISS" }, { "sound": "Cat Hurt", "name": "ENTITY_CAT_HURT" }, { "sound": "Cat Purr", "name": "ENTITY_CAT_PURR" }, { "sound": "Cat Purreow", "name": "ENTITY_CAT_PURREOW" }, { "sound": "Stray Cat Ambient", "name": "ENTITY_CAT_STRAY_AMBIENT" }, { "sound": "Chicken Ambient", "name": "ENTITY_CHICKEN_AMBIENT" }, { "sound": "Chicken Death", "name": "ENTITY_CHICKEN_DEATH" }, { "sound": "Chicken Hurt", "name": "ENTITY_CHICKEN_HURT" }, { "sound": "Chicken Lay Egg", "name": "ENTITY_CHICKEN_EGG" }, { "sound": "Chicken Step", "name": "ENTITY_CHICKEN_STEP" }, { "sound": "Cow Ambient", "name": "ENTITY_COW_AMBIENT" }, { "sound": "Cow Death", "name": "ENTITY_COW_DEATH" }, { "sound": "Cow Hurt", "name": "ENTITY_COW_HURT" }, { "sound": "Cow Milk", "name": "ENTITY_COW_MILK" }, { "sound": "Cow Step", "name": "ENTITY_COW_STEP" }, { "sound": "Dolphin Ambient", "name": "ENTITY_DOLPHIN_AMBIENT" }, { "sound": "Dolphin Ambient (Water)", "name": "ENTITY_DOLPHIN_AMBIENT_WATER" }, { "sound": "Dolphin Attack", "name": "ENTITY_DOLPHIN_ATTACK" }, { "sound": "Dolphin Death", "name": "ENTITY_DOLPHIN_DEATH" }, { "sound": "Dolphin Eat", "name": "ENTITY_DOLPHIN_EAT" }, { "sound": "Dolphin Hurt", "name": "ENTITY_DOLPHIN_HURT" }, { "sound": "Dolphin Jump", "name": "ENTITY_DOLPHIN_JUMP" }, { "sound": "Dolphin Play", "name": "ENTITY_DOLPHIN_PLAY" }, { "sound": "Dolphin Splash", "name": "ENTITY_DOLPHIN_SPLASH" }, { "sound": "Dolphin Swim", "name": "ENTITY_DOLPHIN_SWIM" }, { "sound": "Donkey Ambient", "name": "ENTITY_DONKEY_AMBIENT" }, { "sound": "Donkey Angry", "name": "ENTITY_DONKEY_ANGRY" }, { "sound": "Donkey Death", "name": "ENTITY_DONKEY_DEATH" }, { "sound": "Donkey Eat", "name": "ENTITY_DONKEY_EAT" }, { "sound": "Donkey Equip Chest", "name": "ENTITY_DONKEY_CHEST" }, { "sound": "Donkey Hurt", "name": "ENTITY_DONKEY_HURT" }, { "sound": "Fish Ambient", "name": "ENTITY_COD_AMBIENT" }, { "sound": "Fish Death", "name": "ENTITY_COD_DEATH" }, { "sound": "Fish Flop", "name": "ENTITY_COD_FLOP" }, { "sound": "Fish Hurt", "name": "ENTITY_COD_HURT" }, { "sound": "Fish Swim", "name": "ENTITY_FISH_SWIM" }, { "sound": "Fox Aggravate", "name": "ENTITY_FOX_AGGRO" }, { "sound": "Fox Ambient", "name": "ENTITY_FOX_AMBIENT" }, { "sound": "Fox Bite", "name": "ENTITY_FOX_BITE" }, { "sound": "Fox Death", "name": "ENTITY_FOX_DEATH" }, { "sound": "Fox Eat", "name": "ENTITY_FOX_EAT" }, { "sound": "Fox Hurt", "name": "ENTITY_FOX_HURT" }, { "sound": "Fox Screech", "name": "ENTITY_FOX_SCREECH" }, { "sound": "Fox Sleep", "name": "ENTITY_FOX_SLEEP" }, { "sound": "Fox Sniff", "name": "ENTITY_FOX_SNIFF" }, { "sound": "Fox Spit", "name": "ENTITY_FOX_SPIT" }, { "sound": "Fox Teleport", "name": "ENTITY_FOX_TELEPORT" }, { "sound": "Goat Ambient", "name": "ENTITY_GOAT_AMBIENT" }, { "sound": "Goat Death", "name": "ENTITY_GOAT_DEATH" }, { "sound": "Goat Eat", "name": "ENTITY_GOAT_EAT" }, { "sound": "Goat Hurt", "name": "ENTITY_GOAT_HURT" }, { "sound": "Goat Long Jump", "name": "ENTITY_GOAT_LONG_JUMP" }, { "sound": "Goat Milk", "name": "ENTITY_GOAT_MILK" }, { "sound": "Goat Prepare Ram", "name": "ENTITY_GOAT_PREPARE_RAM" }, { "sound": "Goat Ram Impact", "name": "ENTITY_GOAT_RAM_IMPACT" }, { "sound": "Goat Step", "name": "ENTITY_GOAT_STEP" }, { "sound": "Screaming Goat Ambient", "name": "ENTITY_GOAT_SCREAMING_AMBIENT" }, { "sound": "Screaming Goat Death", "name": "ENTITY_GOAT_SCREAMING_DEATH" }, { "sound": "Screaming Goat Eat", "name": "ENTITY_GOAT_SCREAMING_EAT" }, { "sound": "Screaming Goat Hurt", "name": "ENTITY_GOAT_SCREAMING_HURT" }, { "sound": "Screaming Goat Long Jump", "name": "ENTITY_GOAT_SCREAMING_LONG_JUMP" }, { "sound": "Screaming Goat Milk", "name": "ENTITY_GOAT_SCREAMING_MILK" }, { "sound": "Screaming Goat Prepare Ram", "name": "ENTITY_GOAT_SCREAMING_PREPARE_RAM" }, { "sound": "Screaming Goat Ram Impact", "name": "ENTITY_GOAT_SCREAMING_RAM_IMPACT" }, { "sound": "Glow Squid Ambient", "name": "ENTITY_GLOW_SQUID_AMBIENT" }, { "sound": "Glow Squid Death", "name": "ENTITY_GLOW_SQUID_DEATH" }, { "sound": "Glow Squid Hurt", "name": "ENTITY_GLOW_SQUID_HURT" }, { "sound": "Glow Squid Squirt", "name": "ENTITY_GLOW_SQUID_SQUIRT" }, { "sound": "Horse Ambient", "name": "ENTITY_HORSE_AMBIENT" }, { "sound": "Horse Angry", "name": "ENTITY_HORSE_ANGRY" }, { "sound": "Horse Breathe", "name": "ENTITY_HORSE_BREATHE" }, { "sound": "Horse Death", "name": "ENTITY_HORSE_DEATH" }, { "sound": "Horse Eat", "name": "ENTITY_HORSE_EAT" }, { "sound": "Horse Equip Saddle", "name": "ENTITY_HORSE_SADDLE" }, { "sound": "Horse Equip Armor", "name": "ENTITY_HORSE_ARMOR" }, { "sound": "Horse Gallop", "name": "ENTITY_HORSE_GALLOP" }, { "sound": "Horse Hurt", "name": "ENTITY_HORSE_HURT" }, { "sound": "Horse Jump", "name": "ENTITY_HORSE_JUMP" }, { "sound": "Horse Land", "name": "ENTITY_HORSE_LAND" }, { "sound": "Horse Step", "name": "ENTITY_HORSE_STEP" }, { "sound": "Horse Step (Wood)", "name": "ENTITY_HORSE_STEP_WOOD" }, { "sound": "Iron Golem Attack", "name": "ENTITY_IRON_GOLEM_ATTACK" }, { "sound": "Iron Golem Damage", "name": "ENTITY_IRON_GOLEM_DAMAGE" }, { "sound": "Iron Golem Death", "name": "ENTITY_IRON_GOLEM_DEATH" }, { "sound": "Iron Golem Hurt", "name": "ENTITY_IRON_GOLEM_HURT" }, { "sound": "Iron Golem Repair", "name": "ENTITY_IRON_GOLEM_REPAIR" }, { "sound": "Iron Golem Step", "name": "ENTITY_IRON_GOLEM_STEP" }, { "sound": "Llama Ambient", "name": "ENTITY_LLAMA_AMBIENT" }, { "sound": "Llama Angry", "name": "ENTITY_LLAMA_ANGRY" }, { "sound": "Llama Death", "name": "ENTITY_LLAMA_DEATH" }, { "sound": "Llama Eat", "name": "ENTITY_LLAMA_EAT" }, { "sound": "Llama Equip Chest", "name": "ENTITY_LLAMA_CHEST" }, { "sound": "Llama Hurt", "name": "ENTITY_LLAMA_HURT" }, { "sound": "Llama Step", "name": "ENTITY_LLAMA_STEP" }, { "sound": "Llama Spit", "name": "ENTITY_LLAMA_SPIT" }, { "sound": "Llama Swag", "name": "ENTITY_LLAMA_SWAG" }, { "sound": "Mooshroom Convert", "name": "ENTITY_MOOSHROOM_CONVERT" }, { "sound": "Mooshroom Eat", "name": "ENTITY_MOOSHROOM_EAT" }, { "sound": "Mooshroom Milk", "name": "ENTITY_MOOSHROOM_MILK" }, { "sound": "Mooshroom Shear", "name": "ENTITY_MOOSHROOM_SHEAR" }, { "sound": "Brown Mooshroom Milk", "name": "ENTITY_MOOSHROOM_SUSPICIOUS_MILK" }, { "sound": "Mule Angry", "name": "ENTITY_MULE_ANGRY" }, { "sound": "Mule Equip Chest", "name": "ENTITY_MULE_CHEST" }, { "sound": "Mule Ambient", "name": "ENTITY_MULE_AMBIENT" }, { "sound": "Mule Death", "name": "ENTITY_MULE_DEATH" }, { "sound": "Mule Eat", "name": "ENTITY_MULE_EAT" }, { "sound": "Mule Hurt", "name": "ENTITY_MULE_HURT" }, { "sound": "Ocelot Ambient", "name": "ENTITY_OCELOT_AMBIENT" }, { "sound": "Ocelot Death", "name": "ENTITY_OCELOT_DEATH" }, { "sound": "Ocelot Hurt", "name": "ENTITY_OCELOT_HURT" }, { "sound": "Panda Ambient", "name": "ENTITY_PANDA_AMBIENT" }, { "sound": "Panda Ambient (Aggressive)", "name": "ENTITY_PANDA_AGGRESSIVE_AMBIENT" }, { "sound": "Panda Ambient (Worried)", "name": "ENTITY_PANDA_WORRIED_AMBIENT" }, { "sound": "Panda Bite", "name": "ENTITY_PANDA_BITE" }, { "sound": "Panda Sterile", "name": "ENTITY_PANDA_CANT_BREED" }, { "sound": "Panda Death", "name": "ENTITY_PANDA_DEATH" }, { "sound": "Panda Eat", "name": "ENTITY_PANDA_EAT" }, { "sound": "Panda Hurt", "name": "ENTITY_PANDA_HURT" }, { "sound": "Panda Pre-Sneeze", "name": "ENTITY_PANDA_PRE_SNEEZE" }, { "sound": "Panda Sneeze", "name": "ENTITY_PANDA_SNEEZE" }, { "sound": "Panda Step", "name": "ENTITY_PANDA_STEP" }, { "sound": "Parrot Ambient", "name": "ENTITY_PARROT_AMBIENT" }, { "sound": "Parrot Death", "name": "ENTITY_PARROT_DEATH" }, { "sound": "Parrot Hurt", "name": "ENTITY_PARROT_HURT" }, { "sound": "Parrot Step", "name": "ENTITY_PARROT_STEP" }, { "sound": "Parrot Eat", "name": "ENTITY_PARROT_EAT" }, { "sound": "Parrot Fly", "name": "ENTITY_PARROT_FLY" }, { "sound": "Parrot Imitate Blaze", "name": "ENTITY_PARROT_IMITATE_BLAZE" }, { "sound": "Parrot Imitate Creeper", "name": "ENTITY_PARROT_IMITATE_CREEPER" }, { "sound": "Parrot Imitate Drowned", "name": "ENTITY_PARROT_IMITATE_DROWNED" }, { "sound": "Parrot Imitate Elder Guardian", "name": "ENTITY_PARROT_IMITATE_ELDER_GUARDIAN" }, { "sound": "Parrot Imitate Ender Dragon", "name": "ENTITY_PARROT_IMITATE_ENDER_DRAGON" }, { "sound": "Parrot Imitate Endermite", "name": "ENTITY_PARROT_IMITATE_ENDERMITE" }, { "sound": "Parrot Imitate Evoker", "name": "ENTITY_PARROT_IMITATE_EVOKER" }, { "sound": "Parrot Imitate Ghast", "name": "ENTITY_PARROT_IMITATE_GHAST" }, { "sound": "Parrot Imitate Guardian", "name": "ENTITY_PARROT_IMITATE_GUARDIAN" }, { "sound": "Parrot Imitate Hoglin", "name": "ENTITY_PARROT_IMITATE_HOGLIN" }, { "sound": "Parrot Imitate Husk", "name": "ENTITY_PARROT_IMITATE_HUSK" }, { "sound": "Parrot Imitate Illusioner", "name": "ENTITY_PARROT_IMITATE_ILLUSIONER" }, { "sound": "Parrot Imitate Magma Cube", "name": "ENTITY_PARROT_IMITATE_MAGMA_CUBE" }, { "sound": "Parrot Imitate Phantom", "name": "ENTITY_PARROT_IMITATE_PHANTOM" }, { "sound": "Parrot Imitate Piglin", "name": "ENTITY_PARROT_IMITATE_PIGLIN" }, { "sound": "Parrot Imitate Pillager", "name": "ENTITY_PARROT_IMITATE_PILLAGER" }, { "sound": "Parrot Imitate Ravager", "name": "ENTITY_PARROT_IMITATE_RAVAGER" }, { "sound": "Parrot Imitate Piglin Brute", "name": "ENTITY_PARROT_IMITATE_PIGLIN_BRUTE" }, { "sound": "Parrot Imitate Shulker", "name": "ENTITY_PARROT_IMITATE_SHULKER" }, { "sound": "Parrot Imitate Silverfish", "name": "ENTITY_PARROT_IMITATE_SILVERFISH" }, { "sound": "Parrot Imitate Skeleton", "name": "ENTITY_PARROT_IMITATE_SKELETON" }, { "sound": "Parrot Imitate Slime", "name": "ENTITY_PARROT_IMITATE_SLIME" }, { "sound": "Parrot Imitate Spider", "name": "ENTITY_PARROT_IMITATE_SPIDER" }, { "sound": "Parrot Imitate Stray", "name": "ENTITY_PARROT_IMITATE_STRAY" }, { "sound": "Parrot Imitate Vex", "name": "ENTITY_PARROT_IMITATE_VEX" }, { "sound": "Parrot Imitate Vindicator", "name": "ENTITY_PARROT_IMITATE_VINDICATOR" }, { "sound": "Parrot Imitate Witch", "name": "ENTITY_PARROT_IMITATE_WITCH" }, { "sound": "Parrot Imitate Wither", "name": "ENTITY_PARROT_IMITATE_WITHER" }, { "sound": "Parrot Imitate Wither Skeleton", "name": "ENTITY_PARROT_IMITATE_WITHER_SKELETON" }, { "sound": "Parrot Imitate Zoglin", "name": "ENTITY_PARROT_IMITATE_ZOGLIN" }, { "sound": "Parrot Imitate Zombie", "name": "ENTITY_PARROT_IMITATE_ZOMBIE" }, { "sound": "Parrot Imitate Zombie Villager", "name": "ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER" }, { "sound": "Pig Ambient", "name": "ENTITY_PIG_AMBIENT" }, { "sound": "Pig Death", "name": "ENTITY_PIG_DEATH" }, { "sound": "Pig Equip Saddle", "name": "ENTITY_PIG_SADDLE" }, { "sound": "Pig Hurt", "name": "ENTITY_PIG_HURT" }, { "sound": "Pig Step", "name": "ENTITY_PIG_STEP" }, { "sound": "Polar Bear Ambient", "name": "ENTITY_POLAR_BEAR_AMBIENT" }, { "sound": "Polar Bear Death", "name": "ENTITY_POLAR_BEAR_DEATH" }, { "sound": "Polar Bear Hurt", "name": "ENTITY_POLAR_BEAR_HURT" }, { "sound": "Polar Bear Step", "name": "ENTITY_POLAR_BEAR_STEP" }, { "sound": "Polar Bear Warn", "name": "ENTITY_POLAR_BEAR_WARNING" }, { "sound": "Baby Polar Bear Ambient", "name": "ENTITY_POLAR_BEAR_AMBIENT_BABY" }, { "sound": "Pufferfish Ambient", "name": "ENTITY_PUFFER_FISH_AMBIENT" }, { "sound": "Pufferfish Death", "name": "ENTITY_PUFFER_FISH_DEATH" }, { "sound": "Pufferfish Deflate", "name": "ENTITY_PUFFER_FISH_BLOW_OUT" }, { "sound": "Pufferfish Flop", "name": "ENTITY_PUFFER_FISH_FLOP" }, { "sound": "Pufferfish Hurt", "name": "ENTITY_PUFFER_FISH_HURT" }, { "sound": "Pufferfish Inflate", "name": "ENTITY_PUFFER_FISH_BLOW_UP" }, { "sound": "Pufferfish Sting", "name": "ENTITY_PUFFER_FISH_STING" }, { "sound": "Rabbit Ambient", "name": "ENTITY_RABBIT_AMBIENT" }, { "sound": "Rabbit Death", "name": "ENTITY_RABBIT_DEATH" }, { "sound": "Rabbit Hurt", "name": "ENTITY_RABBIT_HURT" }, { "sound": "Rabbit Jump", "name": "ENTITY_RABBIT_JUMP" }, { "sound": "Killer Rabbit Attack", "name": "ENTITY_RABBIT_ATTACK" }, { "sound": "Sheep Ambient", "name": "ENTITY_SHEEP_AMBIENT" }, { "sound": "Sheep Death", "name": "ENTITY_SHEEP_DEATH" }, { "sound": "Sheep Hurt", "name": "ENTITY_SHEEP_HURT" }, { "sound": "Sheep Shear", "name": "ENTITY_SHEEP_SHEAR" }, { "sound": "Sheep Step", "name": "ENTITY_SHEEP_STEP" }, { "sound": "Snow Golem Ambient", "name": "ENTITY_SNOW_GOLEM_AMBIENT" }, { "sound": "Snow Golem Death", "name": "ENTITY_SNOW_GOLEM_DEATH" }, { "sound": "Snow Golem Hurt", "name": "ENTITY_SNOW_GOLEM_HURT" }, { "sound": "Snow Golem Shear", "name": "ENTITY_SNOW_GOLEM_SHEAR" }, { "sound": "Snow Golem Shoot", "name": "ENTITY_SNOW_GOLEM_SHOOT" }, { "sound": "Squid Ambient", "name": "ENTITY_SQUID_AMBIENT" }, { "sound": "Squid Death", "name": "ENTITY_SQUID_DEATH" }, { "sound": "Squid Hurt", "name": "ENTITY_SQUID_HURT" }, { "sound": "Squid Squirt", "name": "ENTITY_SQUID_SQUIRT" }, { "sound": "Turtle Ambient", "name": "ENTITY_TURTLE_AMBIENT_LAND" }, { "sound": "Turtle Death", "name": "ENTITY_TURTLE_DEATH" }, { "sound": "Turtle Hurt", "name": "ENTITY_TURTLE_HURT" }, { "sound": "Turtle Shamble", "name": "ENTITY_TURTLE_SHAMBLE" }, { "sound": "Turtle Lay Egg", "name": "ENTITY_TURTLE_LAY_EGG" }, { "sound": "Turtle Egg Crack", "name": "ENTITY_TURTLE_EGG_CRACK" }, { "sound": "Turtle Egg Hatch", "name": "ENTITY_TURTLE_EGG_HATCH" }, { "sound": "Turtle Egg Break", "name": "ENTITY_TURTLE_EGG_BREAK" }, { "sound": "Turtle Swim", "name": "ENTITY_TURTLE_SWIM" }, { "sound": "Baby Turtle Death", "name": "ENTITY_TURTLE_DEATH_BABY" }, { "sound": "Baby Turtle Hurt", "name": "ENTITY_TURTLE_HURT_BABY" }, { "sound": "Baby Turtle Shamble", "name": "ENTITY_TURTLE_SHAMBLE_BABY" }, { "sound": "Wolf Ambient", "name": "ENTITY_WOLF_AMBIENT" }, { "sound": "Wolf Death", "name": "ENTITY_WOLF_DEATH" }, { "sound": "Wolf Growl", "name": "ENTITY_WOLF_GROWL" }, { "sound": "Wolf Howl", "name": "ENTITY_WOLF_HOWL" }, { "sound": "Wolf Hurt", "name": "ENTITY_WOLF_HURT" }, { "sound": "Wolf Pant", "name": "ENTITY_WOLF_PANT" }, { "sound": "Wolf Shake", "name": "ENTITY_WOLF_SHAKE" }, { "sound": "Wolf Step", "name": "ENTITY_WOLF_STEP" }, { "sound": "Wolf Whine", "name": "ENTITY_WOLF_WHINE" }, { "sound": "Strider Ambient", "name": "ENTITY_STRIDER_AMBIENT" }, { "sound": "Strider Death", "name": "ENTITY_STRIDER_DEATH" }, { "sound": "Strider Eat", "name": "ENTITY_STRIDER_EAT" }, { "sound": "Strider Equip Saddle", "name": "ENTITY_STRIDER_SADDLE" }, { "sound": "Strider Happy", "name": "ENTITY_STRIDER_HAPPY" }, { "sound": "Strider Hurt", "name": "ENTITY_STRIDER_HURT" }, { "sound": "Strider Retreat", "name": "ENTITY_STRIDER_RETREAT" }, { "sound": "Strider Step", "name": "ENTITY_STRIDER_STEP" }, { "sound": "Strider Step (Lava)", "name": "ENTITY_STRIDER_STEP_LAVA" }, { "sound": "Villager Ambient", "name": "ENTITY_VILLAGER_AMBIENT" }, { "sound": "Villager Death", "name": "ENTITY_VILLAGER_DEATH" }, { "sound": "Villager Hurt", "name": "ENTITY_VILLAGER_HURT" }, { "sound": "Villager No", "name": "ENTITY_VILLAGER_NO" }, { "sound": "Villager Trading", "name": "ENTITY_VILLAGER_TRADE" }, { "sound": "Villager Yes", "name": "ENTITY_VILLAGER_YES" }, { "sound": "Armorer Work", "name": "ENTITY_VILLAGER_WORK_ARMORER" }, { "sound": "Butcher Work", "name": "ENTITY_VILLAGER_WORK_BUTCHER" }, { "sound": "Cartographer Work", "name": "ENTITY_VILLAGER_WORK_CARTOGRAPHER" }, { "sound": "Cleric Work", "name": "ENTITY_VILLAGER_WORK_CLERIC" }, { "sound": "Farmer Work", "name": "ENTITY_VILLAGER_WORK_FARMER" }, { "sound": "Fisherman Work", "name": "ENTITY_VILLAGER_WORK_FISHERMAN" }, { "sound": "Fletcher Work", "name": "ENTITY_VILLAGER_WORK_FLETCHER" }, { "sound": "Leatherworker Work", "name": "ENTITY_VILLAGER_WORK_LEATHERWORKER" }, { "sound": "Librarian Work", "name": "ENTITY_VILLAGER_WORK_LIBRARIAN" }, { "sound": "Mason Work", "name": "ENTITY_VILLAGER_WORK_MASON" }, { "sound": "Shepherd Work", "name": "ENTITY_VILLAGER_WORK_SHEPHERD" }, { "sound": "Toolsmith Work", "name": "ENTITY_VILLAGER_WORK_TOOLSMITH" }, { "sound": "Weaponsmith Work", "name": "ENTITY_VILLAGER_WORK_WEAPONSMITH" }, { "sound": "Villager Celebrate", "name": "ENTITY_VILLAGER_CELEBRATE" }, { "sound": "Wandering Trader Ambient", "name": "ENTITY_WANDERING_TRADER_AMBIENT" }, { "sound": "Wandering Trader Death", "name": "ENTITY_WANDERING_TRADER_DEATH" }, { "sound": "Wandering Trader Disappear", "name": "ENTITY_WANDERING_TRADER_DISAPPEARED" }, { "sound": "Wandering Trader Drink Milk", "name": "ENTITY_WANDERING_TRADER_DRINK_MILK" }, { "sound": "Wandering Trader Drink Potion", "name": "ENTITY_WANDERING_TRADER_DRINK_POTION" }, { "sound": "Wandering Trader Hurt", "name": "ENTITY_WANDERING_TRADER_HURT" }, { "sound": "Wandering Trader No", "name": "ENTITY_WANDERING_TRADER_NO" }, { "sound": "Wandering Trader Reappear", "name": "ENTITY_WANDERING_TRADER_REAPPEARED" }, { "sound": "Wandering Trader Trading", "name": "ENTITY_WANDERING_TRADER_TRADE" }, { "sound": "Wandering Trader Yes", "name": "ENTITY_WANDERING_TRADER_YES" }, { "sound": "Creeper Death", "name": "ENTITY_CREEPER_DEATH" }, { "sound": "Explode", "name": "ENTITY_GENERIC_EXPLODE" }, { "sound": "Creeper Hurt", "name": "ENTITY_CREEPER_HURT" }, { "sound": "Creeper Primed", "name": "ENTITY_CREEPER_PRIMED" }, { "sound": "Drowned Ambient", "name": "ENTITY_DROWNED_AMBIENT_WATER" }, { "sound": "Drowned Ambient (Land)", "name": "ENTITY_DROWNED_AMBIENT" }, { "sound": "Drowned Death", "name": "ENTITY_DROWNED_DEATH_WATER" }, { "sound": "Drowned Death (Land)", "name": "ENTITY_DROWNED_DEATH" }, { "sound": "Drowned Hurt", "name": "ENTITY_DROWNED_HURT_WATER" }, { "sound": "Drowned Hurt (Land)", "name": "ENTITY_DROWNED_HURT" }, { "sound": "Drowned Shoot", "name": "ENTITY_DROWNED_SHOOT" }, { "sound": "Drowned Step", "name": "ENTITY_DROWNED_STEP" }, { "sound": "Drowned Swim", "name": "ENTITY_DROWNED_SWIM" }, { "sound": "Elder Guardian Ambient", "name": "ENTITY_ELDER_GUARDIAN_AMBIENT" }, { "sound": "Elder Guardian Ambient (Land)", "name": "ENTITY_ELDER_GUARDIAN_AMBIENT_LAND" }, { "sound": "Elder Guardian Curse", "name": "ENTITY_ELDER_GUARDIAN_CURSE" }, { "sound": "Elder Guardian Death", "name": "ENTITY_ELDER_GUARDIAN_DEATH" }, { "sound": "Elder Guardian Death (Land)", "name": "ENTITY_ELDER_GUARDIAN_DEATH_LAND" }, { "sound": "Elder Guardian Flop", "name": "ENTITY_ELDER_GUARDIAN_FLOP" }, { "sound": "Elder Guardian Hurt", "name": "ENTITY_ELDER_GUARDIAN_HURT" }, { "sound": "Elder Guardian Hurt (Land)", "name": "ENTITY_ELDER_GUARDIAN_HURT_LAND" }, { "sound": "Guardian Ambient", "name": "ENTITY_GUARDIAN_AMBIENT" }, { "sound": "Guardian Ambient (Land)", "name": "ENTITY_GUARDIAN_AMBIENT_LAND" }, { "sound": "Guardian Attack", "name": "ENTITY_GUARDIAN_ATTACK" }, { "sound": "Guardian Death", "name": "ENTITY_GUARDIAN_DEATH" }, { "sound": "Guardian Death (Land)", "name": "ENTITY_GUARDIAN_DEATH_LAND" }, { "sound": "Guardian Flop", "name": "ENTITY_GUARDIAN_FLOP" }, { "sound": "Guardian Hurt", "name": "ENTITY_GUARDIAN_HURT" }, { "sound": "Guardian Hurt (Land)", "name": "ENTITY_GUARDIAN_HURT_LAND" }, { "sound": "Husk Ambient", "name": "ENTITY_HUSK_AMBIENT" }, { "sound": "Husk Death", "name": "ENTITY_HUSK_DEATH" }, { "sound": "Husk Hurt", "name": "ENTITY_HUSK_HURT" }, { "sound": "Husk Step", "name": "ENTITY_HUSK_STEP" }, { "sound": "Husk Drown", "name": "ENTITY_HUSK_CONVERTED_TO_ZOMBIE" }, { "sound": "Phantom Ambient", "name": "ENTITY_PHANTOM_AMBIENT" }, { "sound": "Phantom Bite", "name": "ENTITY_PHANTOM_BITE" }, { "sound": "Phantom Death", "name": "ENTITY_PHANTOM_DEATH" }, { "sound": "Phantom Flap", "name": "ENTITY_PHANTOM_FLAP" }, { "sound": "Phantom Hurt", "name": "ENTITY_PHANTOM_HURT" }, { "sound": "Phantom Swoop", "name": "ENTITY_PHANTOM_SWOOP" }, { "sound": "Ravager Ambient", "name": "ENTITY_RAVAGER_AMBIENT" }, { "sound": "Ravager Attack", "name": "ENTITY_RAVAGER_ATTACK" }, { "sound": "Ravager Death", "name": "ENTITY_RAVAGER_DEATH" }, { "sound": "Ravager Hurt", "name": "ENTITY_RAVAGER_HURT" }, { "sound": "Ravager Roar", "name": "ENTITY_RAVAGER_ROAR" }, { "sound": "Ravager Step", "name": "ENTITY_RAVAGER_STEP" }, { "sound": "Ravager Stunned", "name": "ENTITY_RAVAGER_STUNNED" }, { "sound": "Ravager Celebrate", "name": "ENTITY_RAVAGER_CELEBRATE" }, { "sound": "Silverfish Ambient", "name": "ENTITY_SILVERFISH_AMBIENT" }, { "sound": "Silverfish Death", "name": "ENTITY_SILVERFISH_DEATH" }, { "sound": "Silverfish Hurt", "name": "ENTITY_SILVERFISH_HURT" }, { "sound": "Silverfish Step", "name": "ENTITY_SILVERFISH_STEP" }, { "sound": "Skeleton Ambient", "name": "ENTITY_SKELETON_AMBIENT" }, { "sound": "Skeleton Convert To Stray", "name": "ENTITY_SKELETON_CONVERTED_TO_STRAY" }, { "sound": "Skeleton Death", "name": "ENTITY_SKELETON_DEATH" }, { "sound": "Skeleton Hurt", "name": "ENTITY_SKELETON_HURT" }, { "sound": "Skeleton Step", "name": "ENTITY_SKELETON_STEP" }, { "sound": "Skeleton Shoot", "name": "ENTITY_SKELETON_SHOOT" }, { "sound": "Skeleton Horse Ambient", "name": "ENTITY_SKELETON_HORSE_AMBIENT" }, { "sound": "Skeleton Horse Ambient (Water)", "name": "ENTITY_SKELETON_HORSE_AMBIENT_WATER" }, { "sound": "Skeleton Horse Death", "name": "ENTITY_SKELETON_HORSE_DEATH" }, { "sound": "Skeleton Horse Gallop (Water)", "name": "ENTITY_SKELETON_HORSE_GALLOP_WATER" }, { "sound": "Skeleton Horse Hurt", "name": "ENTITY_SKELETON_HORSE_HURT" }, { "sound": "Skeleton Horse Jump (Water)", "name": "ENTITY_SKELETON_HORSE_JUMP_WATER" }, { "sound": "Skeleton Horse Step (Water)", "name": "ENTITY_SKELETON_HORSE_STEP_WATER" }, { "sound": "Skeleton Horse Swim", "name": "ENTITY_SKELETON_HORSE_SWIM" }, { "sound": "Slime Attack", "name": "ENTITY_SLIME_ATTACK" }, { "sound": "Slime Death", "name": "ENTITY_SLIME_DEATH" }, { "sound": "Slime Hurt", "name": "ENTITY_SLIME_HURT" }, { "sound": "Slime Jump", "name": "ENTITY_SLIME_JUMP" }, { "sound": "Slime Squish", "name": "ENTITY_SLIME_SQUISH" }, { "sound": "Small Slime Death", "name": "ENTITY_SLIME_DEATH_SMALL" }, { "sound": "Small Slime Hurt", "name": "ENTITY_SLIME_HURT_SMALL" }, { "sound": "Small Slime Jump", "name": "ENTITY_SLIME_JUMP_SMALL" }, { "sound": "Small Slime Squish", "name": "ENTITY_SLIME_SQUISH_SMALL" }, { "sound": "Spider Ambient", "name": "ENTITY_SPIDER_AMBIENT" }, { "sound": "Spider Death", "name": "ENTITY_SPIDER_DEATH" }, { "sound": "Spider Hurt", "name": "ENTITY_SPIDER_HURT" }, { "sound": "Spider Step", "name": "ENTITY_SPIDER_STEP" }, { "sound": "Stray Ambient", "name": "ENTITY_STRAY_AMBIENT" }, { "sound": "Stray Death", "name": "ENTITY_STRAY_DEATH" }, { "sound": "Stray Hurt", "name": "ENTITY_STRAY_HURT" }, { "sound": "Stray Step", "name": "ENTITY_STRAY_STEP" }, { "sound": "Vex Ambient", "name": "ENTITY_VEX_AMBIENT" }, { "sound": "Vex Charge", "name": "ENTITY_VEX_CHARGE" }, { "sound": "Vex Death", "name": "ENTITY_VEX_DEATH" }, { "sound": "Vex Hurt", "name": "ENTITY_VEX_HURT" }, { "sound": "Witch Ambient", "name": "ENTITY_WITCH_AMBIENT" }, { "sound": "Witch Death", "name": "ENTITY_WITCH_DEATH" }, { "sound": "Witch Drink", "name": "ENTITY_WITCH_DRINK" }, { "sound": "Witch Hurt", "name": "ENTITY_WITCH_HURT" }, { "sound": "Witch Throw", "name": "ENTITY_WITCH_THROW" }, { "sound": "Witch Celebrate", "name": "ENTITY_WITCH_CELEBRATE" }, { "sound": "Zombie Ambient", "name": "ENTITY_ZOMBIE_AMBIENT" }, { "sound": "Zombie Attack Wooden Door", "name": "ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR" }, { "sound": "Zombie Attack Iron Door", "name": "ENTITY_ZOMBIE_ATTACK_IRON_DOOR" }, { "sound": "Zombie Break Wooden Door", "name": "ENTITY_ZOMBIE_BREAK_WOODEN_DOOR" }, { "sound": "Zombie Death", "name": "ENTITY_ZOMBIE_DEATH" }, { "sound": "Zombie Destroy Egg", "name": "ENTITY_ZOMBIE_DESTROY_EGG" }, { "sound": "Zombie Drown", "name": "ENTITY_ZOMBIE_CONVERTED_TO_DROWNED" }, { "sound": "Zombie Infect", "name": "ENTITY_ZOMBIE_INFECT" }, { "sound": "Zombie Hurt", "name": "ENTITY_ZOMBIE_HURT" }, { "sound": "Zombie Step", "name": "ENTITY_ZOMBIE_STEP" }, { "sound": "Zombie Horse Ambient", "name": "ENTITY_ZOMBIE_HORSE_AMBIENT" }, { "sound": "Zombie Horse Death", "name": "ENTITY_ZOMBIE_HORSE_DEATH" }, { "sound": "Zombie Horse Hurt", "name": "ENTITY_ZOMBIE_HORSE_HURT" }, { "sound": "Zombie Villager Ambient", "name": "ENTITY_ZOMBIE_VILLAGER_AMBIENT" }, { "sound": "Zombie Villager Convert", "name": "ENTITY_ZOMBIE_VILLAGER_CONVERTED" }, { "sound": "Zombie Villager Cure", "name": "ENTITY_ZOMBIE_VILLAGER_CURE" }, { "sound": "Zombie Villager Death", "name": "ENTITY_ZOMBIE_VILLAGER_DEATH" }, { "sound": "Zombie Villager Hurt", "name": "ENTITY_ZOMBIE_VILLAGER_HURT" }, { "sound": "Zombie Villager Step", "name": "ENTITY_ZOMBIE_VILLAGER_STEP" }, { "sound": "Blaze Ambient", "name": "ENTITY_BLAZE_AMBIENT" }, { "sound": "Blaze Burn", "name": "ENTITY_BLAZE_BURN" }, { "sound": "Blaze Death", "name": "ENTITY_BLAZE_DEATH" }, { "sound": "Blaze Hurt", "name": "ENTITY_BLAZE_HURT" }, { "sound": "Blaze Shoot", "name": "ENTITY_BLAZE_SHOOT" }, { "sound": "Ghast Ambient", "name": "ENTITY_GHAST_AMBIENT" }, { "sound": "Ghast Death", "name": "ENTITY_GHAST_DEATH" }, { "sound": "Ghast Hurt", "name": "ENTITY_GHAST_HURT" }, { "sound": "Ghast Scream", "name": "ENTITY_GHAST_SCREAM" }, { "sound": "Ghast Shoot", "name": "ENTITY_GHAST_SHOOT" }, { "sound": "Ghast Warn", "name": "ENTITY_GHAST_WARN" }, { "sound": "Hoglin Ambient", "name": "ENTITY_HOGLIN_AMBIENT" }, { "sound": "Hoglin Angry", "name": "ENTITY_HOGLIN_ANGRY" }, { "sound": "Hoglin Attack", "name": "ENTITY_HOGLIN_ATTACK" }, { "sound": "Hoglin Zombify", "name": "ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED" }, { "sound": "Hoglin Death", "name": "ENTITY_HOGLIN_DEATH" }, { "sound": "Hoglin Hurt", "name": "ENTITY_HOGLIN_HURT" }, { "sound": "Hoglin Retreat", "name": "ENTITY_HOGLIN_RETREAT" }, { "sound": "Hoglin Step", "name": "ENTITY_HOGLIN_STEP" }, { "sound": "Magma Cube Death", "name": "ENTITY_MAGMA_CUBE_DEATH" }, { "sound": "Magma Cube Hurt", "name": "ENTITY_MAGMA_CUBE_HURT" }, { "sound": "Magma Cube Jump", "name": "ENTITY_MAGMA_CUBE_JUMP" }, { "sound": "Magma Cube Squish", "name": "ENTITY_MAGMA_CUBE_SQUISH" }, { "sound": "Small Magma Cube Death", "name": "ENTITY_MAGMA_CUBE_DEATH_SMALL" }, { "sound": "Small Magma Cube Hurt", "name": "ENTITY_MAGMA_CUBE_HURT_SMALL" }, { "sound": "Small Magma Cube Squish", "name": "ENTITY_MAGMA_CUBE_SQUISH_SMALL" }, { "sound": "Piglin Admiring Item", "name": "ENTITY_PIGLIN_ADMIRING_ITEM" }, { "sound": "Piglin Ambient", "name": "ENTITY_PIGLIN_AMBIENT" }, { "sound": "Piglin Angry", "name": "ENTITY_PIGLIN_ANGRY" }, { "sound": "Piglin Celebrate", "name": "ENTITY_PIGLIN_CELEBRATE" }, { "sound": "Piglin Zombify", "name": "ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED" }, { "sound": "Piglin Death", "name": "ENTITY_PIGLIN_DEATH" }, { "sound": "Piglin Hurt", "name": "ENTITY_PIGLIN_HURT" }, { "sound": "Piglin Jealous", "name": "ENTITY_PIGLIN_JEALOUS" }, { "sound": "Piglin Retreat", "name": "ENTITY_PIGLIN_RETREAT" }, { "sound": "Piglin Step", "name": "ENTITY_PIGLIN_STEP" }, { "sound": "Piglin Brute Ambient", "name": "ENTITY_PIGLIN_BRUTE_AMBIENT" }, { "sound": "Piglin Brute Angry", "name": "ENTITY_PIGLIN_BRUTE_ANGRY" }, { "sound": "Piglin Brute Zombify", "name": "ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED" }, { "sound": "Piglin Brute Death", "name": "ENTITY_PIGLIN_BRUTE_DEATH" }, { "sound": "Piglin Brute Hurt", "name": "ENTITY_PIGLIN_BRUTE_HURT" }, { "sound": "Piglin Brute Step", "name": "ENTITY_PIGLIN_BRUTE_STEP" }, { "sound": "Wither Ambient", "name": "ENTITY_WITHER_AMBIENT" }, { "sound": "Wither Break Block", "name": "ENTITY_WITHER_BREAK_BLOCK" }, { "sound": "Wither Death", "name": "ENTITY_WITHER_DEATH" }, { "sound": "Wither Hurt", "name": "ENTITY_WITHER_HURT" }, { "sound": "Wither Shoot", "name": "ENTITY_WITHER_SHOOT" }, { "sound": "Wither Spawn", "name": "ENTITY_WITHER_SPAWN" }, { "sound": "Wither Skeleton Ambient", "name": "ENTITY_WITHER_SKELETON_AMBIENT" }, { "sound": "Wither Skeleton Death", "name": "ENTITY_WITHER_SKELETON_DEATH" }, { "sound": "Wither Skeleton Hurt", "name": "ENTITY_WITHER_SKELETON_HURT" }, { "sound": "Wither Skeleton Step", "name": "ENTITY_WITHER_SKELETON_STEP" }, { "sound": "Zoglin Ambient", "name": "ENTITY_ZOGLIN_AMBIENT" }, { "sound": "Zoglin Angry", "name": "ENTITY_ZOGLIN_ANGRY" }, { "sound": "Zoglin Attack", "name": "ENTITY_ZOGLIN_ATTACK" }, { "sound": "Zoglin Death", "name": "ENTITY_ZOGLIN_DEATH" }, { "sound": "Zoglin Hurt", "name": "ENTITY_ZOGLIN_HURT" }, { "sound": "Zoglin Step", "name": "ENTITY_ZOGLIN_STEP" }, { "sound": "Zombified Piglin Ambient", "name": "ENTITY_ZOMBIFIED_PIGLIN_AMBIENT" }, { "sound": "Zombified Piglin Angry", "name": "ENTITY_ZOMBIFIED_PIGLIN_ANGRY" }, { "sound": "Zombified Piglin Death", "name": "ENTITY_ZOMBIFIED_PIGLIN_DEATH" }, { "sound": "Zombified Piglin Hurt", "name": "ENTITY_ZOMBIFIED_PIGLIN_HURT" }, { "sound": "Enderman Ambient", "name": "ENTITY_ENDERMAN_AMBIENT" }, { "sound": "Enderman Death", "name": "ENTITY_ENDERMAN_DEATH" }, { "sound": "Enderman Hurt", "name": "ENTITY_ENDERMAN_HURT" }, { "sound": "Enderman Scream", "name": "ENTITY_ENDERMAN_SCREAM" }, { "sound": "Enderman Stare", "name": "ENTITY_ENDERMAN_STARE" }, { "sound": "Enderman Teleport", "name": "ENTITY_ENDERMAN_TELEPORT" }, { "sound": "Endermite Ambient", "name": "ENTITY_ENDERMITE_AMBIENT" }, { "sound": "Endermite Death", "name": "ENTITY_ENDERMITE_DEATH" }, { "sound": "Endermite Hurt", "name": "ENTITY_ENDERMITE_HURT" }, { "sound": "Endermite Step", "name": "ENTITY_ENDERMITE_STEP" }, { "sound": "Ender Dragon Ambient", "name": "ENTITY_ENDER_DRAGON_AMBIENT" }, { "sound": "Ender Dragon Death", "name": "ENTITY_ENDER_DRAGON_DEATH" }, { "sound": "Ender Dragon Hurt", "name": "ENTITY_ENDER_DRAGON_HURT" }, { "sound": "Ender Dragon Fireball Explode", "name": "ENTITY_DRAGON_FIREBALL_EXPLODE" }, { "sound": "Ender Dragon Flap", "name": "ENTITY_ENDER_DRAGON_FLAP" }, { "sound": "Ender Dragon Growl", "name": "ENTITY_ENDER_DRAGON_GROWL" }, { "sound": "Ender Dragon Shoot", "name": "ENTITY_ENDER_DRAGON_SHOOT" }, { "sound": "Shulker Ambient", "name": "ENTITY_SHULKER_AMBIENT" }, { "sound": "Shulker Close", "name": "ENTITY_SHULKER_CLOSE" }, { "sound": "Shulker Death", "name": "ENTITY_SHULKER_DEATH" }, { "sound": "Shulker Hurt", "name": "ENTITY_SHULKER_HURT" }, { "sound": "Shulker Hurt (Closed)", "name": "ENTITY_SHULKER_HURT_CLOSED" }, { "sound": "Shulker Open", "name": "ENTITY_SHULKER_OPEN" }, { "sound": "Shulker Shoot", "name": "ENTITY_SHULKER_SHOOT" }, { "sound": "Shulker Teleport", "name": "ENTITY_SHULKER_TELEPORT" }, { "sound": "Shulker Bullet Explode", "name": "ENTITY_SHULKER_BULLET_HIT" }, { "sound": "Shulker Bullet Break", "name": "ENTITY_SHULKER_BULLET_HURT" }, { "sound": "Evoker Ambient", "name": "ENTITY_EVOKER_AMBIENT" }, { "sound": "Evoker Cast Spell", "name": "ENTITY_EVOKER_CAST_SPELL" }, { "sound": "Evoker Death", "name": "ENTITY_EVOKER_DEATH" }, { "sound": "Evoker Hurt", "name": "ENTITY_EVOKER_HURT" }, { "sound": "Evoker Prepare Attack", "name": "ENTITY_EVOKER_PREPARE_ATTACK" }, { "sound": "Evoker Prepare Summon", "name": "ENTITY_EVOKER_PREPARE_SUMMON" }, { "sound": "Evoker Prepare Wololo", "name": "ENTITY_EVOKER_PREPARE_WOLOLO" }, { "sound": "Evoker Fangs Attack", "name": "ENTITY_EVOKER_FANGS_ATTACK" }, { "sound": "Evoker Celebrate", "name": "ENTITY_EVOKER_CELEBRATE" }, { "sound": "Illusioner Ambient", "name": "ENTITY_ILLUSIONER_AMBIENT" }, { "sound": "Illusioner Death", "name": "ENTITY_ILLUSIONER_DEATH" }, { "sound": "Illusioner Hurt", "name": "ENTITY_ILLUSIONER_HURT" }, { "sound": "Illusioner Cast Spell", "name": "ENTITY_ILLUSIONER_CAST_SPELL" }, { "sound": "Illusioner Mirror Move", "name": "ENTITY_ILLUSIONER_MIRROR_MOVE" }, { "sound": "Illusioner Prepare Blindness", "name": "ENTITY_ILLUSIONER_PREPARE_BLINDNESS" }, { "sound": "Illusioner Prepare Mirror", "name": "ENTITY_ILLUSIONER_PREPARE_MIRROR" }, { "sound": "Pillager Ambient", "name": "ENTITY_PILLAGER_AMBIENT" }, { "sound": "Pillager Death", "name": "ENTITY_PILLAGER_DEATH" }, { "sound": "Pillager Hurt", "name": "ENTITY_PILLAGER_HURT" }, { "sound": "Pillager Celebrate", "name": "ENTITY_PILLAGER_CELEBRATE" }, { "sound": "Vindicator Ambient", "name": "ENTITY_VINDICATOR_AMBIENT" }, { "sound": "Vindicator Death", "name": "ENTITY_VINDICATOR_DEATH" }, { "sound": "Vindicator Hurt", "name": "ENTITY_VINDICATOR_HURT" }, { "sound": "Vindicator Celebrate", "name": "ENTITY_VINDICATOR_CELEBRATE" }, { "sound": "Player Attack (Critical)", "name": "ENTITY_PLAYER_ATTACK_CRIT" }, { "sound": "Player Attack (Knockback)", "name": "ENTITY_PLAYER_ATTACK_KNOCKBACK" }, { "sound": "Player Attack (No Damage)", "name": "ENTITY_PLAYER_ATTACK_NODAMAGE" }, { "sound": "Player Attack (Strong)", "name": "ENTITY_PLAYER_ATTACK_STRONG" }, { "sound": "Player Attack (Sweep)", "name": "ENTITY_PLAYER_ATTACK_SWEEP" }, { "sound": "Player Attack (Weak)", "name": "ENTITY_PLAYER_ATTACK_WEAK" }, { "sound": "Player Breathe", "name": "ENTITY_PLAYER_BREATH" }, { "sound": "Player Burn", "name": "ENTITY_PLAYER_HURT_ON_FIRE" }, { "sound": "Player Freeze", "name": "ENTITY_PLAYER_HURT_FREEZE" }, { "sound": "Player Burp", "name": "ENTITY_PLAYER_BURP" }, { "sound": "Player Drown", "name": "ENTITY_PLAYER_HURT_DROWN" }, { "sound": "Player Hurt (Sweet Berry Bush)", "name": "ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH" }, { "sound": "Player Level Up", "name": "ENTITY_PLAYER_LEVELUP" }, { "sound": "Player Splash (High Speed)", "name": "ENTITY_PLAYER_SPLASH_HIGH_SPEED" }, { "sound": "Death", "name": "ENTITY_GENERIC_DEATH" }, { "sound": "Drink", "name": "ENTITY_GENERIC_DRINK" }, { "sound": "Eat", "name": "ENTITY_GENERIC_EAT" }, { "sound": "Extinguish", "name": "ENTITY_GENERIC_EXTINGUISH_FIRE" }, { "sound": "Fall", "name": "ENTITY_GENERIC_SMALL_FALL" }, { "sound": "Fall (Big)", "name": "ENTITY_GENERIC_BIG_FALL" }, { "sound": "Hurt", "name": "ENTITY_GENERIC_HURT" }, { "sound": "Splash", "name": "ENTITY_GENERIC_SPLASH" }, { "sound": "Swim", "name": "ENTITY_GENERIC_SWIM" }, { "sound": "Challenge Complete", "name": "UI_TOAST_CHALLENGE_COMPLETE" }, { "sound": "UI Button Click", "name": "UI_BUTTON_CLICK" }, { "sound": "UI Toast In", "name": "UI_TOAST_IN" }, { "sound": "UI Toast Out", "name": "UI_TOAST_OUT" }, { "sound": "Arrow Hit", "name": "ENTITY_ARROW_HIT" }, { "sound": "Arrow Hit Player", "name": "ENTITY_ARROW_HIT_PLAYER" }, { "sound": "Arrow Shoot", "name": "ENTITY_ARROW_SHOOT" }, { "sound": "Egg Throw", "name": "ENTITY_EGG_THROW" }, { "sound": "Ender Eye Death", "name": "ENTITY_ENDER_EYE_DEATH" }, { "sound": "Ender Eye Launch", "name": "ENTITY_ENDER_EYE_LAUNCH" }, { "sound": "Enderpearl Throw", "name": "ENTITY_ENDER_PEARL_THROW" }, { "sound": "Experience Bottle Throw", "name": "ENTITY_EXPERIENCE_BOTTLE_THROW" }, { "sound": "Lingering Potion Throw", "name": "ENTITY_LINGERING_POTION_THROW" }, { "sound": "Splash Potion Break", "name": "ENTITY_SPLASH_POTION_BREAK" }, { "sound": "Splash Potion Throw", "name": "ENTITY_SPLASH_POTION_THROW" }, { "sound": "Snowball Throw", "name": "ENTITY_SNOWBALL_THROW" }, { "sound": "Firework Blast", "name": "ENTITY_FIREWORK_ROCKET_BLAST" }, { "sound": "Firework Blast Far", "name": "ENTITY_FIREWORK_ROCKET_BLAST_FAR" }, { "sound": "Firework Large Blast", "name": "ENTITY_FIREWORK_ROCKET_LARGE_BLAST" }, { "sound": "Firework Large Blast Far", "name": "ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR" }, { "sound": "Firework Launch", "name": "ENTITY_FIREWORK_ROCKET_LAUNCH" }, { "sound": "Firework Shoot", "name": "ENTITY_FIREWORK_ROCKET_SHOOT" }, { "sound": "Firework Twinkle", "name": "ENTITY_FIREWORK_ROCKET_TWINKLE" }, { "sound": "Firework Twinkle Far", "name": "ENTITY_FIREWORK_ROCKET_TWINKLE_FAR" }, { "sound": "Glow Item Frame Add Item", "name": "ENTITY_GLOW_ITEM_FRAME_ADD_ITEM" }, { "sound": "Glow Item Frame Break", "name": "ENTITY_GLOW_ITEM_FRAME_BREAK" }, { "sound": "Glow Item Frame Place", "name": "ENTITY_GLOW_ITEM_FRAME_PLACE" }, { "sound": "Glow Item Frame Remove Item", "name": "ENTITY_GLOW_ITEM_FRAME_REMOVE_ITEM" }, { "sound": "Glow Item Frame Rotate Item", "name": "ENTITY_GLOW_ITEM_FRAME_ROTATE_ITEM" }, { "sound": "Item Frame Add Item", "name": "ENTITY_ITEM_FRAME_ADD_ITEM" }, { "sound": "Item Frame Break", "name": "ENTITY_ITEM_FRAME_BREAK" }, { "sound": "Item Frame Place", "name": "ENTITY_ITEM_FRAME_PLACE" }, { "sound": "Item Frame Remove Item", "name": "ENTITY_ITEM_FRAME_REMOVE_ITEM" }, { "sound": "Item Frame Rotate Item", "name": "ENTITY_ITEM_FRAME_ROTATE_ITEM" }, { "sound": "Painting Break", "name": "ENTITY_PAINTING_BREAK" }, { "sound": "Painting Place", "name": "ENTITY_PAINTING_PLACE" }, { "sound": "Boat Paddle Land", "name": "ENTITY_BOAT_PADDLE_LAND" }, { "sound": "Boat Paddle Water", "name": "ENTITY_BOAT_PADDLE_WATER" }, { "sound": "Minecart Inside", "name": "ENTITY_MINECART_INSIDE" }, { "sound": "Minecart Inside Water", "name": "ENTITY_MINECART_INSIDE_UNDERWATER" }, { "sound": "Rolling Minecart", "name": "ENTITY_MINECART_RIDING" }, { "sound": "Armor Stand Break", "name": "ENTITY_ARMOR_STAND_BREAK" }, { "sound": "Armor Stand Fall", "name": "ENTITY_ARMOR_STAND_FALL" }, { "sound": "Armor Stand Hit", "name": "ENTITY_ARMOR_STAND_HIT" }, { "sound": "Armor Stand Place", "name": "ENTITY_ARMOR_STAND_PLACE" }, { "sound": "Burn", "name": "ENTITY_GENERIC_BURN" }, { "sound": "Experience Orb Pickup", "name": "ENTITY_EXPERIENCE_ORB_PICKUP" }, { "sound": "Leash Knot Break", "name": "ENTITY_LEASH_KNOT_BREAK" }, { "sound": "Leash Knot Place", "name": "ENTITY_LEASH_KNOT_PLACE" }, { "sound": "TNT Primed", "name": "ENTITY_TNT_PRIMED" }, { "sound": "Creative Music", "name": "MUSIC_CREATIVE" }, { "sound": "Credits Music", "name": "MUSIC_CREDITS" }, { "sound": "Boss Music", "name": "MUSIC_DRAGON" }, { "sound": "End Music", "name": "MUSIC_END" }, { "sound": "Overworld Music", "name": "MUSIC_GAME" }, { "sound": "Menu Music", "name": "MUSIC_MENU" }, { "sound": "Basalt Deltas Music", "name": "MUSIC_NETHER_BASALT_DELTAS" }, { "sound": "Crimson Forest Music", "name": "MUSIC_NETHER_CRIMSON_FOREST" }, { "sound": "Nether Wastes Music", "name": "MUSIC_NETHER_NETHER_WASTES" }, { "sound": "Soul Sand Valley Music", "name": "MUSIC_NETHER_SOUL_SAND_VALLEY" }, { "sound": "Underwater Music", "name": "MUSIC_UNDER_WATER" }, { "sound": "Music Disc - 11", "name": "MUSIC_DISC_11" }, { "sound": "Music Disc - 13", "name": "MUSIC_DISC_13" }, { "sound": "Music Disc - Blocks", "name": "MUSIC_DISC_BLOCKS" }, { "sound": "Music Disc - Cat", "name": "MUSIC_DISC_CAT" }, { "sound": "Music Disc - Chirp", "name": "MUSIC_DISC_CHIRP" }, { "sound": "Music Disc - Far", "name": "MUSIC_DISC_FAR" }, { "sound": "Music Disc - Mall", "name": "MUSIC_DISC_MALL" }, { "sound": "Music Disc - Mellohi", "name": "MUSIC_DISC_MELLOHI" }, { "sound": "Music Disc - Pigstep", "name": "MUSIC_DISC_PIGSTEP" }, { "sound": "Music Disc - Stal", "name": "MUSIC_DISC_STAL" }, { "sound": "Music Disc - Strad", "name": "MUSIC_DISC_STRAD" }, { "sound": "Music Disc - Ward", "name": "MUSIC_DISC_WARD" }, { "sound": "Music Disc - Wait", "name": "MUSIC_DISC_WAIT" }, { "sound": "Shield Block", "name": "ITEM_SHIELD_BLOCK" }, { "sound": "Shield Break", "name": "ITEM_SHIELD_BREAK" }, { "sound": "Crossbow Hit", "name": "ITEM_CROSSBOW_HIT" }, { "sound": "Crossbow Loading (End)", "name": "ITEM_CROSSBOW_LOADING_END" }, { "sound": "Crossbow Loading (Middle)", "name": "ITEM_CROSSBOW_LOADING_MIDDLE" }, { "sound": "Crossbow Loading (Start)", "name": "ITEM_CROSSBOW_LOADING_START" }, { "sound": "Crossbow Quick Charge (I)", "name": "ITEM_CROSSBOW_QUICK_CHARGE_1" }, { "sound": "Crossbow Quick Charge (II)", "name": "ITEM_CROSSBOW_QUICK_CHARGE_2" }, { "sound": "Crossbow Quick Charge (III)", "name": "ITEM_CROSSBOW_QUICK_CHARGE_3" }, { "sound": "Crossbow Shoot", "name": "ITEM_CROSSBOW_SHOOT" }, { "sound": "Armor Equip", "name": "ITEM_ARMOR_EQUIP_GENERIC" }, { "sound": "Armor Equip (Elytra)", "name": "ITEM_ARMOR_EQUIP_ELYTRA" }, { "sound": "Armor Equip (Leather)", "name": "ITEM_ARMOR_EQUIP_LEATHER" }, { "sound": "Armor Equip (Chain)", "name": "ITEM_ARMOR_EQUIP_CHAIN" }, { "sound": "Armor Equip (Iron)", "name": "ITEM_ARMOR_EQUIP_IRON" }, { "sound": "Armor Equip (Gold)", "name": "ITEM_ARMOR_EQUIP_GOLD" }, { "sound": "Armor Equip (Diamond)", "name": "ITEM_ARMOR_EQUIP_DIAMOND" }, { "sound": "Armor Equip (Netherite)", "name": "ITEM_ARMOR_EQUIP_NETHERITE" }, { "sound": "Armor Equip (Turtle)", "name": "ITEM_ARMOR_EQUIP_TURTLE" }, { "sound": "Elytra Flying", "name": "ITEM_ELYTRA_FLYING" }, { "sound": "Thorns Hit", "name": "ENCHANT_THORNS_HIT" }, { "sound": "Trident Throw", "name": "ITEM_TRIDENT_THROW" }, { "sound": "Trident Hit", "name": "ITEM_TRIDENT_HIT" }, { "sound": "Trident Hit Ground", "name": "ITEM_TRIDENT_HIT_GROUND" }, { "sound": "Trident Return", "name": "ITEM_TRIDENT_RETURN" }, { "sound": "Trident Riptide (I)", "name": "ITEM_TRIDENT_RIPTIDE_1" }, { "sound": "Trident Riptide (II)", "name": "ITEM_TRIDENT_RIPTIDE_2" }, { "sound": "Trident Riptide (III)", "name": "ITEM_TRIDENT_RIPTIDE_3" }, { "sound": "Trident Thunder", "name": "ITEM_TRIDENT_THUNDER" }, { "sound": "Fire Charge Use", "name": "ITEM_FIRECHARGE_USE" }, { "sound": "Flint and Steel Use", "name": "ITEM_FLINTANDSTEEL_USE" }, { "sound": "Axe Scrape", "name": "ITEM_AXE_SCRAPE" }, { "sound": "Axe Strip", "name": "ITEM_AXE_STRIP" }, { "sound": "Wax Off", "name": "ITEM_AXE_WAX_OFF" }, { "sound": "Hoe Till", "name": "ITEM_HOE_TILL" }, { "sound": "Shovel Flatten", "name": "ITEM_SHOVEL_FLATTEN" }, { "sound": "Fishing Bobber Retrieve", "name": "ENTITY_FISHING_BOBBER_RETRIEVE" }, { "sound": "Fishing Bobber Splash", "name": "ENTITY_FISHING_BOBBER_SPLASH" }, { "sound": "Fishing Bobber Throw", "name": "ENTITY_FISHING_BOBBER_THROW" }, { "sound": "Bottle Empty", "name": "ITEM_BOTTLE_EMPTY" }, { "sound": "Bottle Fill", "name": "ITEM_BOTTLE_FILL" }, { "sound": "Dragon Breath Fill", "name": "ITEM_BOTTLE_FILL_DRAGONBREATH" }, { "sound": "Honey Bottle Drink", "name": "ITEM_HONEY_BOTTLE_DRINK" }, { "sound": "Water Bucket Empty", "name": "ITEM_BUCKET_EMPTY" }, { "sound": "Water Bucket Fill", "name": "ITEM_BUCKET_FILL" }, { "sound": "Axolotl Bucket Empty", "name": "ITEM_BUCKET_EMPTY_AXOLOTL" }, { "sound": "Axolotl Bucket Fill", "name": "ITEM_BUCKET_FILL_AXOLOTL" }, { "sound": "Fish Bucket Empty", "name": "ITEM_BUCKET_EMPTY_FISH" }, { "sound": "Fish Bucket Fill", "name": "ITEM_BUCKET_FILL_FISH" }, { "sound": "Lava Bucket Empty", "name": "ITEM_BUCKET_EMPTY_LAVA" }, { "sound": "Lava Bucket Fill", "name": "ITEM_BUCKET_FILL_LAVA" }, { "sound": "Powder Bucket Empty", "name": "ITEM_BUCKET_EMPTY_POWDER_SNOW" }, { "sound": "Powder Bucket Fill", "name": "ITEM_BUCKET_FILL_POWDER_SNOW" }, { "sound": "Item Break", "name": "ENTITY_ITEM_BREAK" }, { "sound": "Item Pickup", "name": "ENTITY_ITEM_PICKUP" }, { "sound": "Book Page Turn", "name": "ITEM_BOOK_PAGE_TURN" }, { "sound": "Book Put in Lectern", "name": "ITEM_BOOK_PUT" }, { "sound": "Bone Meal Use", "name": "ITEM_BONE_MEAL_USE" }, { "sound": "Chorus Fruit Teleport", "name": "ITEM_CHORUS_FRUIT_TELEPORT" }, { "sound": "Dye Use", "name": "ITEM_DYE_USE" }, { "sound": "Ink Sac Use", "name": "ITEM_INK_SAC_USE" }, { "sound": "Glow Ink Sac Use", "name": "ITEM_GLOW_INK_SAC_USE" }, { "sound": "Spyglass Use", "name": "ITEM_SPYGLASS_USE" }, { "sound": "Spyglass Stop Using", "name": "ITEM_SPYGLASS_STOP_USING" }, { "sound": "Totem Use", "name": "ITEM_TOTEM_USE" }, { "sound": "Wax Copper", "name": "ITEM_HONEYCOMB_WAX_ON" }, { "sound": "Amethyst Block Break", "name": "BLOCK_AMETHYST_BLOCK_BREAK" }, { "sound": "Amethyst Block Chime", "name": "BLOCK_AMETHYST_BLOCK_CHIME" }, { "sound": "Amethyst Block Fall", "name": "BLOCK_AMETHYST_BLOCK_FALL" }, { "sound": "Amethyst Block Hit", "name": "BLOCK_AMETHYST_BLOCK_HIT" }, { "sound": "Amethyst Block Place", "name": "BLOCK_AMETHYST_BLOCK_PLACE" }, { "sound": "Amethyst Block Step", "name": "BLOCK_AMETHYST_BLOCK_STEP" }, { "sound": "Amethyst Cluster Break", "name": "BLOCK_AMETHYST_CLUSTER_BREAK" }, { "sound": "Amethyst Cluster Fall", "name": "BLOCK_AMETHYST_CLUSTER_FALL" }, { "sound": "Amethyst Cluster Break", "name": "BLOCK_AMETHYST_CLUSTER_HIT" }, { "sound": "Amethyst Cluster Place", "name": "BLOCK_AMETHYST_CLUSTER_PLACE" }, { "sound": "Amethyst Cluster Step", "name": "BLOCK_AMETHYST_CLUSTER_STEP" }, { "sound": "Large Amethyst Bud Break", "name": "BLOCK_LARGE_AMETHYST_BUD_BREAK" }, { "sound": "Large Amethyst Bud Place", "name": "BLOCK_LARGE_AMETHYST_BUD_PLACE" }, { "sound": "Large Amethyst Bud Break", "name": "BLOCK_MEDIUM_AMETHYST_BUD_BREAK" }, { "sound": "Large Amethyst Bud Place", "name": "BLOCK_MEDIUM_AMETHYST_BUD_PLACE" }, { "sound": "Small Amethyst Bud Break", "name": "BLOCK_SMALL_AMETHYST_BUD_BREAK" }, { "sound": "Small Amethyst Bud Place", "name": "BLOCK_SMALL_AMETHYST_BUD_PLACE" }, { "sound": "Azalea Place", "name": "BLOCK_AZALEA_PLACE" }, { "sound": "Azalea Step", "name": "BLOCK_AZALEA_STEP" }, { "sound": "Azalea Break", "name": "BLOCK_AZALEA_BREAK" }, { "sound": "Azalea Fall", "name": "BLOCK_AZALEA_FALL" }, { "sound": "Azalea Hit", "name": "BLOCK_AZALEA_HIT" }, { "sound": "Azalea Leaves Break", "name": "BLOCK_AZALEA_LEAVES_BREAK" }, { "sound": "Azalea Leaves Fall", "name": "BLOCK_AZALEA_LEAVES_FALL" }, { "sound": "Azalea Leaves Hit", "name": "BLOCK_AZALEA_LEAVES_HIT" }, { "sound": "Azalea Leaves Place", "name": "BLOCK_AZALEA_LEAVES_PLACE" }, { "sound": "Azalea Leaves Step", "name": "BLOCK_AZALEA_LEAVES_STEP" }, { "sound": "Bamboo Break", "name": "BLOCK_BAMBOO_BREAK" }, { "sound": "Bamboo Fall", "name": "BLOCK_BAMBOO_FALL" }, { "sound": "Bamboo Hit", "name": "BLOCK_BAMBOO_HIT" }, { "sound": "Bamboo Place", "name": "BLOCK_BAMBOO_PLACE" }, { "sound": "Bamboo Sapling Break", "name": "BLOCK_BAMBOO_SAPLING_BREAK" }, { "sound": "Bamboo Sapling Hit", "name": "BLOCK_BAMBOO_SAPLING_HIT" }, { "sound": "Bamboo Sapling Place", "name": "BLOCK_BAMBOO_SAPLING_PLACE" }, { "sound": "Bamboo Step", "name": "BLOCK_BAMBOO_STEP" }, { "sound": "Beehive Drip", "name": "BLOCK_BEEHIVE_DRIP" }, { "sound": "Beehive Enter", "name": "BLOCK_BEEHIVE_ENTER" }, { "sound": "Beehive Exit", "name": "BLOCK_BEEHIVE_EXIT" }, { "sound": "Beehive Shear", "name": "BLOCK_BEEHIVE_SHEAR" }, { "sound": "Beehive Work", "name": "BLOCK_BEEHIVE_WORK" }, { "sound": "Big Dripleaf Break", "name": "BLOCK_BIG_DRIPLEAF_BREAK" }, { "sound": "Big Dripleaf Fall", "name": "BLOCK_BIG_DRIPLEAF_FALL" }, { "sound": "Big Dripleaf Hit", "name": "BLOCK_BIG_DRIPLEAF_HIT" }, { "sound": "Big Dripleaf Break", "name": "BLOCK_BIG_DRIPLEAF_PLACE" }, { "sound": "Big Dripleaf Step", "name": "BLOCK_BIG_DRIPLEAF_STEP" }, { "sound": "Big Dripleaf Tilt Down", "name": "BLOCK_BIG_DRIPLEAF_TILT_DOWN" }, { "sound": "Big Dripleaf Tilt Up", "name": "BLOCK_BIG_DRIPLEAF_TILT_UP" }, { "sound": "Bone Block Break", "name": "BLOCK_BONE_BLOCK_BREAK" }, { "sound": "Bone Block Fall", "name": "BLOCK_BONE_BLOCK_FALL" }, { "sound": "Bone Block Hit", "name": "BLOCK_BONE_BLOCK_HIT" }, { "sound": "Bone Block Place", "name": "BLOCK_BONE_BLOCK_PLACE" }, { "sound": "Bone Block Step", "name": "BLOCK_BONE_BLOCK_STEP" }, { "sound": "Bubble Column Bubble Pop", "name": "BLOCK_BUBBLE_COLUMN_BUBBLE_POP" }, { "sound": "Bubble Column Ambient (Up)", "name": "BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT" }, { "sound": "Bubble Column Inside (Up)", "name": "BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE" }, { "sound": "Bubble Column Ambient (Down)", "name": "BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT" }, { "sound": "Bubble Column Inside (Down)", "name": "BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE" }, { "sound": "Calcite Break", "name": "BLOCK_CALCITE_BREAK" }, { "sound": "Calcite Fall", "name": "BLOCK_CALCITE_FALL" }, { "sound": "Calcite Hit", "name": "BLOCK_CALCITE_HIT" }, { "sound": "Calcite Place", "name": "BLOCK_CALCITE_PLACE" }, { "sound": "Calcite Step", "name": "BLOCK_CALCITE_STEP" }, { "sound": "Cave Vines Break", "name": "BLOCK_CAVE_VINES_BREAK" }, { "sound": "Cave Vines Fall", "name": "BLOCK_CAVE_VINES_FALL" }, { "sound": "Cave Vines Hit", "name": "BLOCK_CAVE_VINES_HIT" }, { "sound": "Cave Vines Pick", "name": "BLOCK_CAVE_VINES_PICK_BERRIES" }, { "sound": "Cave Vines Place", "name": "BLOCK_CAVE_VINES_PLACE" }, { "sound": "Cave Vines Step", "name": "BLOCK_CAVE_VINES_STEP" }, { "sound": "Coral Block Break", "name": "BLOCK_CORAL_BLOCK_BREAK" }, { "sound": "Coral Block Fall", "name": "BLOCK_CORAL_BLOCK_FALL" }, { "sound": "Coral Block Hit", "name": "BLOCK_CORAL_BLOCK_HIT" }, { "sound": "Coral Block Place", "name": "BLOCK_CORAL_BLOCK_PLACE" }, { "sound": "Coral Block Step", "name": "BLOCK_CORAL_BLOCK_STEP" }, { "sound": "Deepslate Break", "name": "BLOCK_DEEPSLATE_BREAK" }, { "sound": "Deepslate Fall", "name": "BLOCK_DEEPSLATE_FALL" }, { "sound": "Deepslate Hit", "name": "BLOCK_DEEPSLATE_HIT" }, { "sound": "Deepslate Place", "name": "BLOCK_DEEPSLATE_PLACE" }, { "sound": "Deepslate Step", "name": "BLOCK_DEEPSLATE_STEP" }, { "sound": "Deepslate Bricks Break", "name": "BLOCK_DEEPSLATE_BRICKS_BREAK" }, { "sound": "Deepslate Bricks Fall", "name": "BLOCK_DEEPSLATE_BRICKS_FALL" }, { "sound": "Deepslate Bricks Hit", "name": "BLOCK_DEEPSLATE_BRICKS_HIT" }, { "sound": "Deepslate Bricks Place", "name": "BLOCK_DEEPSLATE_BRICKS_PLACE" }, { "sound": "Deepslate Bricks Step", "name": "BLOCK_DEEPSLATE_BRICKS_STEP" }, { "sound": "Deepslate Tiles Break", "name": "BLOCK_DEEPSLATE_TILES_BREAK" }, { "sound": "Deepslate Tiles Fall", "name": "BLOCK_DEEPSLATE_TILES_FALL" }, { "sound": "Deepslate Tiles Hit", "name": "BLOCK_DEEPSLATE_TILES_HIT" }, { "sound": "Deepslate Tiles Place", "name": "BLOCK_DEEPSLATE_TILES_PLACE" }, { "sound": "Deepslate Tiles Step", "name": "BLOCK_DEEPSLATE_TILES_STEP" }, { "sound": "Dripstone Block Break", "name": "BLOCK_DRIPSTONE_BLOCK_BREAK" }, { "sound": "Dripstone Block Fall", "name": "BLOCK_DRIPSTONE_BLOCK_FALL" }, { "sound": "Dripstone Block Hit", "name": "BLOCK_DRIPSTONE_BLOCK_HIT" }, { "sound": "Dripstone Block Place", "name": "BLOCK_DRIPSTONE_BLOCK_PLACE" }, { "sound": "Dripstone Block Step", "name": "BLOCK_DRIPSTONE_BLOCK_STEP" }, { "sound": "Crop Plant", "name": "ITEM_CROP_PLANT" }, { "sound": "Crop Break", "name": "BLOCK_CROP_BREAK" }, { "sound": "Fire Ambient", "name": "BLOCK_FIRE_AMBIENT" }, { "sound": "Fire Extinguish", "name": "BLOCK_FIRE_EXTINGUISH" }, { "sound": "Flowering Azalea Break", "name": "BLOCK_FLOWERING_AZALEA_BREAK" }, { "sound": "Flowering Azalea Fall", "name": "BLOCK_FLOWERING_AZALEA_FALL" }, { "sound": "Flowering Azalea Hit", "name": "BLOCK_FLOWERING_AZALEA_HIT" }, { "sound": "Flowering Azalea Place", "name": "BLOCK_FLOWERING_AZALEA_PLACE" }, { "sound": "Flowering Azalea Step", "name": "BLOCK_FLOWERING_AZALEA_STEP" }, { "sound": "Grass Break", "name": "BLOCK_GRASS_BREAK" }, { "sound": "Grass Fall", "name": "BLOCK_GRASS_FALL" }, { "sound": "Grass Hit", "name": "BLOCK_GRASS_HIT" }, { "sound": "Grass Place", "name": "BLOCK_GRASS_PLACE" }, { "sound": "Grass Step", "name": "BLOCK_GRASS_STEP" }, { "sound": "Gravel Break", "name": "BLOCK_GRAVEL_BREAK" }, { "sound": "Gravel Fall", "name": "BLOCK_GRAVEL_FALL" }, { "sound": "Gravel Hit", "name": "BLOCK_GRAVEL_HIT" }, { "sound": "Gravel Place", "name": "BLOCK_GRAVEL_PLACE" }, { "sound": "Gravel Step", "name": "BLOCK_GRAVEL_STEP" }, { "sound": "Hanging Roots Break", "name": "BLOCK_HANGING_ROOTS_BREAK" }, { "sound": "Hanging Roots Fall", "name": "BLOCK_HANGING_ROOTS_FALL" }, { "sound": "Hanging Roots Hit", "name": "BLOCK_HANGING_ROOTS_HIT" }, { "sound": "Hanging Roots Place", "name": "BLOCK_HANGING_ROOTS_PLACE" }, { "sound": "Hanging Roots Step", "name": "BLOCK_HANGING_ROOTS_STEP" }, { "sound": "Lava Ambient", "name": "BLOCK_LAVA_AMBIENT" }, { "sound": "Lava Extinguish", "name": "BLOCK_LAVA_EXTINGUISH" }, { "sound": "Lava Pop", "name": "BLOCK_LAVA_POP" }, { "sound": "Lily Pad Place", "name": "BLOCK_LILY_PAD_PLACE" }, { "sound": "Moss Block Break", "name": "BLOCK_MOSS_BREAK" }, { "sound": "Moss Block Fall", "name": "BLOCK_MOSS_FALL" }, { "sound": "Moss Block Hit", "name": "BLOCK_MOSS_HIT" }, { "sound": "Moss Block Place", "name": "BLOCK_MOSS_PLACE" }, { "sound": "Moss Block Step", "name": "BLOCK_MOSS_STEP" }, { "sound": "Moss Carpet Break", "name": "BLOCK_MOSS_CARPET_BREAK" }, { "sound": "Moss Carpet Fall", "name": "BLOCK_MOSS_CARPET_FALL" }, { "sound": "Moss Carpet Hit", "name": "BLOCK_MOSS_CARPET_HIT" }, { "sound": "Moss Carpet Place", "name": "BLOCK_MOSS_CARPET_PLACE" }, { "sound": "Moss Carpet Step", "name": "BLOCK_MOSS_CARPET_STEP" }, { "sound": "Pumpkin Carve", "name": "BLOCK_PUMPKIN_CARVE" }, { "sound": "Pointed Dripstone Break", "name": "BLOCK_POINTED_DRIPSTONE_BREAK" }, { "sound": "Pointed Dripstone Drip Lava", "name": "BLOCK_POINTED_DRIPSTONE_DRIP_LAVA" }, { "sound": "Pointed Dripstone Drip Lava Into Cauldron", "name": "BLOCK_POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON" }, { "sound": "Pointed Dripstone Drip Water", "name": "BLOCK_POINTED_DRIPSTONE_DRIP_WATER" }, { "sound": "Pointed Dripstone Drip Water Into Cauldron", "name": "BLOCK_POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON" }, { "sound": "Pointed Dripstone Fall", "name": "BLOCK_POINTED_DRIPSTONE_FALL" }, { "sound": "Pointed Dripstone Hit", "name": "BLOCK_POINTED_DRIPSTONE_HIT" }, { "sound": "Pointed Dripstone Land", "name": "BLOCK_POINTED_DRIPSTONE_LAND" }, { "sound": "Pointed Dripstone Place", "name": "BLOCK_POINTED_DRIPSTONE_PLACE" }, { "sound": "Pointed Dripstone Step", "name": "BLOCK_POINTED_DRIPSTONE_STEP" }, { "sound": "Powder Snow Break", "name": "BLOCK_POWDER_SNOW_BREAK" }, { "sound": "Powder Snow Fall", "name": "BLOCK_POWDER_SNOW_FALL" }, { "sound": "Powder Snow Hit", "name": "BLOCK_POWDER_SNOW_HIT" }, { "sound": "Powder Snow Place", "name": "BLOCK_POWDER_SNOW_PLACE" }, { "sound": "Powder Snow Step", "name": "BLOCK_POWDER_SNOW_STEP" }, { "sound": "Rooted Dirt Break", "name": "BLOCK_ROOTED_DIRT_BREAK" }, { "sound": "Rooted Dirt Fall", "name": "BLOCK_ROOTED_DIRT_FALL" }, { "sound": "Rooted Dirt Hit", "name": "BLOCK_ROOTED_DIRT_HIT" }, { "sound": "Rooted Dirt Break", "name": "BLOCK_ROOTED_DIRT_PLACE" }, { "sound": "Rooted Dirt Step", "name": "BLOCK_ROOTED_DIRT_STEP" }, { "sound": "Sand Break", "name": "BLOCK_SAND_BREAK" }, { "sound": "Sand Fall", "name": "BLOCK_SAND_FALL" }, { "sound": "Sand Hit", "name": "BLOCK_SAND_HIT" }, { "sound": "Sand Place", "name": "BLOCK_SAND_PLACE" }, { "sound": "Sand Step", "name": "BLOCK_SAND_STEP" }, { "sound": "Snow Break", "name": "BLOCK_SNOW_BREAK" }, { "sound": "Snow Fall", "name": "BLOCK_SNOW_FALL" }, { "sound": "Snow Hit", "name": "BLOCK_SNOW_HIT" }, { "sound": "Snow Place", "name": "BLOCK_SNOW_PLACE" }, { "sound": "Snow Step", "name": "BLOCK_SNOW_STEP" }, { "sound": "Small Dripleaf Break", "name": "BLOCK_SMALL_DRIPLEAF_BREAK" }, { "sound": "Small Dripleaf Fall", "name": "BLOCK_SMALL_DRIPLEAF_FALL" }, { "sound": "Small Dripleaf Hit", "name": "BLOCK_SMALL_DRIPLEAF_HIT" }, { "sound": "Small Dripleaf Place", "name": "BLOCK_SMALL_DRIPLEAF_PLACE" }, { "sound": "Small Dripleaf Step", "name": "BLOCK_SMALL_DRIPLEAF_STEP" }, { "sound": "Spore Blossom Break", "name": "BLOCK_SPORE_BLOSSOM_BREAK" }, { "sound": "Spore Blossom Fall", "name": "BLOCK_SPORE_BLOSSOM_FALL" }, { "sound": "Spore Blossom Hit", "name": "BLOCK_SPORE_BLOSSOM_HIT" }, { "sound": "Spore Blossom Place", "name": "BLOCK_SPORE_BLOSSOM_PLACE" }, { "sound": "Spore Blossom Step", "name": "BLOCK_SPORE_BLOSSOM_STEP" }, { "sound": "Stone Break", "name": "BLOCK_STONE_BREAK" }, { "sound": "Stone Fall", "name": "BLOCK_STONE_FALL" }, { "sound": "Stone Hit", "name": "BLOCK_STONE_HIT" }, { "sound": "Stone Place", "name": "BLOCK_STONE_PLACE" }, { "sound": "Stone Step", "name": "BLOCK_STONE_STEP" }, { "sound": "Sweet Berry Bush Break", "name": "BLOCK_SWEET_BERRY_BUSH_BREAK" }, { "sound": "Sweet Berry Bush Pick", "name": "BLOCK_SWEET_BERRY_BUSH_PICK_BERRIES" }, { "sound": "Sweet Berry Bush Place", "name": "BLOCK_SWEET_BERRY_BUSH_PLACE" }, { "sound": "Tuff Break", "name": "BLOCK_TUFF_BREAK" }, { "sound": "Tuff Fall", "name": "BLOCK_TUFF_FALL" }, { "sound": "Tuff Hit", "name": "BLOCK_TUFF_HIT" }, { "sound": "Tuff Place", "name": "BLOCK_TUFF_PLACE" }, { "sound": "Tuff Step", "name": "BLOCK_TUFF_STEP" }, { "sound": "Seagrass Break", "name": "BLOCK_WET_GRASS_BREAK" }, { "sound": "Seagrass Fall", "name": "BLOCK_WET_GRASS_FALL" }, { "sound": "Seagrass Hit", "name": "BLOCK_WET_GRASS_HIT" }, { "sound": "Seagrass Place", "name": "BLOCK_WET_GRASS_PLACE" }, { "sound": "Seagrass Step", "name": "BLOCK_WET_GRASS_STEP" }, { "sound": "Vine Break", "name": "BLOCK_VINE_BREAK" }, { "sound": "Vine Fall", "name": "BLOCK_VINE_FALL" }, { "sound": "Vine Hit", "name": "BLOCK_VINE_HIT" }, { "sound": "Vine Place", "name": "BLOCK_VINE_PLACE" }, { "sound": "Vine Climb", "name": "BLOCK_VINE_STEP" }, { "sound": "Water Ambient", "name": "BLOCK_WATER_AMBIENT" }, { "sound": "Water Enter", "name": "AMBIENT_UNDERWATER_ENTER" }, { "sound": "Water Exit", "name": "AMBIENT_UNDERWATER_EXIT" }, { "sound": "Wood Break", "name": "BLOCK_WOOD_BREAK" }, { "sound": "Wood Fall", "name": "BLOCK_WOOD_FALL" }, { "sound": "Wood Hit", "name": "BLOCK_WOOD_HIT" }, { "sound": "Wood Place", "name": "BLOCK_WOOD_PLACE" }, { "sound": "Wood Step", "name": "BLOCK_WOOD_STEP" }, { "sound": "Ancient Debris Break", "name": "BLOCK_ANCIENT_DEBRIS_BREAK" }, { "sound": "Ancient Debris Fall", "name": "BLOCK_ANCIENT_DEBRIS_FALL" }, { "sound": "Ancient Debris Hit", "name": "BLOCK_ANCIENT_DEBRIS_HIT" }, { "sound": "Ancient Debris Place", "name": "BLOCK_ANCIENT_DEBRIS_PLACE" }, { "sound": "Ancient Debris Step", "name": "BLOCK_ANCIENT_DEBRIS_STEP" }, { "sound": "Basalt Break", "name": "BLOCK_BASALT_BREAK" }, { "sound": "Basalt Fall", "name": "BLOCK_BASALT_FALL" }, { "sound": "Basalt Hit", "name": "BLOCK_BASALT_HIT" }, { "sound": "Basalt Place", "name": "BLOCK_BASALT_PLACE" }, { "sound": "Basalt Step", "name": "BLOCK_BASALT_STEP" }, { "sound": "Gilded Blackstone Break", "name": "BLOCK_GILDED_BLACKSTONE_BREAK" }, { "sound": "Gilded Blackstone Fall", "name": "BLOCK_GILDED_BLACKSTONE_FALL" }, { "sound": "Gilded Blackstone Hit", "name": "BLOCK_GILDED_BLACKSTONE_HIT" }, { "sound": "Gilded Blackstone Place", "name": "BLOCK_GILDED_BLACKSTONE_PLACE" }, { "sound": "Gilded Blackstone Step", "name": "BLOCK_GILDED_BLACKSTONE_STEP" }, { "sound": "Netherrack Break", "name": "BLOCK_NETHERRACK_BREAK" }, { "sound": "Netherrack Fall", "name": "BLOCK_NETHERRACK_FALL" }, { "sound": "Netherrack Hit", "name": "BLOCK_NETHERRACK_HIT" }, { "sound": "Netherrack Place", "name": "BLOCK_NETHERRACK_PLACE" }, { "sound": "Netherrack Step", "name": "BLOCK_NETHERRACK_STEP" }, { "sound": "Nether Gold Ore Break", "name": "BLOCK_NETHER_GOLD_ORE_BREAK" }, { "sound": "Nether Gold Ore Fall", "name": "BLOCK_NETHER_GOLD_ORE_FALL" }, { "sound": "Nether Gold Ore Hit", "name": "BLOCK_NETHER_GOLD_ORE_HIT" }, { "sound": "Nether Gold Ore Place", "name": "BLOCK_NETHER_GOLD_ORE_PLACE" }, { "sound": "Nether Gold Ore Step", "name": "BLOCK_NETHER_GOLD_ORE_STEP" }, { "sound": "Nether Fungus Break", "name": "BLOCK_FUNGUS_BREAK" }, { "sound": "Nether Fungus Fall", "name": "BLOCK_FUNGUS_FALL" }, { "sound": "Nether Fungus Hit", "name": "BLOCK_FUNGUS_HIT" }, { "sound": "Nether Fungus Place", "name": "BLOCK_FUNGUS_PLACE" }, { "sound": "Nether Fungus Step", "name": "BLOCK_FUNGUS_STEP" }, { "sound": "Nether Quartz Ore Break", "name": "BLOCK_NETHER_ORE_BREAK" }, { "sound": "Nether Quartz Ore Fall", "name": "BLOCK_NETHER_ORE_FALL" }, { "sound": "Nether Quartz Ore Hit", "name": "BLOCK_NETHER_ORE_HIT" }, { "sound": "Nether Quartz Ore Place", "name": "BLOCK_NETHER_ORE_PLACE" }, { "sound": "Nether Quartz Ore Step", "name": "BLOCK_NETHER_ORE_STEP" }, { "sound": "Nether Roots Break", "name": "BLOCK_ROOTS_BREAK" }, { "sound": "Nether Roots Fall", "name": "BLOCK_ROOTS_FALL" }, { "sound": "Nether Roots Hit", "name": "BLOCK_ROOTS_HIT" }, { "sound": "Nether Roots Place", "name": "BLOCK_ROOTS_PLACE" }, { "sound": "Nether Roots Step", "name": "BLOCK_ROOTS_STEP" }, { "sound": "Nether Sprouts Break", "name": "BLOCK_NETHER_SPROUTS_BREAK" }, { "sound": "Nether Sprouts Fall", "name": "BLOCK_NETHER_SPROUTS_FALL" }, { "sound": "Nether Sprouts Hit", "name": "BLOCK_NETHER_SPROUTS_HIT" }, { "sound": "Nether Sprouts Place", "name": "BLOCK_NETHER_SPROUTS_PLACE" }, { "sound": "Nether Sprouts Step", "name": "BLOCK_NETHER_SPROUTS_STEP" }, { "sound": "Nether Stem Break", "name": "BLOCK_STEM_BREAK" }, { "sound": "Nether Stem Fall", "name": "BLOCK_STEM_FALL" }, { "sound": "Nether Stem Hit", "name": "BLOCK_STEM_HIT" }, { "sound": "Nether Stem Place", "name": "BLOCK_STEM_PLACE" }, { "sound": "Nether Stem Step", "name": "BLOCK_STEM_STEP" }, { "sound": "Nether Vine Break", "name": "BLOCK_WEEPING_VINES_BREAK" }, { "sound": "Nether Vine Fall", "name": "BLOCK_WEEPING_VINES_FALL" }, { "sound": "Nether Vine Hit", "name": "BLOCK_WEEPING_VINES_HIT" }, { "sound": "Nether Vine Place", "name": "BLOCK_WEEPING_VINES_PLACE" }, { "sound": "Nether Vine Step", "name": "BLOCK_WEEPING_VINES_STEP" }, { "sound": "Nether Wart Break", "name": "BLOCK_NETHER_WART_BREAK" }, { "sound": "Nether Wart Plant", "name": "ITEM_NETHER_WART_PLANT" }, { "sound": "Nether Wart Block Break", "name": "BLOCK_WART_BLOCK_BREAK" }, { "sound": "Nether Wart Block Fall", "name": "BLOCK_WART_BLOCK_FALL" }, { "sound": "Nether Wart Block Hit", "name": "BLOCK_WART_BLOCK_HIT" }, { "sound": "Nether Wart Block Place", "name": "BLOCK_WART_BLOCK_PLACE" }, { "sound": "Nether Wart Block Step", "name": "BLOCK_WART_BLOCK_STEP" }, { "sound": "Nylium Break", "name": "BLOCK_NYLIUM_BREAK" }, { "sound": "Nylium Fall", "name": "BLOCK_NYLIUM_FALL" }, { "sound": "Nylium Hit", "name": "BLOCK_NYLIUM_HIT" }, { "sound": "Nylium Place", "name": "BLOCK_NYLIUM_PLACE" }, { "sound": "Nylium Step", "name": "BLOCK_NYLIUM_STEP" }, { "sound": "Shroomlight Break", "name": "BLOCK_SHROOMLIGHT_BREAK" }, { "sound": "Shroomlight Fall", "name": "BLOCK_SHROOMLIGHT_FALL" }, { "sound": "Shroomlight Hit", "name": "BLOCK_SHROOMLIGHT_HIT" }, { "sound": "Shroomlight Place", "name": "BLOCK_SHROOMLIGHT_PLACE" }, { "sound": "Shroomlight Step", "name": "BLOCK_SHROOMLIGHT_STEP" }, { "sound": "Soul Sand Break", "name": "BLOCK_SOUL_SAND_BREAK" }, { "sound": "Soul Sand Fall", "name": "BLOCK_SOUL_SAND_FALL" }, { "sound": "Soul Sand Hit", "name": "BLOCK_SOUL_SAND_HIT" }, { "sound": "Soul Sand Place", "name": "BLOCK_SOUL_SAND_PLACE" }, { "sound": "Soul Sand Step", "name": "BLOCK_SOUL_SAND_STEP" }, { "sound": "Soul Soil Break", "name": "BLOCK_SOUL_SOIL_BREAK" }, { "sound": "Soul Soil Fall", "name": "BLOCK_SOUL_SOIL_FALL" }, { "sound": "Soul Soil Hit", "name": "BLOCK_SOUL_SOIL_HIT" }, { "sound": "Soul Soil Place", "name": "BLOCK_SOUL_SOIL_PLACE" }, { "sound": "Soul Soil Step", "name": "BLOCK_SOUL_SOIL_STEP" }, { "sound": "Chorus Flower Death", "name": "BLOCK_CHORUS_FLOWER_DEATH" }, { "sound": "Chorus Flower Grow", "name": "BLOCK_CHORUS_FLOWER_GROW" }, { "sound": "Add Cake Candle", "name": "BLOCK_CAKE_ADD_CANDLE" }, { "sound": "Candle Ambient", "name": "BLOCK_CANDLE_AMBIENT" }, { "sound": "Candle Break", "name": "BLOCK_CANDLE_BREAK" }, { "sound": "Candle Extinguish", "name": "BLOCK_CANDLE_EXTINGUISH" }, { "sound": "Candle Fall", "name": "BLOCK_CANDLE_FALL" }, { "sound": "Candle Hit", "name": "BLOCK_CANDLE_HIT" }, { "sound": "Candle Place", "name": "BLOCK_CANDLE_PLACE" }, { "sound": "Candle Step", "name": "BLOCK_CANDLE_STEP" }, { "sound": "Chain Break", "name": "BLOCK_CHAIN_BREAK" }, { "sound": "Chain Fall", "name": "BLOCK_CHAIN_FALL" }, { "sound": "Chain Hit", "name": "BLOCK_CHAIN_HIT" }, { "sound": "Chain Place", "name": "BLOCK_CHAIN_PLACE" }, { "sound": "Chain Step", "name": "BLOCK_CHAIN_STEP" }, { "sound": "Copper Block Break", "name": "BLOCK_COPPER_BREAK" }, { "sound": "Copper Block Fall", "name": "BLOCK_COPPER_FALL" }, { "sound": "Copper Block Hit", "name": "BLOCK_COPPER_HIT" }, { "sound": "Copper Block Place", "name": "BLOCK_COPPER_PLACE" }, { "sound": "Copper Block Step", "name": "BLOCK_COPPER_STEP" }, { "sound": "Glass Break", "name": "BLOCK_GLASS_BREAK" }, { "sound": "Glass Fall", "name": "BLOCK_GLASS_FALL" }, { "sound": "Glass Hit", "name": "BLOCK_GLASS_HIT" }, { "sound": "Glass Place", "name": "BLOCK_GLASS_PLACE" }, { "sound": "Glass Step", "name": "BLOCK_GLASS_STEP" }, { "sound": "Honey Block Break", "name": "BLOCK_HONEY_BLOCK_BREAK" }, { "sound": "Honey Block Fall", "name": "BLOCK_HONEY_BLOCK_FALL" }, { "sound": "Honey Block Hit", "name": "BLOCK_HONEY_BLOCK_HIT" }, { "sound": "Honey Block Place", "name": "BLOCK_HONEY_BLOCK_PLACE" }, { "sound": "Honey Block Slide", "name": "BLOCK_HONEY_BLOCK_SLIDE" }, { "sound": "Honey Block Step", "name": "BLOCK_HONEY_BLOCK_STEP" }, { "sound": "Ladder Break", "name": "BLOCK_LADDER_BREAK" }, { "sound": "Ladder Fall", "name": "BLOCK_LADDER_FALL" }, { "sound": "Ladder Hit", "name": "BLOCK_LADDER_HIT" }, { "sound": "Ladder Place", "name": "BLOCK_LADDER_PLACE" }, { "sound": "Ladder Step", "name": "BLOCK_LADDER_STEP" }, { "sound": "Lantern Break", "name": "BLOCK_LANTERN_BREAK" }, { "sound": "Lantern Fall", "name": "BLOCK_LANTERN_FALL" }, { "sound": "Lantern Hit", "name": "BLOCK_LANTERN_HIT" }, { "sound": "Lantern Place", "name": "BLOCK_LANTERN_PLACE" }, { "sound": "Lantern Step", "name": "BLOCK_LANTERN_STEP" }, { "sound": "Metal Break", "name": "BLOCK_METAL_BREAK" }, { "sound": "Metal Fall", "name": "BLOCK_METAL_FALL" }, { "sound": "Metal Hit", "name": "BLOCK_METAL_HIT" }, { "sound": "Metal Place", "name": "BLOCK_METAL_PLACE" }, { "sound": "Metal Step", "name": "BLOCK_METAL_STEP" }, { "sound": "Nether Bricks Break", "name": "BLOCK_NETHER_BRICKS_BREAK" }, { "sound": "Nether Bricks Fall", "name": "BLOCK_NETHER_BRICKS_FALL" }, { "sound": "Nether Bricks Hit", "name": "BLOCK_NETHER_BRICKS_HIT" }, { "sound": "Nether Bricks Place", "name": "BLOCK_NETHER_BRICKS_PLACE" }, { "sound": "Nether Bricks Step", "name": "BLOCK_NETHER_BRICKS_STEP" }, { "sound": "Netherite Block Break", "name": "BLOCK_NETHERITE_BLOCK_BREAK" }, { "sound": "Netherite Block Fall", "name": "BLOCK_NETHERITE_BLOCK_FALL" }, { "sound": "Netherite Block Hit", "name": "BLOCK_NETHERITE_BLOCK_HIT" }, { "sound": "Netherite Block Place", "name": "BLOCK_NETHERITE_BLOCK_PLACE" }, { "sound": "Netherite Block Step", "name": "BLOCK_NETHERITE_BLOCK_STEP" }, { "sound": "Polished Deepslate Break", "name": "BLOCK_POLISHED_DEEPSLATE_BREAK" }, { "sound": "Polished Deepslate Fall", "name": "BLOCK_POLISHED_DEEPSLATE_FALL" }, { "sound": "Polished Deepslate Hit", "name": "BLOCK_POLISHED_DEEPSLATE_HIT" }, { "sound": "Polished Deepslate Place", "name": "BLOCK_POLISHED_DEEPSLATE_PLACE" }, { "sound": "Polished Deepslate Step", "name": "BLOCK_POLISHED_DEEPSLATE_STEP" }, { "sound": "Scaffolding Break", "name": "BLOCK_SCAFFOLDING_BREAK" }, { "sound": "Scaffolding Fall", "name": "BLOCK_SCAFFOLDING_FALL" }, { "sound": "Scaffolding Hit", "name": "BLOCK_SCAFFOLDING_HIT" }, { "sound": "Scaffolding Place", "name": "BLOCK_SCAFFOLDING_PLACE" }, { "sound": "Scaffolding Step", "name": "BLOCK_SCAFFOLDING_STEP" }, { "sound": "Slime Block Break", "name": "BLOCK_SLIME_BLOCK_BREAK" }, { "sound": "Slime Block Fall", "name": "BLOCK_SLIME_BLOCK_FALL" }, { "sound": "Slime Block Hit", "name": "BLOCK_SLIME_BLOCK_HIT" }, { "sound": "Slime Block Place", "name": "BLOCK_SLIME_BLOCK_PLACE" }, { "sound": "Slime Block Step", "name": "BLOCK_SLIME_BLOCK_STEP" }, { "sound": "Wool Break", "name": "BLOCK_WOOL_BREAK" }, { "sound": "Wool Fall", "name": "BLOCK_WOOL_FALL" }, { "sound": "Wool Hit", "name": "BLOCK_WOOL_HIT" }, { "sound": "Wool Place", "name": "BLOCK_WOOL_PLACE" }, { "sound": "Wool Step", "name": "BLOCK_WOOL_STEP" }, { "sound": "Anvil Break", "name": "BLOCK_ANVIL_BREAK" }, { "sound": "Anvil Destroy", "name": "BLOCK_ANVIL_DESTROY" }, { "sound": "Anvil Fall", "name": "BLOCK_ANVIL_FALL" }, { "sound": "Anvil Hit", "name": "BLOCK_ANVIL_HIT" }, { "sound": "Anvil Land", "name": "BLOCK_ANVIL_LAND" }, { "sound": "Anvil Place", "name": "BLOCK_ANVIL_PLACE" }, { "sound": "Anvil Step", "name": "BLOCK_ANVIL_STEP" }, { "sound": "Anvil Use", "name": "BLOCK_ANVIL_USE" }, { "sound": "Blast Furnace Fire Crackle", "name": "BLOCK_BLASTFURNACE_FIRE_CRACKLE" }, { "sound": "Brewing Stand Brew", "name": "BLOCK_BREWING_STAND_BREW" }, { "sound": "Campfire Crackle", "name": "BLOCK_CAMPFIRE_CRACKLE" }, { "sound": "Cartography Table Take Result", "name": "UI_CARTOGRAPHY_TABLE_TAKE_RESULT" }, { "sound": "Composter Empty", "name": "BLOCK_COMPOSTER_EMPTY" }, { "sound": "Composter Fill Success", "name": "BLOCK_COMPOSTER_FILL_SUCCESS" }, { "sound": "Composter Fill", "name": "BLOCK_COMPOSTER_FILL" }, { "sound": "Composter Ready", "name": "BLOCK_COMPOSTER_READY" }, { "sound": "Enchantment Table Use", "name": "BLOCK_ENCHANTMENT_TABLE_USE" }, { "sound": "Furnace Fire Crackle", "name": "BLOCK_FURNACE_FIRE_CRACKLE" }, { "sound": "Grindstone Use", "name": "BLOCK_GRINDSTONE_USE" }, { "sound": "Loom Select Pattern", "name": "UI_LOOM_SELECT_PATTERN" }, { "sound": "Loom Take Result", "name": "UI_LOOM_TAKE_RESULT" }, { "sound": "Smithing Table Use", "name": "BLOCK_SMITHING_TABLE_USE" }, { "sound": "Smoker Smoke", "name": "BLOCK_SMOKER_SMOKE" }, { "sound": "Stonecutter Select Recipe", "name": "UI_STONECUTTER_SELECT_RECIPE" }, { "sound": "Stonecutter Take Result", "name": "UI_STONECUTTER_TAKE_RESULT" }, { "sound": "Barrel Close", "name": "BLOCK_BARREL_CLOSE" }, { "sound": "Barrel Open", "name": "BLOCK_BARREL_OPEN" }, { "sound": "Chest Close", "name": "BLOCK_CHEST_CLOSE" }, { "sound": "Chest Locked", "name": "BLOCK_CHEST_LOCKED" }, { "sound": "Chest Open", "name": "BLOCK_CHEST_OPEN" }, { "sound": "Ender Chest Close", "name": "BLOCK_ENDER_CHEST_CLOSE" }, { "sound": "Ender Chest Open", "name": "BLOCK_ENDER_CHEST_OPEN" }, { "sound": "Shulker Box Close", "name": "BLOCK_SHULKER_BOX_CLOSE" }, { "sound": "Shulker Box Open", "name": "BLOCK_SHULKER_BOX_OPEN" }, { "sound": "Comparator Click", "name": "BLOCK_COMPARATOR_CLICK" }, { "sound": "Dispenser Dispense", "name": "BLOCK_DISPENSER_DISPENSE" }, { "sound": "Dispenser Fail", "name": "BLOCK_DISPENSER_FAIL" }, { "sound": "Dispenser Launch", "name": "BLOCK_DISPENSER_LAUNCH" }, { "sound": "Fence Gate Close", "name": "BLOCK_FENCE_GATE_CLOSE" }, { "sound": "Fence Gate Open", "name": "BLOCK_FENCE_GATE_OPEN" }, { "sound": "Iron Door Close", "name": "BLOCK_IRON_DOOR_CLOSE" }, { "sound": "Iron Door Open", "name": "BLOCK_IRON_DOOR_OPEN" }, { "sound": "Iron Trapdoor Close", "name": "BLOCK_IRON_TRAPDOOR_CLOSE" }, { "sound": "Iron Trapdoor Open", "name": "BLOCK_IRON_TRAPDOOR_OPEN" }, { "sound": "Lever Click", "name": "BLOCK_LEVER_CLICK" }, { "sound": "Metal Pressure Plate Click Off", "name": "BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF" }, { "sound": "Metal Pressure Plate Click On", "name": "BLOCK_METAL_PRESSURE_PLATE_CLICK_ON" }, { "sound": "Piston Retract", "name": "BLOCK_PISTON_CONTRACT" }, { "sound": "Piston Extend", "name": "BLOCK_PISTON_EXTEND" }, { "sound": "Redstone Torch Burnout", "name": "BLOCK_REDSTONE_TORCH_BURNOUT" }, { "sound": "Sculk Sensor Break", "name": "BLOCK_SCULK_SENSOR_BREAK" }, { "sound": "Sculk Sensor Click", "name": "BLOCK_SCULK_SENSOR_CLICKING" }, { "sound": "Sculk Sensor Click Stop", "name": "BLOCK_SCULK_SENSOR_CLICKING_STOP" }, { "sound": "Sculk Sensor Fall", "name": "BLOCK_SCULK_SENSOR_FALL" }, { "sound": "Sculk Sensor Hit", "name": "BLOCK_SCULK_SENSOR_HIT" }, { "sound": "Sculk Sensor Place", "name": "BLOCK_SCULK_SENSOR_PLACE" }, { "sound": "Sculk Sensor Step", "name": "BLOCK_SCULK_SENSOR_STEP" }, { "sound": "Stone Button Click Off", "name": "BLOCK_STONE_BUTTON_CLICK_OFF" }, { "sound": "Stone Button Click On", "name": "BLOCK_STONE_BUTTON_CLICK_ON" }, { "sound": "Stone Pressure Plate Click Off", "name": "BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF" }, { "sound": "Stone Pressure Plate Click On", "name": "BLOCK_STONE_PRESSURE_PLATE_CLICK_ON" }, { "sound": "Tripwire Attach", "name": "BLOCK_TRIPWIRE_ATTACH" }, { "sound": "Tripwire Click Off", "name": "BLOCK_TRIPWIRE_CLICK_OFF" }, { "sound": "Tripwire Click On", "name": "BLOCK_TRIPWIRE_CLICK_ON" }, { "sound": "Tripwire Detach", "name": "BLOCK_TRIPWIRE_DETACH" }, { "sound": "Wooden Button Click Off", "name": "BLOCK_WOODEN_BUTTON_CLICK_OFF" }, { "sound": "Wooden Button Click On", "name": "BLOCK_WOODEN_BUTTON_CLICK_ON" }, { "sound": "Wooden Door Close", "name": "BLOCK_WOODEN_DOOR_CLOSE" }, { "sound": "Wooden Door Open", "name": "BLOCK_WOODEN_DOOR_OPEN" }, { "sound": "Wooden Pressure Plate Click Off", "name": "BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF" }, { "sound": "Wooden Pressure Plate Click On", "name": "BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON" }, { "sound": "Wooden Trapdoor Close", "name": "BLOCK_WOODEN_TRAPDOOR_CLOSE" }, { "sound": "Wooden Trapdoor Open", "name": "BLOCK_WOODEN_TRAPDOOR_OPEN" }, { "sound": "Bass Drum", "name": "BLOCK_NOTE_BLOCK_BASEDRUM" }, { "sound": "Banjo", "name": "BLOCK_NOTE_BLOCK_BANJO" }, { "sound": "Bass", "name": "BLOCK_NOTE_BLOCK_BASS" }, { "sound": "Bell", "name": "BLOCK_NOTE_BLOCK_BELL" }, { "sound": "Bit", "name": "BLOCK_NOTE_BLOCK_BIT" }, { "sound": "Chime", "name": "BLOCK_NOTE_BLOCK_CHIME" }, { "sound": "Cow Bell", "name": "BLOCK_NOTE_BLOCK_COW_BELL" }, { "sound": "Didgeridoo", "name": "BLOCK_NOTE_BLOCK_DIDGERIDOO" }, { "sound": "Flute", "name": "BLOCK_NOTE_BLOCK_FLUTE" }, { "sound": "Guitar", "name": "BLOCK_NOTE_BLOCK_GUITAR" }, { "sound": "Harp", "name": "BLOCK_NOTE_BLOCK_HARP" }, { "sound": "Pling", "name": "BLOCK_NOTE_BLOCK_PLING" }, { "sound": "Hat", "name": "BLOCK_NOTE_BLOCK_HAT" }, { "sound": "Snare Drum", "name": "BLOCK_NOTE_BLOCK_SNARE" }, { "sound": "Iron Xylophone", "name": "BLOCK_NOTE_BLOCK_IRON_XYLOPHONE" }, { "sound": "Xylophone", "name": "BLOCK_NOTE_BLOCK_XYLOPHONE" }, { "sound": "Beacon Activate", "name": "BLOCK_BEACON_ACTIVATE" }, { "sound": "Beacon Ambient", "name": "BLOCK_BEACON_AMBIENT" }, { "sound": "Beacon Deactivate", "name": "BLOCK_BEACON_DEACTIVATE" }, { "sound": "Beacon Power Select", "name": "BLOCK_BEACON_POWER_SELECT" }, { "sound": "Bell Resonate", "name": "BLOCK_BELL_RESONATE" }, { "sound": "Bell Use", "name": "BLOCK_BELL_USE" }, { "sound": "Conduit Activate", "name": "BLOCK_CONDUIT_ACTIVATE" }, { "sound": "Conduit Ambient (Short)", "name": "BLOCK_CONDUIT_AMBIENT_SHORT" }, { "sound": "Conduit Ambient", "name": "BLOCK_CONDUIT_AMBIENT" }, { "sound": "Conduit Attack Target", "name": "BLOCK_CONDUIT_ATTACK_TARGET" }, { "sound": "Conduit Deactivate", "name": "BLOCK_CONDUIT_DEACTIVATE" }, { "sound": "End Gateway Spawn", "name": "BLOCK_END_GATEWAY_SPAWN" }, { "sound": "End Portal Fill Frame", "name": "BLOCK_END_PORTAL_FRAME_FILL" }, { "sound": "End Portal Spawn", "name": "BLOCK_END_PORTAL_SPAWN" }, { "sound": "Lodestone Break", "name": "BLOCK_LODESTONE_BREAK" }, { "sound": "Lodestone Fall", "name": "BLOCK_LODESTONE_FALL" }, { "sound": "Lodestone Hit", "name": "BLOCK_LODESTONE_HIT" }, { "sound": "Lodestone Lock Compass", "name": "ITEM_LODESTONE_COMPASS_LOCK" }, { "sound": "Lodestone Place", "name": "BLOCK_LODESTONE_PLACE" }, { "sound": "Lodestone Step", "name": "BLOCK_LODESTONE_STEP" }, { "sound": "Nether Portal Ambient", "name": "BLOCK_PORTAL_AMBIENT" }, { "sound": "Nether Portal Travel", "name": "BLOCK_PORTAL_TRAVEL" }, { "sound": "Nether Portal Trigger", "name": "BLOCK_PORTAL_TRIGGER" }, { "sound": "Respawn Anchor Ambient", "name": "BLOCK_RESPAWN_ANCHOR_AMBIENT" }, { "sound": "Respawn Anchor Charge", "name": "BLOCK_RESPAWN_ANCHOR_CHARGE" }, { "sound": "Respawn Anchor Deplete", "name": "BLOCK_RESPAWN_ANCHOR_DEPLETE" }, { "sound": "Respawn Anchor Set Spawnpoint", "name": "BLOCK_RESPAWN_ANCHOR_SET_SPAWN" }, { "sound": "Cave Ambience", "name": "AMBIENT_CAVE" }, { "sound": "Lightning Impact", "name": "ENTITY_LIGHTNING_BOLT_IMPACT" }, { "sound": "Lightning Thunder", "name": "ENTITY_LIGHTNING_BOLT_THUNDER" }, { "sound": "Raid Horn", "name": "EVENT_RAID_HORN" }, { "sound": "Underwater Ambience", "name": "AMBIENT_UNDERWATER_LOOP" }, { "sound": "Underwater Ambience Additions", "name": "AMBIENT_UNDERWATER_LOOP_ADDITIONS" }, { "sound": "Underwater Ambience Additions (Rare)", "name": "AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE" }, { "sound": "Underwater Ambience Additions (Very Rare)", "name": "AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE" }, { "sound": "Weather Rain", "name": "WEATHER_RAIN" }, { "sound": "Weather Rain Above", "name": "WEATHER_RAIN_ABOVE" }, { "sound": "Basalt Deltas Ambience", "name": "AMBIENT_BASALT_DELTAS_LOOP" }, { "sound": "Basalt Deltas Ambience Additions", "name": "AMBIENT_BASALT_DELTAS_ADDITIONS" }, { "sound": "Basalt Deltas Ambience (Mood)", "name": "AMBIENT_BASALT_DELTAS_MOOD" }, { "sound": "Crimson Forest Ambience", "name": "AMBIENT_CRIMSON_FOREST_LOOP" }, { "sound": "Crimson Forest Ambience Additions", "name": "AMBIENT_CRIMSON_FOREST_ADDITIONS" }, { "sound": "Crimson Forest Ambience (Mood)", "name": "AMBIENT_CRIMSON_FOREST_MOOD" }, { "sound": "Nether Wastes Ambience", "name": "AMBIENT_NETHER_WASTES_LOOP" }, { "sound": "Nether Wastes Ambience Additions", "name": "AMBIENT_NETHER_WASTES_ADDITIONS" }, { "sound": "Nether Wastes Ambience (Mood)", "name": "AMBIENT_NETHER_WASTES_MOOD" }, { "sound": "Soul Escape", "name": "PARTICLE_SOUL_ESCAPE" }, { "sound": "Soul Sand Valley Ambience", "name": "AMBIENT_SOUL_SAND_VALLEY_LOOP" }, { "sound": "Soul Sand Valley Ambience Additions", "name": "AMBIENT_SOUL_SAND_VALLEY_ADDITIONS" }, { "sound": "Soul Sand Valley Ambience (Mood)", "name": "AMBIENT_SOUL_SAND_VALLEY_MOOD" }, { "sound": "Warped Forest Ambience", "name": "AMBIENT_WARPED_FOREST_LOOP" }, { "sound": "Warped Forest Ambience Additions", "name": "AMBIENT_WARPED_FOREST_ADDITIONS" }, { "sound": "Warped Forest Ambience (Mood)", "name": "AMBIENT_WARPED_FOREST_MOOD" }], "potions": [{ "potion": "Speed", "name": "SPEED" }, { "potion": "Slowness", "name": "SLOW" }, { "potion": "Haste", "name": "FAST_DIGGING" }, { "potion": "Mining Fatigue", "name": "SLOW_DIGGING" }, { "potion": "Strength", "name": "INCREASE_DAMAGE" }, { "potion": "Instant Health", "name": "HEAL" }, { "potion": "Instant Damage", "name": "HARM" }, { "potion": "Jump Boost", "name": "JUMP" }, { "potion": "Nausea", "name": "CONFUSION" }, { "potion": "Regeneration", "name": "REGENERATION" }, { "potion": "Resistance", "name": "DAMAGE_RESISTANCE" }, { "potion": "Fire Resistance", "name": "FIRE_RESISTANCE" }, { "potion": "Water Breathing", "name": "WATER_BREATHING" }, { "potion": "Invisibility", "name": "INVISIBILITY" }, { "potion": "Blindness", "name": "BLINDNESS" }, { "potion": "Night Vision", "name": "NIGHT_VISION" }, { "potion": "Hunger", "name": "HUNGER" }, { "potion": "Weakness", "name": "WEAKNESS" }, { "potion": "Poison", "name": "POISON" }, { "potion": "Wither", "name": "WITHER" }, { "potion": "Health Boost", "name": "HEALTH_BOOST" }, { "potion": "Absorption", "name": "ABSORPTION" }, { "potion": "Saturation", "name": "SATURATION" }, { "potion": "Glowing", "name": "GLOWING" }, { "potion": "Levitation", "name": "LEVITATION" }, { "potion": "Luck", "name": "LUCK" }, { "potion": "Bad Luck", "name": "UNLUCK" }, { "potion": "Slow Falling", "name": "SLOW_FALLING" }, { "potion": "Conduit Power", "name": "CONDUIT_POWER" }, { "potion": "Dolphin's Grace", "name": "DOLPHINS_GRACE" }, { "potion": "Bad Omen", "name": "BAD_OMEN" }, { "potion": "Hero of the Village", "name": "HERO_OF_THE_VILLAGE" }], "particles": [{ "particle": "Rain", "name": "WATER_DROP", "category": "Ambient Particles" }, { "particle": "Underwater", "name": "SUSPENDED", "category": "Ambient Particles" }, { "particle": "Ash", "name": "ASH", "category": "Ambient Particles" }, { "particle": "White Ash", "name": "WHITE_ASH", "category": "Ambient Particles" }, { "particle": "Crimson Spore", "name": "CRIMSON_SPORE", "category": "Ambient Particles" }, { "particle": "Warped Spore", "name": "WARPED_SPORE", "category": "Ambient Particles" }, { "particle": "Angry Villager", "name": "VILLAGER_ANGRY", "category": "Entity Behavior Particles" }, { "particle": "Happy Villager", "name": "VILLAGER_HAPPY", "category": "Entity Behavior Particles" }, { "particle": "Spit", "name": "SPIT", "category": "Entity Behavior Particles" }, { "particle": "Sneeze", "name": "SNEEZE", "category": "Entity Behavior Particles" }, { "particle": "Heart", "name": "HEART", "category": "Entity Behavior Particles" }, { "particle": "Witch", "name": "SPELL_WITCH", "category": "Entity Behavior Particles" }, { "particle": "Explosion", "name": "EXPLOSION_LARGE", "category": "Entity Behavior Particles" }, { "particle": "Explosion Emitter", "name": "EXPLOSION_HUGE", "category": "Entity Behavior Particles" }, { "particle": "Flash", "name": "FLASH", "category": "Entity Behavior Particles" }, { "particle": "Splash", "name": "WATER_SPLASH", "category": "Entity Behavior Particles" }, { "particle": "Fishing", "name": "WATER_WAKE", "category": "Entity Behavior Particles" }, { "particle": "Effect", "name": "SPELL", "category": "Ambient Entity Particles" }, { "particle": "Instant Effect", "name": "SPELL_INSTANT", "category": "Ambient Entity Particles" }, { "particle": "Entity Effect", "name": "SPELL_MOB", "category": "Ambient Entity Particles" }, { "particle": "Ambient Entity Effect", "name": "SPELL_MOB_AMBIENT", "category": "Ambient Entity Particles" }, { "particle": "Dolphin", "name": "DOLPHIN", "category": "Ambient Entity Particles" }, { "particle": "Glowing Squid Glow", "name": "GLOW", "category": "Ambient Entity Particles" }, { "particle": "Falling Nectar", "name": "FALLING_NECTAR", "category": "Ambient Entity Particles" }, { "particle": "Firework", "name": "FIREWORKS_SPARK", "category": "Entity Behavior Particles" }, { "particle": "Bubble", "name": "WATER_BUBBLE", "category": "Entity Behavior Particles" }, { "particle": "Bubble Pop", "name": "BUBBLE_POP", "category": "Entity Behavior Particles" }, { "particle": "Snowflake", "name": "SNOWFLAKE", "category": "Entity Behavior Particles" }, { "particle": "Snowball", "name": "SNOWBALL", "category": "Entity Behavior Particles" }, { "particle": "Slime", "name": "SLIME", "category": "Entity Behavior Particles" }, { "particle": "Item", "name": "ITEM_CRACK", "category": "Entity Behavior Particles" }, { "particle": "Critical Hit", "name": "CRIT", "category": "Entity Attack Particles" }, { "particle": "Enchanted Hit", "name": "CRIT_MAGIC", "category": "Entity Attack Particles" }, { "particle": "Damage Indicator", "name": "DAMAGE_INDICATOR", "category": "Entity Attack Particles" }, { "particle": "Sweep Attack", "name": "SWEEP_ATTACK", "category": "Entity Attack Particles" }, { "particle": "Squid Ink", "name": "SQUID_INK", "category": "Entity Attack Particles" }, { "particle": "Glowing Squid Ink", "name": "GLOW_SQUID_INK", "category": "Entity Attack Particles" }, { "particle": "Poof", "name": "EXPLOSION_NORMAL", "category": "Entity Attack Particles" }, { "particle": "Elder Guardian", "name": "MOB_APPEARANCE", "category": "Entity Attack Particles" }, { "particle": "Dragon Breath", "name": "DRAGON_BREATH", "category": "Entity Attack Particles" }, { "particle": "Totem of Undying", "name": "TOTEM", "category": "Entity Attack Particles" }, { "particle": "Cloud", "name": "CLOUD", "category": "Entity Attack Particles" }, { "particle": "Dripping Obsidian Tear", "name": "DRIPPING_OBSIDIAN_TEAR", "category": "Liquid Particles" }, { "particle": "Falling Obsidian Tear", "name": "FALLING_OBSIDIAN_TEAR", "category": "Liquid Particles" }, { "particle": "Landing Obsidian Tear", "name": "LANDING_OBSIDIAN_TEAR", "category": "Liquid Particles" }, { "particle": "Dripping Water", "name": "DRIP_WATER", "category": "Liquid Particles" }, { "particle": "Dripstone Dripping Water", "name": "DRIPPING_DRIPSTONE_WATER", "category": "Liquid Particles" }, { "particle": "Falling Water", "name": "FALLING_WATER", "category": "Liquid Particles" }, { "particle": "Dripstone Falling Water", "name": "FALLING_DRIPSTONE_WATER", "category": "Liquid Particles" }, { "particle": "Dripping Lava", "name": "DRIP_LAVA", "category": "Liquid Particles" }, { "particle": "Dripstone Dripping Lava", "name": "DRIPPING_DRIPSTONE_LAVA", "category": "Liquid Particles" }, { "particle": "Falling Lava", "name": "FALLING_LAVA", "category": "Liquid Particles" }, { "particle": "Dripstone Falling Lava", "name": "FALLING_DRIPSTONE_LAVA", "category": "Liquid Particles" }, { "particle": "Landing Lava", "name": "LANDING_LAVA", "category": "Liquid Particles" }, { "particle": "Dripping Honey", "name": "DRIPPING_HONEY", "category": "Liquid Particles" }, { "particle": "Falling Honey", "name": "FALLING_HONEY", "category": "Liquid Particles" }, { "particle": "Landing Honey", "name": "LANDING_HONEY", "category": "Liquid Particles" }, { "particle": "Lava", "name": "LAVA", "category": "Ambient Block Particles" }, { "particle": "Mycelium", "name": "TOWN_AURA", "category": "Ambient Block Particles" }, { "particle": "Spore Blossom Fall", "name": "FALLING_SPORE_BLOSSOM", "category": "Ambient Block Particles" }, { "particle": "Spore Blossom Air", "name": "SPORE_BLOSSOM_AIR", "category": "Ambient Block Particles" }, { "particle": "Portal", "name": "PORTAL", "category": "Ambient Block Particles" }, { "particle": "Reverse Portal", "name": "PORTAL", "category": "Ambient Block Particles" }, { "particle": "Enchant", "name": "ENCHANTMENT_TABLE", "category": "Ambient Block Particles" }, { "particle": "Small Flame", "name": "SMALL_FLAME", "category": "Ambient Block Particles" }, { "particle": "Flame", "name": "FLAME", "category": "Ambient Block Particles" }, { "particle": "Soul Flame", "name": "SOUL_FIRE_FLAME", "category": "Ambient Block Particles" }, { "particle": "Nautilus", "name": "NAUTILUS", "category": "Ambient Block Particles" }, { "particle": "End Rod", "name": "END_ROD", "category": "Ambient Block Particles" }, { "particle": "Falling Dust", "name": "FALLING_DUST", "category": "Ambient Block Particles" }, { "particle": "Whirlpool Bubble Column", "name": "CURRENT_DOWN", "category": "Ambient Block Particles" }, { "particle": "Upward Bubble Column", "name": "BUBBLE_COLUMN_UP", "category": "Ambient Block Particles" }, { "particle": "Campfire Smoke", "name": "CAMPFIRE_COSY_SMOKE", "category": "Ambient Block Particles" }, { "particle": "Campfire Signal Smoke", "name": "CAMPFIRE_SIGNAL_SMOKE", "category": "Ambient Block Particles" }, { "particle": "Smoke", "name": "SMOKE_NORMAL", "category": "Ambient Block Particles" }, { "particle": "Large Smoke", "name": "SMOKE_LARGE", "category": "Ambient Block Particles" }, { "particle": "Note", "name": "NOTE", "category": "Block Behavior Particles" }, { "particle": "Wax On", "name": "WAX_ON", "category": "Block Behavior Particles" }, { "particle": "Wax Off", "name": "WAX_OFF", "category": "Block Behavior Particles" }, { "particle": "Scrape Oxidization", "name": "SCRAPE", "category": "Block Behavior Particles" }, { "particle": "Composter", "name": "COMPOSTER", "category": "Block Behavior Particles" }, { "particle": "Barrier", "name": "BARRIER", "category": "Block Behavior Particles" }, { "particle": "Light", "name": "LIGHT", "category": "Block Behavior Particles" }, { "particle": "Dust", "name": "REDSTONE", "category": "Block Behavior Particles" }, { "particle": "Soul", "name": "SOUL", "category": "Block Behavior Particles" }, { "particle": "Block", "name": "BLOCK_CRACK", "category": "Block Behavior Particles" }, { "particle": "Electric Spark", "name": "ELECTRIC_SPARK", "category": "Block Behavior Particles" }], "gvals": [{ "name": "Current Health", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Maximum Health", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Absorption Health", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Food Level", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Food Saturation", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Food Exhaustion", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Attack Damage", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Attack Speed", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Armor Points", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Armor Toughness", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Invulnerability Ticks", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Experience Level", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Experience Progress", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Fire Ticks", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Freeze Ticks", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Remaining Air", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Fall Distance", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Held Slot", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Ping", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Item Usage Progress", "type": "NUMBER", "category": "Statistical Values" }, { "name": "Location", "type": "LOCATION", "category": "Locational Values" }, { "name": "Target Block Location", "type": "LOCATION", "category": "Locational Values" }, { "name": "Target Block Side", "type": "VECTOR", "category": "Locational Values" }, { "name": "Target Fluid Location", "category": "Locational Values" }, { "name": "Eye Location", "type": "LOCATION", "category": "Locational Values" }, { "name": "X-Coordinate", "type": "NUMBER", "category": "Locational Values" }, { "name": "Y-Coordinate", "type": "NUMBER", "category": "Locational Values" }, { "name": "Z-Coordinate", "type": "NUMBER", "category": "Locational Values" }, { "name": "Pitch", "type": "NUMBER", "category": "Locational Values" }, { "name": "Yaw", "type": "NUMBER", "category": "Locational Values" }, { "name": "Cardinal Direction", "category": "Locational Values" }, { "name": "Spawn Location", "type": "LOCATION", "category": "Locational Values" }, { "name": "Velocity", "type": "VECTOR", "category": "Locational Values" }, { "name": "Direction", "type": "VECTOR", "category": "Locational Values" }, { "name": "Main Hand Item", "type": "ITEM", "category": "Item Values" }, { "name": "Off Hand Item", "type": "ITEM", "category": "Item Values" }, { "name": "Armor Items", "type": "LIST", "category": "Item Values" }, { "name": "Hotbar Items", "type": "LIST", "category": "Item Values" }, { "name": "Inventory Items", "type": "LIST", "category": "Item Values" }, { "name": "Cursor Item", "type": "ITEM", "category": "Item Values" }, { "name": "Inventory Menu Items", "type": "LIST", "category": "Item Values" }, { "name": "Saddle Item", "type": "ITEM", "category": "Item Values" }, { "name": "Entity Item", "type": "ITEM", "category": "Item Values" }, { "name": "Name", "type": "TEXT", "category": "Informational Values" }, { "name": "UUID", "type": "TEXT", "category": "Informational Values" }, { "name": "Entity Type", "type": "TEXT", "category": "Informational Values" }, { "name": "Open Inventory Title", "type": "TEXT", "category": "Informational Values" }, { "name": "Potion Effects", "type": "LIST", "category": "Informational Values" }, { "name": "Vehicle", "type": "TEXT", "category": "Informational Values" }, { "name": "Passengers", "type": "LIST", "category": "Informational Values" }, { "name": "Lead Holder", "type": "TEXT", "category": "Informational Values" }, { "name": "Attached Leads", "type": "LIST", "category": "Informational Values" }, { "name": "Event Block Location", "type": "LOCATION", "category": "Event Values" }, { "name": "Event Block Side", "type": "VECTOR", "category": "Event Values" }, { "name": "Event Block Face", "category": "Locational Values" }, { "name": "Event Damage", "type": "NUMBER", "category": "Event Values" }, { "name": "Damage Event Cause", "type": "TEXT", "category": "Event Values" }, { "name": "Event Death Message", "type": "TEXT", "category": "Event Values" }, { "name": "Event Heal Amount", "type": "NUMBER", "category": "Event Values" }, { "name": "Heal Event Cause", "type": "TEXT", "category": "Event Values" }, { "name": "Event Power", "type": "NUMBER", "category": "Event Values" }, { "name": "Event Command", "type": "TEXT", "category": "Event Values" }, { "name": "Event Command Arguments", "type": "LIST", "category": "Event Values" }, { "name": "Event Item", "type": "ITEM", "category": "Event Values" }, { "name": "Event Hotbar Slot", "type": "NUMBER", "category": "Event Values" }, { "name": "Event Clicked Slot Index", "type": "NUMBER", "category": "Event Values" }, { "name": "Event Clicked Slot Item", "type": "ITEM", "category": "Event Values" }, { "name": "Event Clicked Slot New Item", "type": "ITEM", "category": "Event Values" }, { "name": "Close Inventory Event Cause", "type": "TEXT", "category": "Event Values" }, { "name": "Inventory Event Click Type", "type": "TEXT", "category": "Event Values" }, { "name": "Fish Event Cause", "type": "TEXT", "category": "Event Values" }, { "name": "Player Count", "type": "NUMBER", "category": "Plot Values" }, { "name": "CPU Usage", "type": "NUMBER", "category": "Plot Values" }, { "name": "Server TPS", "type": "NUMBER", "category": "Plot Values" }, { "name": "Timestamp", "type": "NUMBER", "category": "Plot Values" }, { "name": "Selection Size", "type": "NUMBER", "category": "Plot Values" }, { "name": "Selection Target Names", "type": "LIST", "category": "Plot Values" }, { "name": "Selection Target UUIDs", "type": "LIST", "category": "Plot Values" }] };

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapper = exports.getEditor = exports.codeDump = exports.utils = exports.codeblocks = exports.values = exports.types = exports.components = void 0;
const tslib_1 = require("tslib");
const zlib_1 = tslib_1.__importDefault(require("zlib"));
const ws_1 = tslib_1.__importDefault(require("ws"));
exports.components = tslib_1.__importStar(require("./core/components/"));
exports.types = tslib_1.__importStar(require("./core/types/"));
exports.values = tslib_1.__importStar(require("./values/"));
exports.codeblocks = tslib_1.__importStar(require("./codeblocks/"));
exports.utils = tslib_1.__importStar(require("./common/utilities"));
// Quick editor & playground.
const codeDump_1 = tslib_1.__importDefault(require("./core/codeDump"));
exports.codeDump = codeDump_1.default;
const quickeditor_1 = tslib_1.__importDefault(require("./common/editor/quickeditor"));
exports.getEditor = quickeditor_1.default;
const mapper = tslib_1.__importStar(require("./mapper"));
exports.mapper = mapper;
const qeSettings_1 = tslib_1.__importDefault(require("./common/editor/qeSettings"));
const Template_1 = tslib_1.__importDefault(require("./core/components/Template"));
/**
 * Quick editor.
 * @param name Name of the template, false for nothing.
 * @param callback Editor callback.
 */
function quickEditor(name, callback) {
    const template = new Template_1.default(name);
    // Get the editor.
    const editor = quickeditor_1.default.default(template);
    quickeditor_1.default.applyActions(editor, quickeditor_1.default.defaultActDefs);
    const settings = (0, qeSettings_1.default)(name);
    callback(editor, settings);
    template.author = settings.author;
    template.name = settings.name;
    if (settings.usingCodeutils) {
        const socket = new ws_1.default(`${settings.cuConf.protocol}://${settings.cuConf.host}:${settings.cuConf.port}/${settings.cuConf.endpoint}`);
        template.cuSocket = socket;
    }
    return template;
}
/**
 * Extract a raw DiamondFire template.
 * @param raw Raw template data.
 * @param callback Editor callback.
 */
quickEditor.from = (raw, callback) => {
    const data = JSON.parse(zlib_1.default.gunzipSync(Buffer.from(raw, "base64")).toString());
    const template = new Template_1.default(data.name || false, data.author);
    const blocks = data.blocks.map(b => {
        if (b.id === "bracket")
            throw new Error(`Found a bracket block while parsing template "${template.name}" with no parent block. Either fix your code or this might be a bug.`);
        return mapper.default.from(b);
    });
    template.push(...blocks);
    return quickEditor(template.name, (e, s) => {
        e._from(template);
        if (callback)
            callback(e, s);
    });
};
quickEditor.setActionDump = codeDump_1.default.loadDump;
exports.default = quickEditor;
/*
df("test template", (e) => {
    e.player.action("SendMessage", e.text("Hello world!"));

});
*/

}).call(this)}).call(this,require("buffer").Buffer)
},{"./codeblocks/":12,"./common/editor/qeSettings":15,"./common/editor/quickeditor":16,"./common/utilities":18,"./core/codeDump":19,"./core/components/":29,"./core/components/Template":27,"./core/types/":34,"./mapper":36,"./values/":47,"buffer":54,"tslib":107,"ws":115,"zlib":53}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueMapper = exports.blockMapper = void 0;
const mapperUtils_1 = require("./common/mapperUtils");
function blockMapper(type, serializedData) {
    if (typeof serializedData !== "object" || !("args" in serializedData) || !("block" in serializedData))
        throw new Error("Cannot map serialized block data because it is invalid.");
    const args = serializedData.args.items.map((i) => valueMapper(i.item.id, i));
    const constructor = mapperUtils_1.blockMap[type];
    if (!constructor)
        throw new Error(`Type "${type}" cannot be recongized as a DiamondFire block type. Template may be corrupted or just invalid.`);
    return constructor(serializedData, args);
}
exports.blockMapper = blockMapper;
function valueMapper(type, serializedData) {
    if (typeof serializedData !== "object" || !("slot" in serializedData) || !("item" in serializedData))
        throw new Error("Cannot map serialized value data because it is invalid.");
    const constructor = mapperUtils_1.valueMap[type];
    if (!constructor)
        throw new Error(`Type "${type}" cannot be recongized as a DiamondFire value type. Template may be corrupted or just invalid.`);
    return constructor({
        v: serializedData.item.data,
        s: serializedData.slot
    });
}
exports.valueMapper = valueMapper;
/**
 * ## Sparkscript global mapper.
 * Convert DiamondFire's raw value or codeblock data to the respective sparkscript's class instance.
 * @author UserUNP
 *
 * @param type Codename type to be mapped.
 * @param serializedData Respective data for the type.
 * @returns Converted sparkscript object instance.
 */
const mapper = (type, serializedData) => {
    if (typeof serializedData !== "object")
        throw new Error(`Cannot map a variable with type ${typeof serializedData}.`);
    if (isOfTypeRawValue(serializedData))
        return valueMapper(type, serializedData);
    else
        return blockMapper(type, serializedData);
};
function isOfTypeRawValue(test) {
    if (!test || typeof test !== "object")
        return false;
    if (!("item" in test) || !("slot" in test))
        return false;
    return true;
}
/**
 * Transform serialized data into readable sparkscript data.
 * @description Most type intellisense is lost due to abstraction.
 * @param raw Raw action codeblock data.
 * @returns New instance of the respective sparkscript class.
 */
mapper.from = (raw) => {
    if (isOfTypeRawValue(raw))
        return mapper(raw.item.id, raw);
    else
        return mapper(raw.block, raw);
};
exports.default = mapper;

},{"./common/mapperUtils":17}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockTagUtils_1 = require("../common/blockTagUtils");
const codeDump_1 = require("../core/codeDump");
const components_1 = require("../core/components");
class BLTag extends components_1.Value {
    constructor(block, action, tag, option, slot = (0, codeDump_1.getDump)().actionTags[tag].slot) {
        super("bl_tag", {
            block, action,
            tag, option: option !== null && option !== void 0 ? option : (option = (0, codeDump_1.getDump)().actionTags[tag].defaultOption)
        }, slot);
        this.block = block;
        this.action = action;
        this.tag = tag;
        this.option = option;
        this.defaultSlot = (0, blockTagUtils_1.getDefaultSlot)(this.tag);
        this.defaultOption = (0, blockTagUtils_1.getDefaultOption)(this.tag);
    }
    toString() {
        return `#[${this.tag}]: ${this.option}`;
    }
    set(option) {
        this.data.set("option", option);
        return this;
    }
    /**
     * Alias for `set`.
     */
    setOption(option) {
        return this.set(option);
    }
}
exports.default = BLTag;

},{"../common/blockTagUtils":14,"../core/codeDump":19,"../core/components":29}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class GameValue extends components_1.Value {
    /**
     * Create a new game value.
     * @param value The value.
     * @param target The target of the value, "Default" is the default target.
     */
    constructor(value, target = "Default", slot) {
        super("g_val", { type: value, target }, slot);
        this.value = value;
        this.target = target;
    }
}
exports.default = GameValue;

},{"../core/components":29}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Location extends components_1.Value {
    /**
     * Create a new location value.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @param z Z coordinate.
     * @param pitch Pitch, defaults to 0.
     * @param yaw Yaw, defaults to 0.
     */
    constructor(x, y, z, pitch = 90, yaw = 0, slot) {
        super("loc", { loc: { x, y, z, pitch, yaw } }, slot);
        this.x = x;
        this.y = y;
        this.z = z;
        this.pitch = pitch;
        this.yaw = yaw;
    }
}
exports.default = Location;

},{"../core/components":29}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NBT = require("nbt-ts");
const components_1 = require("../core/components");
const utilities_1 = require("../common/utilities");
class MinecraftItem extends components_1.Value {
    static fromNBT(value, s) {
        const v = NBT.parse(value);
        const item = new MinecraftItem(v.id, JSON.parse(typeof v.tag.display.Name === "string" ? v.tag.display.Name : NBT.stringify(v.tag.display.Name)), v.Count.value, s);
        return item;
    }
    /**
     * Create a Minecraft item as a DiamondFire value.
     * @param id Item ID name.
     * @param count Amount.
     * @param name Item name.
     */
    constructor(id, name, count = 1, slot) {
        id = id.indexOf("minecraft:") == -1 ? `minecraft:${id}` : id;
        if (typeof name === "string")
            name = new components_1.MinecraftString(name);
        super("item", {
            item: {
                id,
                Count: count,
                tag: {
                    Tags: [],
                    PublicBukkitValues: {},
                    display: {
                        Name: name instanceof components_1.MinecraftString ? name.export() : name,
                        Lore: []
                    }
                }
            }
        }, slot);
        this.id = id;
        this.name = name;
        this.count = count;
    }
    setTag(key, value) {
        this.data.raw.item.tag.PublicBukkitValues[`hypercube:${key}`] =
            typeof value === "number" ? new NBT.Int(value).value : `${value}`;
        return this;
    }
    addVanillaTag(tag) {
        this.data.raw.item.tag.Tags.push(`${tag}`);
        return this;
    }
    addLore(text) {
        if (typeof text === "string")
            this.data.raw.item.tag.display.Lore.push(new components_1.MinecraftString(`§f§r${text}`).export());
        else
            this.data.raw.item.tag.display.Lore.push(text.export());
        return this;
    }
    setLore(index, text) {
        const string = typeof text === "string" ? new components_1.MinecraftString(`§f§r${text}`) : text;
        const display = this.data.raw.item.tag.display;
        display.Lore[index] = string.export();
        display.Lore = (0, utilities_1.removeEmptyItems)(display.Lore, components_1.MinecraftString.emptyString.export());
    }
    export(containingBlockArguments) {
        const result = Object.assign({}, super.export(containingBlockArguments));
        result.item.data.item = result.item.data.item;
        if (typeof result.item.data.item === "string")
            throw new Error("You either a smart fella or a fart smella");
        const display = result.item.data.item.tag.display;
        display.Name = JSON.stringify(result.item.data.item.tag.display.Name);
        display.Lore = (0, utilities_1.removeEmptyItems)(display.Lore, JSON.stringify(components_1.MinecraftString.emptyString.export())).map(l => JSON.stringify(l));
        result.item.data.item = NBT.stringify(result.item.data.item);
        return result;
    }
}
exports.default = MinecraftItem;

},{"../common/utilities":18,"../core/components":29,"nbt-ts":74}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
;
class Number extends components_1.Value {
    static parse(stringified, slot) {
        return new Number(parseInt(stringified), slot);
    }
    /**
     * Create a number value.
     * @param number Number.
     */
    constructor(number, slot) {
        super("num", { name: `${number}` }, slot);
        this.number = number;
    }
    toString() {
        return `${this.number}`;
    }
}
exports.default = Number;

},{"../core/components":29}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Potion extends components_1.Value {
    /**
     * Create a new potion value.
     * @param potion The potion name.
     * @param duration The duration of the potion in ticks.
     * @param amplifier Strength of the potion.
     */
    constructor(potion, duration, amplifier, slot) {
        super("pot", { pot: potion, dur: duration, amp: amplifier }, slot);
        this.potion = potion;
        this.duration = duration;
        this.amplifier = amplifier;
    }
}
exports.default = Potion;

},{"../core/components":29}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Sound extends components_1.Value {
    /**
     * Create a new sound value.
     * @param potion The potion name.
     * @param volume The volume of the sound.
     * @param pitch The pitch of the sound.
     */
    constructor(sound, volume = 2, pitch = 1, slot) {
        super("snd", { sound, vol: volume, pitch }, slot);
        this.sound = sound;
        this.volume = volume;
        this.pitch = pitch;
    }
}
exports.default = Sound;

},{"../core/components":29}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
;
class Text extends components_1.Value {
    /**
     * Create a text value.
     * @param text The text.
     */
    constructor(text, slot) {
        super("txt", { name: text }, slot);
        this.text = text;
    }
    toString() {
        return `"${this.text}"`;
    }
}
exports.default = Text;

},{"../core/components":29}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varScopeMap = void 0;
const components_1 = require("../core/components");
exports.varScopeMap = {
    "local": "local",
    "game": "unsaved",
    "save": "saved",
    "unsaved": "unsaved",
    "saved": "saved",
};
class Variable extends components_1.Value {
    /**
     * Create a variable value.
     * @param name Name of the variable.
     * @param scope Variable scope.
     */
    constructor(name, scope = "game", slot) {
        super("var", { name, scope: exports.varScopeMap[scope] }, slot);
        this.name = name;
        this.scope = scope;
    }
    toString() {
        return `%var(${this.name})`;
    }
}
exports.default = Variable;

},{"../core/components":29}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../core/components");
class Vector extends components_1.Value {
    /**
     * Create a new vector value.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @param z Z coordinate.
     */
    constructor(x, y, z, slot) {
        super("vec", { x, y, z }, slot);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    toString() {
        return `<${this.x}, ${this.y}, ${this.z}>`;
    }
}
exports.default = Vector;

},{"../core/components":29}],47:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = exports.GameValue = exports.Potion = exports.Sound = exports.Location = exports.Variable = exports.Number = exports.Text = exports.BLTag = exports.MinecraftItem = void 0;
var MinecraftItem_1 = require("./MinecraftItem");
Object.defineProperty(exports, "MinecraftItem", { enumerable: true, get: function () { return __importDefault(MinecraftItem_1).default; } });
var BLTag_1 = require("./BLTag");
Object.defineProperty(exports, "BLTag", { enumerable: true, get: function () { return __importDefault(BLTag_1).default; } });
var Text_1 = require("./Text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return __importDefault(Text_1).default; } });
var Number_1 = require("./Number");
Object.defineProperty(exports, "Number", { enumerable: true, get: function () { return __importDefault(Number_1).default; } });
var Variable_1 = require("./Variable");
Object.defineProperty(exports, "Variable", { enumerable: true, get: function () { return __importDefault(Variable_1).default; } });
var Location_1 = require("./Location");
Object.defineProperty(exports, "Location", { enumerable: true, get: function () { return __importDefault(Location_1).default; } });
var Sound_1 = require("./Sound");
Object.defineProperty(exports, "Sound", { enumerable: true, get: function () { return __importDefault(Sound_1).default; } });
var Potion_1 = require("./Potion");
Object.defineProperty(exports, "Potion", { enumerable: true, get: function () { return __importDefault(Potion_1).default; } });
var GameValue_1 = require("./GameValue");
Object.defineProperty(exports, "GameValue", { enumerable: true, get: function () { return __importDefault(GameValue_1).default; } });
var Vector_1 = require("./Vector");
Object.defineProperty(exports, "Vector", { enumerable: true, get: function () { return __importDefault(Vector_1).default; } });

},{"./BLTag":37,"./GameValue":38,"./Location":39,"./MinecraftItem":40,"./Number":41,"./Potion":42,"./Sound":43,"./Text":44,"./Variable":45,"./Vector":46}],48:[function(require,module,exports){
(function (global){(function (){
'use strict';

var objectAssign = require('object-assign');

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"object-assign":77,"util/":110}],49:[function(require,module,exports){
(function (global){(function (){
'use strict';

var possibleNames = [
	'BigInt64Array',
	'BigUint64Array',
	'Float32Array',
	'Float64Array',
	'Int16Array',
	'Int32Array',
	'Int8Array',
	'Uint16Array',
	'Uint32Array',
	'Uint8Array',
	'Uint8ClampedArray'
];

var g = typeof globalThis === 'undefined' ? global : globalThis;

module.exports = function availableTypedArrays() {
	var out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],50:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],51:[function(require,module,exports){

},{}],52:[function(require,module,exports){
(function (process,Buffer){(function (){
'use strict';
/* eslint camelcase: "off" */

var assert = require('assert');

var Zstream = require('pako/lib/zlib/zstream');
var zlib_deflate = require('pako/lib/zlib/deflate.js');
var zlib_inflate = require('pako/lib/zlib/inflate.js');
var constants = require('pako/lib/zlib/constants');

for (var key in constants) {
  exports[key] = constants[key];
}

// zlib modes
exports.NONE = 0;
exports.DEFLATE = 1;
exports.INFLATE = 2;
exports.GZIP = 3;
exports.GUNZIP = 4;
exports.DEFLATERAW = 5;
exports.INFLATERAW = 6;
exports.UNZIP = 7;

var GZIP_HEADER_ID1 = 0x1f;
var GZIP_HEADER_ID2 = 0x8b;

/**
 * Emulate Node's zlib C++ layer for use by the JS layer in index.js
 */
function Zlib(mode) {
  if (typeof mode !== 'number' || mode < exports.DEFLATE || mode > exports.UNZIP) {
    throw new TypeError('Bad argument');
  }

  this.dictionary = null;
  this.err = 0;
  this.flush = 0;
  this.init_done = false;
  this.level = 0;
  this.memLevel = 0;
  this.mode = mode;
  this.strategy = 0;
  this.windowBits = 0;
  this.write_in_progress = false;
  this.pending_close = false;
  this.gzip_id_bytes_read = 0;
}

Zlib.prototype.close = function () {
  if (this.write_in_progress) {
    this.pending_close = true;
    return;
  }

  this.pending_close = false;

  assert(this.init_done, 'close before init');
  assert(this.mode <= exports.UNZIP);

  if (this.mode === exports.DEFLATE || this.mode === exports.GZIP || this.mode === exports.DEFLATERAW) {
    zlib_deflate.deflateEnd(this.strm);
  } else if (this.mode === exports.INFLATE || this.mode === exports.GUNZIP || this.mode === exports.INFLATERAW || this.mode === exports.UNZIP) {
    zlib_inflate.inflateEnd(this.strm);
  }

  this.mode = exports.NONE;

  this.dictionary = null;
};

Zlib.prototype.write = function (flush, input, in_off, in_len, out, out_off, out_len) {
  return this._write(true, flush, input, in_off, in_len, out, out_off, out_len);
};

Zlib.prototype.writeSync = function (flush, input, in_off, in_len, out, out_off, out_len) {
  return this._write(false, flush, input, in_off, in_len, out, out_off, out_len);
};

Zlib.prototype._write = function (async, flush, input, in_off, in_len, out, out_off, out_len) {
  assert.equal(arguments.length, 8);

  assert(this.init_done, 'write before init');
  assert(this.mode !== exports.NONE, 'already finalized');
  assert.equal(false, this.write_in_progress, 'write already in progress');
  assert.equal(false, this.pending_close, 'close is pending');

  this.write_in_progress = true;

  assert.equal(false, flush === undefined, 'must provide flush value');

  this.write_in_progress = true;

  if (flush !== exports.Z_NO_FLUSH && flush !== exports.Z_PARTIAL_FLUSH && flush !== exports.Z_SYNC_FLUSH && flush !== exports.Z_FULL_FLUSH && flush !== exports.Z_FINISH && flush !== exports.Z_BLOCK) {
    throw new Error('Invalid flush value');
  }

  if (input == null) {
    input = Buffer.alloc(0);
    in_len = 0;
    in_off = 0;
  }

  this.strm.avail_in = in_len;
  this.strm.input = input;
  this.strm.next_in = in_off;
  this.strm.avail_out = out_len;
  this.strm.output = out;
  this.strm.next_out = out_off;
  this.flush = flush;

  if (!async) {
    // sync version
    this._process();

    if (this._checkError()) {
      return this._afterSync();
    }
    return;
  }

  // async version
  var self = this;
  process.nextTick(function () {
    self._process();
    self._after();
  });

  return this;
};

Zlib.prototype._afterSync = function () {
  var avail_out = this.strm.avail_out;
  var avail_in = this.strm.avail_in;

  this.write_in_progress = false;

  return [avail_in, avail_out];
};

Zlib.prototype._process = function () {
  var next_expected_header_byte = null;

  // If the avail_out is left at 0, then it means that it ran out
  // of room.  If there was avail_out left over, then it means
  // that all of the input was consumed.
  switch (this.mode) {
    case exports.DEFLATE:
    case exports.GZIP:
    case exports.DEFLATERAW:
      this.err = zlib_deflate.deflate(this.strm, this.flush);
      break;
    case exports.UNZIP:
      if (this.strm.avail_in > 0) {
        next_expected_header_byte = this.strm.next_in;
      }

      switch (this.gzip_id_bytes_read) {
        case 0:
          if (next_expected_header_byte === null) {
            break;
          }

          if (this.strm.input[next_expected_header_byte] === GZIP_HEADER_ID1) {
            this.gzip_id_bytes_read = 1;
            next_expected_header_byte++;

            if (this.strm.avail_in === 1) {
              // The only available byte was already read.
              break;
            }
          } else {
            this.mode = exports.INFLATE;
            break;
          }

        // fallthrough
        case 1:
          if (next_expected_header_byte === null) {
            break;
          }

          if (this.strm.input[next_expected_header_byte] === GZIP_HEADER_ID2) {
            this.gzip_id_bytes_read = 2;
            this.mode = exports.GUNZIP;
          } else {
            // There is no actual difference between INFLATE and INFLATERAW
            // (after initialization).
            this.mode = exports.INFLATE;
          }

          break;
        default:
          throw new Error('invalid number of gzip magic number bytes read');
      }

    // fallthrough
    case exports.INFLATE:
    case exports.GUNZIP:
    case exports.INFLATERAW:
      this.err = zlib_inflate.inflate(this.strm, this.flush

      // If data was encoded with dictionary
      );if (this.err === exports.Z_NEED_DICT && this.dictionary) {
        // Load it
        this.err = zlib_inflate.inflateSetDictionary(this.strm, this.dictionary);
        if (this.err === exports.Z_OK) {
          // And try to decode again
          this.err = zlib_inflate.inflate(this.strm, this.flush);
        } else if (this.err === exports.Z_DATA_ERROR) {
          // Both inflateSetDictionary() and inflate() return Z_DATA_ERROR.
          // Make it possible for After() to tell a bad dictionary from bad
          // input.
          this.err = exports.Z_NEED_DICT;
        }
      }
      while (this.strm.avail_in > 0 && this.mode === exports.GUNZIP && this.err === exports.Z_STREAM_END && this.strm.next_in[0] !== 0x00) {
        // Bytes remain in input buffer. Perhaps this is another compressed
        // member in the same archive, or just trailing garbage.
        // Trailing zero bytes are okay, though, since they are frequently
        // used for padding.

        this.reset();
        this.err = zlib_inflate.inflate(this.strm, this.flush);
      }
      break;
    default:
      throw new Error('Unknown mode ' + this.mode);
  }
};

Zlib.prototype._checkError = function () {
  // Acceptable error states depend on the type of zlib stream.
  switch (this.err) {
    case exports.Z_OK:
    case exports.Z_BUF_ERROR:
      if (this.strm.avail_out !== 0 && this.flush === exports.Z_FINISH) {
        this._error('unexpected end of file');
        return false;
      }
      break;
    case exports.Z_STREAM_END:
      // normal statuses, not fatal
      break;
    case exports.Z_NEED_DICT:
      if (this.dictionary == null) {
        this._error('Missing dictionary');
      } else {
        this._error('Bad dictionary');
      }
      return false;
    default:
      // something else.
      this._error('Zlib error');
      return false;
  }

  return true;
};

Zlib.prototype._after = function () {
  if (!this._checkError()) {
    return;
  }

  var avail_out = this.strm.avail_out;
  var avail_in = this.strm.avail_in;

  this.write_in_progress = false;

  // call the write() cb
  this.callback(avail_in, avail_out);

  if (this.pending_close) {
    this.close();
  }
};

Zlib.prototype._error = function (message) {
  if (this.strm.msg) {
    message = this.strm.msg;
  }
  this.onerror(message, this.err

  // no hope of rescue.
  );this.write_in_progress = false;
  if (this.pending_close) {
    this.close();
  }
};

Zlib.prototype.init = function (windowBits, level, memLevel, strategy, dictionary) {
  assert(arguments.length === 4 || arguments.length === 5, 'init(windowBits, level, memLevel, strategy, [dictionary])');

  assert(windowBits >= 8 && windowBits <= 15, 'invalid windowBits');
  assert(level >= -1 && level <= 9, 'invalid compression level');

  assert(memLevel >= 1 && memLevel <= 9, 'invalid memlevel');

  assert(strategy === exports.Z_FILTERED || strategy === exports.Z_HUFFMAN_ONLY || strategy === exports.Z_RLE || strategy === exports.Z_FIXED || strategy === exports.Z_DEFAULT_STRATEGY, 'invalid strategy');

  this._init(level, windowBits, memLevel, strategy, dictionary);
  this._setDictionary();
};

Zlib.prototype.params = function () {
  throw new Error('deflateParams Not supported');
};

Zlib.prototype.reset = function () {
  this._reset();
  this._setDictionary();
};

Zlib.prototype._init = function (level, windowBits, memLevel, strategy, dictionary) {
  this.level = level;
  this.windowBits = windowBits;
  this.memLevel = memLevel;
  this.strategy = strategy;

  this.flush = exports.Z_NO_FLUSH;

  this.err = exports.Z_OK;

  if (this.mode === exports.GZIP || this.mode === exports.GUNZIP) {
    this.windowBits += 16;
  }

  if (this.mode === exports.UNZIP) {
    this.windowBits += 32;
  }

  if (this.mode === exports.DEFLATERAW || this.mode === exports.INFLATERAW) {
    this.windowBits = -1 * this.windowBits;
  }

  this.strm = new Zstream();

  switch (this.mode) {
    case exports.DEFLATE:
    case exports.GZIP:
    case exports.DEFLATERAW:
      this.err = zlib_deflate.deflateInit2(this.strm, this.level, exports.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
      break;
    case exports.INFLATE:
    case exports.GUNZIP:
    case exports.INFLATERAW:
    case exports.UNZIP:
      this.err = zlib_inflate.inflateInit2(this.strm, this.windowBits);
      break;
    default:
      throw new Error('Unknown mode ' + this.mode);
  }

  if (this.err !== exports.Z_OK) {
    this._error('Init error');
  }

  this.dictionary = dictionary;

  this.write_in_progress = false;
  this.init_done = true;
};

Zlib.prototype._setDictionary = function () {
  if (this.dictionary == null) {
    return;
  }

  this.err = exports.Z_OK;

  switch (this.mode) {
    case exports.DEFLATE:
    case exports.DEFLATERAW:
      this.err = zlib_deflate.deflateSetDictionary(this.strm, this.dictionary);
      break;
    default:
      break;
  }

  if (this.err !== exports.Z_OK) {
    this._error('Failed to set dictionary');
  }
};

Zlib.prototype._reset = function () {
  this.err = exports.Z_OK;

  switch (this.mode) {
    case exports.DEFLATE:
    case exports.DEFLATERAW:
    case exports.GZIP:
      this.err = zlib_deflate.deflateReset(this.strm);
      break;
    case exports.INFLATE:
    case exports.INFLATERAW:
    case exports.GUNZIP:
      this.err = zlib_inflate.inflateReset(this.strm);
      break;
    default:
      break;
  }

  if (this.err !== exports.Z_OK) {
    this._error('Failed to reset stream');
  }
};

exports.Zlib = Zlib;
}).call(this)}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":89,"assert":48,"buffer":54,"pako/lib/zlib/constants":80,"pako/lib/zlib/deflate.js":82,"pako/lib/zlib/inflate.js":84,"pako/lib/zlib/zstream":88}],53:[function(require,module,exports){
(function (process){(function (){
'use strict';

var Buffer = require('buffer').Buffer;
var Transform = require('stream').Transform;
var binding = require('./binding');
var util = require('util');
var assert = require('assert').ok;
var kMaxLength = require('buffer').kMaxLength;
var kRangeErrorMessage = 'Cannot create final Buffer. It would be larger ' + 'than 0x' + kMaxLength.toString(16) + ' bytes';

// zlib doesn't provide these, so kludge them in following the same
// const naming scheme zlib uses.
binding.Z_MIN_WINDOWBITS = 8;
binding.Z_MAX_WINDOWBITS = 15;
binding.Z_DEFAULT_WINDOWBITS = 15;

// fewer than 64 bytes per chunk is stupid.
// technically it could work with as few as 8, but even 64 bytes
// is absurdly low.  Usually a MB or more is best.
binding.Z_MIN_CHUNK = 64;
binding.Z_MAX_CHUNK = Infinity;
binding.Z_DEFAULT_CHUNK = 16 * 1024;

binding.Z_MIN_MEMLEVEL = 1;
binding.Z_MAX_MEMLEVEL = 9;
binding.Z_DEFAULT_MEMLEVEL = 8;

binding.Z_MIN_LEVEL = -1;
binding.Z_MAX_LEVEL = 9;
binding.Z_DEFAULT_LEVEL = binding.Z_DEFAULT_COMPRESSION;

// expose all the zlib constants
var bkeys = Object.keys(binding);
for (var bk = 0; bk < bkeys.length; bk++) {
  var bkey = bkeys[bk];
  if (bkey.match(/^Z/)) {
    Object.defineProperty(exports, bkey, {
      enumerable: true, value: binding[bkey], writable: false
    });
  }
}

// translation table for return codes.
var codes = {
  Z_OK: binding.Z_OK,
  Z_STREAM_END: binding.Z_STREAM_END,
  Z_NEED_DICT: binding.Z_NEED_DICT,
  Z_ERRNO: binding.Z_ERRNO,
  Z_STREAM_ERROR: binding.Z_STREAM_ERROR,
  Z_DATA_ERROR: binding.Z_DATA_ERROR,
  Z_MEM_ERROR: binding.Z_MEM_ERROR,
  Z_BUF_ERROR: binding.Z_BUF_ERROR,
  Z_VERSION_ERROR: binding.Z_VERSION_ERROR
};

var ckeys = Object.keys(codes);
for (var ck = 0; ck < ckeys.length; ck++) {
  var ckey = ckeys[ck];
  codes[codes[ckey]] = ckey;
}

Object.defineProperty(exports, 'codes', {
  enumerable: true, value: Object.freeze(codes), writable: false
});

exports.Deflate = Deflate;
exports.Inflate = Inflate;
exports.Gzip = Gzip;
exports.Gunzip = Gunzip;
exports.DeflateRaw = DeflateRaw;
exports.InflateRaw = InflateRaw;
exports.Unzip = Unzip;

exports.createDeflate = function (o) {
  return new Deflate(o);
};

exports.createInflate = function (o) {
  return new Inflate(o);
};

exports.createDeflateRaw = function (o) {
  return new DeflateRaw(o);
};

exports.createInflateRaw = function (o) {
  return new InflateRaw(o);
};

exports.createGzip = function (o) {
  return new Gzip(o);
};

exports.createGunzip = function (o) {
  return new Gunzip(o);
};

exports.createUnzip = function (o) {
  return new Unzip(o);
};

// Convenience methods.
// compress/decompress a string or buffer in one step.
exports.deflate = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Deflate(opts), buffer, callback);
};

exports.deflateSync = function (buffer, opts) {
  return zlibBufferSync(new Deflate(opts), buffer);
};

exports.gzip = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gzip(opts), buffer, callback);
};

exports.gzipSync = function (buffer, opts) {
  return zlibBufferSync(new Gzip(opts), buffer);
};

exports.deflateRaw = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new DeflateRaw(opts), buffer, callback);
};

exports.deflateRawSync = function (buffer, opts) {
  return zlibBufferSync(new DeflateRaw(opts), buffer);
};

exports.unzip = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Unzip(opts), buffer, callback);
};

exports.unzipSync = function (buffer, opts) {
  return zlibBufferSync(new Unzip(opts), buffer);
};

exports.inflate = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Inflate(opts), buffer, callback);
};

exports.inflateSync = function (buffer, opts) {
  return zlibBufferSync(new Inflate(opts), buffer);
};

exports.gunzip = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gunzip(opts), buffer, callback);
};

exports.gunzipSync = function (buffer, opts) {
  return zlibBufferSync(new Gunzip(opts), buffer);
};

exports.inflateRaw = function (buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new InflateRaw(opts), buffer, callback);
};

exports.inflateRawSync = function (buffer, opts) {
  return zlibBufferSync(new InflateRaw(opts), buffer);
};

function zlibBuffer(engine, buffer, callback) {
  var buffers = [];
  var nread = 0;

  engine.on('error', onError);
  engine.on('end', onEnd);

  engine.end(buffer);
  flow();

  function flow() {
    var chunk;
    while (null !== (chunk = engine.read())) {
      buffers.push(chunk);
      nread += chunk.length;
    }
    engine.once('readable', flow);
  }

  function onError(err) {
    engine.removeListener('end', onEnd);
    engine.removeListener('readable', flow);
    callback(err);
  }

  function onEnd() {
    var buf;
    var err = null;

    if (nread >= kMaxLength) {
      err = new RangeError(kRangeErrorMessage);
    } else {
      buf = Buffer.concat(buffers, nread);
    }

    buffers = [];
    engine.close();
    callback(err, buf);
  }
}

function zlibBufferSync(engine, buffer) {
  if (typeof buffer === 'string') buffer = Buffer.from(buffer);

  if (!Buffer.isBuffer(buffer)) throw new TypeError('Not a string or buffer');

  var flushFlag = engine._finishFlushFlag;

  return engine._processChunk(buffer, flushFlag);
}

// generic zlib
// minimal 2-byte header
function Deflate(opts) {
  if (!(this instanceof Deflate)) return new Deflate(opts);
  Zlib.call(this, opts, binding.DEFLATE);
}

function Inflate(opts) {
  if (!(this instanceof Inflate)) return new Inflate(opts);
  Zlib.call(this, opts, binding.INFLATE);
}

// gzip - bigger header, same deflate compression
function Gzip(opts) {
  if (!(this instanceof Gzip)) return new Gzip(opts);
  Zlib.call(this, opts, binding.GZIP);
}

function Gunzip(opts) {
  if (!(this instanceof Gunzip)) return new Gunzip(opts);
  Zlib.call(this, opts, binding.GUNZIP);
}

// raw - no header
function DeflateRaw(opts) {
  if (!(this instanceof DeflateRaw)) return new DeflateRaw(opts);
  Zlib.call(this, opts, binding.DEFLATERAW);
}

function InflateRaw(opts) {
  if (!(this instanceof InflateRaw)) return new InflateRaw(opts);
  Zlib.call(this, opts, binding.INFLATERAW);
}

// auto-detect header.
function Unzip(opts) {
  if (!(this instanceof Unzip)) return new Unzip(opts);
  Zlib.call(this, opts, binding.UNZIP);
}

function isValidFlushFlag(flag) {
  return flag === binding.Z_NO_FLUSH || flag === binding.Z_PARTIAL_FLUSH || flag === binding.Z_SYNC_FLUSH || flag === binding.Z_FULL_FLUSH || flag === binding.Z_FINISH || flag === binding.Z_BLOCK;
}

// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.

function Zlib(opts, mode) {
  var _this = this;

  this._opts = opts = opts || {};
  this._chunkSize = opts.chunkSize || exports.Z_DEFAULT_CHUNK;

  Transform.call(this, opts);

  if (opts.flush && !isValidFlushFlag(opts.flush)) {
    throw new Error('Invalid flush flag: ' + opts.flush);
  }
  if (opts.finishFlush && !isValidFlushFlag(opts.finishFlush)) {
    throw new Error('Invalid flush flag: ' + opts.finishFlush);
  }

  this._flushFlag = opts.flush || binding.Z_NO_FLUSH;
  this._finishFlushFlag = typeof opts.finishFlush !== 'undefined' ? opts.finishFlush : binding.Z_FINISH;

  if (opts.chunkSize) {
    if (opts.chunkSize < exports.Z_MIN_CHUNK || opts.chunkSize > exports.Z_MAX_CHUNK) {
      throw new Error('Invalid chunk size: ' + opts.chunkSize);
    }
  }

  if (opts.windowBits) {
    if (opts.windowBits < exports.Z_MIN_WINDOWBITS || opts.windowBits > exports.Z_MAX_WINDOWBITS) {
      throw new Error('Invalid windowBits: ' + opts.windowBits);
    }
  }

  if (opts.level) {
    if (opts.level < exports.Z_MIN_LEVEL || opts.level > exports.Z_MAX_LEVEL) {
      throw new Error('Invalid compression level: ' + opts.level);
    }
  }

  if (opts.memLevel) {
    if (opts.memLevel < exports.Z_MIN_MEMLEVEL || opts.memLevel > exports.Z_MAX_MEMLEVEL) {
      throw new Error('Invalid memLevel: ' + opts.memLevel);
    }
  }

  if (opts.strategy) {
    if (opts.strategy != exports.Z_FILTERED && opts.strategy != exports.Z_HUFFMAN_ONLY && opts.strategy != exports.Z_RLE && opts.strategy != exports.Z_FIXED && opts.strategy != exports.Z_DEFAULT_STRATEGY) {
      throw new Error('Invalid strategy: ' + opts.strategy);
    }
  }

  if (opts.dictionary) {
    if (!Buffer.isBuffer(opts.dictionary)) {
      throw new Error('Invalid dictionary: it should be a Buffer instance');
    }
  }

  this._handle = new binding.Zlib(mode);

  var self = this;
  this._hadError = false;
  this._handle.onerror = function (message, errno) {
    // there is no way to cleanly recover.
    // continuing only obscures problems.
    _close(self);
    self._hadError = true;

    var error = new Error(message);
    error.errno = errno;
    error.code = exports.codes[errno];
    self.emit('error', error);
  };

  var level = exports.Z_DEFAULT_COMPRESSION;
  if (typeof opts.level === 'number') level = opts.level;

  var strategy = exports.Z_DEFAULT_STRATEGY;
  if (typeof opts.strategy === 'number') strategy = opts.strategy;

  this._handle.init(opts.windowBits || exports.Z_DEFAULT_WINDOWBITS, level, opts.memLevel || exports.Z_DEFAULT_MEMLEVEL, strategy, opts.dictionary);

  this._buffer = Buffer.allocUnsafe(this._chunkSize);
  this._offset = 0;
  this._level = level;
  this._strategy = strategy;

  this.once('end', this.close);

  Object.defineProperty(this, '_closed', {
    get: function () {
      return !_this._handle;
    },
    configurable: true,
    enumerable: true
  });
}

util.inherits(Zlib, Transform);

Zlib.prototype.params = function (level, strategy, callback) {
  if (level < exports.Z_MIN_LEVEL || level > exports.Z_MAX_LEVEL) {
    throw new RangeError('Invalid compression level: ' + level);
  }
  if (strategy != exports.Z_FILTERED && strategy != exports.Z_HUFFMAN_ONLY && strategy != exports.Z_RLE && strategy != exports.Z_FIXED && strategy != exports.Z_DEFAULT_STRATEGY) {
    throw new TypeError('Invalid strategy: ' + strategy);
  }

  if (this._level !== level || this._strategy !== strategy) {
    var self = this;
    this.flush(binding.Z_SYNC_FLUSH, function () {
      assert(self._handle, 'zlib binding closed');
      self._handle.params(level, strategy);
      if (!self._hadError) {
        self._level = level;
        self._strategy = strategy;
        if (callback) callback();
      }
    });
  } else {
    process.nextTick(callback);
  }
};

Zlib.prototype.reset = function () {
  assert(this._handle, 'zlib binding closed');
  return this._handle.reset();
};

// This is the _flush function called by the transform class,
// internally, when the last chunk has been written.
Zlib.prototype._flush = function (callback) {
  this._transform(Buffer.alloc(0), '', callback);
};

Zlib.prototype.flush = function (kind, callback) {
  var _this2 = this;

  var ws = this._writableState;

  if (typeof kind === 'function' || kind === undefined && !callback) {
    callback = kind;
    kind = binding.Z_FULL_FLUSH;
  }

  if (ws.ended) {
    if (callback) process.nextTick(callback);
  } else if (ws.ending) {
    if (callback) this.once('end', callback);
  } else if (ws.needDrain) {
    if (callback) {
      this.once('drain', function () {
        return _this2.flush(kind, callback);
      });
    }
  } else {
    this._flushFlag = kind;
    this.write(Buffer.alloc(0), '', callback);
  }
};

Zlib.prototype.close = function (callback) {
  _close(this, callback);
  process.nextTick(emitCloseNT, this);
};

function _close(engine, callback) {
  if (callback) process.nextTick(callback);

  // Caller may invoke .close after a zlib error (which will null _handle).
  if (!engine._handle) return;

  engine._handle.close();
  engine._handle = null;
}

function emitCloseNT(self) {
  self.emit('close');
}

Zlib.prototype._transform = function (chunk, encoding, cb) {
  var flushFlag;
  var ws = this._writableState;
  var ending = ws.ending || ws.ended;
  var last = ending && (!chunk || ws.length === chunk.length);

  if (chunk !== null && !Buffer.isBuffer(chunk)) return cb(new Error('invalid input'));

  if (!this._handle) return cb(new Error('zlib binding closed'));

  // If it's the last chunk, or a final flush, we use the Z_FINISH flush flag
  // (or whatever flag was provided using opts.finishFlush).
  // If it's explicitly flushing at some other time, then we use
  // Z_FULL_FLUSH. Otherwise, use Z_NO_FLUSH for maximum compression
  // goodness.
  if (last) flushFlag = this._finishFlushFlag;else {
    flushFlag = this._flushFlag;
    // once we've flushed the last of the queue, stop flushing and
    // go back to the normal behavior.
    if (chunk.length >= ws.length) {
      this._flushFlag = this._opts.flush || binding.Z_NO_FLUSH;
    }
  }

  this._processChunk(chunk, flushFlag, cb);
};

Zlib.prototype._processChunk = function (chunk, flushFlag, cb) {
  var availInBefore = chunk && chunk.length;
  var availOutBefore = this._chunkSize - this._offset;
  var inOff = 0;

  var self = this;

  var async = typeof cb === 'function';

  if (!async) {
    var buffers = [];
    var nread = 0;

    var error;
    this.on('error', function (er) {
      error = er;
    });

    assert(this._handle, 'zlib binding closed');
    do {
      var res = this._handle.writeSync(flushFlag, chunk, // in
      inOff, // in_off
      availInBefore, // in_len
      this._buffer, // out
      this._offset, //out_off
      availOutBefore); // out_len
    } while (!this._hadError && callback(res[0], res[1]));

    if (this._hadError) {
      throw error;
    }

    if (nread >= kMaxLength) {
      _close(this);
      throw new RangeError(kRangeErrorMessage);
    }

    var buf = Buffer.concat(buffers, nread);
    _close(this);

    return buf;
  }

  assert(this._handle, 'zlib binding closed');
  var req = this._handle.write(flushFlag, chunk, // in
  inOff, // in_off
  availInBefore, // in_len
  this._buffer, // out
  this._offset, //out_off
  availOutBefore); // out_len

  req.buffer = chunk;
  req.callback = callback;

  function callback(availInAfter, availOutAfter) {
    // When the callback is used in an async write, the callback's
    // context is the `req` object that was created. The req object
    // is === this._handle, and that's why it's important to null
    // out the values after they are done being used. `this._handle`
    // can stay in memory longer than the callback and buffer are needed.
    if (this) {
      this.buffer = null;
      this.callback = null;
    }

    if (self._hadError) return;

    var have = availOutBefore - availOutAfter;
    assert(have >= 0, 'have should not go down');

    if (have > 0) {
      var out = self._buffer.slice(self._offset, self._offset + have);
      self._offset += have;
      // serve some output to the consumer.
      if (async) {
        self.push(out);
      } else {
        buffers.push(out);
        nread += out.length;
      }
    }

    // exhausted the output buffer, or used all the input create a new one.
    if (availOutAfter === 0 || self._offset >= self._chunkSize) {
      availOutBefore = self._chunkSize;
      self._offset = 0;
      self._buffer = Buffer.allocUnsafe(self._chunkSize);
    }

    if (availOutAfter === 0) {
      // Not actually done.  Need to reprocess.
      // Also, update the availInBefore to the availInAfter value,
      // so that if we have to hit it a third (fourth, etc.) time,
      // it'll have the correct byte counts.
      inOff += availInBefore - availInAfter;
      availInBefore = availInAfter;

      if (!async) return true;

      var newReq = self._handle.write(flushFlag, chunk, inOff, availInBefore, self._buffer, self._offset, self._chunkSize);
      newReq.callback = callback; // this same function
      newReq.buffer = chunk;
      return;
    }

    if (!async) return false;

    // finished with the chunk.
    cb();
  }
};

util.inherits(Deflate, Zlib);
util.inherits(Inflate, Zlib);
util.inherits(Gzip, Zlib);
util.inherits(Gunzip, Zlib);
util.inherits(DeflateRaw, Zlib);
util.inherits(InflateRaw, Zlib);
util.inherits(Unzip, Zlib);
}).call(this)}).call(this,require('_process'))
},{"./binding":52,"_process":89,"assert":48,"buffer":54,"stream":105,"util":113}],54:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":50,"buffer":54,"ieee754":67}],55:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"./":56,"get-intrinsic":61}],56:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"function-bind":60,"get-intrinsic":61}],57:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],58:[function(require,module,exports){
'use strict';

var isCallable = require('is-callable');

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (toStr.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

module.exports = forEach;

},{"is-callable":71}],59:[function(require,module,exports){
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],60:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":59}],61:[function(require,module,exports){
'use strict';

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

try {
	null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
	// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
	var errorProto = getProto(getProto(e));
	INTRINSICS['%Error.prototype%'] = errorProto;
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"function-bind":60,"has":66,"has-symbols":63}],62:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;

},{"get-intrinsic":61}],63:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":64}],64:[function(require,module,exports){
'use strict';

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],65:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols/shams');

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":64}],66:[function(require,module,exports){
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":60}],67:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],68:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],69:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],70:[function(require,module,exports){
'use strict';

var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"call-bind/callBound":55,"has-tostringtag/shams":65}],71:[function(require,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};

},{}],72:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var GeneratorFunction;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
	}
	return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":65}],73:[function(require,module,exports){
(function (global){(function (){
'use strict';

var forEach = require('for-each');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var gOPD = require('gopd');

var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr) {
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"available-typed-arrays":49,"call-bind/callBound":55,"for-each":58,"gopd":62,"has-tostringtag/shams":65}],74:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
const tag_1 = require("./tag");
__exportStar(require("./tag"), exports);
__exportStar(require("./snbt"), exports);
/**
 * Decode a nbt tag from buffer.
 *
 * The result contains the decoded nbt value, the tag's name, if present,
 * and the length of how much was read from the buffer.
 */
function decode(buffer, options = {}) {
    const tagType = buffer.readUInt8(0);
    if (tagType == tag_1.TagType.End)
        return { name: null, value: null, length: 1 };
    let name = null;
    let offset = 1;
    if (!options.unnamed) {
        const len = buffer.readUInt16BE(offset);
        offset += 2;
        name = buffer.toString("utf-8", offset, offset += len);
    }
    const result = decodeTagValue(tagType, buffer, offset, !!options.useMaps);
    return { name, value: result.value, length: result.offset };
}
exports.decode = decode;
/**
 * Encode a nbt tag into a buffer.
 *
 * @param name Resulting tag will be unnamed if name is `null`.
 * @param tag If tag is `null`, only a zero byte is returned.
 */
function encode(name, tag) {
    let buffer = Buffer.alloc(1024), offset = 0;
    // write tag type
    offset = buffer.writeUInt8(tag == null ? tag_1.TagType.End : (0, tag_1.getTagType)(tag), offset);
    // write tag name
    if (tag != null && name != null)
        ({ buffer, offset } = writeString(name, buffer, offset));
    // write tag value
    if (tag != null)
        ({ buffer, offset } = encodeTagValue(tag, buffer, offset));
    return buffer.slice(0, offset);
}
exports.encode = encode;
/** Encode a string with it's length prefixed as unsigned 16 bit integer */
function writeString(text, buffer, offset) {
    const data = Buffer.from(text);
    buffer = accommodate(buffer, offset, data.length + 2);
    offset = buffer.writeUInt16BE(data.length, offset);
    data.copy(buffer, offset), offset += data.length;
    return { buffer, offset };
}
/** Double the size of the buffer until the required amount is reached. */
function accommodate(buffer, offset, size) {
    while (buffer.length < offset + size) {
        buffer = Buffer.concat([buffer, Buffer.alloc(buffer.length)]);
    }
    return buffer;
}
function decodeTagValue(type, buffer, offset, useMaps) {
    let value;
    switch (type) {
        case tag_1.TagType.Byte:
            value = new tag_1.Byte(buffer.readInt8((offset += 1) - 1));
            break;
        case tag_1.TagType.Short:
            value = new tag_1.Short(buffer.readInt16BE((offset += 2) - 2));
            break;
        case tag_1.TagType.Int:
            value = new tag_1.Int(buffer.readInt32BE((offset += 4) - 4));
            break;
        case tag_1.TagType.Long:
            {
                value = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getBigInt64(offset);
                offset += 8;
            }
            ;
            break;
        case tag_1.TagType.Float:
            value = new tag_1.Float(buffer.readFloatBE((offset += 4) - 4));
            break;
        case tag_1.TagType.Double:
            value = buffer.readDoubleBE((offset += 8) - 8);
            break;
        case tag_1.TagType.ByteArray: {
            const len = buffer.readUInt32BE(offset);
            offset += 4;
            value = buffer.slice(offset, offset += len);
            break;
        }
        case tag_1.TagType.String: {
            const len = buffer.readUInt16BE(offset);
            value = (offset += 2, buffer.toString("utf-8", offset, offset += len));
            break;
        }
        case tag_1.TagType.List: {
            const type = buffer.readUInt8(offset);
            const len = buffer.readUInt32BE(offset + 1);
            offset += 5;
            const items = [];
            for (let i = 0; i < len; i++) {
                ({ value, offset } = decodeTagValue(type, buffer, offset, useMaps));
                items.push(value);
            }
            value = items;
            break;
        }
        case tag_1.TagType.Compound: {
            const object = useMaps ? new Map : {};
            while (true) {
                const type = buffer.readUInt8(offset);
                offset += 1;
                if (type == tag_1.TagType.End)
                    break;
                const len = buffer.readUInt16BE(offset);
                offset += 2;
                const name = buffer.toString("utf-8", offset, offset += len);
                ({ value, offset } = decodeTagValue(type, buffer, offset, useMaps));
                if (useMaps)
                    object.set(name, value);
                else
                    object[name] = value;
            }
            value = object;
            break;
        }
        case tag_1.TagType.IntArray: {
            const length = buffer.readUInt32BE(offset);
            offset += 4;
            const array = value = new Int32Array(length);
            for (let i = 0; i < length; i++) {
                array[i] = buffer.readInt32BE(offset + i * 4);
            }
            offset += array.buffer.byteLength;
            break;
        }
        case tag_1.TagType.LongArray: {
            const length = buffer.readUInt32BE(offset);
            offset += 4;
            const dataview = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
            const array = value = new BigInt64Array(length);
            for (let i = 0; i < length; i++) {
                array[i] = dataview.getBigInt64(offset + i * 8);
            }
            offset += array.buffer.byteLength;
            break;
        }
        default: throw new Error(`Tag type ${type} not implemented`);
    }
    return { value: value, offset };
}
function encodeTagValue(tag, buffer, offset) {
    // since most of the data types are smaller than 8 bytes, allocate this amount
    buffer = accommodate(buffer, offset, 8);
    if (tag instanceof tag_1.Byte) {
        offset = tag.value < 0
            ? buffer.writeInt8(tag.value, offset)
            : buffer.writeUInt8(tag.value, offset);
    }
    else if (tag instanceof tag_1.Short) {
        offset = tag.value < 0
            ? buffer.writeInt16BE(tag.value, offset)
            : buffer.writeUInt16BE(tag.value, offset);
    }
    else if (tag instanceof tag_1.Int) {
        offset = tag.value < 0
            ? buffer.writeInt32BE(tag.value, offset)
            : buffer.writeUInt32BE(tag.value, offset);
    }
    else if (typeof tag == "bigint") {
        new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).setBigInt64(offset, tag);
        offset += 8;
    }
    else if (tag instanceof tag_1.Float) {
        offset = buffer.writeFloatBE(tag.value, offset);
    }
    else if (typeof tag == "number") {
        offset = buffer.writeDoubleBE(tag, offset);
    }
    else if (tag instanceof Buffer || tag instanceof Int8Array) {
        offset = buffer.writeUInt32BE(tag.length, offset);
        buffer = accommodate(buffer, offset, tag.length);
        (tag instanceof Buffer ? tag : Buffer.from(tag)).copy(buffer, offset);
        offset += tag.length;
    }
    else if (tag instanceof Array) {
        const type = tag.length > 0 ? (0, tag_1.getTagType)(tag[0]) : tag_1.TagType.End;
        offset = buffer.writeUInt8(type, offset);
        offset = buffer.writeUInt32BE(tag.length, offset);
        for (const item of tag) {
            if ((0, tag_1.getTagType)(item) != type)
                throw new Error("Odd tag type in list");
            ({ buffer, offset } = encodeTagValue(item, buffer, offset));
        }
    }
    else if (typeof tag == "string") {
        ({ buffer, offset } = writeString(tag, buffer, offset));
    }
    else if (tag instanceof Int32Array) {
        offset = buffer.writeUInt32BE(tag.length, offset);
        buffer = accommodate(buffer, offset, tag.byteLength);
        for (let i = 0; i < tag.length; i++) {
            buffer.writeInt32BE(tag[i], offset + i * 4);
        }
        offset += tag.byteLength;
    }
    else if (tag instanceof BigInt64Array) {
        offset = buffer.writeUInt32BE(tag.length, offset);
        buffer = accommodate(buffer, offset, tag.byteLength);
        const dataview = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        for (let i = 0; i < tag.length; i++) {
            dataview.setBigInt64(offset + i * 8, tag[i]);
        }
        offset += tag.byteLength;
    }
    else {
        for (const [key, value] of tag instanceof Map ? tag : Object.entries(tag)
            .filter(([_, v]) => v != null)) {
            offset = buffer.writeUInt8((0, tag_1.getTagType)(value), offset);
            ({ buffer, offset } = writeString(key, buffer, offset));
            ({ buffer, offset } = encodeTagValue(value, buffer, offset));
            buffer = accommodate(buffer, offset, 1);
        }
        offset = buffer.writeUInt8(0, offset);
    }
    return { buffer, offset };
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"./snbt":75,"./tag":76,"buffer":54}],75:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.stringify = void 0;
const nbt = require(".");
const unquotedRegExp = /^[0-9A-Za-z.+_-]+$/;
function stringify(tag, options = {}) {
    const pretty = !!options.pretty, breakLength = options.breakLength || 70;
    const quoteChar = options.quote == "single" ? "'" : options.quote == "double" ? '"' : null;
    const spaces = " ".repeat(4);
    function escapeString(text) {
        let q = quoteChar !== null && quoteChar !== void 0 ? quoteChar : '"';
        if (quoteChar == null) {
            for (let i = 0; i < text.length && i < 8; i++) {
                switch (text[i]) {
                    case "'":
                        q = '"';
                        break;
                    case '"':
                        q = "'";
                        break;
                    default: continue;
                }
                break;
            }
        }
        return `${q}${text.replace(RegExp(`[${q}\\\\]`, "g"), x => `\\${x}`)}${q}`;
    }
    function stringify(tag, depth) {
        const space = pretty ? " " : "", sep = pretty ? ", " : ",";
        if (tag instanceof nbt.Byte)
            return `${tag.value}b`;
        else if (tag instanceof nbt.Short)
            return `${tag.value}s`;
        else if (tag instanceof nbt.Int)
            return `${tag.value | 0}`;
        else if (typeof tag == "bigint")
            return `${tag}l`;
        else if (tag instanceof nbt.Float)
            return `${tag.value}f`;
        else if (typeof tag == "number")
            return Number.isInteger(tag) ? `${tag}.0` : tag.toString();
        else if (typeof tag == "string")
            return escapeString(tag);
        else if (tag instanceof Buffer
            || tag instanceof Int8Array)
            return `[B;${space}${[...tag].join(sep)}]`;
        else if (tag instanceof Int32Array)
            return `[I;${space}${[...tag].join(sep)}]`;
        else if (tag instanceof BigInt64Array)
            return `[L;${space}${[...tag].join(sep)}]`;
        else if (tag instanceof Array) {
            const list = tag.map(tag => stringify(tag, depth + 1));
            if (list.reduce((acc, x) => acc + x.length, 0) > breakLength
                || list.some(text => text.includes("\n"))) {
                return `[\n${list.map(text => spaces.repeat(depth)
                    + text).join(",\n")}\n${spaces.repeat(depth - 1)}]`;
            }
            else {
                return `[${list.join(sep)}]`;
            }
        }
        else {
            const pairs = (tag instanceof Map ? [...tag] : Object.entries(tag)
                .filter(([_, v]) => v != null))
                .map(([key, tag]) => {
                if (!unquotedRegExp.test(key))
                    key = escapeString(key);
                return `${key}:${space}${stringify(tag, depth + 1)}`;
            });
            if (pretty && pairs.reduce((acc, x) => acc + x.length, 0) > breakLength) {
                return `{\n${pairs.map(text => spaces.repeat(depth)
                    + text).join(",\n")}\n${spaces.repeat(depth - 1)}}`;
            }
            else {
                return `{${space}${pairs.join(sep)}${space}}`;
            }
        }
    }
    return stringify(tag, 1);
}
exports.stringify = stringify;
function parse(text, options = {}) {
    let index = 0, i = 0, char = "";
    const unexpectedEnd = () => new Error("Unexpected end");
    const unexpectedChar = (i) => {
        if (i == null)
            i = index;
        return new Error(`Unexpected character ${text[index]} at position ${index}`);
    };
    function skipWhitespace() {
        while (index < text.length) {
            if (text[index] != " " && text[index] != "\n")
                return;
            index += 1;
        }
    }
    function readNumber() {
        if (!"-0123456789".includes(text[index]))
            return null;
        i = index++;
        let hasFloatingPoint = false;
        while (index < text.length) {
            char = text[index++];
            if ("0123456789".includes(char)) {
                continue;
            }
            else if (char == ".") {
                if (hasFloatingPoint)
                    return (index--, null);
                hasFloatingPoint = true;
            }
            else if (char == "f" || char == "F") {
                return new nbt.Float(+text.slice(i, index - 1));
            }
            else if (char == "d" || char == "D") {
                return +text.slice(i, index - 1);
            }
            else if (char == "b" || char == "B") {
                return new nbt.Byte(+text.slice(i, index - 1));
            }
            else if (char == "s" || char == "S") {
                return new nbt.Short(+text.slice(i, index - 1));
            }
            else if (char == "l" || char == "L") {
                return BigInt(text.slice(i, index - 1));
            }
            else if (hasFloatingPoint) {
                return +text.slice(i, --index);
            }
            else
                return new nbt.Int(+text.slice(i, --index));
        }
        if (hasFloatingPoint)
            return +text.slice(i, index);
        else
            return new nbt.Int(+text.slice(i, index));
    }
    function readUnquotedString() {
        i = index;
        while (index < text.length) {
            if (!unquotedRegExp.test(text[index]))
                break;
            index++;
        }
        if (index - i == 0)
            throw index == text.length ? unexpectedEnd() : unexpectedChar();
        return text.slice(i, index);
    }
    function readQuotedString() {
        const quoteChar = text[index];
        i = ++index;
        let string = "";
        while (index < text.length) {
            char = text[index++];
            if (char == "\\") {
                string += text.slice(i, index - 1) + text[index];
                i = ++index;
            }
            else if (char == quoteChar)
                return string + text.slice(i, index - 1);
        }
        throw unexpectedEnd();
    }
    function readString() {
        if (text[index] == '"' || text[index] == "'")
            return readQuotedString();
        else
            return readUnquotedString();
    }
    function skipCommas(isFirst, end) {
        skipWhitespace();
        if (text[index] == ",") {
            if (isFirst)
                throw unexpectedChar();
            else
                index++, skipWhitespace();
        }
        else if (!isFirst && text[index] != end) {
            throw unexpectedChar();
        }
    }
    function readCompound() {
        const entries = [];
        let first = true;
        while (true) {
            skipCommas(first, "}"), first = false;
            if (text[index] == "}") {
                index++;
                return options.useMaps
                    ? new Map(entries)
                    : entries.reduce((obj, [k, v]) => (obj[k] = v, obj), {});
            }
            const key = readString();
            skipWhitespace();
            if (text[index++] != ":")
                throw unexpectedChar();
            entries.push([key, parse()]);
        }
    }
    function readArray(type) {
        const array = [];
        while (index < text.length) {
            skipCommas(array.length == 0, "]");
            if (text[index] == "]") {
                index++;
                if (type == "B")
                    return Buffer.from(array.map(v => +v));
                else if (type == "I")
                    return Int32Array.from(array.map(v => +v));
                else if (type == "L")
                    return BigInt64Array.from(array.map(v => BigInt(v)));
            }
            i = index;
            if (text[index] == "-")
                index++;
            while (index < text.length) {
                if (!"0123456789".includes(text[index]))
                    break;
                index++;
            }
            if (index - i == 0)
                throw unexpectedChar();
            if (unquotedRegExp.test(text[index]))
                throw unexpectedChar();
            array.push(text.slice(i, index));
        }
        throw unexpectedEnd();
    }
    function readList() {
        if ("BILbil".includes(text[index]) && text[index + 1] == ";") {
            return readArray(text[(index += 2) - 2].toUpperCase());
        }
        const array = [];
        while (index < text.length) {
            skipWhitespace();
            if (text[index] == ",") {
                if (array.length == 0)
                    throw unexpectedChar();
                else
                    index++, skipWhitespace();
            }
            else if (array.length > 0 && text[index] != "]") {
                throw unexpectedChar(index - 1);
            }
            if (text[index] == "]")
                return (index++, array);
            array.push(parse());
        }
        throw unexpectedEnd();
    }
    function parse() {
        skipWhitespace();
        i = index, char = text[index];
        if (char == "{")
            return (index++, readCompound());
        else if (char == "[")
            return (index++, readList());
        else if (char == '"' || char == "'")
            return readQuotedString();
        const value = readNumber();
        if (value != null && (index == text.length || !unquotedRegExp.test(text[index]))) {
            return value;
        }
        return text.slice(i, index) + readUnquotedString();
    }
    const value = parse();
    return value;
}
exports.parse = parse;

}).call(this)}).call(this,require("buffer").Buffer)
},{".":74,"buffer":54}],76:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagType = exports.Float = exports.Int = exports.Short = exports.Byte = exports.TagType = void 0;
var TagType;
(function (TagType) {
    TagType[TagType["End"] = 0] = "End";
    TagType[TagType["Byte"] = 1] = "Byte";
    TagType[TagType["Short"] = 2] = "Short";
    TagType[TagType["Int"] = 3] = "Int";
    TagType[TagType["Long"] = 4] = "Long";
    TagType[TagType["Float"] = 5] = "Float";
    TagType[TagType["Double"] = 6] = "Double";
    TagType[TagType["ByteArray"] = 7] = "ByteArray";
    TagType[TagType["String"] = 8] = "String";
    TagType[TagType["List"] = 9] = "List";
    TagType[TagType["Compound"] = 10] = "Compound";
    TagType[TagType["IntArray"] = 11] = "IntArray";
    TagType[TagType["LongArray"] = 12] = "LongArray";
})(TagType = exports.TagType || (exports.TagType = {}));
class Byte {
    constructor(value) {
        this.value = value;
    }
    valueOf() { return this.value; }
}
exports.Byte = Byte;
class Short {
    constructor(value) {
        this.value = value;
    }
    valueOf() { return this.value; }
}
exports.Short = Short;
class Int {
    constructor(value) {
        this.value = value;
    }
    valueOf() { return this.value; }
}
exports.Int = Int;
class Float {
    constructor(value) {
        this.value = value;
    }
    valueOf() { return this.value; }
}
exports.Float = Float;
function getTagType(tag) {
    if (tag instanceof Byte)
        return TagType.Byte;
    if (tag instanceof Short)
        return TagType.Short;
    if (tag instanceof Int)
        return TagType.Int;
    if (typeof tag == "bigint")
        return TagType.Long;
    if (tag instanceof Float)
        return TagType.Float;
    if (typeof tag == "number")
        return TagType.Double;
    if (tag instanceof Buffer || tag instanceof Int8Array)
        return TagType.ByteArray;
    if (typeof tag == "string")
        return TagType.String;
    if (tag instanceof Array)
        return TagType.List;
    if (tag.constructor == Object || tag instanceof Map)
        return TagType.Compound;
    if (tag instanceof Int32Array)
        return TagType.IntArray;
    if (tag instanceof BigInt64Array)
        return TagType.LongArray;
    throw new Error("Invalid tag value");
}
exports.getTagType = getTagType;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":54}],77:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],78:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],79:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;

},{}],80:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],81:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;

},{}],82:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg     = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":78,"./adler32":79,"./crc32":81,"./messages":86,"./trees":87}],83:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],84:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = require('../utils/common');
var adler32       = require('./adler32');
var crc32         = require('./crc32');
var inflate_fast  = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":78,"./adler32":79,"./crc32":81,"./inffast":83,"./inftrees":85}],85:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":78}],86:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],87:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":78}],88:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}],89:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],90:[function(require,module,exports){
'use strict';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],91:[function(require,module,exports){
(function (process){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
};
/*</replacement>*/

module.exports = Duplex;
var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');
require('inherits')(Duplex, Readable);
{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}
function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;
  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;
    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

// the no-half-open enforcer
function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(onEndNT, this);
}
function onEndNT(self) {
  self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
}).call(this)}).call(this,require('_process'))
},{"./_stream_readable":93,"./_stream_writable":95,"_process":89,"inherits":69}],92:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;
var Transform = require('./_stream_transform');
require('inherits')(PassThrough, Transform);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}
PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":94,"inherits":69}],93:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

module.exports = Readable;

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

var Buffer = require('buffer').Buffer;
var OurUint8Array = (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*<replacement>*/
var debugUtil = require('util');
var debug;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/buffer_list');
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'),
  getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes,
  ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
  ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
  ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;

// Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require('inherits')(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}
function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true;

  // Should close be emitted on destroy. Defaults to true.
  this.emitClose = options.emitClose !== false;

  // Should .destroy() be called after 'end' (and potentially 'finish')
  this.autoDestroy = !!options.autoDestroy;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  if (!(this instanceof Readable)) return new Readable(options);

  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5
  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex);

  // legacy
  this.readable = true;
  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }
  Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;
  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }
  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  }

  // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.
  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }
  return er;
}
Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder;
  // If setEncoding(null), decoder.encoding equals utf8
  this._readableState.encoding = this._readableState.decoder.encoding;

  // Iterate over current buffer to convert already stored Buffers:
  var p = this._readableState.buffer.head;
  var content = '';
  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }
  this._readableState.buffer.clear();
  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
};

// Don't raise the hwm > 1GB
var MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }
  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }
  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;
  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }
  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }
  if (ret !== null) this.emit('data', ret);
  return ret;
};
function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;
  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;
    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}
function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);
  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  }

  // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.
  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}
function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;
  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }
  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);
    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);
  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }
  return dest;
};
function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}
Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    for (var i = 0; i < len; i++) dests[i].emit('unpipe', this, {
      hasUnpiped: false
    });
    return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;
  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0;

    // Try start flowing on next tick if stream isn't explicitly paused
    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);
      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }
  return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);
  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }
  return res;
};
Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);
  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }
  return res;
};
function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;
  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true;

    // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}
function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()
    state.flowing = !state.readableListening;
    resume(this, state);
  }
  state.paused = false;
  return this;
};
function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}
function resume_(stream, state) {
  debug('resume', state.reading);
  if (!state.reading) {
    stream.read(0);
  }
  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  this._readableState.paused = true;
  return this;
};
function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null);
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;
  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }
    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };
  return this;
};
if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    }
    return createReadableStreamAsyncIterator(this);
  };
}
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
});

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}
function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);
  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}
function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length);

  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;
      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}
if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = require('./internal/streams/from');
    }
    return from(Readable, iterable, opts);
  };
}
function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../errors":90,"./_stream_duplex":91,"./internal/streams/async_iterator":96,"./internal/streams/buffer_list":97,"./internal/streams/destroy":98,"./internal/streams/from":100,"./internal/streams/state":102,"./internal/streams/stream":103,"_process":89,"buffer":54,"events":57,"inherits":69,"string_decoder/":106,"util":51}],94:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;
var _require$codes = require('../errors').codes,
  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
  ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
  ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require('./_stream_duplex');
require('inherits')(Transform, Duplex);
function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }
  ts.writechunk = null;
  ts.writecb = null;
  if (data != null)
    // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}
function prefinish() {
  var _this = this;
  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}
Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;
  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};
Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};
function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null)
    // single equals check for both `null` and `undefined`
    stream.push(data);

  // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
},{"../errors":90,"./_stream_duplex":91,"inherits":69}],95:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

var Buffer = require('buffer').Buffer;
var OurUint8Array = (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'),
  getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes,
  ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
  ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
  ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
  ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
  ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
  ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
  ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require('inherits')(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // Should close be emitted on destroy. Defaults to true.
  this.emitClose = options.emitClose !== false;

  // Should .destroy() be called after 'finish' (and potentially 'end')
  this.autoDestroy = !!options.autoDestroy;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};
(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}
function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.

  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5
  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex);

  // legacy.
  this.writable = true;
  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }
  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END();
  // TODO: defer error events consistently everywhere, not just the cb
  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var er;
  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }
  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }
  return true;
}
Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);
  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }
  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }
  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};
Writable.prototype.cork = function () {
  this._writableState.corked++;
};
Writable.prototype.uncork = function () {
  var state = this._writableState;
  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;
  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }
  return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}
function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}
function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;
    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }
    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}
function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;
  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }
    if (entry === null) state.lastBufferedRequest = null;
  }
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}
Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;
  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }
  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending) endWritable(this, state, cb);
  return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});
function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      errorOrDestroy(stream, err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}
function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;
        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }
  return need;
}
function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }

  // reuse the free corkReq.
  state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../errors":90,"./_stream_duplex":91,"./internal/streams/destroy":98,"./internal/streams/state":102,"./internal/streams/stream":103,"_process":89,"buffer":54,"inherits":69,"util-deprecate":108}],96:[function(require,module,exports){
(function (process){(function (){
'use strict';

var _Object$setPrototypeO;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var finished = require('./end-of-stream');
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');
function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}
function readAndResolve(iter) {
  var resolve = iter[kLastResolve];
  if (resolve !== null) {
    var data = iter[kStream].read();
    // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'
    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}
function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }
      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },
  next: function next() {
    var _this = this;
    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];
    if (error !== null) {
      return Promise.reject(error);
    }
    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }
    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    }

    // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time
    var lastPromise = this[kLastPromise];
    var promise;
    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();
      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }
      promise = new Promise(this[kHandlePromise]);
    }
    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;
  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;
  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();
      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject];
      // reject if we are waiting for data in the Promise
      // returned by next() and store the error
      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }
      iterator[kError] = err;
      return;
    }
    var resolve = iterator[kLastResolve];
    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }
    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};
module.exports = createReadableStreamAsyncIterator;
}).call(this)}).call(this,require('_process'))
},{"./end-of-stream":99,"_process":89}],97:[function(require,module,exports){
'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _require = require('buffer'),
  Buffer = _require.Buffer;
var _require2 = require('util'),
  inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/function () {
  function BufferList() {
    _classCallCheck(this, BufferList);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;
      while (p = p.next) ret += s + p.data;
      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;
      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    }

    // Consumes a specified amount of bytes or characters from the buffered data.
  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;
      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }
      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    }

    // Consumes a specified amount of characters from the buffered data.
  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      this.length -= c;
      return ret;
    }

    // Consumes a specified amount of bytes from the buffered data.
  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      this.length -= c;
      return ret;
    }

    // Make sure the linked list only shows the minimal necessary information.
  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);
  return BufferList;
}();
},{"buffer":54,"util":51}],98:[function(require,module,exports){
(function (process){(function (){
'use strict';

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;
  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;
  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }
  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });
  return this;
}
function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}
function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}
function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }
  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}
function emitErrorNT(self, err) {
  self.emit('error', err);
}
function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.

  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}
module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
}).call(this)}).call(this,require('_process'))
},{"_process":89}],99:[function(require,module,exports){
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).

'use strict';

var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
  };
}
function noop() {}
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;
  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };
  var writableEnded = stream._writableState && stream._writableState.finished;
  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };
  var readableEnded = stream._readableState && stream._readableState.endEmitted;
  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };
  var onerror = function onerror(err) {
    callback.call(stream, err);
  };
  var onclose = function onclose() {
    var err;
    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };
  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };
  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }
  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}
module.exports = eos;
},{"../../../errors":90}],100:[function(require,module,exports){
module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};

},{}],101:[function(require,module,exports){
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).

'use strict';

var eos;
function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}
var _require$codes = require('../../../errors').codes,
  ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
  ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = require('./end-of-stream');
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true;

    // request.destroy just do .end - .abort is what we want
    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}
function call(fn) {
  fn();
}
function pipe(from, to) {
  return from.pipe(to);
}
function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}
function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }
  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }
  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}
module.exports = pipeline;
},{"../../../errors":90,"./end-of-stream":99}],102:[function(require,module,exports){
'use strict';

var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }
    return Math.floor(hwm);
  }

  // Default value
  return state.objectMode ? 16 : 16 * 1024;
}
module.exports = {
  getHighWaterMark: getHighWaterMark
};
},{"../../../errors":90}],103:[function(require,module,exports){
module.exports = require('events').EventEmitter;

},{"events":57}],104:[function(require,module,exports){
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":54}],105:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/lib/_stream_readable.js');
Stream.Writable = require('readable-stream/lib/_stream_writable.js');
Stream.Duplex = require('readable-stream/lib/_stream_duplex.js');
Stream.Transform = require('readable-stream/lib/_stream_transform.js');
Stream.PassThrough = require('readable-stream/lib/_stream_passthrough.js');
Stream.finished = require('readable-stream/lib/internal/streams/end-of-stream.js')
Stream.pipeline = require('readable-stream/lib/internal/streams/pipeline.js')

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":57,"inherits":69,"readable-stream/lib/_stream_duplex.js":91,"readable-stream/lib/_stream_passthrough.js":92,"readable-stream/lib/_stream_readable.js":93,"readable-stream/lib/_stream_transform.js":94,"readable-stream/lib/_stream_writable.js":95,"readable-stream/lib/internal/streams/end-of-stream.js":99,"readable-stream/lib/internal/streams/pipeline.js":101}],106:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":104}],107:[function(require,module,exports){
(function (global){(function (){
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __esDecorate = function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.push(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.push(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };

    __runInitializers = function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };

    __propKey = function (x) {
        return typeof x === "symbol" ? x : "".concat(x);
    };

    __setFunctionName = function (f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],108:[function(require,module,exports){
(function (global){(function (){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],109:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],110:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":109,"_process":89,"inherits":68}],111:[function(require,module,exports){
arguments[4][109][0].apply(exports,arguments)
},{"dup":109}],112:[function(require,module,exports){
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

'use strict';

var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== 'object') {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch(e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return (
    isTypedArray(value) ||
    isDataView(value)
  );
}
exports.isArrayBufferView = isArrayBufferView;


function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
  typeof Map !== 'undefined' &&
  isMapToString(new Map())
);

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working
    ? isMapToString(value)
    : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
  typeof Set !== 'undefined' &&
  isSetToString(new Set())
);
function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working
    ? isSetToString(value)
    : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
  typeof WeakMap !== 'undefined' &&
  isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working
    ? isWeakMapToString(value)
    : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
  typeof WeakSet !== 'undefined' &&
  isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
  return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working
    ? isArrayBufferToString(value)
    : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  typeof DataView !== 'undefined' &&
  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working
    ? isDataViewToString(value)
    : value instanceof DataView;
}
exports.isDataView = isDataView;

// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working
    ? isSharedArrayBufferToString(value)
    : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return (
    isNumberObject(value) ||
    isStringObject(value) ||
    isBooleanObject(value) ||
    isBigIntObject(value) ||
    isSymbolObject(value)
  );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (
    isArrayBuffer(value) ||
    isSharedArrayBuffer(value)
  );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});

},{"is-arguments":70,"is-generator-function":72,"is-typed-array":73,"which-typed-array":114}],113:[function(require,module,exports){
(function (process){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnvRegex = /^$/;

if (process.env.NODE_DEBUG) {
  var debugEnv = process.env.NODE_DEBUG;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/,/g, '$|^')
    .toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}
exports.debuglog = function(set) {
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').slice(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.slice(1, -1);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');

function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)) },
            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

}).call(this)}).call(this,require('_process'))
},{"./support/isBuffer":111,"./support/types":112,"_process":89,"inherits":69}],114:[function(require,module,exports){
(function (global){(function (){
'use strict';

var forEach = require('for-each');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var gOPD = require('gopd');

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();

var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof g[typedArray] === 'function') {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr) {
				var proto = getPrototypeOf(arr);
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor) {
					var superProto = getPrototypeOf(proto);
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				toStrTags[typedArray] = descriptor.get;
			}
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = require('is-typed-array');

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"available-typed-arrays":49,"call-bind/callBound":55,"for-each":58,"gopd":62,"has-tostringtag/shams":65,"is-typed-array":73}],115:[function(require,module,exports){
'use strict';

module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};

},{}]},{},[35])(35)
});
