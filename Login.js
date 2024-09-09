function validate(event) {
  event.preventDefault(); 

  var password = document.getElementById("password");

  if (password.value.length >= 8) {
    alert("Login Successful");
    window.location.replace("index.html");
  } else {
    alert("Login Failed");
  }
}
  
  
  
  