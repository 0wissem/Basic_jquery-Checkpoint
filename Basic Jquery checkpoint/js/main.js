function bold() {
    $("p").css("fontWeight", "bold");
}
function italic() {
    $("p").css("fontStyle", "italic");
}
function underlined() {
    $("p").css("textDecoration", "underline");
}

function changeSize(s) {
    $("p").css("font-size", s.value)
}
function changeFamily(f) {
    $("p").css("font-family", f.value)
}