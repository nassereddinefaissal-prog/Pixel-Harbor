
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("header .logo");

  if (!logo) return;

  logo.style.cursor = "pointer";
  logo.setAttribute("role", "link");
  logo.setAttribute("tabindex", "0");
  logo.setAttribute("aria-label", "Pixel Harbor - back to game menu");

  function goToMenu(event) {
    if (event) event.preventDefault();

    // Close the game details view.
    const detail = document.querySelector("#detail");
    if (detail) detail.hidden = true;

    // Restore the main store sections.
    ["#hero", "#chips", "#sections"].forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) element.hidden = false;
    });

    // Return to the games menu.
    history.replaceState(null, "", location.pathname + location.search);

    requestAnimationFrame(() => {
      const menu =
        document.querySelector("#sec-PS5") ||
        document.querySelector("#sections");

      if (menu) {
        menu.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  logo.addEventListener("click", goToMenu);

  logo.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      goToMenu(event);
    }
  });
});
