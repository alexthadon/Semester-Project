
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


// Run the savings function when the button is clicked
savingsButton.addEventListener("click", function() {

    let goal = Number(document.querySelector("#goal").value);
    let saved = Number(document.querySelector("#saved").value);
    let monthlySave = Number(document.querySelector("#monthlySave").value);

    let result = document.querySelector("#savingsResult");

    if (goal <= 0) {
        result.textContent = "Please enter a savings goal.";

    } else if (saved >= goal) {
        result.textContent = "You reached your savings goal!";

    } else if (monthlySave <= 0) {
        result.textContent = "Enter how much you save each month.";

    } else {
        let moneyNeeded = goal - saved;
        let months = Math.ceil(moneyNeeded / monthlySave);

        result.textContent = "You need about " + months +
                             " months to reach your goal.";
    }
});
