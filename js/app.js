$(document).ready(function(){

	var fadeSpeed = 400;
	var fadeDelay = 6000;

	var pictureTwo = $('.pictureTwo');
	var pictureOne = $('.pictureOne');
	pictureOne.css('opacity', '0');


	pictureOne.velocity("fadeIn", {duration: fadeSpeed, loop: true, delay: fadeDelay});
	pictureTwo.velocity("fadeOut", {duration: fadeSpeed, loop: true, delay: fadeDelay});

});
