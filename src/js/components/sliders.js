import { Swiper } from "swiper";
import { Pagination, Navigation } from "swiper/modules";

Swiper.use([Pagination, Navigation])
new Swiper('.equip__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.equip__pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    1025: {
      slidesPerView: 3
    }
  }
})


new Swiper('.youtube__slider', {
  slidesPerView: 1,

  pagination: {
    el: '.youtube__pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.y-prev',
    nextEl: '.y-next'
  }
})
new Swiper('.telegram__slider', {
  slidesPerView: 1,

  pagination: {
    el: '.telegram__pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.tg-prev',
    nextEl: '.tg-next'
  }
})



window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.clubs__slider',
    {
      spaceBetween: 10,
      slidesPerView: 1,
      pagination: {
        el : '.clubs__pagination',
        clickable: true
      }
    }
  );
});
