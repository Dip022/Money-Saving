// get input value
function getInputeMoney(inputId) {
  const inputValue = document.getElementById(inputId).value;
  const inputTotal = parseFloat(inputValue);
  return inputTotal;
}

// Total and Expenses Amount
function getExpensesAmount() {
  const foodCost = getInputeMoney("food-cost");
  const rentCost = getInputeMoney("rent-cost");
  const clothesCost = getInputeMoney("clothes-cost");
  const errorMessage = document.getElementById("expensesError");

  //validation expense amount
  if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
    errorMessage.innerText = "Input the only Number!";
  } else if (foodCost < 0 || rentCost < 0 || clothesCost < 0) {
    errorMessage.innerText = "Input the positive value 0!";
  } else {
    const expenseTotalAmount = foodCost + rentCost + clothesCost;
    errorMessage.innerText = "";
    return expenseTotalAmount;
  }
}

// add click event
document.getElementById("calculate").addEventListener("click", function () {
  console.log(getExpensesAmount());
});
