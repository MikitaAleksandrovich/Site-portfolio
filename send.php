<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);
    $name = urldecode($name);
    $email = urldecode($email);
    $messsage = urldecode($message);
    $name = trim($name);
    $email = trim($email);
    $message = trim($message);
if (mail("olia.danilevich@gmail.com", "Комментарий с сайта", "Имя:".$name.". E-mail: ".$email ,". Сообщение: ".$message ,". From: aleksandrovich.mikita@gmail.ru \r\n") { 
    echo "Сообщение успешно отправлено"; 
 } else { 
    echo "При отправке сообщения возникли ошибки";
}

ini_set('display_errors','On');
error_reporting('E_ALL');

?>


