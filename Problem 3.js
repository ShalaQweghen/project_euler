/*The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?*/
var n = 600851475143;
var arr = [];
for (i = 0; i < n; i++) {
  if (n % i === 0) {
    n = n / i;
    arr.push(n);
  }
}
console.log(arr[arr.length -1]);

