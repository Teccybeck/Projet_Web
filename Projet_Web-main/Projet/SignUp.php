<?php
session_start ();

$compte = $_SESSION['compte'];
if($compte != null){
    include "./index.html";
}else{
    include "./addCompte.php";
    include "./verifCompte.php";
    $nom = $_REQUEST['nom'];
    $prenom = $_REQUEST['prenom'];
    $mail = $_REQUEST['mail'];
    $mdp = $_REQUEST['mdp'];
    $compteExiste = verifCompte($nom,$prenom,$mail);
    if(!$compteExiste) {
        $compte = addCompte($nom, $prenom, $mail, $mdp);

        //ajout login a faire genre tu va sur la page de la carte quoi
    }
    else{
        //informer que le compte existe
    }


    if ($compte != null){
        $_SESSION['compte'] = $compte;
        include "./index.html";
    }
    else
        include "./identification.tpl.html";
// redirect a enlever mettre a la place un truc genre le compte existe deja sur mm page
}
?>