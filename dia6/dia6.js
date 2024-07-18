let listaDeFrutas = [];
let listaDeLegumes = [];
let listaDeCongelados = [];
let listaDeLaticinios = [];
let listaDeDoce = [];

alert("Bem-vindo,vamos te ajudar a organizar sua lista de compras!");

let resposta;
while (resposta != "finalizar") {
  if (resposta != "remover") {
    alert(
      "Qual item você gostaria de adicionar? (1) Fruta (2) Legume (3) Congelado (4) Laticínio (5) Doce"
    );

    let escolhaAlimento = prompt();

    if (escolhaAlimento == 1) {
      alert("Qual fruta você gostaria de adicionar?");
      let escolhaFruta = prompt();
      listaDeFrutas.push(escolhaFruta);
    } else if (escolhaAlimento == 2) {
      alert("Qual legume você gostaria de adicionar?");
      let escolhaLegume = prompt();
      listaDeLegumes.push(escolhaLegume);
    } else if (escolhaAlimento == 3) {
      alert("Qual congelado você gostaria de adicionar?");
      let escolhaCongelado = prompt();
      listaDeCongelados.push(escolhaCongelado);
    } else if (escolhaAlimento == 4) {
      alert("Qual laticínio você gostaria de adicionar?");
      let escolhaLaticinio = prompt();
      listaDeLaticinios.push(escolhaLaticinio);
    } else if (escolhaAlimento == 5) {
      alert("Qual doce você gostaria de adicionar?");
      let escolhaDoce = prompt();
      listaDeDoce.push(escolhaDoce);
    }
  }
  alert("E agora, você quer [remover], [adicionar] ou [finalizar] sua lista? ");
  resposta = prompt();
  if (resposta == "remover") {
    alert("Esta é a sua lista de compras. Qual item você deseja remover?");
    let fraseRemoverLista =
      listaDeFrutas +
      " " +
      listaDeCongelados +
      " " +
      listaDeDoce +
      " " +
      listaDeLaticinios +
      " " +
      listaDeLegumes;

    let removerItem;
    removerItem = prompt(fraseRemoverLista);

    if (listaDeFrutas.includes(removerItem)) {
      let indexLista = listaDeFrutas.indexOf(removerItem);
      listaDeFrutas.splice(indexLista, 1);
      alert("O item foi removido da sua lista de compras!");
    } else if (listaDeLegumes.includes(removerItem)) {
      let indexLista = listaDeLegumes.indexOf(removerItem);
      listaDeLegumes.splice(indexLista, 1);
      alert("O item foi removido da sua lista de compras!");
    } else if (listaDeCongelados.includes(removerItem)) {
      let indexLista = listaDeCongelados.indexOf(removerItem);
      listaDeCongelados.splice(indexLista, 1);
      alert("O item foi removido da sua lista de compras!");
    } else if (listaDeLaticinios.includes(removerItem)) {
      let indexLista = listaDeLaticinios.indexOf(removerItem);
      listaDeLaticinios.splice(indexLista, 1);
      alert("O item foi removido da sua lista de compras!");
    } else if (listaDeDoce.includes(removerItem)) {
      let indexLista = listaDeDoce.indexOf(removerItem);
      listaDeDoce.splice(indexLista, 1);
      alert("O item foi removido da sua lista de compras!");
    } else {
      alert ("Hmmm.. Esse item não está em sua lista!")
    }
  }
}
alert("Aqui está a sua lista de compras!");
let fraseListaDeCompra =
  "Lista de Frutas: " +
  listaDeFrutas +
  " Lista de Legumes: " +
  listaDeLegumes +
  " Lista de Laticínios: " +
  listaDeLaticinios +
  " Lista de Congelados: " +
  listaDeCongelados +
  " Lista de Doces: " +
  listaDeDoce;
alert(fraseListaDeCompra);
