<?php
	// 指定允许其他域名访问
	header('Access-Control-Allow-Origin:*');

	// 响应类型
	header('Access-Control-Allow-Methods:GET,POST,PUT');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	require '../common/conn.php';  
	if(isset($_GET['id'])){
	    $stmt = $m->prepare('select * from acount where id=?');
		$ccid = $_GET['id'];
		$stmt->bind_param('d',$ccid);
		$issuc = $stmt->execute();

		if($issuc){
			$result = $stmt->get_result();
			$arr = $result->fetch_array();
			//var_dump($arr);
			echo json_encode($arr);
		}else{
			echo 0;
		}
	}