<?php
$dbHostname = "localhost";
$dbName = "econtact"; //nom de la bdd (a modif)
$dbLogin = "root";
$dbPwd = "root";
// URL de connexion à la base de données
$dbURL = "mysql:server=$dbHostname;dbname=$dbName";

// renvoie un objet Connexion ($pdo) à la base de données
function seConnecterBD () {
    global $dbLogin,$dbPwd, $dbURL;
    // Créer un objet de connexion à la base de données
    // Choix de ne pas traiter les exceptions (erreurs de connexion) ici mais au niveau de l'appelant
    $pdo = new PDO ($dbURL, $dbLogin, $dbPwd);
    return $pdo;
}
?>