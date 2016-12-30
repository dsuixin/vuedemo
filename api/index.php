<?php
	include '../common/conn.php';
	/*$arr = Array(
		0=>Array('id'=>'1','name'=>'qian','phone'=>'15036258747'),
		1=>Array('id'=>'2','name'=>'chao','phone'=>'18102042589'));
	//
*/
	$stmt = $m->prepare('select * from acount');
	$stmt->execute();
	$result = $stmt->get_result(); 
	$arr = Array();
	while($row=$result->fetch_array()){
		 $arr[]=$row;
	}
	//var_dump($arr);
	echo json_encode($arr); 