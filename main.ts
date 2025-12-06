const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn");

let currentExpression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = (button as HTMLElement).getAttribute("data-val");

    if (button.id === "clear") {
      currentExpression = "";
      display.value = "";
      return;
    }

    if (button.id === "equal") {
      try {
        const result = eval(currentExpression);
        display.value = result.toString();
        currentExpression = result.toString();
      } catch {
        display.value = "Error";
        currentExpression = "";
      }
      return;
    }

    if (value) {
      currentExpression += value;
      display.value = currentExpression;
    }
  });
});
