window.addEventListener('load', function () {

});
document.addEventListener("DOMContentLoaded", function () {

  // breackpoint정의
  let mm = gsap.matchMedia(),
    breakPoint = 992;
  
  // breakPoint에 따라 gsap실행
  mm.add({
    isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
    isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
  }, (context) => {
    // console.log(context.conditions);
    let { isMobile, isDesktop } = context.conditions;
    

    let mainTitleEl = document.querySelector(".hero-section .main-title");
    console.log(mainTitleEl);
  
    gsap.to('.evolotion-text-img-container .img-mask-evolution-g', {
      y: -800,
      ease: 'none',
      scrollTrigger: {
        trigger: '.main-evolution-02 .inner-pin.first',
        start: 'top bottom',
        end: 'bottom 110%',
        scrub: true,
        pin: true,
        // pinSpacing: false, //핀 시 안컨테이너  위치 고정
        // markers: true,
      },
    });
  })
});
