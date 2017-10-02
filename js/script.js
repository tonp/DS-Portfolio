$(document).ready(function() {

	$("#firstImg").fadeIn(2000);

	window.sr = ScrollReveal({reset:true});
	sr.reveal(".navbar", {
		duration: 2000,
		delay:1000,
		origin:"top",
		reset:false
	});

	sr.reveal(".carousel-indicators", {
		duration: 2000,
		delay:1000,
		origin:"bottom", 
		reset:false
	});

	sr.reveal("h3", {
		duration: 2000,
		origin:"right",
		
	});

	sr.reveal("#profilePic", {
		duration: 2000,
		origin:"right",
		distance:"100px"
		
	});
	

	sr.reveal(".glyphicon", {
		duration: 2000,
		origin:"left",
		distance:'300px',
	});


	// Smooth Scrolling 
	$(".nav li a").click(function(event){

		// Get the attribute of clicked link
		var link = $(this).attr("href");
		

		// Get the position of the link
		var linkPos = $(link).position();

		$("html,body").animate({
			scrollTop: linkPos.top}, 310);
		
	});


});




