// Elementos do Header
const iconBackground = document.getElementById("icon-background")
const iconHeader = document.getElementById("icon-header")
const titleHeader = document.getElementById("h1-header")
const subtitleHeader = document.getElementById("p-header")



// Função auxiliar para adicionar ou remover classes
function AddRemoveClass(bool ,className, ...elements){    
  if(bool){
    for (const element of elements) {
      element.classList.add(className)
    }
  }else{
    for (const element of elements) {
      element.classList.remove(className)
    }
  }
}




// Animação ao carregar a página
onload = function animationPreLoad(){      
  AddRemoveClass(false, "pre-load", iconBackground, iconHeader, titleHeader, subtitleHeader)
}




// Trabalhando com o menu escondido
// Capturando elementos
const check = document.querySelector("#hamburguer-check")
const menu = document.getElementById("container-menu")
const header = document.getElementById("header-top")
const main = document.getElementById("main-content")
const footer = document.getElementById("footer")


// Função que exibe ou oculta o menu
function hideShowMenu(bool){
  if(bool){
    toggleBlur(true, 10, header, main, footer)   
    AddRemoveClass(false, "hide", menu)
  }else{
    toggleBlur(false, 0, header, main, footer)    
    AddRemoveClass(true, "hide", menu)
  }
}

// Adiciona ou remove o blur nos elementos
function toggleBlur(bool, pixel, ...elements){
    if (bool) {
      for(const element of elements){
        element.style.filter = "blur("+pixel+"px)"
      }
    }else{
      for(const element of elements){
        element.style.filter = "blur(0px)"
      }
    }
}

// Evento ao marcar ou desmarcar meu checkbox do menu
check.addEventListener("change", function (e) {
    if (check.checked) {
      hideShowMenu(true);
    }else{
      hideShowMenu(false);
    }
})







//Caso eu redimensione a tela para um tamanho maior que 426px enquanto meu menu-hamburguer esteja ativo.

function getCurrentScreenSize() {
  var widthWindow = window.innerWidth; 
  return widthWindow; // Capturo o tamanho da janela atual
}       
    

window.addEventListener('resize', function() {
   let currentScreenSize = getCurrentScreenSize()
   
   if (currentScreenSize > 426) {
        check.checked = 0;
        hideShowMenu(false);
   }   
});





// JQUERY para Scroll nos links

$('#nav-top a').on('click', function (e) {
  if (this.hash != '') {
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 68
      },800);
  }
});

$('#container-menu a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();  
      const hash = this.hash;
  
      $('html, body').animate({
          scrollTop: $(hash).offset().top - 10
        },800);

        check.checked = 0;
        hideShowMenu(false);
    }
  });

