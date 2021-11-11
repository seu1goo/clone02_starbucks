if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function () {
  //_.throttle(함수, 시간)
  //gsap.to(요소, 지속시간, 옵션)
  console.log(window.scrollY);
  if (window.scrollY > 400) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //badge

    gsap.to('#to-top', 0.2, {
      x: 0
    });
    //to-top
  } else {

    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //badge

    gsap.to('#to-top', 0.2, {
      x: 100
    });
    //to-top
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
//badge & to-top

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
//visual

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
});
//notice

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
  breakpoints: {
    1025: {
      slidesPerView: 3
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToogleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToogleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //!변수 = 반대값 반환 false <-> true
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});
//promotion

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, //선택자
    random(1.5, 2.5), //동작시간
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    } //옵션
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);
//youtube

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
//section-animation

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  },
  breakpoints: {
    1025: {
      slidesPerView: 5
    },
    641: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});
//awards