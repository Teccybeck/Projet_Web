window.onload = function() {

	initialiserboutons();

	initialiserPoints();

	map.on('click', onMapClick);

	accueil.onclick = function () {
		$.ajax({
			type: 'GET',
			url: 'phpRedirect.php',
			success: function(reponse) {
				console.log("blc")
		}
	});
	}
	
	Restaurant.onclick = function() {
		clickicone(Restaurant);
		IconePoint = IconRestaurant;
	}

	Monument.onclick = function() {
		clickicone(Monument);
		IconePoint = IconMonument;
	}

	Magasin.onclick = function() {
		clickicone(Magasin);
		IconePoint = IconMagasin;
	}

	Theatre.onclick = function() {
		clickicone(Theatre);
		IconePoint = IconTheatre;
	}

	fermer.onclick = function() {
		form.style.visibility = 'hidden';
		ombre.style.visibility = 'hidden';
		if(!valide){
			map.removeLayer(point);
		}
		cleanform();
	}

	valider.onclick = function() {
		if(infovalide()){
			/*
			valide = true;
			point.bindPopup("<h1 class = 'titlepopup'>" + nom.value + "</h1> <p class = 'avispopup'>" + avis.value + "</p>"
				+ "<p id = 'etoilepopup'>" + note + "⭐</p>");
			//point.on('click',supprpoint);
			tabpoints[tabpoints.length] = point;
			fermer.onclick();
			clearselecttoolbar();
			cliquable = false;
			valide = false;
			selecetoile = false;

			 */

			var nomPoint = nom.value;
			var avisPoint = avis.value;
			var notePoint = note;
			var Type = getType(point);
			var X = lat;
			var Y = long;
			console.log(nomPoint," : ", avisPoint," : ", notePoint," : ", Type," : ", X," : ", Y);
			$.ajax({
				type: 'POST',
				url: 'addPoint.php',
				data: "nom=" + nomPoint + "&avis=" + avisPoint + "&note=" + notePoint + "&type=" + Type + "&X=" + X + "&Y=" + Y,
				cache : false,
				success: function(reponse) {
					valide = true;
					point.bindPopup("<h1 class = 'titlepopup'>" + nom.value + "</h1> <p class = 'avispopup'>" + avis.value + "</p>"
					+ "<p id = 'etoilepopup'>" + note + "⭐</p>");
					//point.on('click',supprpoint);
					fermer.onclick();
					clearselecttoolbar();
					cliquable = false;
					valide = false;
					selecetoile = false;
				}
			})

		}
		else {
			clearincorecte();
			if(nom.value == '') {
				nom.classList.add('incorecte');
			}
			if(!selecetoile) {
				for(i = 0; i<etoiles.length; i++){
					etoiles[i].classList.add('incorecte');
				}
			}
			if(avis.value == '')
				avis.classList.add('incorecte')
		}
	}

	/*suppr.onclick = function() {
		selectionner(suppr);
		if(modesuppr){
			modesuppr = false;
		}
		else{
			modesuppr = true;
		}
	}*/

	map.on('zoomanim',function() {
		/*tabpoints = getPoints(); */
		if (map.getZoom() < 11) {
			for(i=0; i<tabpoints.length; i++){
				map.removeLayer(tabpoints[i]);
			}
		}
		else {
			for(i=0; i<tabpoints.length; i++){
				tabpoints[i].addTo(map);
			}
		}
	});

	moncompte.onclick = function() {
		divcompte.style.visibility = 'visible';
		ombre.style.visibility = 'visible';
		divcompte.style.height = '100%';
		divcompte.style.width = '20%';
	};

	fermercompte.onclick = function() {
		divcompte.style.visibility = 'hidden';
		ombre.style.visibility = 'hidden';
		divcompte.style.height = '0%';
		divcompte.style.width = '0%';
	};

}

var cliquable = false;
var valide = false;
var IconePoint = null;
var pointaffiches = true;
var toolbar = document.getElementById('toolbar');
var Restaurant = document.getElementById('restaurant');
var ombre = document.getElementById('ombre');
var form = document.getElementById('form');
var fermer = document.getElementById('croix');
var valider = document.getElementById('valider');
var nom = document.getElementById('nom');
var avis = document.getElementById('avis');
var etoiles = document.getElementsByClassName('butetoile');
//var suppr = document.getElementById('suppr');
var Theatre = document.getElementById('theatre');
var icones = document.getElementsByClassName('icones');
var Monument = document.getElementById('monument');
var Magasin = document.getElementById('magasin');
var moncompte = document.getElementById('moncompte');
var divcompte = document.getElementById('compte');
var fermercompte = document.getElementById('fermercompte');
var accueil = document.getElementById('accueil');
var point = null;
var derniernote = -1;
var note = 0;
//var modesuppr = false;
var selecetoile = false;
var tabpoints = []; // a enlever
var zoom = 0;
var type = '';
var lat;
var long;

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

function initialiserPoints() {
	$.ajax ({
		type: 'GET',
		url: 'recupPoints.php',
		cache: false,
		success: function(data) {
			var tmpData = 0;
			while(data.length > tmpData){
				var tmpId ="";
				var tmpNom= "";
				var tmpNote = "";
				var tmpAvis = "";
				var tmpIdCli = "";
				var tmpType = "";
				var tmpCoordx = "";
				var tmpCoordy = "";
				while (data[tmpData] != '¤'){
					tmpId += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpNom += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpNote += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpAvis += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpIdCli += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpType += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpCoordx += data[tmpData];
					tmpData++;
				}
				tmpData++;
				while (data[tmpData] != '¤'){
					tmpCoordy += data[tmpData];
					tmpData++;
				}
				var tmpIcone = getIcone(tmpType);
				point = L.marker([tmpCoordx,tmpCoordy], {icon: tmpIcone}).addTo(map);
				point.bindPopup("<h1 class = 'titlepopup'>" + tmpNom + "</h1> <p class = 'avispopup'>" + tmpAvis + "</p>"
					+ "<p id = 'etoilepopup'>" + tmpNote + "⭐</p>");
				tmpData++;
			}
			//console.log(data);
			/*tabPoints = reponse;
			for(i = 0; i<tabPoints.length; i++){
				var tmpNom = tabPoints[i].nom;
				var tmpNote = tabPoints[i].note;
				var tmpAvis = tabPoints[i].avis;
				var tmpType = tabPoints[i].idType;
				var tmpIcone = getIcone(tmpType);
				var tmpCoord = [tabPoints[i].x, tabPoints[i].y];
				point = L.marker(tmpCoord, {icon: tmpIcone}).addTo(map);
				point.bindPopup("<h1 class = 'titlepopup'>" + tmpNom + "</h1> <p class = 'avispopup'>" + tmpAvis + "</p>"
					+ "<p id = 'etoilepopup'>" + tmpNote + "⭐</p>");
			}

			 */
		}
	})
}

function getIcone(nom) {
	if(nom == 1){
		return IconRestaurant;
	}
	if(nom == 2){
		return IconMonument;
	}
	if(nom == 3){
		return IconMagasin;
	}
	if(nom == 4){
		return IconTheatre;
	}
}

function selectionner(item) {
	if(item.classList.contains('selectionne')){
		item.classList.remove('selectionne');
	}
	else {
		if(contien(icones,item)) {
			clearselecttoolbar();
		}
		item.classList.add('selectionne');
	}
}

function clearselecttoolbar() {
	for(i = 0; i<icones.length; i++){
		icones[i].classList.remove('selectionne');
		console.log(icones[i]);
	}
	cliquable = false;
}

function contien(tab, item){
	for(i=0; i<tab.length; i++){
		if(tab[i] == item){
			return true;
		}
	}
	return false;
}

function onMapClick(e) {
	if(cliquable == true){
		ombre.style.visibility = 'visible';
		form.style.visibility = 'visible';
		point = L.marker(e.latlng, {icon: IconePoint}).addTo(map);
		lat = e.latlng.lat;
		long = e.latlng.lng;
	}
}

function clickicone(icone) {
	selectionner(icone);
	if(cliquable){
		cliquable = false;
	}
	else {
		cliquable = true;
	}
}

/*function supprpoint(e) {
	if(modesuppr) {
		for(i=0; i<tabpoints.length; i++){
			if(e.latlng == tabpoints[i].getLatLng()){
				map.removeLayer(tabpoints[i]);
				tabpoints.splice(i,1);
			}
		}
	}


	$.ajax({
		type: 'POST';
		url: 'supprPoint.php,
		data: {e.latlng: coord},
		suucess: function(reponse) {
			for(i=0; i<tabpoints.length; i++){
				if(e.latlng == tabpoints[i].getLatLng()){
					map.removeLayer(tabpoints[i]);
				}
			}
			map.removeLayer(L.marker(e.latlng)); // a changer
		};
	});


}



function getPointByCoord(coord) {
	$ajax ({
		type: 'GET',
		url: 'getPointByCoord.php',
		data: {coord: coord},
		succes: function(reponse) {
			return reponse;
		}
	})
}

*/

function cleanform(){
	nom.value = '';
	avis.value = '';
	if(derniernote != -1){
		selectionner(etoiles[derniernote]);
		derniernote = -1;
		selecetoile = false;
	}
	clearincorecte();
}

function clearincorecte(){
	nom.classList.remove('incorecte');
	for(i = 0; i<etoiles.length; i++){
		etoiles[i].classList.remove('incorecte');
	}
	avis.classList.remove('incorecte');
}

function infovalide(){
	if(nom.value == '' || !selecetoile || avis.value == ''){
		return false;
	}
	return true;
}

function initialiserboutons(){
	for(let i = 0; i<5; i++){
		etoiles[i].onclick = function(){
			if(selecetoile){
				selecetoile = false;
			}
			else {
				selecetoile = true;
			}
			selectionner(etoiles[i]);
			if(derniernote != -1){
				selectionner(etoiles[derniernote]);
			}
			note = etoiles[i].name;
			derniernote = i;
		}
	}
}

function getPoints() {
	/*

	$.ajax ({
		type: 'GET',
		url: 'recupPoints.php',
		succes: function(reponse) {
			return reponse;
		}
	})

	*/
}

function getType(item){
	if(item.getIcon() == IconMagasin){
		return 3;
	}
	if(item.getIcon() == IconMonument){
		return 2;
	}
	if(item.getIcon() == IconRestaurant){
		return 1;
	}
}
