const darkModeToggle = document.getElementById("darkModeToggle");
const lightStyles = document.getElementById("lightStyles");
const darkStyles = document.getElementById("darkStyles");
const body = document.body;
const textDark = document.getElementById("textDark")

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        lightStyles.disabled = true;
        darkStyles.disabled = false;
        body.classList.add("dark-mode-style");
        textDark.innerHTML = "darker";

    } else {
        lightStyles.disabled = false;
        darkStyles.disabled = true;
        body.classList.remove("dark-mode-style");
        textDark.innerHTML = "lighter";
    }
});
