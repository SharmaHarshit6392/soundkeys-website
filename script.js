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

// Official SoundKeys 1.0.0 installer hosted on GitHub Releases.
const DOWNLOAD_URL = "https://github.com/SharmaHarshit6392/sound_keys/releases/download/v1.0.0/SoundKeys-Setup-1.0.0.exe";
const downloadButton = document.querySelector(".download-main");
if (DOWNLOAD_URL) {
  downloadButton.href = DOWNLOAD_URL;
  downloadButton.removeAttribute("aria-disabled");
  downloadButton.classList.remove("button-disabled");
  downloadButton.innerHTML = 'DOWNLOAD FOR WINDOWS <span>↗</span>';
}