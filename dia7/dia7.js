function soma(numero1, numero2) {
  return numero1 + numero2;
}

function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

function divisao(numero1, numero2) {
  return numero1 / numero2;
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

alert("Bem vindo à sua calculadora!");
let operacao;

while (true) {
  operacao = prompt(
    "Qual operação deseja resolver? Soma, subtração, divisão ou multiplicação? Ou deseja sair?"
  );
  if (operacao == "sair") {
    break;
  }
  let numero1 = parseFloat(prompt("Escolha um número."));
  let numero2 = parseFloat(prompt("Escolha outro número."));
  let resultado;

  switch (operacao) {
    case "soma":
      resultado = soma(numero1, numero2);
      alert(`${numero1} + ${numero2} = ${resultado}`);
      break;
    case "subtração":
      resultado = subtracao(numero1, numero2);
      alert(`${numero1} - ${numero2} = ${resultado}`);
      break;
    case "divisão":
      resultado = divisao(numero1, numero2);
      alert(`${numero1} / ${numero2} = ${resultado}`);
      break;
    case "multiplicação":
      resultado = multiplicacao(numero1, numero2);
      alert(`${numero1} * ${numero2} = ${resultado}`);
      break;
    default:
      alert("Operação inválida");
  }
}
alert("Até a próxima!");
