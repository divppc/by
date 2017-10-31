$(document).ready(function () {
	
	//mobile toggle function

  $(".mobile-menu").on("click", function (e) {
  	e.preventDefault();
    $(this).toggleClass('active');
    // $('.menu-line').toggleClass('active');
  });


  //function for initialize all sliders
  var initSliders = function () {
    var sliderCommonSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      mobileFirst: true,
      dots: true,
      dotsClass: 'dots'
    }

    // banners slider on main page
    var mainSlider = $(".main-slider");

    if (mainSlider.length > 0) {
      $(mainSlider).slick($.extend(sliderCommonSettings ,{
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
      }));
    };

    // advantages slider
    var advantagesList = $(".advantages-list");

    if (advantagesList.length > 0) {
      $(advantagesList).slick($.extend(sliderCommonSettings, {
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
      }));
    };


    //carousel for items list (on mobiles only)
    var itemsList = $(".items-list");

    if (itemsList.length > 0) {
      $(itemsList).slick($.extend(sliderCommonSettings, {
        slidesToShow: 2,
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
      }));
    };

    //brands carousel
    var brands = $(".brands-list");

    if (brands.length > 0) {
      $(brands).slick($.extend(sliderCommonSettings, {
        arrows: true,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: "unslick"
          }
        ]
      }));
    };
  };
  //init sliders function end

  initSliders();

  // reinit sliders after window resize
  // $(window).resize(function () {
  //   if($(window).width() <= 1200) {
  //     initSliders();
  //   }
  // });
});