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

// income amount func
function getIncome() {
  const moneyIncomeInput = document.getElementById("money-income");
  const moneyIncome = parseFloat(moneyIncomeInput.value);
  return moneyIncome;
}

// add click event
document.getElementById("calculate").addEventListener("click", function () {
  const errorMessage = document.getElementById("expensesError");
  const totalExpensesText = document.getElementById("total-expenses");
  const expensesAmount = getExpensesAmount();
  totalExpensesText.innerText = expensesAmount;
  const moneyIncome = getIncome();
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

// add click event
document
  .getElementById("saving-balance")
  .addEventListener("click", function () {
    // savingError
    const savingError = document.getElementById("savingError");
    // saving percentage
    const savingPercentage = getInputeMoney("saving-input");
    const moneyIncome = getIncome();
    // validation maney saving percentage
    if (isNaN(savingPercentage)) {
      savingError.innerText = "Saving percentag only number!";
    } else if (savingPercentage < 0) {
      savingError.innerText = "Saving percentag only positive value 0!";
    } else {
      const moneySaving = (moneyIncome * savingPercentage) / 100;
      const savingAmount = document.getElementById("saving-amount");
      savingAmount.innerText = moneySaving;
      // remining balance
      const balanceTotal = document.getElementById("total-balance").innerText;
      const balanceAmount = parseFloat(balanceTotal);
      // remaining balance validation

      if (balanceAmount > moneySaving) {
        const reminingBalance = balanceAmount - moneySaving;
        const reminingAmount = document.getElementById("remining-balance");
        reminingAmount.innerText = reminingBalance;
        savingError.innerText = "";
      } else {
        savingError.innerText = "Saving amount can not over total amount";
      }
    }
  });
