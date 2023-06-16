<?php

$email=$_POST['email'];
$pass=$_POST['pass'];
$con=mysqli_connect("localhost","root","","databs");
$q="insert into data value (NULL,'$email','$pass')";
if(!$con){
    die("connection failed: ".mysqli_connect_errno());
}
else{
mysqli_query($con,$q);
    echo "data saved";
}

?>