<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $message = $_POST["message"];
    
    // Change the recipient email address to your own
    $to = "a.moh.nassar00@gmail.com";
    $subject = "New message from website";

    // Construct the email message
    $email_message = "Name: " . $name . "\n";
    $email_message .= "Message: " . $message;

    // Send the email
    if (mail($to, $subject, $email_message)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    // If the request method is not POST, redirect back to the contact page
    header("Location: contact.html");
    exit;
}
?>
