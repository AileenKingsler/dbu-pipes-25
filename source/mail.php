<?php

$address = "panteleevivan@yandex.ru";
$subject = "Сообщение с сайта ДБУ";

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);

$mess = "Телефон: $phone";
if ($name) {
  $mess .= "\r\nИмя: $name";
}

mail($address, $subject, $mess);
