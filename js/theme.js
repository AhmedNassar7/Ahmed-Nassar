function toggleThemeOptions() {
    var options = document.getElementById("themeOptions");
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save selected theme to localStorage
}

// Retrieve theme from localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('default'); // Default theme
}
