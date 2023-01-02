<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossorigin=""></script>

    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleAccueil.css">
    <link rel="stylesheet" href="stylePoints.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <title>Mes points</title>
</head>

<body>
<div class="navbar">
    <ul class = "menu">
        <li id = 'accueil'><a href = 'connecte.php'>Accueil 🏠</a></li>
        <li id = 'moncompte'>Mon compte 👤</li>
    </ul>
</div>

<div id="compte">
    <h2 id = "fermercompte">X</h2>
    <a>Mes points</a>
    <div class="barre"></div>
    <a href = "index.html">Se déconnecter</a>
</div>

<div id="main">

</div>

<div class="verif">
    <h1>Supprimer le point ?</h1>
    <button type = "submit" class = "boutons" id = "oui">Oui</button>
    <button type = "submit" class = "boutons" id = "non">Non</button>
</div>

<div id="ombre"></div>

<script src = "points.js" ></script>
</body>

</html>