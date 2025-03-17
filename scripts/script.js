let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("enzos");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
function calcular() {
  console.log("Calculando...");
  let adultos = inputAdultos.value;
  let enzos = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qntdTotalCarne =
    (carnePP(duracao) * adultos) + ((carnePP(duracao) / 2) * enzos);
    let qntdTotalCerveja = cervejaPP(duracao) * adultos;
    let qntdTotalBebidas = bebidasPP(duracao) * adultos + ((bebidasPP(duracao) / 2) * enzos);
    let qntdAperitivos = aperitivoPP(duracao) * adultos + ((aperitivoPP(duracao) / 2) * enzos);
    
    resultado.innerHTML = `<h1>Resultado:</h1>`;
    resultado.innerHTML += `<p>${qntdTotalCarne / 1000} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${qntdAperitivos} g  de Aperitivos</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntdTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntdTotalBebidas / 2000)} Pet's de 2L de Bebida</p>`;
}
function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}
function aperitivoPP(duracao) {
    if (duracao >= 6) {
      return 150;
    } else {
      return 100;
    }
  }
function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
