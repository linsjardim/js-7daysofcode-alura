let nome;
let idade;
let linguagemDeProgramacao;
let respostaGosta;


alert("Bem vindo! Qual é o seu nome? ");
nome = prompt();
alert("Qual a sua idade?")
idade=prompt()
alert("Qual linguagem de programação você está aprendendo?")
linguagemDeProgramacao=prompt()

let fraseDeOla = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`

alert(fraseDeOla)

alert("Você está gostando de aprender "+ linguagemDeProgramacao +'?')
respostaGosta = prompt()

if (respostaGosta == 'sim')
{alert ("Muito bom! Continue estudando e você terá muito sucesso.")}
if (respostaGosta== 'não')
{alert('Ahh que pena.. Boa sorte em seus estudos!')}