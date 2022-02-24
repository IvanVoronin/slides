$.fn.extend({
    glowingSign: function(args) {
        $(this).popover({   
            placement: args.placement,
            content: args.content,
            container: 'body',
            template: '<div class="popover" role="tooltip">' + 
            '<h3 class="popover-header"></h3>' +
            '<div class="popover-body"></div></div>',
            trigger: 'manual',
            html: true
        });

//        $(this).append('<div class="glowing-sign"></div>')
//               .text(args.title);
    }
});

$(document).ready(function() {
    $('svg > .can-glow').click(
        function() {
            $(this).toggleClass('glowing');

            if ( $(this).hasClass('has-popover') ) {
                if ( ! $(this).hasClass('glowing') ) {
                    $(this).popover('hide').popover('enable');
                } else {
                    $(this).popover('show').popover('disable');
                }
            }
    });
});