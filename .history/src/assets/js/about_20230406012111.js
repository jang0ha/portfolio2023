// 스크롤 카드 노출 이벤트
let contain = gsap.utils.toArray('.my-service-list');

contain.forEach((item, index) => {
var className = $(item).attr('class');
var left = item.querySelector('.' + className + ' .my-service-list__left');
var right = item.querySelector('.' + className + ' .my-service-list__right');

const tl = new gsap.timeline({
  scrollTrigger: {
    trigger: item,
    scrub: .6,
    start: "top bottom",
    end: "center center",
  }
});

tl.fromTo(left, {
  xPercent: "50",
  ease: "none",
}, {
  xPercent: 0,
  ease: "none",
}, 0);

tl.fromTo(right, {
  xPercent: -50,
  ease: "none",
}, {
  xPercent: 0,
  ease: "none",
}, 0);
});




// 스크롤 회전 아이콘
var serviceContainer = document.querySelector('.section-service');
var circle = document.querySelector('.icon-contact-svg');

const tl = new gsap.timeline({
  scrollTrigger: {
    trigger: serviceContainer,
    scrub: 0.5,
    start: "top bottom",
    end: "bottom top",
  }
});

tl.to(circle, {
  ease: "none",
  rotation:-360,
}, 0);