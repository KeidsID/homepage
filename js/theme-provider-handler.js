document.addEventListener("DOMContentLoaded", () => {
  const themeProvider = document.getElementById("theme-provider");

  const themeSwitcher = document.getElementById("theme-switcher");
  const gratitudeHeader = document.getElementById("gratitude-header");
  const gratitudeBody = document.getElementById("gratitude-body");

  themeSwitcher.addEventListener("click", () => {
    if (themeProvider.getAttribute("href") === "styles/light-theme-vars.css") {
      themeProvider.setAttribute("href", "styles/dark-theme-vars.css");
      themeSwitcher.textContent = "Dark Mode";
      gratitudeHeader.textContent = "❤️❤️❤️";
      gratitudeBody.textContent =
        "Thx for the Git/Github materials Binary Studio ❤️";
    } else {
      themeProvider.setAttribute("href", "styles/light-theme-vars.css");
      themeSwitcher.textContent = "Light Mode";
      gratitudeHeader.textContent = "🐛🪲🐛";
      gratitudeBody.textContent =
        "🐛🪲🐛 🐛🪲🐛 🐛🪲🐛 🐛🪲🐛🪲🐛🪲🐛🪲🐛🪲 🐛🪲";
    }
  });
});
