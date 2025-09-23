const validPin = 1234;
const validAccountNumber = 12345678910;

// .............. We will we starting using reusable functions herer ......//



// function to get input values as integer
function getInputValueAsNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}
// funciton to get input values
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}
// function to get innertexts as integer
function getInnerTextAsInteger(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);
  return elementValueNumber;
}
//function to set innertexts for available balance
function setInnerText(value) {
  document.getElementById("available-balance").innerText = value;
}

// add money feature //
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const accountNumber = getInputValueAsNumber("add-account-number");
    const amount = getInputValueAsNumber("add-amount");
    const pin = getInputValueAsNumber("add-pin-number");

    // validate entry
    if (accountNumber !== validAccountNumber) {
      alert("Incorrect account number. Please try again.");
      return;
    }

    if (pin !== validPin) {
      alert("Incorrect pin. Please try again.");
      return;
    }
    //balance updating
    const availableBalance = getInnerTextAsInteger("available-balance");
    const totalNewAvailableBalance = amount + availableBalance;
    setInnerText(totalNewAvailableBalance);
  });

// cashout feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputValueAsNumber("withdraw-amount");
  const agentNumber = getInputValue("agent-number");
  const pin = getInputValueAsNumber("cashout-pin");

  // validate entry
  if (pin !== validPin) {
    alert("Incorrect pin. Please try again.");
    return;
  }
  if (agentNumber.length !== 11) {
    alert("Incorrect agent number. Please try again");
    return;
  }
  // balance updating
  const availableBalance = getInnerTextAsInteger("available-balance");
  const totalNewAvailableBalance = availableBalance - amount;
  setInnerText(totalNewAvailableBalance);
});

// toggling feature//
// show add money
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("cashout-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transactions-list").style.display = "none";
  });
// show cashout
document.getElementById("cashout-card").addEventListener("click", function () {
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("cashout-form").style.display = "block";
  document.getElementById("transfer-money-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "none";
  document.getElementById("transactions-list").style.display = "none";
});
// show transfer money
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function () {
    document.getElementById("cashout-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "block";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transactions-list").style.display = "none";
  });
// show get bonus
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function () {
    document.getElementById("cashout-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "block";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transactions-list").style.display = "none";
  });
// show pay bill
document.getElementById("pay-bill-card").addEventListener("click", function () {
  document.getElementById("cashout-form").style.display = "none";
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("transfer-money-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "block";
  document.getElementById("transactions-list").style.display = "none";
});
// show transactions
document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    document.getElementById("cashout-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transactions-list").style.display = "block";
  });
