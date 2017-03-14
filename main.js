var answer = 0;

//SIMPLE FUNCTIONS

function addNum (num1, num2) {
  var answer = num1 + num2;
  answer = Math.floor(answer*10000000000)/10000000000;
  console.log(answer);
  return answer;
}

console.assert(addNum(7,2) === 9);

function subtract () {
  answer = parseFloat(num1 - num2);
  answer = Math.floor(answer*10000000000)/10000000000;
}

function multiply () {
  answer = parseFloat(num1 * num2);
  answer = Math.floor(answer*10000000000)/10000000000;
}

function divide () {
  if (num2 ===0) {return "illegal divide by zero request"};
  answer = parseFloat(num1 / num2);
  answer = Math.floor(answer *10000000000)/10000000000;

}

function modulus () {
  answer = parseFloat(num1 % num2)
  answer = Math.floor(answer *10000000000)/10000000000;
}

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
