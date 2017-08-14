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

$MonthArr = array(
        array('monthCode' => '01','monthDesc'=>'Januari'),
        array('monthCode' => '02','monthDesc'=>'Februari'),
        array('monthCode' => '03','monthDesc'=>'Mac'),
        array('monthCode' => '04','monthDesc'=>'April'),
        array('monthCode' => '05','monthDesc'=>'May'),
        array('monthCode' => '06','monthDesc'=>'Jun'),
        array('monthCode' => '07','monthDesc'=>'Julai'),
        array('monthCode' => '08','monthDesc'=>'Ogos'),
        array('monthCode' => '09','monthDesc'=>'September'),
        array('monthCode' => '10','monthDesc'=>'Oktober'),
        array('monthCode' => '11','monthDesc'=>'November'),
        array('monthCode' => '12','monthDesc'=>'Disember'),
        );

echo $MonthJson = json_encode($MonthArr);