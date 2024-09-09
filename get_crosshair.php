<?php
if (file_exists("crosshairs.json")) {
  $crosshairsData = file_get_contents("crosshairs.json");
  $crosshairs = json_decode($crosshairsData, true);
} else {
  $crosshairs = [];
}

$response = ["crosshairs" => $crosshairs];
echo json_encode($response);
?>