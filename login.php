<?php
  // Establish database connection
  $db_host = "localhost";
  $db_user = "root";
  $db_pass = "";
  $db_name = "login_system";

  $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  // Handle form submission
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $email = $_POST["email"];
      $password = $_POST["password"];

      // Validate user credentials (this is just a simple example)
      $sql = "SELECT id FROM users WHERE email='$email' AND password='$password'";
      $result = mysqli_query($conn, $sql);

      if (mysqli_num_rows($result) == 1) {
          // Successful login
          header("Location: index.html");
          exit();
      } else {
          // Login failed
          echo "Login failed. Please check your credentials.";
      }
  }

  mysqli_close($conn);
  ?>