<?php
$host = 'localhost';
$user = 'root';
$pass = 'root';
$db = 'vue';
$charset = 'utf8';

$m = new mysqli($host,$user,$pass,$db);
$m->set_charset($charset); 