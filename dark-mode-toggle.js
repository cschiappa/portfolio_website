const darkModeToggle = document.getElementById("darkModeToggle");
const textDark = document.getElementById("textDark");
const html = document.documentElement;


darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        textDark.innerHTML = "darker";
        html.setAttribute("data-theme", "light");

    } else {
        textDark.innerHTML = "lighter";
        html.setAttribute("data-theme", "dark");
    }
});
