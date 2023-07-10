const rs = require("readline-sync");

let result;
let operation = rs.question(
  "What operation would you like to perform?\nYour options are: /  *  -  +  %\n"
);
let num1;
let num2;
function operationLogic() {
  if (
    operation == "/" ||
    operation == "*" ||
    operation == "-" ||
    operation == "+" ||
    operation == "%"
  ) {
    num1 = rs.questionFloat("please enter first number: ");
    num2 = rs.questionFloat("please enter second number: ");
  } else {
    operation = rs.question("Lets try this again, give me an operator: ");
    mathLogic();
    operationLogic();
  }
}

function mathLogic() {
  result =
    operation == "/"
      ? (num1 / num2).toFixed(2)
      : operation == "*"
      ? num1 * num2
      : operation == "-"
      ? num1 - num2
      : operation == "+"
      ? num1 + num2
      : operation == "%"
      ? (num1 % num2).toFixed(2)
      : "Invalid operation";
}

operationLogic();
mathLogic();

console.log(`The result is ${result}`);
