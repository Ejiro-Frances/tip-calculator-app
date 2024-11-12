const billEl = document.querySelector("#customer-bill"); //selects bill input
const peopleEl = document.querySelector("#people-val"); // Selector for number of people input
const amountPerPersonEl = document.getElementById("amount-per-person"); // Element to display amount per person
const totalPerPersonEl = document.getElementById("total-amount");
const errorMessage = document.querySelector(".error-message");
const billError = document.querySelector(".bill-error");
const button = document.querySelector("button");
const inputContainer = document.querySelector(".result-container");
const peopleInput = document.querySelector("#people-input");

function calculateTip(percentage) {
  // Get the bill amount and number of people
  const billAmount = parseFloat(billEl.value);
  const numberOfPeople = parseInt(peopleEl.value);

  // Validate the inputs
  if (isNaN(billAmount) || billAmount <= 0) {
    billError.classList.remove("hide");
    inputContainer.classList.add("active");
    amountPerPersonEl.textContent = `$${0.0}`;
    totalPerPersonEl.textContent = `$${0.0}`;
  } else {
    billError.classList.add("hide");
    inputContainer.classList.remove("active");
  }

  if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
    errorMessage.classList.remove("hide");
    peopleInput.classList.add("active");
    amountPerPersonEl.textContent = `$${0.0}`;
    totalPerPersonEl.textContent = `$${0.0}`;
  } else {
    errorMessage.classList.add("hide");
    peopleInput.classList.remove("active");
  }

  // Calculate tip and total amount per person
  const tip = (percentage / 100) * billAmount;
  const tipPerPerson = tip / numberOfPeople;
  // const totalAmount = billAmount + tipPerPerson / numberOfPeople;
  const totalAmount = tipPerPerson / numberOfPeople;

  // Display the result
  amountPerPersonEl.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalPerPersonEl.textContent = `$${totalAmount.toFixed(2)}`;
}
// check from here

function customTip() {
  // Get the custom percentage value
  const customPercentage = parseFloat(document.getElementById("custom").value);

  // Validate the custom tip input
  if (isNaN(customPercentage) || customPercentage <= 0) {
    alert("Please enter a valid custom percentage.");
    return;
  }

  // Calculate tip with the custom percentage
  calculateTip(customPercentage);
}

// reset
function resetCalculator() {
  // Reset input fields
  billEl.value = ""; // Bill amount
  peopleEl.value = ""; // Number of people
  document.getElementById("custom").value = ""; // Custom tip percentage

  // Reset displayed amounts
  amountPerPersonEl.textContent = "$0.00"; // Tip amount per person
  totalPerPersonEl.textContent = "$0.00"; // Total amount per person

  // Hide error messages if any are shown
  errorMessage.classList.add("hide");
  billError.classList.add("hide");
}
