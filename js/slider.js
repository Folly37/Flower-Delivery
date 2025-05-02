$(document).ready(function(){
    $(".popular__slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    $('.back__btn__slider').click(function() {
        $('.popular__slider').trigger('prev.owl.carousel');
    });
    
    $('.front__btn__slider').click(function() {
        $('.popular__slider').trigger('next.owl.carousel');
    });
});