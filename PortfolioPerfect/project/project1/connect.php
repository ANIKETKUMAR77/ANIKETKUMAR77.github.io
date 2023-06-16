<?php

    // $name=$_POST['name'];
    // $last=$_POST['last']; 
    // $email=$_POST['email'];
    // $password=$_POST['password'];
    // $address=$_POST['address'];
    // $address2=$_POST['address2'];
    // $city=$_POST['city'];
    // $state=$_POST['state'];
    // $mobile=$_POST['mobile'];
    // $zip=$_POST['zip'];
    // $gender=$_POST['gender'];
$con=new mysqli("localhost","root","","form");
// $sql="insert into `data`(First_Name,Last_Name,EMAIL,PASSWORD,Address,Address_2,CITY
//     ,STATE,ZIP,PHONE_NO,GENDER)values('$name','$last','$email','$password','$address',
//     '$address2','$city','$state','$mobile','$zip','$gender')";
if(!$con){
    die(mysqli_error($con));
    
    // $result=mysqli_query($con,$sql);
  
    }
//     else{
//     echo "connection unsuccessful";
   
//     die(mysqli_error($con));
    
// }

?>