<?php
require_once 'connection.php';

$data = [
    'name'=> $_POST['name'],
    'email'=>$_POST['email'],
    'skype'=>$_POST['skype'],
    'phone'=>$_POST['phone']
];
$sqlPrepare = "INSERT INTO education(name,email,skype,number) VALUES (:name,:email,:skype,:phone)";
$result = $db->prepare($sqlPrepare);
$statement = $result->execute($data);
