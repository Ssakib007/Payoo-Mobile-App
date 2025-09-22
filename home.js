document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("add-bank-name").value;
    const accountNumber = document.getElementById("add-account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin-number").value;

    // balance update
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

//   
