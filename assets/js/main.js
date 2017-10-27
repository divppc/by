$(document).ready(function () {
	
	//mobile toggle function

  $(".mobile-menu").on("click", function (e) {
  	e.preventDefault();
    $(this).toggleClass('active');
    // $('.menu-line').toggleClass('active');
  });

  // banners slider on main page
  $('.main-slider').flickity({
    contain: true,
    watchCSS: true,
    prevNextButtons: false
  });

  // advantages slider
  $('.advantages-list').flickity({
    cellAlign: 'right',
    contain: true,
    watchCSS: true,
    prevNextButtons: false
  });
});