const billEl = document.querySelector("input #customer-bill");
const percentTipEl = document.querySelectorAll("#tip-percent li");
const fivePercentEl = document.querySelector(".five");
const tenPercentEl = document.querySelector(".ten");
const fifteenPercentEl = document.querySelector(".fifteen");
const twentyFivePercentEl = document.querySelector(".twenty-five");
const fiftyPercentEl = document.querySelector(".fifty");
const customPercentEl = document.querySelector("#custom");
const percentEl = document.querySelectorAll("#tip-percent li");
const tipAmountEl = document.querySelector(".amount-per-person");

const percentArray = [
  "fivePercentEl",
  "tenPercentEl",
  "fifteenPercentEl",
  "twentyFivePercentEl",
  "fiftyPercentEl",
  "customPercentEl",
];
const percentArrayNum = Number(percentArray);

// Add event listener to listen for clicks on the li
// customize the percentages

// add event listener to equate bill to tip
// billEl.addEventListener("input", function () {
//   tipAmountEl.innerHTML = `$${billEl.value}`;
// });
// const setOperations = () => {};
