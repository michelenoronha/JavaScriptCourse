let n1 = 10;
let n2 = 2;

console.log(n1 * n2);
console.log(n1 - n2, typeof n1, typeof n2);
console.log(n1 + n2, typeof n1, typeof n2);
console.log(n1 / n2, typeof n1, typeof n2);

//parseInt, parseFloat, Number()

n2 = 10;
(n2 = n2).toString();
console.log(n2, typeof n2);

n2 = 15;
n2 = n2.toString(2);
console.log(n2, typeof n2);
