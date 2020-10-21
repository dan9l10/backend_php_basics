<?php
require 'connection.php';

$sqlPrepared = "INSERT INTO alerts(email) VALUES (:email)";
$result = $db->prepare($sqlPrepared);
$statement = $result->execute(array(':email'=>$_POST['email']));
