// + - * / **
let n1 = 10;
let n2 = 5;

//operadores artimeticos
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);
//opersdores de atribuição
let n3 = 25;
// n3 = n3 + 15;
//n3 = n3 * 2;
n3 += 2;
n3 += 15;
n3 -= 15;
n3 *= 2;
n3 %= 2;
console.log(n3);

//incremento e decremento
let i = 0;
console.log(i--);
console.log(i);
console.log(i++);
console.log(i);

//operadores de comparação

/*
igualdade de valor e tipo ===
<,>,<=,>=
!== valores diferentes
!== valores e tipos diferenntes
*/
console.log(n1, n2, n3);
let n5 = "10";
console.log(n1 == "10");
console.log(n2 < 10);
console.log(n2 > 10);
console.log(n1 >= 10);
console.log(n1 <= 10);
console.log(n2 < 11);
console.log(n2 > 11);
console.log(n1 >= 11);
console.log(n1 <= 11);
console.log(n1 != "10");
console.log(n1 !== "10");

//operadores lógicos
/*
Para uma pessoa viajar para o exterior:
-precisa ser maior de 18 anos
OU
Acompanhado com os pais
e
ter compreado bilhete
*/
let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = idade >= 18 / paisPresentes && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media; ${media}`);
console.log(3 * 2 ** 2);
console.log((3 * 2) ** 2);
