<?php
// Retrieve the incoming JSON data
$inputData = file_get_contents("php://input");
$data = json_decode($inputData, true);

// Create a unique ID for the new crosshair (you can use a more robust method in a real-world scenario)
$id = uniqid();

// Prepare the crosshair data
$newCrosshair = [
  "id" => $id,
  "image" => $data["image"],
  "settings" => $data["settings"],
];

// Read existing crosshair data from the JSON file
$existingCrosshairs = [];
if (file_exists("crosshairs.json")) {
  $existingCrosshairs = json_decode(file_get_contents("crosshairs.json"), true);
}

// Append the new crosshair to the existing data
$existingCrosshairs[] = $newCrosshair;

// Save the updated data back to the JSON file
file_put_contents("crosshairs.json", json_encode($existingCrosshairs));

// Return a response to the client
$response = ["status" => "success", "message" => "Crosshair added successfully!"];
echo json_encode($response);
?>