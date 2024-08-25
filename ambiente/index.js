document.getElementById("bot-menu").addEventListener("click", function() {
    const menu = document.getElementById("menu");
  
    if (menu.style.display === "flex") {
      menu.style.display = "none";  
    } else {
      menu.style.display = "flex"; 
    }
  });

  window.addEventListener("resize", function() {
    const menu = document.getElementById("menu");
      menu.style.display = "none";
  });
  
  function adjustBoxPosition() {
    const box = document.querySelector('.vertical-menu');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    // Define a posição do box como uma fração do tamanho da janela
    // box.style.top = (windowHeight * 0.) + 'px'; // 30% da altura da janela
    box.style.right = (windowWidth * 0.1) + 'px'; // 30% da largura da janela
  }

  adjustBoxPosition();

// Adiciona um listener para ajustar a posição quando a janela é redimensionada
window.addEventListener('resize', adjustBoxPosition)