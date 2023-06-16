<?php
// define('DB_SERVER',"localhost");
// define('DB_USER','root');
// define('DB_PASS','');
// define('DB_DATABASE','databs');
// $conn=mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_DATABASE);
// if(!conn){
//     die("connection failed");

// }else{
//     die("connection passed");
// }
$con=new mysqli('localhost','root','','databs');
if($con){
    echo "connection successful";
    

}else{
    echo "connection unsuccessful";
    // die(mysqli_error($con));
    
}

?>