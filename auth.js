const demoSessionKey = "aryansCafeDemoSession";
const allowedPages = new Set([
  "index.html",
  "website.html",
  "story.html",
  "menu.html",
  "favorites.html",
  "visit.html",
]);
const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (sessionStorage.getItem(demoSessionKey) !== "active") {
  const next = allowedPages.has(currentPage) ? currentPage : "index.html";
  window.location.replace(`login.html?next=${encodeURIComponent(next)}`);
} else {
  const nav = document.querySelector(".nav");
  if (nav) {
    const signOut = document.createElement("button");
    signOut.className = "auth-logout";
    signOut.type = "button";
    signOut.textContent = "Sign out";
    signOut.addEventListener("click", () => {
      sessionStorage.removeItem(demoSessionKey);
      window.location.replace("login.html");
    });
    nav.append(signOut);
  }
}
