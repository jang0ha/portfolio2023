window.addEventListener('load', function () {

});

ScrollTrigger.saveStyles(".mobile, .desktop");
document.addEventListener("DOMContentLoaded", function () {

  // breackpoint정의
  let mm = gsap.matchMedia(),
    breakPoint = 992;
  
      // 메인타이틀 스크롤 탑 위치 구하기 
      window.addEventListener("scroll", () => {
        let mainTitleScrollTop = mainTitleEl.scrollTop;
        console.log(mainTitleScrollTop);
    });
  
  
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


    let mainTitleEl = heroSection.querySelector(".main-title");
    let mainTitleScrollTop = mainTitleEl.scrollTop;

    // 최대 스크롤 값
    let maxScrollValue = heroSection.scrollHeight - mainTitleEl.clientHeight;

    const logoOffsetTop = logoEl.offsetTop; // logo의 offsetTop위치
    console.log(logoOffsetTop);
    console.log(mainTitleEl.clientHeight);
    console.log(maxScrollValue);

  


    const visualLogo = gsap.timeline({
      scrollTrigger: {
          trigger: heroSection,
        start: '0 top',
          // end : () =>  `+=${heroSection.clientHeight}`,
        end :  `bottom ${maxScrollValue}`,
        // end: () => {
          
        // },
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
      lineHeight:"auto",
        duration: 1,
        onStart: () => {
          console.log('start');
        },
        onComplete: () => {
          console.log("finish");
        }
        
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
