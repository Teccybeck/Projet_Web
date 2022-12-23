<?php // a modif tous!!!!
require "connexionBD.php";
function verifCompte($nom,$prenom,$mail) {
    try {
        // se connecter à la base de données
        $pdo = seConnecterBD();
        // préparer (compiler => générer code exécutable) la requête
        $sql="SELECT * FROM utilisateur where Nom =:valnom and Prenom =:valprenom and AdresseMail =:valmail";
        $stmt = $pdo->prepare($sql);
        // initalisation des valeurs des paramètres de la requête (avant son exécution)
        $stmt->bindParam(":valnom", $nom);
        $stmt->bindParam(":valprenom", $prenom);
        $stmt->bindParam(":valmail", $mail);
        // exécuter la requête (par le au SGBD)
        $stmt->execute();
        // récuépation du résultat de la requête dans un tabeau associatif
        $resultats = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $existe = false;
        if (count ($resultats) > 0)
            $existe = true;

        // fermer le curseur (libérer de la mémoire)
        $stmt->closeCursor();

        //si il existe return vrai sinon return false
        return $existe;
    }
    catch (PDOException $e) {
        // Erreur à l'exécution de la requête
        $erreur = $e->getMessage();
        echo utf8_encode("Erreur d'accès à la base de données : $erreur \n");
        return null;
    }
}
?>