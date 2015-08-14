<?php
echo 'alert("REACHES HERE")';
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$to="ravikumarkarthick@gmail.com";
$subject="Message From Members";

$success=mail ($to,$subject,$message, "From: " . $name . "Email: " . $email);
if ($success) {
	echo 'alert("message successfully sent")';
} else {
	echo 'alert("message not successfully sent")';
}
?>