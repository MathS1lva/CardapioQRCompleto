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

    botaoDestaques.style.borderBottom = '3px solid rgb(255, 123, 22)';
    destaques.style.display = 'block';
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
// Fim Botoes Menus

// Botoes submenus
var botaoPorcoes = document.getElementById("botaoPorcoes");
var botaoPratos = document.getElementById("botaoPratos");
var botaoFeijoada = document.getElementById("botaoFeijoada");
var botaoDestaques = document.getElementById("botaoDestaques");
var botaoLanches = document.getElementById("botaoLanches");
var botaoNovidades = document.getElementById("botaoNovidades");

var porcoes = document.getElementById("porcoes");
var pratos = document.getElementById("pratos");
var feijoada = document.getElementById("feijoada");
var destaques = document.getElementById("destaques");
var lanches = document.getElementById("lanches");
var novidades = document.getElementById("novidades");

botaoPorcoes.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = 'block';
    pratos.style.display = 'none';
    feijoada.style.display = 'none';
    destaques.style.display = 'none';
    lanches.style.display = 'none';
    novidades.style.display = 'none';
});

botaoPratos.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = 'none';
    pratos.style.display = 'block';
    feijoada.style.display = 'none';
    destaques.style.display = 'none';
    lanches.style.display = 'none';
    novidades.style.display = 'none';
});

botaoFeijoada.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = 'none';
    pratos.style.display = 'none';
    feijoada.style.display = 'block';
    destaques.style.display = 'none';
    lanches.style.display = 'none';
    novidades.style.display = 'none';
});

botaoDestaques.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = 'none';
    pratos.style.display = 'none';
    feijoada.style.display = 'none';
    destaques.style.display = 'block';
    lanches.style.display = 'none';
    novidades.style.display = 'none';
});

botaoLanches.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = 'none';
    pratos.style.display = 'none';
    feijoada.style.display = 'none';
    destaques.style.display = 'none';
    lanches.style.display = 'block';
    novidades.style.display = 'none';
});

botaoNovidades.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '3px solid rgb(255, 123, 22)';

    porcoes.style.display = 'none';
    pratos.style.display = 'none';
    feijoada.style.display = 'none';
    destaques.style.display = 'none';
    lanches.style.display = 'none';
    novidades.style.display = 'block';
});
// Fim Botoes submenus