<?php
// define variables and set to empty values
$name = $email = $subject = "";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["fullName"]);
  $email = test_input($_POST["email"]);
  $subject = test_input($_POST["subject"]);
}
//define the receiver of the email
$to = 'pierre.lovergne@gmail.com';
$body = "Message sent from: $name,\nPhone number: $phone,\nMessage:\n $comment";
if ($email != '') {
  //define the headers we want passed. Note that they are separated with \r\n
  $headers = "From: $email\r\nReply-To: $email";
  //send the email
  $mail_sent = @mail( $to, $subject, $body, $headers );
  //if the message is sent successfully print "Mail sent". Otherwise print "Mail failed" 
  header('location: /#contact');
}else {
  $mail_sent = @mail( $to, $subject, $body);
  //if the message is sent successfully print "Mail sent". Otherwise print "Mail failed" 
  header('location: /#contact');
}


?>