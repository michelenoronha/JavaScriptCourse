let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = idade >= 18 / paisPresentes && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

//let msgMaiorIdade = ""
//if(idade >= 18) {
//    msgMaiorIdade = "É maior de idade"
// } else {
//  msgMaiorIdade = "É menor de 18 anos"
//}
let msgMaiorIdade = idade >= 28 ? " é maior de idade" : " é menor de 18 anos";

if (!comprouBilhete) {
  console.log("Não comprou o bilhete");
} else {
  if (idade >= 18) {
    console.log("É maior de idade, pode viajar");
  } else {
    console.log("msgMaiorIdade");
  }
}

let n1 = 7;
let n2 = 7;
let media = (n1 + n2) / 2;
console.log(`Média: ${media}`);

if (n1 === 0 || n2 === 0) {
  console.log("Reprovado");
} else if (media < 7) {
  console.log("Reprovado. Mas pode recuperar");
} else {
  console.log("Aprovado");
}
console.log("Saiu do bloco if");
