<?php
session_start();
require_once 'connexionBD.php'; // On inclu la connexion à la bdd
echo "bonjour";
$IdPoint = htmlspecialchars($_POST["idPoint"]);
echo $IdPoint;
$IdCli = htmlspecialchars($_SESSION['id']);
echo $IdCli;
$suppr = $bdd->prepare('DELETE FROM lieux WHERE id = ? AND idCli = ?');
$suppr -> execute(array($IdPoint, $IdCli));

echo "fin";


?>