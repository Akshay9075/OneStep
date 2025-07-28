(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    // Sticky navbar and hide topbar on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.header .navbar').addClass('sticky');
            $('.header .topbar').addClass('hide-on-scroll');
        } else {
            $('.header .navbar').removeClass('sticky');
            $('.header .topbar').removeClass('hide-on-scroll');
        }
    });
    
})(jQuery);

// Section scroll animation (CSS-only, no HTML change)
(function() {
  function onScrollAnimate() {
    var elements = document.querySelectorAll('.section-animate');
    var windowHeight = window.innerHeight;
    elements.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('section-animate-visible');
      }
    });
  }
  window.addEventListener('scroll', onScrollAnimate);
  window.addEventListener('resize', onScrollAnimate);
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(onScrollAnimate, 200);
  });
})();

