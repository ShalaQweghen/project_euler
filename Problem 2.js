/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

var a = 0;
var b = 1;
var group = [];
var result = 0;
for (var i = 1; i <= 4000000; i++) {
  a = a + b;
  b = a + b;
  if (a < 4000000 || b < 4000000) {
    group.push(a);
    group.push(b);
  } else {
    break
  };
}
for (var i = 1; i <= group.length; i++) {
  if (group[i] % 2 === 0) {
    result += group[i];
  }
}
console.log(result);
