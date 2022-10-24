// Botão Scroll to top
const scrollBtn = document.querySelector(".upArrow")

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 50){
        scrollBtn.style.display = "none";
    }
    else {
        scrollBtn.style.display = "block";
    }
}
refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});
// Fim Botão



// Botoes Menus
var botaoMenuPrincipal = document.getElementById("botaoMenuPrincipal");
var botaoBebidasAlcoolicas = document.getElementById("botaoBebidasAlcoolicas");
var botaoBebidasNaoAlcoolicas = document.getElementById("botaoBebidasNaoAlcoolicas");
var botaoSobremesas = document.getElementById("botaoSobremesas");


var menuPrincipal = document.getElementById("menuPrincipal");
var bebidasAlcoolicas = document.getElementById("bebidasAlcoolicas");
var bebidasNaoAlcoolicas = document.getElementById("bebidasNaoAlcoolicas");
var sobremesas = document.getElementById("sobremesas");

var botaoPorcoes = document.getElementById("botaoPorcoes");

var porcoes = document.getElementById("porcoes");




addEventListener("DOMContentLoaded", function() {
    botaoMenuPrincipal.style.backgroundColor = '--mainColor';
    botaoMenuPrincipal.style.backgroundImage = 'none';

    menuPrincipal.style.display = 'block';
    bebidasAlcoolicas.style.display = 'none';
    bebidasNaoAlcoolicas.style.display = 'none';
    sobremesas.style.display = 'none';

    botaoPorcoes.style.borderBottom = '3px solid rgb(255, 123, 22)';
    porcoes.style.display = 'block';
});

botaoMenuPrincipal.addEventListener("click", function() {
    botaoMenuPrincipal.style.backgroundColor = '--mainColor';
    botaoMenuPrincipal.style.backgroundImage = 'none';
    botaoBebidasAlcoolicas.style.backgroundColor = '';
    botaoBebidasAlcoolicas.style.backgroundImage = '';
    botaoBebidasNaoAlcoolicas.style.backgroundColor = '';
    botaoBebidasNaoAlcoolicas.style.backgroundImage = '';
    botaoSobremesas.style.backgroundColor = '';
    botaoSobremesas.style.backgroundImage = '';

    menuPrincipal.style.display = 'block';
    bebidasAlcoolicas.style.display = 'none';
    bebidasNaoAlcoolicas.style.display = 'none';
    sobremesas.style.display = 'none';
});

botaoBebidasAlcoolicas.addEventListener("click", function() {
    botaoBebidasAlcoolicas.style.backgroundColor = '--mainColor';
    botaoBebidasAlcoolicas.style.backgroundImage = 'none';
    botaoMenuPrincipal.style.backgroundColor = '';
    botaoMenuPrincipal.style.backgroundImage = '';
    botaoBebidasNaoAlcoolicas.style.backgroundColor = '';
    botaoBebidasNaoAlcoolicas.style.backgroundImage = '';
    botaoSobremesas.style.backgroundColor = '';
    botaoSobremesas.style.backgroundImage = '';

    menuPrincipal.style.display = 'none';
    bebidasAlcoolicas.style.display = 'block';
    bebidasNaoAlcoolicas.style.display = 'none';
    sobremesas.style.display = 'none';
});

botaoBebidasNaoAlcoolicas.addEventListener("click", function() {
    botaoBebidasNaoAlcoolicas.style.backgroundColor = '--mainColor';
    botaoBebidasNaoAlcoolicas.style.backgroundImage = 'none';
    botaoBebidasAlcoolicas.style.backgroundColor = '';
    botaoBebidasAlcoolicas.style.backgroundImage = '';
    botaoMenuPrincipal.style.backgroundColor = '';
    botaoMenuPrincipal.style.backgroundImage = '';
    botaoSobremesas.style.backgroundColor = '';
    botaoSobremesas.style.backgroundImage = '';

    menuPrincipal.style.display = 'none';
    bebidasAlcoolicas.style.display = 'none';
    bebidasNaoAlcoolicas.style.display = 'block';
    sobremesas.style.display = 'none';
});

botaoSobremesas.addEventListener("click", function() {
    botaoSobremesas.style.backgroundColor = '--mainColor';
    botaoSobremesas.style.backgroundImage = 'none';
    botaoBebidasAlcoolicas.style.backgroundColor = '';
    botaoBebidasAlcoolicas.style.backgroundImage = '';
    botaoBebidasNaoAlcoolicas.style.backgroundColor = '';
    botaoBebidasNaoAlcoolicas.style.backgroundImage = '';
    botaoMenuPrincipal.style.backgroundColor = '';
    botaoMenuPrincipal.style.backgroundImage = '';

    menuPrincipal.style.display = 'none';
    bebidasAlcoolicas.style.display = 'none';
    bebidasNaoAlcoolicas.style.display = 'none';
    sobremesas.style.display = 'block';
});
// Fim Botos Menus