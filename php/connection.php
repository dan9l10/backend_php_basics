<?php
try{
    $db = new PDO("mysql:dbname=landing;host=localhost",'root','');
}catch (PDOException $e){
    echo 'Cannot connect: '.$e->getMessage();
}
