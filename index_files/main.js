$(function () {


  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('active');
    $('.menu__list').toggleClass('active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__btn').removeClass('active');
    $('.menu__list').removeClass('active');
  });


new Swiper('.preview__container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true
  });


  if (window.innerWidth < 641) {
    $('.news__inner').addClass('swiper-wrapper');
    let swiperSlide = new Swiper('.news__wrapper', {
      slidesPerView: 1.25,
      slidesPerGroup: 1,
      spaceBetween: 10
    });
  } else {
    $('.news__inner').removeClass('swiper-wrapper');
  };


  new Swiper('.project-one__container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
      641: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      921: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30
      }
    },
  });


  new Swiper('.projects__container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 35
      },
    },
  });



});

$(document).on('af_complete', function(event, response) {
  var form = response.form;
  if (form.attr('id') == 'contacts__form') {
    if (response.success){
      $.fancybox.open('<div class="thanks"><p>Спасибо, Ваше сообщение успешно отправлено.</p></div>');
    }
  }
});

$(document).on('af_complete', function(e, response) {
  if (response.success) {
    switch (response.form.attr('id')) {
      case 'sendexForm_form_subscribe':
        $('#sendexForm').html('Вы подписались на рассылку! Мы отправили Вам письмо со ссылкой - перейдите по ней, и Ваша подписка будет активирована.');
        break;
          
      case 'sendexForm_form_unsubscribe':
        $('#sendexForm').html('Вы отписались от рассылки');
        break;
    }
  } 
});
