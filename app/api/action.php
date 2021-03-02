<?php

$dirroot = substr(__DIR__, 0, -3);
require_once $dirroot.'Modules/Database/ConnectionSingleton.php';
$db = Modules\Database\ConnectionSingleton::connect();

$jsonArray = [];
$sql = "SELECT TOP(10) r_id, r_datetimebeg, r_datetimeend, r_duration, r_compression, r_ringing, r_datatype r_ani, r_dnis  FROM reclist";
$data = $db->getArrayAssoc2d($sql,'r_id');

foreach($data as $key => $rows){
  $jsonArray[] = $rows;
}

$response = json_encode($jsonArray);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
echo $response;
?>