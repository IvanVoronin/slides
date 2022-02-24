$(document).ready(function () {
    slideshow.on('beforeShowSlide', function(slide) {
        var slide_index = slide.getSlideIndex();
        $('.remark-slide-content').eq(slide_index).css('opacity', '1');
    });

    slideshow.on('beforeHideSlide', function (slide) {
        var slide_index = slide.getSlideIndex();
        $('.remark-slide-content').eq(slide_index).css('opacity', '0');
    });
});