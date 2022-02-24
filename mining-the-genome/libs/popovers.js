$(document).ready(function() {
    var closebtn = $('<button type="button">&times;</button>')
        .addClass('close-btn')
        .on('click', function() {
            $(this).closest('div.popover').popover('hide').popover('disable');
        });

    $('.has-popover').on('inserted.bs.popover', function() {
        var popid = $(this).attr('aria-describedby');
        if ( $('#' + popid).find('.close-btn').length == 0 ) {
            $('#' + popid).find('.popover-body').after(closebtn);
        }
    });
});