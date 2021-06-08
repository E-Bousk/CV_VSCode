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


