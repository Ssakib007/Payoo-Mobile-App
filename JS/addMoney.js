const validPin = 1234;
const validAccountNumber = 12345678910;
// add money feature //
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const accountNumber = parseInt(
      document.getElementById("add-account-number").value
    );
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin-number").value);
    // validate entry
    if (accountNumber !== validAccountNumber) {
      alert("Incorrect account number or pin. Please try again.");
      return;
    }

    if (pin !== validPin) {
      alert("Incorrect account number or pin. Please try again.");
      return;
    }
    //balance updating
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

// cashout feature 
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById("withdraw-amount").value);
  // validate entry
  
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const totalNewAvailableBalance = availableBalance - amount;
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
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
