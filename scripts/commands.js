$(document).ready(function () {
    $(".foldable").click(function () {
        switchFold(this);
    });
});

function switchFold(element) {
    if ($(element).hasClass("folded")) {
        $(element).removeClass("folded");
        $(element).addClass("unfolded");
    } else {
        $(element).removeClass("unfolded");
        $(element).addClass("folded");
    }
}
