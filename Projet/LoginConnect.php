<?php
session_start(); // Démarrage de la session
require_once 'connexionBD.php'; // On inclut la connexion à la base de données

if(!empty($_POST['AdresseMail']) && !empty($_POST['mdp'])) // Si il existe les champs AdresseMail, mdp et qu'il sont pas vident
{
    // Patch XSS
    $AdresseMail = htmlspecialchars($_POST['AdresseMail']);
    $mdp = htmlspecialchars($_POST['mdp']);


    //si l'utilisateur est inscrit dans la table utilisateurs
    $check = $bdd->prepare('SELECT id, Nom, Prenom, AdresseMail, mdp FROM clients WHERE AdresseMail = ?');
    $check->execute(array($AdresseMail));
    $data = $check->fetch();
    $row = $check->rowCount();

    // Si > à 0 alors l'utilisateur existe
    if($row > 0)
    {
        // Si le mot de passe est le bon
        if($mdp === $data['mdp'])
        {
            function Redirect($url, $code = 302){
                if (strncmp('cli', PHP_SAPI, 3) !== 0) {
                    if (headers_sent() !== true) {
                        if (strlen(session_id()) > 0) {// if using sessions

                            session_regenerate_id(true); // avoids session fixation      attacks

                            session_write_close(); // avoids having sessions lock other requests

                        }

                        if (strncmp('cgi', PHP_SAPI, 3) === 0) {
                            header(sprintf('Status: %03u', $code), true, $code);
                        }

                        header('Location: ' . $url, true, (preg_match('~^30[1237]$~', $code) >  0) ? $code : 302);
                    }
                    exit();
                }
            }
            $_SESSION['id'] = $data['id'];
            $_SESSION['Nom'] = $data['Nom'];
            $_SESSION['Prenom'] = $data['Prenom'];
            Redirect('connecte.php?id='.$_SESSION['id']);
            header('Location: connecte.php');die();
        }else{ header('Location: Login.php?login_err=password'); die(); }
    }else{ header('Location: Login.php?login_err=already'); die(); }
}else{ header('Location: Login.php'); die();} // pas d'email