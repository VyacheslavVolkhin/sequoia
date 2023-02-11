$(document).ready(function(){

    //section-photo-slider
    if (!!$('.section-photo-slider').offset()) {
        $('.section-photo-slider .slider').slick({
            dots: false,
            slidesToShow: 3,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
    
    $('.directions.section-inner .directions__item').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).parents('.section-inner').find('.active').removeClass('active');
            $(this).addClass('active');
        }
        return false;
    })
    $('.directions.section-inner .directions__item .ico-close').on('click', function() {
        $(this).parents('.directions__item').removeClass('active');
        return false;
    })
    
    //section-products-slider
    if (!!$('.section-products-slider').offset()) {
        $('.section-products-slider .slider').slick({
            dots: false,
            slidesToShow: 2,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
    
});


