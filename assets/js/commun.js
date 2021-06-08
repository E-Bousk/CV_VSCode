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
function toggleButton() {
	
	$("#executeCode").toggle("slow");
}


// function myFunction(x) {
// 	if (x.matches) { // If media query matches
// 	  document.body.style.backgroundColor = "yellow";
// 	} else {
// 	 document.body.style.backgroundColor = "pink";
// 	}
//   }
  
//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes


