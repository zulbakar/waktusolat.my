<?php

$objFilter = (object) $_GET;
unset($_GET);

$zone = '';
$month = '';
$year = date("Y");

if(isset($objFilter->zone)){
    $zone = $objFilter->zone;
}

if(isset($objFilter->month)){
    $month = $objFilter->month;
}

if($zone!='' && $month!=''){

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => "http://api.azanpro.com/times/month.json?zone=$zone&month=$month&year=$year&format=12-hour",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache",
        "postman-token: f643e5ee-4330-d42d-71d1-16960662ed24"
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

}else{
  $err = array('status' => 'data invalid');
  echo $errJson = json_encode($err);
}