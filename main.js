// let buttonNodeList = {};
// DOM manipulation
function onLoad () {
  let input = [];
  /* This "maps" every button into a 'buttonNodelist' object*/
  var buttonNodeList = document.querySelectorAll(".number");
  var equalButton = document.getElementById("buttonEquals");
  equalButton.addEventListener("click", function () {
    let answer = calculate(input[0], input[2], input[1]);
    // console.log(answer);
    document.getElementById('output').innerHTML = answer;
  }
)
  console.log(buttonNodeList)
/* and this displays every button's into the display*/
  for (let item of buttonNodeList) {
    // console.log(item.value);
    item.addEventListener("click", function () {
    document.getElementById('output').innerHTML = item.value;
    // console.log(item.value);
    input.push(item.value);
    console.log(input);
      for (let i = 0; i < input.length; i++) {
        input(i)
      }
    document.getElementById('output').innerHTML = input.join("");
      })
    }
  };


window.onload = onLoad;

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
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
return result;
}

console.log('script loaded');
