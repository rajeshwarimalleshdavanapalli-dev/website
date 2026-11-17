const loginForm = document.querySelector("[data-demo-login]");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sessionStorage.setItem("aryansCafeDemoSession", "active");

    const allowedPages = new Set([
      "index.html",
      "website.html",
      "story.html",
      "menu.html",
      "favorites.html",
      "visit.html",
    ]);
    const requestedPage = new URLSearchParams(window.location.search).get("next");
    const destination = allowedPages.has(requestedPage) ? requestedPage : "index.html";
    window.location.replace(destination);
  });
}
