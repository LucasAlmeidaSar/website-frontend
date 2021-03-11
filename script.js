// Animação ao carregar a página
function animationPreLoad(){     
    document.getElementById("icon-background").classList.remove("pre-load");
    document.getElementById("icon-header").classList.remove("pre-load");
    document.getElementById("h1-header").classList.remove("pre-load");
    document.getElementById("p-header").classList.remove("pre-load");
}
onload = animationPreLoad();


// Trabalhando com o menu escondido
// Capturando elementos
const check = document.querySelector("#hamburguer-check");
const menu = document.getElementById("container-menu");
const header = document.getElementById("header-top");
const main = document.getElementById("main-content");
const footer = document.getElementById("footer");

// Exibindo Menu
function showMenu(bool){
  if(bool){
    header.style.filter = "blur(10px)";
    main.style.filter = "blur(10px)";
    footer.style.filter = "blur(10px)";
    menu.classList.remove("hide");
  }else{
    header.style.filter = "blur(0px)";
    main.style.filter = "blur(0px)";
    footer.style.filter = "blur(0px)";
    menu.classList.add("hide");
  }
}

check.addEventListener("change", function (e) {
    if (check.checked) {
       showMenu(true);
    }else{
      showMenu(false);
    }
})


//Caso eu redimensione a tela para um tamanho maior que 426px enquanto meu menu-hamburguer esteja ativo.

function tamanhoDaTela(){    
    var windowWidth = window.innerWidth;      
    return windowWidth; // Capturo o tamanho da janela atual
}
window.addEventListener('resize', function() {
   var larguraTela = tamanhoDaTela();
   if (larguraTela > 426) {
        check.checked = 0;
        showMenu(false);
   }   
});



// JQUERY para Scroll nos links

$('#nav-top a').on('click', function (e) {
  if (this.hash != '') {
    e.preventDefault();
    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top - 68
      },800);
  }
});

$('#container-menu a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();  
      const hash = this.hash;
  
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top - 10
        },800);

        check.checked = 0;
        showMenu(false);
    }
  });

