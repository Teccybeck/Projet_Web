window.onload = function() {

    cover.onclick = function() {
        alert("Vous devez vous connecter pour pouvoir utiliser les fonctionnalités du site.")
    }

}

var toolbar = document.getElementById('toolbar');
var Restaurant = document.getElementById('restaurant');
var ombre = document.getElementById('ombre');
var Theatre = document.getElementById('theatre');
var icones = document.getElementsByClassName('icones');
var Monument = document.getElementById('monument');
var Magasin = document.getElementById('magasin');
var divcompte = document.getElementById('compte');
var fermercompte = document.getElementById('fermercompte');
var cover = document.getElementById('cover');

const map = L.map('map').setView([48.85854412462416, 2.3559542339166146], 13);

const IconRestaurant = L.icon({
    iconUrl: 'restaurant.png',
    iconSize: [50, 50],
})

const IconMonument = L.icon({
    iconUrl: 'Monument.png',
    iconSize: [55, 55],
})

const IconMagasin = L.icon({
    iconUrl: 'magasin.png',
    iconSize: [33, 33],
})

const IconTheatre = L.icon({
    iconUrl: 'theatre.png',
    iconSize: [33, 33],
})

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);