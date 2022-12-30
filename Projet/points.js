window.onload = function() {
    moncompte.onclick = function() {
		divcompte.style.visibility = 'visible';
		ombre.style.visibility = 'visible';
		divcompte.style.height = '100%';
		divcompte.style.width = '20%';
		divcompte.style.zIndex = '21';
	};

	fermercompte.onclick = function() {
		divcompte.style.visibility = 'hidden';
		ombre.style.visibility = 'hidden';
		divcompte.style.height = '1%';
		divcompte.style.width = '1%';
		divcompte.style.zIndex = '3';
	};
}

var moncompte = document.getElementById('moncompte');
var divcompte = document.getElementById('compte');
var fermercompte = document.getElementById('fermercompte');