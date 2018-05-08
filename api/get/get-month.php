<?php

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