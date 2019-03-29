<html>
<head>
<title>Комментарии с сайта</title>
</head>
<body>
<?php
//Check, if there are variables in post array
if(!isset($_POST['name']) and !isset($_POST['email'])) {
 ?> 
    <form action="send.php" method="post">
    <input type="text" id="name" name="name" placeholder="Введите ваше имя" required />
    <input type="email" id="email" name="email" placeholder="E-mail" required />
    <input type="submit" class ="send__btn" value="Отправить" id="send" name="send"/>
    </form> 
<?php } else {
    //show Form
    $name = $_POST['name'];
     $email = $_POST['email'];
     $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $name = urldecode($name);
    $email = urldecode($email);
    $name = trim($name);
    $email = trim($email);
if (mail("olia.danilevich@gmail.com", "Комментарий с сайта", "Имя:".$name.". E-mail: ".$email ,"From: example@mail.ru \r\n")){ 
    echo "Сообщение успешно отправлено"; 
 } else { 
    echo "При отправке сообщения возникли ошибки";
    }
}

ini_set('display_errors','On');
error_reporting('E_ALL');
?>
</body>
</html>

