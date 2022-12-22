<?php
session_start ();

$compte = $_SESSION['compte'];
if($compte != null){
    include "./index.html";
}else{
    include "./addCompte.php";

    $login = $_REQUEST['login'];
    $mdp = $_REQUEST['mdp'];

    $compte = addCompte($login,$mdp);

    if ($compte != null){
        $_SESSION['compte'] = $compte;
        include "./index.html";
    }
    else
        include "./identification.tpl.html";
// redirect a enlever mettre a la place un truc genre le compte existe deja sur mm page
}
?>