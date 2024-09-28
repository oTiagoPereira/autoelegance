const menu = document.getElementById("menu");
let menuItens = document.querySelectorAll(".menuItens");

function mostraMenu() {
  menuItens.forEach(function (item) {
    item.addEventListener("click", function () {
      menu.style.width = "0";
    });
  });
  if (menu.style.width && menu.style.width !== "0px") {
    menu.style.width = "0";
  } else {
    menu.style.display = "flex";
    menu.style.width = "250px";
  }
}
