document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-theme");
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && prefersDark)) {
    document.body.classList.add("dark");
  }
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
});