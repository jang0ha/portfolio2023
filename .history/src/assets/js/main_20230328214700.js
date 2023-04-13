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
    let {isMobile, isDesktop } = context.conditions;


    // 현재 스크롤 위치값 구하기 
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY)
    })
    let scrollY = window.scrollY || document.documentElement.scrollTop; // 현재 스크롤 위치 변수 저장


    
  })
});
