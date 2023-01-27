$(document).ready(function () {
    loadCommands();
    $("#command-search-input").on("keypress", function (event) {
        if (event.keyCode == 13) {
            searchCommands();
        }
    });
});

function loadCommands(filter) {
    $.get(`https://raw.githubusercontent.com/Racooder/DiamondFire-Tools/2.1-Commands/data/commands.json`, function (data) {
        const commandList = JSON.parse(data);
        for (const cmdGroup of commandList) {
            let foundFilter = false;
            let groupIsFilter = false;
            if (cmdGroup.title.toLowerCase().includes(filter)) {
                foundFilter = true;
                groupIsFilter = true;
            }
            let groupObject = `<div class="command-group foldable unfolded"><span class="unselectable" data-translate="true" data-content="${cmdGroup.title}"></span>`;
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
                groupObject += `<span data-translate="true" data-content="${cmd.description}"></span>`;
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
        translateAll();
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
