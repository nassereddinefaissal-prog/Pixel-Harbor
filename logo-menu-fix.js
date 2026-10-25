
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("header .logo");
  if (!logo) return;

  logo.style.cursor = "pointer";

  function returnToHome(event) {
    event.preventDefault();

    // Close the game details.
    document.querySelector("#detail").hidden = true;

    // Restore the REAL homepage and all game sections.
    ["#hero", "#chips", "#sections"].forEach(selector => {
      document.querySelector(selector).hidden = false;
    });

    // Remove any game-section URL hash.
    history.replaceState(
      null,
      "",
      location.pathname + location.search
    );

    // Return to the very top: the REAL homepage.
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  logo.addEventListener("click", returnToHome);
});
