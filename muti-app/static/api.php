<?php
header('Content-type:text/html;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
 
header('Access-Control-Allow-Methods:POST');  

header('Access-Control-Allow-Headers:x-requested-with,content-type');  

print_r($_POST);
?>