//SIMPLE FUNCTIONS

function addNum (num1, num2) {
  var sum = num1 + num2;
  sum = Math.floor(sum*10000000000)/10000000000;
  console.log(sum);
  return sum;
}
console.assert(addNum(7,2) === 9);


function subtNum (num1, num2) {
  var answer = parseFloat(num1 - num2);
  answer = Math.floor(answer*10000000000)/10000000000;
  console.log(answer);
  return answer;
}
console.assert(subtNum(8,3) === 5);
console.assert(subtNum(90, -35) === 125);


function multNum (num1, num2) {
  let product = parseFloat(num1 * num2);
  product = Math.floor(product*10000000000)/10000000000;
  console.log(product);
  return product;
}
console.assert(multNum(22,7)===154);
console.assert(multNum(7, 3.2)===22.4);


function divNum (num1, num2) {
  if (num2 ===0) {return "illegal divide by zero request"};
  let quotient = parseFloat(num1 / num2);
  quotient = Math.floor(quotient *10000000000)/10000000000;
  console.log(quotient);
  return quotient;
}
console.assert (divNum(31, 11)===2.8181818181);

function modulus (num1, num2) {
  let result = parseFloat(num1 % num2)
  result = Math.floor(result *10000000000)/10000000000;
  console.log(result)
return result;
}
console.assert (modulus (7, 3)===1);
console.assert (modulus (8, 2)===0);





var oneNode = document.querySelector("p#1")
var twoNode = document.querySelector("p#2")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
var oneNode = document.querySelector("p#1")
