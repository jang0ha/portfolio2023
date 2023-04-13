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
    let {
      isMobile,
      isDesktop
    } = context.conditions;


    // 현재 스크롤 위치값 구하기 
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY)
    })
    let scrollY = window.scrollY || document.documentElement.scrollTop; // 현재 스크롤 위치 변수 저장


    let heroSection = document.querySelector('.hero-section');
    let mainLogoEl = document.querySelector(".main-logo");
    const subLogoEl = document.querySelector(".sub-logo");
    let logoWrapperEl = document.querySelector(".logo-wrapper");
    let subSmallEl = logoWrapperEl.querySelector("small");

    console.log(subLogoEl.clientHeight);

    const visualLogo = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        // 트리거 기준/ 뷰포트 기준
        // start:() => `+=${headerBlock.offsetTop}`,]

        start: "0 top",
        end: () => `+=${heroSection.offsetTop}`,

        // start:() => `- ${document.querySelector("header").offsetTop}`,
        // end: () => `+=${heroSection.offsetTop}`,
        scrub: true,
        pin: true,
        // pinSpacing: false, //핀 시 안컨테이너  위치 고정
        markers: true,
      },
    });

    visualLogo
      .to(logoWrapperEl, {
        y: 0,
      },"-=1")
      .to(mainLogoEl, {
        width : `auto`,
        fontSize: `20rem`,
        letterSpacing: ` -0.75rem`,
        transformOrigin: "0 0",
        height: `auto`,
        y:calc(( `${headerBlock.clientHeight} ` -  `${subLogoEl.clientHeight} `)/2)`,
        duration: 1,
        onStart: () => {
          console.log('start');
        },
        onComplete: () => {
          console.log("finish");
          headerBlock.classList.add("header-fixed");
        }
      }, "-=1")
      .to(subSmallEl, {
        opacity: 0,
        height: 0,
        fontSize: `10rem`,
        y: `-${subSmallEl.clientheight} + 10rem`
      }, "-=0.5")

    console.log(`calc((${headerBlock.clientHeight} - ${subLogoEl.clientHeight})/2)` )
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
