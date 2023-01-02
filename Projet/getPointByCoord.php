<?php

    seesion_start();

    function getPointByCoord($coordPoint, $Cli){
        $x = $coordPoint[0];
        $y = $coordPoint[1];
        $getPoint = $bdd->prepare('SELECT * FROM lieux WHERE x = $x AND y = $y AND idCli = $Cli');
        $getPoint->execute();
        $point = $getPoint->fetchAll();
        return $point;
    }

    $coord = $_GET["coord"];
    $IdCli = $_SESSION['userId'];
    getPointByCoord($coord, $IdCli);

?>