const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn");

let currentExpression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-val");

    if (btn.id === "clear") {
      currentExpression = "";
      display.value = "";
      return;
    }

    if (btn.id === "equal") {
      try {
        const result = Function(`return (${currentExpression})`)();
        display.value = result;
        currentExpression = result.toString();
      } catch {
        display.value = "Error";
        currentExpression = "";
      }
      return;
    }

    if (val) {
      currentExpression += val;
      display.value = currentExpression;
    }
  });
});
