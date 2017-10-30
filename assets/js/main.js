$(document).ready(function () {
	
	//mobile toggle function

  $(".mobile-menu").on("click", function (e) {
  	e.preventDefault();
    $(this).toggleClass('active');
    // $('.menu-line').toggleClass('active');
  });

  // banners slider on main page
  var mainSlider = $(".main-slider");

  if (mainSlider.length > 0) {
    $(mainSlider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      mobileFirst: true,
      dots: true,
      dotsClass: 'dots',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: "unslick"
        }
      ]
    });
  };

  // advantages slider
  var advantagesList = $(".advantages-list");

  if (advantagesList.length > 0) {
    $(advantagesList).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      mobileFirst: true,
      dots: true,
      dotsClass: 'dots',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1200,
          settings: "unslick"
        }
      ]
    });
  };


  //carousel for items list (on mobiles only)
  var itemsList = $(".items-list");

  if (itemsList.length > 0) {
    $(itemsList).slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      mobileFirst: true,
      dots: true,
      dotsClass: 'dots',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1200,
          settings: "unslick"
        }
      ]
    });
  };

  //brands carousel
  var brands = $(".brands-list");

  if (brands.length > 0) {
    $(brands).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      mobileFirst: true,
      dots: true,
      dotsClass: 'dots',
      responsive: [
        {
          breakpoint: 992,
          settings: "unslick"
        }
      ]
    });
  };
});