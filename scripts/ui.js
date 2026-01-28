const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      expression = "";
      display.value = "";
    } 
    else if (value === "=") {
      const result = calculate(expression);
      display.value = result;
      expression = result.toString();
    } 
    else {
      expression += value;
      display.value = expression;
    }
  });
});

document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";

  if (allowedKeys.includes(e.key)) {
    expression += e.key;
    display.value = expression;
  }

  if (e.key === "Enter") {
    const result = calculate(expression);
    display.value = result;
    expression = result.toString();
  }

  if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  }
});
