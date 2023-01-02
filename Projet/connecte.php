<?php
session_start();
$bdd = new PDO("mysql:host=127.0.0.1;dbname=clientmap;charset=utf8", "root", "");
if(isset($_SESSION['id'])) {
    $check = $bdd->prepare('SELECT * FROM clients WHERE id = ?');
    $check->execute(array($_SESSION['id']));
    $user = $check->fetch();
    $row = $check->rowCount();

}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossorigin=""></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap" rel="stylesheet">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styleAccueil.css">
        <title>Connecté</title>
    </head>

    <body>

        <div class="navbar">
            <ul class = "menu">
                <li id = 'accueil'><a>Accueil 🏠</a></li>
                <li id = 'moncompte'>
                    <?php echo $user['Nom'];
                    echo " ";
                    echo $user['Prenom'];
                    ?>
                    👤</li>
            </ul>
        </div>

        <div id="compte">
            <h2 id = "fermercompte">X</h2>
            <a href = 'points.php'>Mes points</a>
            <div class="barre"></div>
            <a href = "index.html">Se déconnecter</a>
        </div>

        <div id="toolbar">
            <img src = "magasin.png" id = "magasin" title = "Magasin" class = "icones">
            <img src = "monument.png" id = "monument" title = "Monument" class = "icones">
            <img src = "restaurant.png" id = "restaurant" title='Restaurant' class = "icones">
            <img src = "theatre.png" id = "theatre" title = "Theatre" class = "icones">
        </div>

        <div id="form">
            <h1>Ajouter un point</h1>
            <h2 id = "croix">X</h2>
            <div class="champ">
                <h3>Nom</h3>
                <input type = "text" name = "nom" id = "nom" class="texte">
            </div>
            <div class="champ">
                <h3>Note</h3>
                <div id="etoiles">
                    <button type = "button" name = "1" id = "1e" class = "butetoile">1⭐</button>
                    <button type = "button" name = "2" id = "2e" class = "butetoile">2⭐</button>
                    <button type = "button" name = "3" id = "3e" class = "butetoile">3⭐</button>
                    <button type = "button" name = "4" id = "4e" class = "butetoile">4⭐</button>
                    <button type = "button" name = "5" id = "5e" class = "butetoile">5⭐</button>
                </div>
            </div>
            <div class="champ">
                <h3>Avis</h3>
                <textarea name = "avis" class = "texte" id = "avis"></textarea>
            </div>
            <button id = "valider" type = "submit">Valider</button>
        </div>
    
        <div id="map"></div>

        <div id="ombre"></div>
        
        <script src = "main.js" ></script>
    </body>
    
</html>