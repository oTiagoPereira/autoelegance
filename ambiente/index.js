document.getElementById("bot-menu").addEventListener("click", function () {
  const menu = document.getElementById("menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

window.addEventListener("resize", function () {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
});

function adjustBoxPosition() {
  const box = document.querySelector(".vertical-menu");
  const windowWidth = window.innerWidth;

  box.style.width = windowWidth * 0.4 + "px";
}

adjustBoxPosition();
window.addEventListener("resize", adjustBoxPosition);
