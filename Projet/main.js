window.onload = function() {

	var cliquable = false;
	var valide = false;
	var developperbar = false;
	var IconePoint = null;
	var developper = document.getElementById('developper');
	var toolbar = document.getElementById('toolbar');
	var Restaurant = document.getElementById('restaurant');
	var ombre = document.getElementById('ombre');
	var form = document.getElementById('form');
	var fermer = document.getElementById('croix');
	var valider = document.getElementById('valider');
	var nom = document.getElementById('nom');
	var avis = document.getElementById('avis');
	var etoiles = document.getElementsByClassName('butetoile');
	var suppr = document.getElementById('suppr');
	var icones = document.getElementsByClassName('icones');
	var Monument = document.getElementById('monument');
	var Magasin = document.getElementById('magasin');
	var point = null;
	var note = 0;
	var modesuppr = false;
	var selecetoile = false;
	var tabpoints = [];

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

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	initialiserboutons();

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
	}

	function contien(tab, item){
		for(i=0; i<tab.length; i++){
			if(tab[i] == item){
				return true;
			}
		}
		return false;
	}

	map.on('click', onMapClick);

	function onMapClick(e) {
		if(cliquable == true){
			ombre.style.visibility = 'visible';
			form.style.visibility = 'visible';
			point = L.marker(e.latlng, {icon: IconePoint}).addTo(map);
			tabpoints[tabpoints.length] = point;
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
			valide = true;
			point.bindPopup("<h1 class = 'titlepopup'>" + nom.value + "</h1> <p class = 'avispopup'>" + avis.value + "</p>"
			+ "<p id = 'etoilepopup'>" + note + "⭐</p>");
			point.on('click',supprpoint);
			fermer.onclick();
			clearselecttoolbar();
			cliquable = false;
			valide = false;
			selecetoile = false;
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
		}
	}

	function supprpoint(e) {
		if(modesuppr) {
			for(i=0; i<tabpoints.length; i++){
				if(e.latlng == tabpoints[i].getLatLng()){
					map.removeLayer(tabpoints[i]);
					tabpoints.splice(i,1);
				}
			}
		}
	}

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
	}

	function infovalide(){
		if(nom.value == '' || !selecetoile){
			return false;
		}
		return true;
	}

	developper.onclick = function() {
		if(!developperbar){
			developperbar = true;
			toolbar.style.height = '50%';
			toolbar.style.top = '25%';
			developper.innerHTML = '△';
		}
		else {
			developperbar = false;
			toolbar.style.height = '33%';
			toolbar.style.top = '33%';
			developper.innerHTML = '▽';
		}
	}

	var derniernote = -1;

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

	suppr.onclick = function() {
		selectionner(suppr);
		if(modesuppr){
			modesuppr = false;
		}
		else{
			modesuppr = true;
		}
	}
}