// strings, number (int, floats), bolean
// undefined, null, symbol(ES2015)
let minhaVar = "minha string";
let minhaVar2 = 'minha "string" com aspas duplas';
let minhaVar3 = `minha template literal`;

let idade = 40;
let msg = `eu possuo ${idade} anos`;

console.log(msg);
console.log("Hello" + " world");
console.log(
  `Type of msg: ${typeof msg}, Type of idade: ${typeof idade}, Type of minhaVar: ${typeof minhaVar}`
);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

let isvalid = true;
console.log(`is valid: ${isvalid}`); // Movido para depois da declaração e inicialização

let varTeste = null;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);
