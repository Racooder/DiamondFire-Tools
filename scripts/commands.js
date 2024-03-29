"use strict";

$(document).ready(function () {
    (function loadCommandsWait(i) {
        setTimeout(function() {
            if (translationDone) {
                loadCommands();
                return;
            }
            if (--i) loadCommandsWait(i);
        }, 100)
    })(50);
    $("#command-search-input").on("keypress", function (event) {
        if (event.keyCode == 13) {
            searchCommands();
        }
    });
});

function loadCommands(filter) {
    $.get(`/data/commands.json`, function (commandList) {
        for (const cmdGroup of commandList) {
            let foundFilter = false;
            let groupIsFilter = false;
            if (cmdGroup.title.toLowerCase().includes(filter)) {
                foundFilter = true;
                groupIsFilter = true;
            }
            let groupObject = `<div class="command-group foldable unfolded"><div><span class="unselectable translate" data-content="${cmdGroup.title}">${translate(cmdGroup.title)}</span><img class='dropdown-arrow'></div>`;
            for (const cmd of cmdGroup.commands) {
                if (!groupIsFilter) {
                    let found = false;
                    if (translate(cmd.description).toLowerCase().includes(filter)) {
                        found = true;
                        foundFilter = true;
                    }
                    for (const instruction of cmd.commands) {
                        if (instruction.toLowerCase().includes(filter)) {
                            found = true;
                            foundFilter = true;
                        }
                    }
                    if (!found && filter != undefined) {
                        continue;
                    }
                }
                groupObject += `<ul class="command-list"><li class="command-list"><h3>${cmd.commands[0].charAt(0).toUpperCase() + cmd.commands[0].slice(1)}</h3>`;
                groupObject += `<ul>`;
                for (const instruction of cmd.commands) {
                    groupObject += `<li>/${instruction}`;
                    for (const arg of cmd.args) {
                        groupObject += ` <code>${arg}</code>`;
                    }
                    for (const opt of cmd.optionals) {
                        groupObject += ` <code>${opt}?</code>`;
                    }
                    groupObject += "</li>";
                }
                groupObject += `</ul>`;
                groupObject += `<span class="translate" data-content="${cmd.description}">${translate(cmd.description)}</span>`;
                groupObject += `</li>`;
                groupObject += "</ul>";
            }
            groupObject += "</div>";
            if (foundFilter || filter == undefined) {
                $("#command-list").append(groupObject);
            }
        }
    });
    delay(500).then(() => {
        $(".foldable").click(function () {
            switchFold(this);
        });
        $(".command-list").click(function (event) {
            event.stopPropagation();
        });
    });
}

function searchCommands() {
    $("#command-list").empty();
    loadCommands($("#command-search-input").val().toLowerCase());
}

function switchFold(element) {
    if ($(element).hasClass("folded")) {
        $(element).removeClass("folded");
        $(element).addClass("unfolded");
    } else {
        $(element).removeClass("unfolded");
        $(element).addClass("folded");
        element.scrollIntoView();
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
