// const billEl = document.querySelector("#customer-bill"); //selects bill input
// const peopleEl = document.querySelector("#people-val"); // Selector for number of people input
// const amountPerPersonEl = document.getElementById("amount-per-person"); // Element to display amount per person
// const totalPerPersonEl = document.getElementById("total-amount");
// const errorMessage = document.querySelector(".error-message");
// const billError = document.querySelector(".bill-error");
// const button = document.querySelector("button");
// const inputContainer = document.querySelector(".result-container");
// const peopleInput = document.querySelector("#people-input");

// function calculateTip(percentage) {
//   // Get the bill amount and number of people
//   const billAmount = parseFloat(billEl.value);
//   const numberOfPeople = parseInt(peopleEl.value);

//   // Validate the inputs
//   if (isNaN(billAmount) || billAmount <= 0) {
//     billError.classList.remove("hide");
//     inputContainer.classList.add("active");
//     amountPerPersonEl.textContent = `$${0.0}`;
//     totalPerPersonEl.textContent = `$${0.0}`;
//   } else {
//     billError.classList.add("hide");
//     inputContainer.classList.remove("active");
//   }

//   if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
//     errorMessage.classList.remove("hide");
//     peopleInput.classList.add("active");
//     amountPerPersonEl.textContent = `$${0.0}`;
//     totalPerPersonEl.textContent = `$${0.0}`;
//   } else {
//     errorMessage.classList.add("hide");
//     peopleInput.classList.remove("active");
//   }

//   // Calculate tip and total amount per person
//   const tip = (percentage / 100) * billAmount;
//   const tipPerPerson = tip / numberOfPeople;
//   const totalAmount = (billAmount + tipPerPerson) / numberOfPeople;

//   // Display the result
//   amountPerPersonEl.textContent = `$${tipPerPerson.toFixed(2)}`;
//   totalPerPersonEl.textContent = `$${totalAmount.toFixed(2)}`;
// }
// // custom

// function customTip() {
//   // Get the custom percentage value
//   const customPercentage = parseFloat(document.getElementById("custom").value);

//   // Validate the custom tip input
//   if (isNaN(customPercentage) || customPercentage <= 0) {
//     billError.classList.remove("hide");
//     // alert("Please enter a valid custom percentage.");
//     return;
//   }

//   // Calculate tip with the custom percentage
//   calculateTip(customPercentage);
// }

// // reset
// function resetCalculator() {
//   // Reset input fields
//   billEl.value = ""; // Bill amount
//   peopleEl.value = ""; // Number of people
//   document.getElementById("custom").value = ""; // Custom tip percentage

//   // Reset displayed amounts
//   amountPerPersonEl.textContent = "$0.00"; // Tip amount per person
//   totalPerPersonEl.textContent = "$0.00"; // Total amount per person

//   // Hide error messages if any are shown
//   errorMessage.classList.add("hide");
//   billError.classList.add("hide");
// }
// button.addEventListener("click", resetCalculator);

// begin =====

// ==================

const billEl = document.querySelector("#customer-bill"); // Selects bill input
const peopleEl = document.querySelector("#people-val"); // Selects number of people input
const amountPerPersonEl = document.getElementById("amount-per-person"); // Displays amount per person
const totalPerPersonEl = document.getElementById("total-amount");
const errorMessage = document.querySelector(".error-message");
const billError = document.querySelector(".bill-error");
const button = document.querySelector("button");
const inputContainer = document.querySelector(".result-container");
const peopleInput = document.querySelector("#people-input");

function showErrorMessage(element, inputContainer, show) {
  // Toggle error message visibility
  element.classList.toggle("hide", !show);
  inputContainer.classList.toggle("active", show);
}

function calculateTip(percentage) {
  const billAmount = parseFloat(billEl.value);
  const numberOfPeople = parseInt(peopleEl.value);

  if (isNaN(billAmount) || billAmount <= 0) {
    showErrorMessage(billError, inputContainer, true);
    amountPerPersonEl.textContent = `$0.00`;
    totalPerPersonEl.textContent = `$0.00`;
    return;
  } else {
    showErrorMessage(billError, inputContainer, false);
  }

  if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
    showErrorMessage(errorMessage, peopleInput, true);
    amountPerPersonEl.textContent = `$0.00`;
    totalPerPersonEl.textContent = `$0.00`;
    return;
  } else {
    showErrorMessage(errorMessage, peopleInput, false);
  }

  const tip = (percentage / 100) * billAmount;
  const tipPerPerson = tip / numberOfPeople;
  const totalAmount = (billAmount + tip) / numberOfPeople;

  amountPerPersonEl.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalPerPersonEl.textContent = `$${totalAmount.toFixed(2)}`;
}

function customTip() {
  const customPercentage = parseFloat(document.getElementById("custom").value);
  if (isNaN(customPercentage) || customPercentage <= 0) {
    showErrorMessage(billError, inputContainer, true);
    return;
  }
  calculateTip(customPercentage);
}

function resetCalculator() {
  billEl.value = "";
  peopleEl.value = "";
  document.getElementById("custom").value = "";
  amountPerPersonEl.textContent = "$0.00";
  totalPerPersonEl.textContent = "$0.00";
  showErrorMessage(errorMessage, peopleInput, false);
  showErrorMessage(billError, inputContainer, false);
}

button.addEventListener("click", resetCalculator);

// Hide error message on input
billEl.addEventListener("input", () =>
  showErrorMessage(billError, inputContainer, false)
);
peopleEl.addEventListener("input", () =>
  showErrorMessage(errorMessage, peopleInput, false)
);
