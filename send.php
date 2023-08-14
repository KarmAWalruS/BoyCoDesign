<?php

    $email = $_POST['email'];
    $task = $_POST['task'];

    $email = htmlspecialchars($email);
    $task = htmlspecialchars($task);

    $email = urldecode($email);
    $task = urldecode($task);

    $email = trim($email);
    $task = trim($task);


    if(mail("yagin_v@mail.ru",
            "Новый заказ с сайта",
            "Почта для связи: ".$email. "\n".
            "Постановка задачи: ".$task,
            "From: no-replay@mydomain.ru \r\n")
            ) {
                echo ("Письмо успешно отправлено!");
            }

            else {
                echo ("Есть ошибки! Проверьте данные")ж
            }
?>
