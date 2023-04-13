window.addEventListener('load', function () {

});

ScrollTrigger.saveStyles(".mobile, .desktop");
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
    

    let mainTitleEl = document.querySelector(".hero-section .title-wrapper");
    let logoEl = document.querySelector(".logo");
    console.log(logoEl);

    const visualLogo = gsap.timeline({
      scrollTrigger: {
          trigger: '.hero-wrap',
          start: '0 top',
          end: 'bottom top',
          scrub: true,
          // pin: true,
          // pinSpacing: false, //핀 시 안컨테이너  위치 고정
          markers: true,
      },
    });
    
    visualLogo.to(mainTitleEl, {
      scale: 0.5,
      transformOrigin:"0 0",
      duration: 4,
    })
  
    // gsap.to(mainTitleEl, {
    //   y: -800,
    //   scrollTrigger: {
    //     trigger: '.main-evolution-02 .inner-pin.first',
    //     start: 'top bottom',
    //     end: 'bottom 110%',
    //     scrub: true,
    //     pin: true,
    //     // pinSpacing: false, //핀 시 안컨테이너  위치 고정
    //     markers: true,
    //   },
    // });
  })
});
