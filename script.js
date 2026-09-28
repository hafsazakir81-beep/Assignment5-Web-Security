function escapeHTML(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

let input = "<b>Hello</b>";

console.log(escapeHTML(input));
function checkURL(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return "Safe URL";
    } else {
        return "Invalid URL";
    }
}

console.log(checkURL("javascript:alert(1)"));