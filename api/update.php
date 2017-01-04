<?php
	// 指定允许其他域名访问
	header('Access-Control-Allow-Origin:*');

	// 响应类型
	header('Access-Control-Allow-Methods:GET,POST,PUT');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	require '../common/conn.php'; 
	$id = $_GET['id'];
	$name = $_POST['name'];
	$phone = $_POST['phone'];  
	$stmt = $m->prepare('update acount set name=?,phone=? where id=?');
	$stmt->bind_param('ssd',$name,$phone,$id);
	$issuc = $stmt->execute();
	if($issuc){
		$stmt->free_result();
		$m->close();
		echo 1;
	}else{
		echo 0;
	} 