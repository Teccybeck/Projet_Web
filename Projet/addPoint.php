<?php

    session_start();
    require_once 'connexionBD.php';


    $Nom = htmlspecialchars($_POST['nom']);
    $Avis = htmlspecialchars($_POST['avis']);
    $Note = htmlspecialchars($_POST['note']);
    $IdCli = htmlspecialchars($_SESSION['id']);
    $Type = htmlspecialchars($_POST['type']);
    $coordX = htmlspecialchars($_POST['X']);
    $coordY = htmlspecialchars($_POST['Y']);
    $insert = $bdd->prepare('INSERT INTO lieux (nom, note, avis, idCli, idType, x, y) VALUES (:valNom, :valNote, :valAvis, :valIdCli, :valType, :valX, :valY)');
    $insert->execute(array(
        'valNom' => $Nom,
        'valNote' => $Note,
        'valAvis' => $Avis,
        'valIdCli' => $IdCli,
        'valType' => $Type,
        'valX' => $coordX,
        'valY' => $coordY,
    ));
?>