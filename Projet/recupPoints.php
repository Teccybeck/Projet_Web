<?php

    session_start(); // Démarrage de la session
    require_once 'connexionBD.php'; // On inclu la connexion à la bdd

    $aResult = array();
    $IdCli = htmlspecialchars($_SESSION['id']);
    $points = $bdd->prepare('SELECT * FROM lieux WHERE idCli = ?');
    $points->execute(array($IdCli));
    while ($ligne = $points->fetch()) {
        echo $ligne['id'] . '¤' . $ligne['nom'] . '¤' . $ligne['note'] . '¤' . $ligne['avis'] . '¤' . $ligne['idCli'] . '¤'.
            $ligne['idType'].'¤'.$ligne['x'].'¤'.$ligne['y'].'¤';
    }
?>
