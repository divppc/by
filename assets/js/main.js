$(document).ready(function () {
	
	//mobile toggle function

  $(".mobile-menu").on("click", function (e) {
  	e.preventDefault();
    $(this).toggleClass('active');
    // $('.menu-line').toggleClass('active');
  });

  // similar offers carousel
  $('.main-slider').flickity({
    cellAlign: 'right',
    contain: true,
    watchCSS: true,
    prevNextButtons: false
  });
});