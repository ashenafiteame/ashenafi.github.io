// Get the current year and update the footer
document.addEventListener("DOMContentLoaded", (event) => {
  const yearSpan = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
