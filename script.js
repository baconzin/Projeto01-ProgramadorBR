// Carne - 400 gr por pessoa + de 6 horas -
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante ou água - 1000 ml por pessoa + de 6 horas 1500ml
// Crianças valem por 0,5
// Garrafa de vodka - 2 garrafa por pessoa + de 6 horas ED PULANDO O MURO || mais uma garrafa

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} KG de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 1000)} Litrão de Cerveja</p>`
    resultado.innerHTML += `<p>ou ${Math.ceil(qdtTotalCerveja / 350)}  Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 2000)} Garrafa de Vodka!</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Coca</p>`



}

function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function cervejaPP(duracao) {

    if (duracao >= 6) {
        return 8000;
    } else {
        return 4200;
    }

}

function bebidasPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000
    }

}