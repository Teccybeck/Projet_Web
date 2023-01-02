<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <title>Creer un compte</title>
</head>
<body>
<div class="connexion">
    <?php
                if(isset($_GET['reg_err']))
                {
                    $err = htmlspecialchars($_GET['reg_err']);

                    switch($err)
                    {
                        case 'success':
                        ?>
    <div>
        <strong>Succès</strong> inscription réussie !
    </div>
    <?php
                            break;

                        case 'prenom':
                            ?>
    <div>
    <strong>Erreur</strong> prenom trop long
    </div>
    <?php
                            break;

                        case 'nom':
                            ?>
    <div>
         <strong>Erreur</strong> nom trop long
    </div>
    <?php
                        break;

                        case 'mdp':
                        ?>
    <div>
        <strong>Erreur</strong> mot de passe trop long
    </div>
    <?php
                        break;

                        case 'email':
                        ?>
    <div>
        <strong>Erreur</strong> email trop long
    </div>
    <?php
                        break;

                        case 'existe':
                        ?>
    <div>
         <strong>Erreur</strong> compte deja existant
    </div>
    <?php

                    }
                }
                ?>

    <form action="SignUp1.php" method="post">
        <h1>Creer un compte</h1>
        <div class="champ">
            <input type="text" name="nom" class="texte" placeholder="nom" required="required" autocomplete="off">
        </div>
        <div class="champ">
            <input type="prenom" name="prenom" class="texte" placeholder="prenom" required="required" autocomplete="off">
        </div>
        <div class="champ">
            <input type="AdresseMail" name="AdresseMail" class="texte" placeholder="adresse mail" required="required" autocomplete="off">
        </div>
        <div class="champ">
            <input type="mdp" name="mdp" class="texte" placeholder="mot de passe" required="required" autocomplete="off">
        </div>
        <div class="champ">
            <button type="submit">Inscription</button>
        </div>
    </form>
    <a class = "lien" href= "Login.php">J'ai déjà un compte</a>
</div>
<script src = "main.js"></script>
</body>
</html>