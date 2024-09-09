function validate(event) {
    event.preventDefault();
    var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");

  if (!email.value) {
    alert("Please enter your email.");
    return;
  }

  if (!firstName.value) {
    alert("Please enter your first name.");
    return;
  }

  if (!lastName.value) {
    alert("Please enter your last name.");
    return;
  }

  if (!password.value || password.value.length < 8) {
    alert("Password should be at least 8 characters long.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }

  
    if (password.value.length >= 8 && password.value === confirmPassword.value) {
      alert("Signup Successful");
      window.location.replace("index.html");
    } else if (password.value.length < 8) {
      alert("Password should be at least 8 characters long.");
    } else {
      alert("Passwords do not match.");
    }
  }