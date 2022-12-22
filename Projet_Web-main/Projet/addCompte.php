<?php // a modif tous!!!!
require "connexionBD.php";
function addCompte($login,$mdp) {
    try {
        // se connecter à la base de données
        $pdo = seConnecterBD();
        // préparer (compiler => générer code exécutable) la requête
        $sql="SELECT * FROM utilisateur where login =:vallogin and mdp =:valmdp";
        $stmt = $pdo->prepare($sql);
        // initaliser la valeur des paramètres de la requête (avant son exécution)
        $stmt->bindParam(":vallogin", $login);
        $stmt->bindParam(":valmdp", $mdp);
        // exécuter la requête (par le au SGBD)
        $bool = $stmt->execute();
        // récuéprer le résultat de la requête dans un tabeau associatif
        $resultats = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // calculer le résultat de fonction (compte) à partir du résultat de la requête
        $compte = null;
        if (count ($resultats) > 0)
            $compte = $resultats [0];
        /* for ($resultats as $uneLigne){
            ...
        }
        */
        // fermer le curseur (libérer de la mémoire)
        $stmt->closeCursor();
        // retourner la réponse calculée (compte)

        return $compte;
    }
    catch (PDOException $e) {
        // Erreur à l'exécution de la requête
        $erreur = $e->getMessage();
        echo utf8_encode("Erreur d'accès à la base de données : $erreur \n");
        return null;
    }
}
?>