let listaDeFrutas = [];
let listaDeLegumes = [];

alert("Bem-vindo,vamos te ajudar a organizar sua lista de compras!");

let escolhaSimOuNao = "sim";
while (escolhaSimOuNao == "sim") {
  alert("Qual item você gostaria de adicionar? (1) Frutas (2) Legumes");

  let escolhaAlimento = prompt();

  if (escolhaAlimento == 1) {
    alert("Qual fruta você gostaria de adicionar?");
    let escolhaFruta = prompt();
    listaDeFrutas.push(escolhaFruta);
  } else if (escolhaAlimento == 2) {
    alert("Qual legume você gostaria de adicionar?");
    let escolhaLegume = prompt();
    listaDeLegumes.push(escolhaLegume);
  }

  alert("Gostaria de adicionar mais algum item à sua lista?");
  escolhaSimOuNao = prompt();
}

alert("Aqui está a sua lista de compras!");
let fraseListaDeCompra =
  "Lista de Frutas: " + listaDeFrutas + " Lista de Legumes: " + listaDeLegumes;
alert(fraseListaDeCompra);
// console.log ("Lista de Frutas: " + listaDeFrutas,
//     "Lista de legumes: " + listaDeLegumes)
