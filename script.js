
const budgetButton = document.querySelector("#budgetButton");
const savingsButton = document.querySelector("#savingsButton");

budgetButton.addEventListener("click", function() {

    let income = Number(document.querySelector("#income").value);
    let housing = Number(document.querySelector("#housing").value);
    let food = Number(document.querySelector("#food").value);
    let transportation = Number(document.querySelector("#transportation").value);
    let entertainment = Number(document.querySelector("#entertainment").value);
    let savings = Number(document.querySelector("#savings").value);
    let other = Number(document.querySelector("#other").value);

    let expenses = housing + food + transportation +
                   entertainment + savings + other;

    let moneyLeft = income - expenses;
    let result = document.querySelector("#result");

    if (income <= 0) {
        result.textContent = "Please enter your income.";

    } else if (moneyLeft > 0) {
        result.textContent = "You have $" + moneyLeft.toFixed(2) + " left.";

    } else if (moneyLeft === 0) {
        result.textContent = "You used your entire budget.";

    } else {
        result.textContent = "You are over budget by $" +
                             Math.abs(moneyLeft).toFixed(2);
    }
});