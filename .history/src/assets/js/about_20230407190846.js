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



// 텍스트 
let marquee = gsap.utils.toArray('.my-summary-wrap .visual-title');

marquee.forEach((item, index) => {
  let distance = item.clientWidth;

  const tl = new gsap.timeline({ });
  const tl2 = new gsap.timeline({ });

  tl.to(item, 10, {
    ease: "none",
    xPercent: -100, //move each box 100% to left
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % distance) //force x value to be between 0 and 500 using modulus
    },
    repeat: -1
  });

  tl2.fromTo(item, {
    scale: 0.8,
    duration: 0.65,
    ease: "Power2.easeOut",
    },
  { 
    scale: 1,
    duration: 0.65,
    ease: "Power2.easeOut",
  }, 0);

  $( ".my-summary-wrap" ).hover(
    function() {
      $(this).addClass( "-visible" );
      tl.pause();
      tl2.pause();
    }, function() {
      $(this ).removeClass( "-visible" );
      tl2.play(0);
      tl2.play();
      tl.play();
    }
  );


  
});