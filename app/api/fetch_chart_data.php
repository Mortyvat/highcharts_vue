<?php
$date =  htmlspecialchars($_GET["date"]);
$datetime = new DateTime($date);

$datetimeBott = $datetime->format("Y-m-d H:i:s");
$datetime->add(new DateInterval('P1D'));
$datetimeCeil = $datetime->format("Y-m-d H:i:s");
$dirroot = substr(__DIR__, 0, -3);
require_once $dirroot.'Modules/Database/ConnectionSingleton.php';
$db = Modules\Database\ConnectionSingleton::connect();

$jsonArray = [];
error_log($datetimeBott . " => " .$datetimeCeil);
$sql = "SELECT substring(convert(varchar,[r_datetimebeg],120),1,13) AS date_unit, COUNT(r_id) AS rec_count FROM reclist_view WHERE (r_datetimebeg>=? AND r_datetimebeg<=?) GROUP BY substring(convert(varchar,[r_datetimebeg],120),1,13)";
$data = $db->getArrayAssoc2d($sql,'date_unit',[$datetimeBott, $datetimeCeil]);

foreach($data as $key => $rows){
  $jsonArray[] = $rows;
  error_log($rows['date_unit']);
}

$response = json_encode($jsonArray);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
echo $response;
?>