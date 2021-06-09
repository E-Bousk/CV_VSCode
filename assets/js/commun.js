// =====================================================================
// ================= script pour le texte (auto-)typed =================
	document.addEventListener('DOMContentLoaded', function()
	{
	  var typed = new Typed('#typed',
	  {
		stringsElement: '#typed-strings',
		typeSpeed: 50,
		backSpeed: 30,
		startDelay: 100,
		loop: true,
		loopCount: Infinity,
	  });
	});
// =====================================================================


// to toggle on/off the items on menu
function openCloseMenu(divID, imgID) {

	if ($(divID).is(":visible")) {
		$(divID).hide();
		$(imgID).attr({
			src: "/./CV/assets/img/fd.png",
			alt: "right arrow",
			class: "pb-1"
		});
	} else {
		$(divID).show();
		$(imgID).attr({
			src: "/./CV/assets/img/fb.png",
			alt: "down arrow",
			class: "pb-1"		
		});
	}
}


// to toggle on/off the entire menu
function toggleMenu() {

	if ($("#navSize").is(":visible")) {
		$("#navSize").toggle("slow");
		$("#navSize").attr("class", "col-2");
	} else {
		$("#navSize").toggle("slow");
		$("#navSize").attr("class", "d-none d-md-block col-md-2");
	}
}


// to toggle with the 3 dots
function toggleDots() {
	
	$("#executeCode").toggle("slow");
}


// to toggle with button
function ToggleButton() {
	
	if ($("#navSize").is(":visible")) {
		$("#navSize").hide();
		$("#navSize").attr({
			class: "d-none d-md-block col-md-2"	
		});
		$("#ToggleButton").html("Afficher ID");
		$("#CVenPHP").show();
		$("#navSize").css("font-size", "x-small");
		
	} else {
		$("#navSize").show();
		$("#navSize").attr({
			class: "col-10",
		});
		$("#ToggleButton").html("Afficher code CV");
		$("#CVenPHP").hide();
		$("#navSize").css("font-size", "larger");
	}
}

$(window).resize(function() {
	if ($(this).width() < 991) {
		$("#navSize").css("font-size", "x-small");
	} else if ($(this).width() >= 991) {
		$("#navSize").css("font-size", "medium");
	}
  });
