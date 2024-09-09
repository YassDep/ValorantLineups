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
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $password = $_POST["password"];

    // Check if email already exists
    $emailCheck = "SELECT id FROM users WHERE email='$email'";
    $emailResult = mysqli_query($conn, $emailCheck);

    if (mysqli_num_rows($emailResult) > 0) {
        echo "Email already exists. Please use a different email.";
    } else {
        // Insert new user into the database
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (email, first_name, last_name, password) VALUES ('$email', '$firstName', '$lastName', '$hashedPassword')";
        if (mysqli_query($conn, $sql)) {
            echo "Signup successful!";
            header("Location: Login.html");
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}

mysqli_close($conn);
?>
