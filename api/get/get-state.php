<?php

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.azanpro.com/zone/states.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: cdf2ea50-33e6-5943-e9ef-7dff72d1fdea"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  $err = array('status' => 'error');
  echo $errJson = json_encode($err);
} else {
  echo $response;
}