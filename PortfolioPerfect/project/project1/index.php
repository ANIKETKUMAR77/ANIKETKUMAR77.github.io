<?php
include "connect.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <!-- <link rel="stylesheet" href="second.css"> -->
  <title>CRUD</title> 
</head>
<body>
  <div class="">
  <div class="buttons">
  <button type="button" class="btn my-1 btn-primary"    > <a href="adduser.php" class="text-light">ADD NeW</a>  </button>
  </div>
  <table class="table table-striped table-light">
  <thead>
    <tr>
      <th scope="col">SL NO</th>
      <th scope="col">First NAME</th>
      <th scope="col">Last NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">ADDRESS 1</th>
       
      <th scope="col">PHONE NO</th>
      <th scope="col">GENDER</th>
      <th scope="col">OPERATION</th>
    </tr>
  </thead>
  <tbody>

  <?php 
  $sql="select * from `data`";
  $result=mysqli_query($con,$sql); 
  if($result){
    while($row=mysqli_fetch_assoc($result)){
      $id =$row['ID'];
      $First_Name =$row['First_Name'];
      $Last_Name =$row['Last_Name'];
      $EMAIL =$row['EMAIL'];
      $PASSWORD =$row['PASSWORD'];
      $Address =$row['Address'];
      $Address_2 =$row['Address_2'];
      $CITY =$row['CITY'];
      $STATE =$row['STATE'];
      $ZIP =$row['ZIP'];
      $PHONE_NO =$row['PHONE_NO'];
      $GENDER =$row['GENDER'];
      echo '<tr>
      <th scope="row">'.$id.'</th>
      <td>'.$First_Name.'</td>
      <td>'.$Last_Name.'</td>
      <td>'.$EMAIL.'</td>
      <td>'.$PASSWORD.'</td>
      <td>'.$Address.'</td>
      
      <td>'.$PHONE_NO.'</td>
      <td>'.$GENDER.'</td>
      <td>
      <button class="btn btn-success "><a href="update.php?updateid='.$id.'" class="text-light">update</a></button>
      <button class="btn btn-danger  "><a href="delete.php?deleteid='.$id.'" class="text-light">delete</a></button>
    </td> 
    </tr>';
    }
    
   
  }
  
  ?>
    
  </tbody>
</table> 
</div>
</body>
</html>