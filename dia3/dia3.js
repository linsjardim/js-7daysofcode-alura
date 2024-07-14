//Se quer seguir para área de Front-End ou seguir para a área de Back-End.

alert(
  "Olá, caro estudante! Bem vindo ao nosso quiz! Vamos fazer algumas perguntas?"
);
alert("Qual área você pretende seguir? Frontend ou Backend?");

let resposta;
resposta = prompt();

if (resposta == "frontend") {
  alert("Você quer aprender React ou Vue?");
}

if (resposta == "backend") {
  alert("Voce quer aprender C# ou Java?");
}
prompt();

let respostaEspecializacao;
alert(
  "Você deseja seguir nesse área ou pretende continuar se desenvolvendo até se tornar Fullstack?"
);
alert("Escolha (1) Especialista ou (2) Fullstack");
respostaEspecializacao = prompt();
if (respostaEspecializacao == 1) {
  alert("Bons estudos!");
} else if (respostaEspecializacao == 2) {
  alert("Boa sorte em seus estudos!");
} else {
  alert("Sua resposta é inválida. Por favor, escolha 1 ou 2.");
}

alert("Qual outra tecnologia que você gostaria de estudar?");
prompt();
let respostaSimouNao = "sim";
while (respostaSimouNao == "sim") {
  alert("Tem mais alguma tecnologia que você quer estudar?");
  respostaSimouNao = prompt();
  if (respostaSimouNao == "não") {
    alert("Agradecemos sua participação!");
    break;
  }

  alert("Qual?");
  prompt();
  alert("Que legal!");
}
