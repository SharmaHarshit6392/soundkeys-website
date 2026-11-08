const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "CLOSE" : "MENU";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "MENU";
}));
document.querySelector("#year").textContent = new Date().getFullYear();

// Set this to the exact public installer URL when the release is approved.
const DOWNLOAD_URL = "";
const downloadButton = document.querySelector(".download-main");
if (DOWNLOAD_URL) {
  downloadButton.href = DOWNLOAD_URL;
  downloadButton.removeAttribute("aria-disabled");
  downloadButton.classList.remove("button-disabled");
  downloadButton.innerHTML = 'DOWNLOAD FOR WINDOWS <span>↗</span>';
}