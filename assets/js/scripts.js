jQuery(document).ready(function() {
	
	//Startando o Wow
	new WOW().init();


	$('.maps').click(function () {
	    $('.maps iframe').css("pointer-events", "auto");
	});

	$( ".maps" ).mouseleave(function() {
	  $('.maps iframe').css("pointer-events", "none"); 
	});
});