<?php
$to = "a.moh.nassar00@gmail.com";
$subject = "Test Email";
$message = "This is a test email.";

if (mail($to, $subject, $message)) {
    echo "Test email sent successfully!";
} else {
    echo "Failed to send test email.";
}
?>
