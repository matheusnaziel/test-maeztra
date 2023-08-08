$(document).ready(function() {
  function closePopup(){
    let closePopup = $('.popup-close-button')
    let popup = $('.popup-overlay')
    closePopup.on('click', function() {
      popup.fadeOut();
    })
  }
  closePopup()
  $('.slider').slick({
    dots: true,
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='./img/icon-prev.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='./img/icon-next.svg'>",
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        }
      },
    ]
  });

  $('.product-list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='./img/icon-prev.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='./img/icon-next.svg'>",
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  });

  function initSlider(selector) {
    $(selector).slick({
      autoplay: false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      centerMode: false,
      slidesToScroll: 1
    });
  }

  function checkWindowSize() {
    if (window.innerWidth < 1024) {
      initSlider('.advantage ul');
      initSlider('.partners ul');
    } else {
      $('.advantage ul, .partners ul').slick('unslick');
    }
  }
  checkWindowSize();

  $(window).resize(function() {
    checkWindowSize();
  });

  var footerColumns = $('.footer-info');
  footerColumns.on('click', function(e) {
    if ($(window).width() <= 1024) {
      e.preventDefault()
      $(this).toggleClass('collapsed');
    }
  });

  

});
