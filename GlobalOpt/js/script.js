window.addEventListener('DOMContentLoaded', function () {

    // Menu with hamburger
    const menu = document.querySelector('.promo__nav'),
          menuItem = document.querySelectorAll('.promo__nav > li > a'),
          hamburger = document.querySelector('.promo__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('promo__hamburger_active');
        menu.classList.toggle('promo__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('promo__hamburger_active');
            menu.classList.toggle('promo__nav_active');
        });
    });

    // Carousel References Section
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 45,
        nav: true,
        center: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0
            },
            1040: {
                items: 3,
                nav: true,
            },

        }
    });

    // Modal
    
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, .modal').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, .modal').fadeOut('slow');
    });


});

