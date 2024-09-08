const menu = document.getElementById("menu");
let menuItems = document.querySelectorAll(".menuItens");

function mostraMenu() {
  menuItems.forEach(function(item) {
    item.addEventListener("click", function () {
      menu.style.width = "0"; 
    });
  });
  if (menu.style.width && menu.style.width !== "0px") {
    menu.style.width = "0";
  } else {
    menu.style.width = '250px';
    menu.style.display = 'flex';
  }
}
