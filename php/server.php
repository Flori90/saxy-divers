<?php
$servername = "zucker.schokokeks.org";
$username = "fschunck_tplb_u";
$password = "tr@ining20!";

try {
   $conn = new PDO("mysql:host=$servername;dbname=fschunck_tplb_u", $username, $password);
   // set the PDO error mode to exception
   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   echo "Connected successfully";
   }
catch(PDOException $e)
   {
   echo "Connection failed: " . $e->getMessage();
   }
?>
