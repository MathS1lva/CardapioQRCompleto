// Botão Subir para o topo
const botaoScroll = document.querySelector(".botaoScroll")

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 150){
        botaoScroll.style.display = "none";
    }
    else {
        botaoScroll.style.display = "block";
    }
}; 

refreshButtonVisibility()

botaoScroll.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});
// Fim Botão


// Variaveis
var botaoMenuPrincipal = document.getElementById("botaoMenuPrincipal");
var botaoBebidasAlcoolicas = document.getElementById("botaoBebidasAlcoolicas");
var botaoBebidasNaoAlcoolicas = document.getElementById("botaoBebidasNaoAlcoolicas");
var botaoSobremesas = document.getElementById("botaoSobremesas");

var botaoPorcoes = document.getElementById("botaoPorcoes");
var botaoPratos = document.getElementById("botaoPratos");
var botaoFeijoada = document.getElementById("botaoFeijoada");
var botaoDestaques = document.getElementById("botaoDestaques");
var botaoLanches = document.getElementById("botaoLanches");
var botaoNovidades = document.getElementById("botaoNovidades");

var botaoCaipirinhas = document.getElementById("botaoCaipirinhas");
var botaoCervejas = document.getElementById("botaoCervejas");
var botaoChopp = document.getElementById("botaoChopp");
var botaoGin = document.getElementById("botaoGin");
var botaoDrinks = document.getElementById("botaoDrinks");
var botaoCombos = document.getElementById("botaoCombos");
var botaoDestaquesAlcoolicos = document.getElementById("botaoDestaquesAlcoolicos");
var botaoDestilados = document.getElementById("botaoDestilados");

var botaoRefrigerantes = document.getElementById("botaoRefrigerantes");
var botaoEnergeticos = document.getElementById("botaoEnergeticos");
var botaoDrinksSemAlcool = document.getElementById("botaoDrinksSemAlcool");
var botaoSucos = document.getElementById("botaoSucos");
var botaoAgua = document.getElementById("botaoAgua");
var botaoGelo = document.getElementById("botaoGelo");



var menuPrincipal = document.getElementById("menuPrincipal");
var bebidasAlcoolicas = document.getElementById("bebidasAlcoolicas");
var bebidasNaoAlcoolicas = document.getElementById("bebidasNaoAlcoolicas");
var sobremesas = document.getElementById("sobremesas");

var porcoes = document.getElementById("porcoes");
var pratos = document.getElementById("pratos");
var feijoada = document.getElementById("feijoada");
var destaques = document.getElementById("destaques");
var lanches = document.getElementById("lanches");
var novidades = document.getElementById("novidades");

var caipirinhas = document.getElementById("caipirinhas");
var cervejas = document.getElementById("cervejas");
var chopp = document.getElementById("chopp");
var gin = document.getElementById("gin");
var drinks = document.getElementById("drinks");
var combos = document.getElementById("combos");
var destaquesAlcoolicos = document.getElementById("destaquesAlcoolicos");
var destilados = document.getElementById("destilados");

var refrigerantes = document.getElementById("refrigerantes");
var energeticos = document.getElementById("energeticos");
var drinksSemAlcool = document.getElementById("drinksSemAlcool");
var sucos = document.getElementById("sucos");
var agua = document.getElementById("agua");
var gelo = document.getElementById("gelo");
// Fim Variaveis


// Seleção menu
addEventListener("DOMContentLoaded", function() {
    botaoMenuPrincipal.style.backgroundColor = '--mainColor';
    botaoMenuPrincipal.style.backgroundImage = 'none';

    menuPrincipal.style.display = 'block';

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

    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = '';
    pratos.style.display = '';
    feijoada.style.display = '';
    destaques.style.display = 'block';
    lanches.style.display = '';
    novidades.style.display = '';
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

    botaoCaipirinhas.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = 'block';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
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
    
    botaoRefrigerantes.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoEnergeticos.style.borderBottom = '';
    botaoDrinksSemAlcool.style.borderBottom = '';
    botaoSucos.style.borderBottom = '';
    botaoAgua.style.borderBottom = '';
    botaoGelo.style.borderBottom = '';

    refrigerantes.style.display = 'block';
    energeticos.style.display = '';
    drinksSemAlcool.style.display = '';
    sucos.style.display = '';
    agua.style.display = '';
    gelo.style.display = '';
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
// Fim seleção menu


// Subsessoes Menu principal
botaoPorcoes.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = 'block';
    pratos.style.display = '';
    feijoada.style.display = '';
    destaques.style.display = '';
    lanches.style.display = '';
    novidades.style.display = '';
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

    porcoes.style.display = '';
    pratos.style.display = '';
    feijoada.style.display = 'block';
    destaques.style.display = '';
    lanches.style.display = '';
    novidades.style.display = '';
});

botaoDestaques.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = '';
    pratos.style.display = '';
    feijoada.style.display = '';
    destaques.style.display = 'block';
    lanches.style.display = '';
    novidades.style.display = '';
});

botaoLanches.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoNovidades.style.borderBottom = '';

    porcoes.style.display = '';
    pratos.style.display = '';
    feijoada.style.display = '';
    destaques.style.display = '';
    lanches.style.display = 'block';
    novidades.style.display = '';
});

botaoNovidades.addEventListener("click", function() {
    botaoPorcoes.style.borderBottom = '';
    botaoPratos.style.borderBottom = '';
    botaoFeijoada.style.borderBottom = '';
    botaoDestaques.style.borderBottom = '';
    botaoLanches.style.borderBottom = '';
    botaoNovidades.style.borderBottom = '3px solid rgb(255, 123, 22)';

    porcoes.style.display = '';
    pratos.style.display = '';
    feijoada.style.display = '';
    destaques.style.display = '';
    lanches.style.display = '';
    novidades.style.display = 'block';
});
// Fim subsessoes menu principal


// Subsessoes bebidas alcoolicas
botaoCaipirinhas.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = 'block';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
});

botaoCervejas.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = '';
    cervejas.style.display = 'block';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
});

botaoChopp.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = '';
    cervejas.style.display = '';
    chopp.style.display = 'block';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
});

botaoGin.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = '';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = 'block';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
});


botaoDrinks.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = '';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = 'block';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
});

botaoCombos.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = '';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = '';
});

botaoDestaquesAlcoolicos.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoDestilados.style.borderBottom = '';

    caipirinhas.style.display = '';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = 'block';
    destilados.style.display = '';
});

botaoDestilados.addEventListener("click", function() {
    botaoCaipirinhas.style.borderBottom = '';
    botaoCervejas.style.borderBottom = '';
    botaoChopp.style.borderBottom = '';
    botaoGin.style.borderBottom = '';
    botaoDrinks.style.borderBottom = '';
    botaoCombos.style.borderBottom = '';
    botaoDestaquesAlcoolicos.style.borderBottom = '';
    botaoDestilados.style.borderBottom = '3px solid rgb(255, 123, 22)';

    caipirinhas.style.display = '';
    cervejas.style.display = '';
    chopp.style.display = '';
    gin.style.display = '';
    drinks.style.display = '';
    combos.style.display = '';
    destaquesAlcoolicos.style.display = '';
    destilados.style.display = 'block';
});
// Fim subsessoes bebidas alcoolicas

// Subsessoes bebidas nao alcoolicas
botaoRefrigerantes.addEventListener("click", function() {
    botaoRefrigerantes.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoEnergeticos.style.borderBottom = '';
    botaoDrinksSemAlcool.style.borderBottom = '';
    botaoSucos.style.borderBottom = '';
    botaoAgua.style.borderBottom = '';
    botaoGelo.style.borderBottom = '';

    refrigerantes.style.display = 'block';
    energeticos.style.display = '';
    drinksSemAlcool.style.display = '';
    sucos.style.display = '';
    agua.style.display = '';
    gelo.style.display = '';
});

botaoEnergeticos.addEventListener("click", function() {
    botaoRefrigerantes.style.borderBottom = '';
    botaoEnergeticos.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoDrinksSemAlcool.style.borderBottom = '';
    botaoSucos.style.borderBottom = '';
    botaoAgua.style.borderBottom = '';
    botaoGelo.style.borderBottom = '';

    refrigerantes.style.display = '';
    energeticos.style.display = 'block';
    drinksSemAlcool.style.display = '';
    sucos.style.display = '';
    agua.style.display = '';
    gelo.style.display = '';
});

botaoDrinksSemAlcool.addEventListener("click", function() {
    botaoRefrigerantes.style.borderBottom = '';
    botaoEnergeticos.style.borderBottom = '';
    botaoDrinksSemAlcool.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoSucos.style.borderBottom = '';
    botaoAgua.style.borderBottom = '';
    botaoGelo.style.borderBottom = '';

    refrigerantes.style.display = '';
    energeticos.style.display = '';
    drinksSemAlcool.style.display = 'block';
    sucos.style.display = '';
    agua.style.display = '';
    gelo.style.display = '';
});

botaoSucos.addEventListener("click", function() {
    botaoRefrigerantes.style.borderBottom = '';
    botaoEnergeticos.style.borderBottom = '';
    botaoDrinksSemAlcool.style.borderBottom = '';
    botaoSucos.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoAgua.style.borderBottom = '';
    botaoGelo.style.borderBottom = '';

    refrigerantes.style.display = '';
    energeticos.style.display = '';
    drinksSemAlcool.style.display = '';
    sucos.style.display = 'block';
    agua.style.display = '';
    gelo.style.display = '';
});

botaoAgua.addEventListener("click", function() {
    botaoRefrigerantes.style.borderBottom = '';
    botaoEnergeticos.style.borderBottom = '';
    botaoDrinksSemAlcool.style.borderBottom = '';
    botaoSucos.style.borderBottom = '';
    botaoAgua.style.borderBottom = '3px solid rgb(255, 123, 22)';
    botaoGelo.style.borderBottom = '';

    refrigerantes.style.display = '';
    energeticos.style.display = '';
    drinksSemAlcool.style.display = '';
    sucos.style.display = '';
    agua.style.display = 'block';
    gelo.style.display = '';
});

botaoGelo.addEventListener("click", function() {
    botaoRefrigerantes.style.borderBottom = '';
    botaoEnergeticos.style.borderBottom = '';
    botaoDrinksSemAlcool.style.borderBottom = '';
    botaoSucos.style.borderBottom = '';
    botaoAgua.style.borderBottom = '';
    botaoGelo.style.borderBottom = '3px solid rgb(255, 123, 22)';

    refrigerantes.style.display = '';
    energeticos.style.display = '';
    drinksSemAlcool.style.display = '';
    sucos.style.display = '';
    agua.style.display = '';
    gelo.style.display = 'block';
});
// Fim subsessoes bebidas nao alcoolicas