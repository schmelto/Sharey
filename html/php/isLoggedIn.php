<?php 
    require_once('classes/User.php');

    function isLoggedIn(){
        if(isset($_SESSION['user']) && !empty($_SESSION['user'])){
            echo true;
        }else{
            echo false;
        }
    }
    
?>