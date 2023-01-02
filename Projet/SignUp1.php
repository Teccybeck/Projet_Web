<?php
require_once 'connexionBD.php'; // On inclu la connexion à la bdd

// Si les variables existent et qu'elles ne sont pas vides
if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['AdresseMail']) && !empty($_POST['mdp']))
{
    // Patch XSS
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $AdresseMail = htmlspecialchars($_POST['AdresseMail']);
    $mdp = htmlspecialchars($_POST['mdp']);

    //si l'utilisateur existe
    $check = $bdd->prepare('SELECT Nom, Prenom, AdresseMail, mdp FROM clients WHERE AdresseMail = ?');
    $check->execute(array($AdresseMail));
    $data = $check->fetch();
    $row = $check->rowCount();

    // Si la requete renvoie un 0 alors l'utilisateur n'existe pas
    if($row == 0){
        if(strlen($nom) <= 50){ // verifie longueur du nom <= 50
            if(strlen($prenom) <= 50){ //verifie longueur du prenom <= 50
                if(strlen($AdresseMail) <= 100) {// verifie longueur du mail <= 50
                    if (strlen($mdp) <= 50) {

                        $insert = $bdd->prepare('INSERT INTO clients(Nom, Prenom, AdresseMail, mdp) VALUES(:nom, :prenom, :mail, :mdp)');
                        $insert->execute(array(
                            'nom' => $nom,
                            'prenom' => $prenom,
                            'mail' => $AdresseMail,
                            'mdp' => $mdp,
                        ));
                        // On redirige avec le message de succès
                        header('Location: Login.php');die();
                    }else{header('Location: SignUp.php?reg_err=mdp'); die();}
                }else{header('Location: SignUp.php?reg_err=email'); die();}
            }else{ header('Location: SignUp.php?reg_err=prenom'); die();}
        }else{ header('Location: SignUp.php?reg_err=nom'); die();}
    }else{ header('Location: SignUp.php?reg_err=existe'); die();}
}
