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

// toggling form feature function//
function handleFormToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// toggling card feature function
function handleCardToggle(id) {
  const formBtns = document.getElementsByClassName("card-btn");
  for (btn of formBtns) {
    btn.classList.remove(
      "bg-blue-600/5",
      "outline",
      "outline-1",
      "outline-offset-[-1px]",
      "outline-blue-600"
    );
    btn.classList.add("bg-white", "outline-0", "outline-zinc-950/10");
  }
  document
    .getElementById(id)
    .classList.remove("bg-white", "outline-0", "outline-zinc-950/10");
  document
    .getElementById(id)
    .classList.add(
      "bg-blue-600/5",
      "outline",
      "outline-1",
      "outline-offset-[-1px]",
      "outline-blue-600"
    );
}
// toggling card text feature function
function handleCardTextToggle(id) {
  const formText = document.getElementsByClassName("card-text");
  for (text of formText) {
    text.classList.remove("text-blue-600", "font-semibold");
    text.classList.add("text-zinc-950/70", "font-normal");
  }
  document
    .getElementById(id)
    .classList.remove("text-zinc-950/70", "font-normal");
  document.getElementById(id).classList.add("text-blue-600", "font-semibold");
}

// show add money
document
  .getElementById("add-money-card")
  .addEventListener("click", function (e) {
    handleFormToggle("add-money-form");
    handleCardToggle("add-money-card");
    handleCardTextToggle("add-money-text");
  });

// show cashout
document.getElementById("cashout-card").addEventListener("click", function (e) {
  handleFormToggle("cashout-form");
  handleCardToggle("cashout-card");
  handleCardTextToggle("cashout-text");
});

// show transfer money
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function (e) {
    handleFormToggle("transfer-money-form");
    handleCardToggle("transfer-money-card");
    handleCardTextToggle("transfer-text");
  });

// show get bonus
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function (e) {
    handleFormToggle("get-bonus-form");
    handleCardToggle("get-bonus-card");
    handleCardTextToggle("get-bonus-text");
  });

// show pay bill
document
  .getElementById("pay-bill-card")
  .addEventListener("click", function (e) {
    handleFormToggle("pay-bill-form");
    handleCardToggle("pay-bill-card");
    handleCardTextToggle("pay-bill-text");
  });

// show transactions
document
  .getElementById("transactions-card")
  .addEventListener("click", function (e) {
    handleFormToggle("transactions-list");
    handleCardToggle("transactions-card");
    handleCardTextToggle("transaction-text");
  });
