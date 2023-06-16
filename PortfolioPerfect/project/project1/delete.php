<?php
include "connect.php";
if(isset($_GET['deleteid'])){
    $id=$_GET['deleteid'];
    $sql="delete from `data` where id=$id";
    $result=mysqli_query($con,$sql);
    if($result){
        // echo "delete successfull";
header('location:http://localhost/project1/');
    
    }else{
        die(mysqli_error($con));
    }
}
?>