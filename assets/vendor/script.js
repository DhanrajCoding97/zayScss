$(document).ready(function() {
  var hamburgerMenu = $('.hamburger');
  var navBar = $('nav');
  var navLinks = $('.nav-links')

  //hamburger
  hamburgerMenu.click(function() {
    hamburgerMenu.toggleClass('active');
    navBar.toggleClass('active');
    navLinks.toggleClass('active');
    $('body').toggleClass('hidden');
  });

  // slick slider
  function videoSlider(sliderHolder) {
    sliderHolder.slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  videoSlider($('.banner-slider'));  
});