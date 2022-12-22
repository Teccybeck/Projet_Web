window.onload = function() {

	var cliquable = false;
	var valide = false;
	var Restaurant = document.getElementById('restaurant');
	var ombre = document.getElementById('ombre');
	var form = document.getElementById('form');
	var fermer = document.getElementById('croix');
	var valider = document.getElementById('valider');
	var nom = document.getElementById('nom');
	var avis = document.getElementById('avis');
	var point = null;

	function selectionner(item) {
		if(item.classList.contains('selectionne')){
			item.classList.remove('selectionne');
			cliquable = false;
		}
		else{
			item.classList.add('selectionne');
			cliquable = true;
		}
	}

    const map = L.map('map').setView([51.505, -0.09], 13);

	const IconRestaurant = L.icon({
		iconUrl: 'restaurant.png',
    	iconSize: [50, 50],
	})

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([51.5, -0.09], {icon: IconRestaurant}).addTo(map)
		.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

	const circle = L.circle([51.508, -0.11], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(map).bindPopup('I am a circle.');

	const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(map).bindPopup('I am a polygon.');


	const popup = L.popup()
		.setLatLng([51.513, -0.09])
		.setContent('I am a standalone popup.')
		.openOn(map);

	map.on('click', onMapClick);

	function onMapClick(e) {
		if(cliquable == true){
			ombre.style.visibility = 'visible';
			form.style.visibility = 'visible';
			point = L.marker(e.latlng, {icon: IconRestaurant}).addTo(map);
		}
		else {
			popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
		}
	}

	Restaurant.onclick = function() {selectionner(Restaurant)};

	fermer.onclick = function() {
		form.style.visibility = 'hidden';
		ombre.style.visibility = 'hidden';
		if(!valide){
			map.removeLayer(point);
		}
	}

	valider.onclick = function() {
		valide = true;
		point.bindPopup(nom.value);
		fermer.onclick();
		selectionner(Restaurant);
		valide = false;
	}

	function cleanform(){
		nom.value = '';
		avis.value = '';
	}
}