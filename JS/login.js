// login button functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  //   mobile number value
  const mobileNumber = 123456789;
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  //   pin numebr value
  const pinNumber = 1234;
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  console.log(mobileNumberValueConverted, pinNumberValueConverted);

  // comparing function
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./addMoney.html";
  } else {
    alert("Invalied Credentials");
  }
});
