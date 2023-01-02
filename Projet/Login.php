<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap" rel="stylesheet">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Style.css">
        <title>Connexion</title>
    </head>

    <body>
            <div class="connexion">
                <?php
                if(isset($_GET['login_err']))
                {
                    $err = htmlspecialchars($_GET['login_err']);

                    switch($err)
                    {
                        case 'password':
                            ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> mot de passe incorrect
                            </div>
                            <?php
                            break;

                        case 'already':
                            ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> compte non existant
                            </div>
                            <?php
                            break;
                    }
                }
                ?>
                <form action="LoginConnect.php" method="post">
                    <h1>Connexion</h1>
                    <div class="champ">
                        <input type="text" name="AdresseMail" class="texte" placeholder="Email" required="required" autocomplete="off">
                    </div>
                    <div class="champ">
                        <input type="text" name="mdp" class="texte" placeholder="Mot de passe" required="required" autocomplete="off">
                    </div>
                    <div class="champ">
                        <button type="submit" id="test">Connexion</button>
                    </div>
                </form>
                <a class ="lien" href= "SignUp.php">Je n'ai pas de compte</a>
            </div>
        <script src = "main.js"></script>
    </body>
</html>