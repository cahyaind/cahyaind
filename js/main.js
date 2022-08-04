$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    
    // event onClick toggle menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });

});