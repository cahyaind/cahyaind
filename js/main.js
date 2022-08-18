$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    
    // event onClick toggle menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    // owl carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
    });

});