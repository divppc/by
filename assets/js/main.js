$(document).ready(function () {
	
	//mobile toggle function

  $(".mobile-menu").on("click", function (e) {
  	e.preventDefault();
    $(this).toggleClass('active');
    // $('.menu-line').toggleClass('active');
  });
});