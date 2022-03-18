<?php

$address = "panteleevivan@yandex.ru";
$subject = "Сообщение с сайта ДБУ";

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$question = htmlspecialchars($_POST["question"]);

$mess = "Телефон: $phone";
if ($name) {
  $mess .= "\r\nИмя: $name";
}
if ($question) {
  $mess .= "\r\nВопрос: $question";
}

mail($address, $subject, $mess);
