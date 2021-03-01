<?php

$dirroot = substr(__DIR__, 0, -3);
require_once $dirroot.'Modules/Database/ConnectionSingleton.php';
$db = Modules\Database\ConnectionSingleton::connect();

$jsonArray = [];
$sql = "SELECT TOP(10) u_id, u_firstname, u_lastname FROM users_view";
$data = $db->getArrayAssoc2d($sql,'u_id');

foreach($data as $key => $rows){
  $jsonArray[] = $rows;
}

$response = json_encode($jsonArray);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
echo $response;
?>