// let buttonNodeList = {};
// DOM manipulation
function onLoad () {
  let input = [];
  /* This "maps" every button into a 'buttonNodelist' object*/
  var buttonNodeList = document.querySelectorAll(".number");
  var equalButton = document.getElementById("buttonEquals");
  equalButton.addEventListener("click", function () {
    let answer = calculate(input[0], input[2], input[1]);
    console.log(answer);
    document.getElementById('output').innerHTML = answer;
  }
)
  // console.log(buttonNodeList)

/* and this displays every button's into the display*/
  for (let item of buttonNodeList) {
    // console.log(item.value);
    item.addEventListener("click", function () {
    document.getElementById('output').innerHTML = item.value;
    // console.log(item.value);
    input.push(item.value);
    document.getElementById('output').innerHTML = input.join("");
      })
    }
  };


window.onload = onLoad;

function calculate(num1, num2, operator) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (operator === "+") {
    return addNum(num1, num2)
  }
  if (operator === "-") {
    return subtNum (num1, num2)
  }
  if (operator === "x") {
    return multNum (num1, num2)
  }
  if (operator === "/") {
    return divNum (num1, num2)
  }
  if (operator === "%") {
    return modulus (num1, num2)
  }
}

// SIMPLE FUNCTIONS
function addNum (num1, num2) {
  var sum = num1 + num2;
  sum = Math.floor(sum*10000000000)/10000000000;
  return sum;
}

function subtNum (num1, num2) {
  var answer = parseFloat(num1 - num2);
  answer = Math.floor(answer*10000000000)/10000000000;
  return answer;
}

function multNum (num1, num2) {
  let product = parseFloat(num1 * num2);
  product = Math.floor(product*10000000000)/10000000000;
  return product;
}

function divNum (num1, num2) {
  if (num2 ===0) {return "illegal divide by zero request"};
  let quotient = parseFloat(num1 / num2);
  quotient = Math.floor(quotient *10000000000)/10000000000;
  return quotient;
}

function modulus (num1, num2) {
  let result = parseFloat(num1 % num2)
  result = Math.floor(result *10000000000)/10000000000;
  // console.log(result)
return result;
}

console.log('script loaded');
//
//
// var buttonOne = document.getElementById("buttonOne");
//
// buttonOne.addEventListener("click", function () {
//     console.log(item.value)
// });
//

// var buttonTwo = document.getElementById("buttonTwo");
//
// buttonTwo.addEventListener("click", function () {
// console.log(buttonTwo.value)})
// var buttonThree = document.getElementById("buttonThree");
//
// buttonThree.addEventListener("click", function () {
//   console.log("this is 3");
// });
//
//
// var buttonFour = document.getElementById("buttonFour");
//
// buttonFour.addEventListener("click", function () {
//   console.log("this is 4");
// });
//
//
// var buttonFive = document.getElementById("buttonFive");
//
// buttonFive.addEventListener("click", function () {
//   console.log("this is 5");
// });
//
// var buttonSix = document.getElementById("buttonSix");
//
// buttonSix.addEventListener("click", function () {
//   console.log("this is 6");
// });
//
//
// var buttonSeven = document.getElementById("buttonSeven");
//
// buttonSeven.addEventListener("click", function () {
//   console.log("this is 7");
// });
//
//
// var buttonEight = document.getElementById("buttonEight");
//
// buttonEight.addEventListener("click", function () {
//   console.log("this is 8");
// });
//
//
// var buttonNine = document.getElementById("buttonNine");
//
// buttonNine.addEventListener("click", function () {
//   console.log(parseInt(this.textContent))
// });
//
//
// var buttonZero = document.getElementById("buttonZero");
//
// buttonZero.addEventListener("click", function () {
//   console.log("this is 0");
// });

//
//
// var buttonMult = document.getElementById("buttonMult");
//
// buttonMult.addEventListener("click", function () {
//   console.log("this is Multipy");
// });
//
//
// var buttonDivide = document.getElementById("buttonDivide");
//
// buttonDivide.addEventListener("click", function () {
//   console.log("this is Divide");
// });
//
//
// var buttonAdd = document.getElementById("buttonAdd");
//
// buttonAdd.addEventListener("click", function () {
//   console.log("this is Add");
// });
//
// var buttonSubtract = document.getElementById("buttonSubtract");
//
// buttonSubtract.addEventListener("click", function () {
//   console.log("this is Subtract");
// });
//
// var buttonEquals = document.getElementById("buttonEquals");
//
// buttonEquals.addEventListener("click", function () {
//   console.log(parseInt(this.value));
// });



//This 'output'.innerHTML doesn't load any value, just placeholder
