$(document).ready(function(){

	initChamps();
	initButtSuppr();
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

	valider.click(function(){
		supprPoint(idActuelle);
		demanderValidation.css("visibility", "hidden");
		ombre.css("visibility", "hidden");
	});

	annuler.click(function(){
		demanderValidation.css("visibility", "hidden");
		ombre.css("visibility", "hidden");
	});

});

var moncompte = document.getElementById('moncompte');
var divcompte = document.getElementById('compte');
var fermercompte = document.getElementById('fermercompte');
var champs = document.getElementsByClassName('champ');
var ombre = $('#ombre');
var buttSuppr = $(".supprPoint");
var demanderValidation = $('.verif');
var valider = $('#oui');
var annuler = $('#non');
var idActuelle = 0;

function initChamps() {
	var main = $('#main');

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
				tmpData++;
				main.append("<div class='champ' name='" + tmpId + "'>" +
					"<h1>" + tmpNom+ "</h1>" +
					"<p>"+ tmpAvis + "</p>" +
					"<p>" + tmpNote + "</p>" +
					"<div id='boutons'>" +
					"<button type='submit' class='boutons supprPoint' name='suppr' id='"+ tmpId + "'>Supprimer</button>" +
					"</div>" + "</div>" + "<div class='barre'></div>"
				)
				$('#'+tmpId).click(function () {
					demanderValidation.css("visibility", "visible");
					ombre.css('visibility', "visible");
					idActuelle = $(this).attr("id");
				});
			}
		}
	})
}

function initButtSuppr(){
	console.log(buttSuppr.length);

	$('.supprPoint').each(function () {
		$(this).click(function () {
			demanderValidation.css("visibility", "visible");
			ombre.css('visibility', "visible");
			idActuelle = buttSuppr[i].attr("name");
		});
	});

	/*for(i=0; i<buttSuppr.length; i++){
		buttSuppr[i].onclick = function() { supprPoint(buttSuppr[i].getAttribute('name')); };
		console.log('oui');
	}*/
	/*for (i = 0; i < buttSuppr.length;i++){

		buttSuppr[i].click(function() {

			demanderValidation.css("visibility", "visible");
			ombre.css('visibility', "visible");
			idActuelle = buttSuppr[i].attr("name");
		});
	}

	 */
}

function supprPoint(id) {
	$.ajax ({
		type: 'POST',
		url: 'supprPoint.php',
		data: "idPoint=" + id,
		cache: false,
		success: function(reponse) {
			console.log(reponse)
			var champtmp = $("[name='" + id + "']");
			champtmp.remove();
		},
	});
}