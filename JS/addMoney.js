const validPin = 1234;
const validAccountNumber = 12345678900;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("add-bank-name").value;
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

    // balance update
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });
