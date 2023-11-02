let n = 0;
if (n === 0) {
  n = 10;
}
console.log(n);

let p = 1;
p = p || 10;
console.log(p);

let isValid = false;

//if(isValid) {
//console.log("é valido")
//}
isValid && console.log("é valido");
isValid || console.log("não é valido");
