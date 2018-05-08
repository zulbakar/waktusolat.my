<?php

$objFilter = (object) $_GET;
unset($_GET);

$state='';
$zone='';

if(isset($objFilter->state)){
  $state = $objFilter->state;
  $state = str_replace(' ', '+', $state);
}

if(isset($objFilter->zone)){
  $zone = $objFilter->zone;
}

if($state!='' && $zone!=''){
    $url="http://api.azanpro.com/zone/grouped.json?state=$state&zone=$zone";
}else{
    $url="http://api.azanpro.com/zone/grouped.json?state=$state";
}

if($state!=''){

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "$url",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "cache-control: no-cache",
      "postman-token: b3e7690c-4a8d-893c-251f-235f19347602"
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