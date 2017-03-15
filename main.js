// SIMPLE FUNCTIONS

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


// DOM manipulation

function onLoad () {
  var buttonOne = document.querySelector("input[type='button']");

    button.addEventListener("click", function () {
      console.log(button.value);
    });
  }
window.onload = onLoad;
console.log('script loaded');


  // document.getElementById("output").innerHTML = 1;



var buttonTwo = document.getElementById("buttonTwo");

buttonTwo.addEventListener("click", function () {
  console.log("this is 2");
});

var buttonThree = document.getElementById("buttonThree");

buttonThree.addEventListener("click", function () {
  console.log("this is 3");
});


var buttonFour = document.getElementById("buttonFour");

buttonFour.addEventListener("click", function () {
  console.log("this is 4");
});


var buttonFive = document.getElementById("buttonFive");

buttonFive.addEventListener("click", function () {
  console.log("this is 5");
});

var buttonSix = document.getElementById("buttonSix");

buttonSix.addEventListener("click", function () {
  console.log("this is 6");
});


var buttonSeven = document.getElementById("buttonSeven");

buttonSeven.addEventListener("click", function () {
  console.log("this is 7");
});


var buttonEight = document.getElementById("buttonEight");

buttonEight.addEventListener("click", function () {
  console.log("this is 8");
});


var buttonNine = document.getElementById("buttonNine");

buttonNine.addEventListener("click", function () {
  console.log("this is 9");
});


var buttonZero = document.getElementById("buttonZero");

buttonZero.addEventListener("click", function () {
  console.log("this is 0");
});


var buttonMult = document.getElementById("buttonMult");

buttonMult.addEventListener("click", function () {
  console.log("this is Multipy");
});


var buttonDivide = document.getElementById("buttonDivide");

buttonDivide.addEventListener("click", function () {
  console.log("this is Divide");
});


var buttonAdd = document.getElementById("buttonAdd");

buttonAdd.addEventListener("click", function () {
  console.log("this is Add");
});

var buttonSubtract = document.getElementById("buttonSubtract");

buttonSubtract.addEventListener("click", function () {
  console.log("this is Subtract");
});

var buttonEquals = document.getElementById("buttonEquals");

buttonEquals.addEventListener("click", function () {
  console.log("this is Equals");
});
