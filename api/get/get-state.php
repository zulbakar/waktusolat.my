<?php
$headers = apache_request_headers();
$token2 = 'token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlcyI6WyJhZG1pbmlzdHJhdG9ycyIsImNhbl9lZGl0X2VudGl0eSIsImNhbl9lZGl0X3dvcmtmbG93IiwiZGV2ZWxvcGVycyJdLCJlbWFpbCI6MTU0ODg5MjgwMCwic3ViIjoiNzQxNmEyOTQtZDMwMy00YTA4LWEzNDktNmIwMmU0ZTJlNjgyIiwibmJmIjoxNDc2OTMyMjY2LCJpYXQiOjE0NjExMjEwNjYsImV4cCI6MTU0ODg5MjgwMCwiYXVkIjoicnhnZW5lcmljIn0.hMq4Sltyy_24DWzVD8rJHJYPgG7Emp5EdCBrESLlNOk';
   
if(isset($headers['Authorization'])){
        if($headers['Authorization']!==$token2){
	        header("HTTP/1.0 403 Forbidden");
	        print 'missing api key';
	        exit;
	}
}else{
        header("HTTP/1.0 403 Forbidden");
	print 'missing api key';
	exit;
}

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