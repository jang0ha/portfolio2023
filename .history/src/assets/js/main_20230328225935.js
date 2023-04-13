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
    let { isMobile, isDesktop } = context.conditions;
    
    console.log(context.conditions);
  

    let heroSection = document.querySelector('.hero-section');
    let mainLogoEl = document.querySelector(".main-logo");
    let subLogoEl = document.querySelector(".sub-logo");
    let logoWrapperEl = document.querySelector(".logo-wrapper");
    let subSmallEl = logoWrapperEl.querySelector("small");
    let headerCenter = (headerBlock.clientHeight - 24) / 2;
  
    console.log(headerCenter);
  
    const visualLogo = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        // 트리거 기준/ 뷰포트 기준
        start:() => ` (-=${heroSection.offsetTop} +100)`,
        end: () => `+=${heroSection.offsetTop}`,
        scrub: 1,
        pin: true,
        // pinSpacing: false, //핀 시 안컨테이너  위치 고정
        markers: true,
      },
    });
  
    visualLogo
      .to(logoWrapperEl, {
        y: (headerCenter),
  
      },"-=1")
      .to(mainLogoEl, {
        width : `auto`,
        fontSize: `24px`,
        letterSpacing: ` -0.75px`,
        transformOrigin: "0 0",
        height: `auto`,
        duration: 1,
      }, "-=1")
      .to(subSmallEl, {
        opacity: 0,
        height: 0,
        fontSize: `1.6vw`,
        y: `-${subSmallEl.clientheight}`
      }, "-=0.5")
      .to(
        subLogoEl, {
          opacity: 1,
          duration:1
        }, "+=0.5")
  })
});
