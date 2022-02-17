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
    errorMessage.innerText = "Input the only number!";
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
  const errorMessage = document.getElementById("expensesError");
  const totalExpensesText = document.getElementById("total-expenses");
  const expensesAmount = getExpensesAmount();
  totalExpensesText.innerText = expensesAmount;
  const moneyIncomeInput = document.getElementById("money-income");
  const moneyIncome = parseFloat(moneyIncomeInput.value);
  // validation income
  if (isNaN(moneyIncome)) {
    errorMessage.innerText = "Income amount only number!";
  } else if (moneyIncome < 0) {
    errorMessage.innerText = "Income amount positive value 0!";
  } else {
    if (expensesAmount > moneyIncome) {
      errorMessage.innerText = "Expenses amount can not over income!";
    }
    const balance = moneyIncome - expensesAmount;
    const balanceTotal = document.getElementById("total-balance");
    balanceTotal.innerText = balance;
  }
});
