const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const numDisplay = document.querySelector(".display");

increaseBtn.addEventListener("click", () => handleClick("increase"));
decreaseBtn.addEventListener("click", () => handleClick("decrease"));
resetBtn.addEventListener("click", () => handleClick("reset"));

function handleClick(type) {
  let numValue = Number(numDisplay.textContent);
  switch (type) {
    case "increase":
      numDisplay.textContent = numValue + 1;
      break;

    case "decrease":
      numDisplay.textContent = numValue - 1;
      break;

    default:
      numDisplay.textContent = numValue - numValue;
  }
}
