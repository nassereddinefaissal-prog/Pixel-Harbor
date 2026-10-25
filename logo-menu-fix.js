
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(
    "#logo, .logo, .site-logo, .navbar-brand, header img"
  );

  if (!logo) return;

  logo.style.cursor = "pointer";

  logo.addEventListener("click", (event) => {
    event.preventDefault();

    const menu =
      document.querySelector("#menu") ||
      document.querySelector("#catalog") ||
      document.querySelector("#sec-PS5");

    if (menu) {
      menu.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(null, "", "#" + menu.id);
    }
  });
});
