const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

// Cambia el tema al hacer clic en el botón
toggleTheme.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    toggleIcon.src = isDark ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
    toggleText.textContent = isDark ? "Light Mode" : "Dark Mode";
});
