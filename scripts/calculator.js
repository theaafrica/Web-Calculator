function calculate(expression) {
  try {
    if (expression.includes("/0")) {
      return "Error";
    }

    const result = eval(expression);
    return result;
  } catch {
    return "Error";
  }
}
