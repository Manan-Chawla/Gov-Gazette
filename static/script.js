const toggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// Toggle theme
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});
