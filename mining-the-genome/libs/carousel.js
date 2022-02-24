$(document).ready(function() {
    $('.my-carousel').on('click', function() {
        var display_mode = $(this).find('.my-carousel-item:visible').css('display');
        $(this).find('.my-carousel-item:visible')
               .fadeOut(500, function() {
                    if ( $(this).next().length == 0 ) {
                        $(this).siblings()
                               .first('.my-carousel-item')
                               .fadeIn(500)
                               .css('display', display_mode);
                    } else {
                        $(this).next('.my-carousel-item')
                               .fadeIn(500)
                               .css('display', display_mode);
                    }    
        });
    });
});