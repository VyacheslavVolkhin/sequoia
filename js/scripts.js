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


    //popups
    let popupCurrent;
    $('.js-popup-open').on('click', function () {
        $('.popup-outer-box').removeClass('active');
        $('body').addClass('popup-open');
        popupCurrent = $(this).attr('data-popup');
        $('.popup-outer-box[id="' + popupCurrent + '"]').addClass('active');
        return false;
    })
    $('.js-popup-close').on('click', function () {
        $('body').removeClass('popup-open');
        $('.popup-outer-box').removeClass('active');
        return false;
    })
    
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


    //section-srt-slider
    if (!!$('.section-srt-slider').offset()) {
        $('.section-srt-slider .slider').slick({
            dots: false,
            slidesToShow: 5,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 920,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
    
    
});


