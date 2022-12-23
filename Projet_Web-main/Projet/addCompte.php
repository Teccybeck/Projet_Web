<?php // a modif tous!!!!
require "connexionBD.php";
function addCompte($nom,$prenom,$mail,$mdp) {
    try {
        // se connecter à la base de données
        $pdo = seConnecterBD();
        // préparer (compiler => générer code exécutable) la requête
        $sql="INSERT INTO clients (Nom, Prenom, AdresseMail, mdp) VALUES (:valnom,:valprenom,:valmail,:valmdp)";
        $stmt = $pdo->prepare($sql);
        // initaliser la valeur des paramètres de la requête (avant son exécution)
        $stmt->bindParam(":valnom", $nom);
        $stmt->bindParam(":valprenom", $prenom);
        $stmt->bindParam(":valmail", $mail);
        $stmt->bindParam(":valmail", $mdp);
        // exécuter la requête (par le au SGBD)
        $stmt->execute();
        $stmt->closeCursor();
    }
    catch (PDOException $e) {
        // Erreur à l'exécution de la requête
        $erreur = $e->getMessage();
        echo utf8_encode("Erreur d'accès à la base de données ou creation de compte: $erreur \n");
        return null;
    }
}
?>