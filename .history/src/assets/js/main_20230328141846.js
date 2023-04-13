window.addEventListener('load', function () {

});

/**
 * mm의 {isMobile, isDesktop}속성을 재 정의 add({값을 추가-첫번째 인수, (함수)두번째인수}) >> 콜백함수(context:매개변수)=> 함수 실행 > context.conditions의 { isMobile, isDesktop } 속성 property 에 재할당
 * >>첫번째 인수 조건에 의해 두번째 인수 콜백함수 실행됨을 의미!
 */
let mm = gsap.matchMedia(),
  breakPoint = 992;

  console.log(mm);
  console.log(mm.context);
mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (context) => {
  console.log(context.conditions);
  let { isMobile, isDesktop } = context.conditions; 


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
