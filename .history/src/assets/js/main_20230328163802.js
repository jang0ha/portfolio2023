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
    

    let mainTitleWrapEl = document.querySelector(".hero-section .title-wrapper");
    let heroSection = document.querySelector('.hero-section');
    let logoEl = document.querySelector(".logo");

    const logoOffsetTop = logoEl.offsetTop; // logo의 offsetTop위치
    console.log(logoOffsetTop);
    console.log(mainTitleWrapEl);
    console.log(heroSection.clientHeight);
    console.log(logoEl.clientWidth);

    const visualLogo = gsap.timeline({
      scrollTrigger: {
          trigger: heroSection,
        start: '0 top',
          end : () =>  `+=${heroSection.clientHeight}`,
          scrub: true,
          // pin: true,
          // pinSpacing: false, //핀 시 안컨테이너  위치 고정
          markers: true,
      },
    });
    
    visualLogo
      .to(".hero-section .title-wrapper .main-title", {
      // width : `${logoEl.clientWidth}`,
      // height : `${logoEl.clientHeight}`,
      // scale: 0.5,
      fontSize: `20rem`,
      letterSpacing: ` -0.75rem`,
      transformOrigin: "0 0",
      height: "auto",
      lineHEight:"auto",
      duration: 1,
    })
    // .to(mainTitleWrapEl, {
    //   scale: 0.5,
    //   transformOrigin: "0 0",
    //   duration: 0.5,
    // })  
    //   .to(mainTitleEls, {
      
    // })
  
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
