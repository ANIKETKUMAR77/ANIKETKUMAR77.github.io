<?php
include 'connect.php';
$id=$_GET['updateid'];
if(isset($_POST['submit'])){

    $name=$_POST['name'];
    $last=$_POST['last']; 
    $email=$_POST['email'];
    $password=$_POST['password'];
    $address=$_POST['address'];
    $address2=$_POST['address2'];
    $city=$_POST['city'];
    $state=$_POST['state'];
    
    $zip=$_POST['zip'];
    $mobile=$_POST['mobile'];
    $gender=$_POST['gender'];
    $sql="update `data` set id=$id,First_Name='$name',Last_Name='$last',EMAIL='$email',PASSWORD='$password',Address='$address',Address_2='$address2',CITY='$city'
    ,STATE='$state',ZIP=$zip,PHONE_NO=$mobile,GENDER='$gender' where id=$id";
   
     $res=mysqli_query($con,$sql);
     if($res){
        echo "updated";
     }else{
        die(mysqli_error($con)); 
     }

}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="bootstrap/css/first.css">

    <title>registion form </title>  
</head>
<body>
    <form action="" method="post">
        <h1 id="hading" >Registion Form </h1>
        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">First Name </label>
      <input type="text" name="name" class="form-control" id="inputName" placeholder="Aniket ">
    </div>
    <div class="form-group col-md-6">
      <label for="inputName">Last Name</label>
      <input type="text" name="last" class="form-control" id="inputName" placeholder="kumar">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="email1234@gmail.com">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" name="password" class="form-control" id="inputPassword4" placeholder="*********">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" name="address2" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" name="city" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <input type="text" name="state" class="form-control" id="inputState">
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Zip</label>
      <input type="text" name="zip" class="form-control" id="inputZip">
    </div>
  </div>
  
  <div class="form-row">
  <div class="form-group col-md-4">
    <label for="inputMobile"> Phone No </label>
    <input type="number" name="mobile"  class="form-control" id="inputnumber" placeholder="9876543210">
  </div>
  <div class=" form-group col-md-4 container "  >
    <label>Gender</label><br>
<input type="radio" name="gender" value="male">Male 
<input type="radio" name="gender" value="femail" >Female 
<input type="radio" name="gender" value="other">Other
</div>
<!-- <div class="form-group col-md-4">
    <label for="exampleFormControlFile1">Upload resume</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div> -->
 
  
</div >
<button type="s" name="submit" class="btn  center" id="sb" >update</button>
<button type="" name="back" class="btn  center" id="sb" ><a href="http://localhost/project1">back</a>  </button>
<button type="" name="rest" class="btn  center" id="sb" ><a href="http://localhost/project1/adduser.php">reset</a>  </button>
</form>
</body>
</html>