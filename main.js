var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
var currentExpression = "";
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var val = btn.getAttribute("data-val");
    if (btn.id === "clear") {
      currentExpression = "";
      display.value = "";
      return;
    }
    if (btn.id === "equal") {
      try {
        var result = Function("return (" + currentExpression + ")")();
        display.value = result;
        currentExpression = result.toString();
      } catch (e) {
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
