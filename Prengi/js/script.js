
$(document).ready(function () {

  // Slider promo
  $('.promo__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
  ]
  });

  // Slider expert
   $('.expert__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
  ]
  });


  // Menu with hamburger
  const menu = document.querySelector('.promo__nav-items'),
        menuItem = document.querySelectorAll('.promo__nav-items > a'),
        hamburger = document.querySelector('.promo__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('promo__hamburger_active');
        menu.classList.toggle('promo__nav-items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('promo__hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
  
  
});