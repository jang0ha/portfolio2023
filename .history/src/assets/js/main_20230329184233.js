window.addEventListener('load', function () {

});
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

$(window).resize(function () {
  
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  

	ScrollTrigger.refresh();
  ScrollTrigger.update();
  gsap.matchMediaRefresh() 
  gsap.matchMediaRefresh() 
});


$(document).ready(function(){
	ScrollTrigger.refresh();
  ScrollTrigger.update();
  gsap.matchMediaRefresh() 
});

document.addEventListener("DOMContentLoaded", () => {
	ScrollTrigger.refresh();
  ScrollTrigger.update();
  gsap.matchMediaRefresh() 
});



ScrollTrigger.saveStyles(".main-logo");

// breackpoint정의
let mm = gsap.matchMedia(),
  breakPoint = 992;

let heroSection = document.querySelector('.hero-section');
let mainLogoEl = document.querySelector(".main-logo");
let subLogoEl = document.querySelector(".sub-logo");
let logoWrapperEl = document.querySelector(".logo-wrapper");
let subSmallEl = logoWrapperEl.querySelector("small");
let headerBlock = document.querySelector("header");
let headerCenter = (headerBlock.clientHeight - 20) / 2; // 높이 고정값으로 줌 
var html = document.querySelector("html");
var body = document.querySelector("body");

// breakPoint에 따라 gsap실행
mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (context) => {
  console.log(context.conditions);
  let {
    isMobile,
    isDesktop
  } = context.conditions;

  if (isMobile) {
    body.setAttribute("data-device", "isMobile");
  }
  if (isDesktop) {
    body.setAttribute("data-device", "isDesktop");
  }

  const visualLogo = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      // 트리거 기준/ 뷰포트 기준
      start: () => `-=${heroSection.offsetTop}`,
      scrub: 1.1,
      pin: true,
      // pinSpacing: false, //핀 시 안컨테이너  위치 고정
      markers: true,
    },
  });

  visualLogo
    .to(logoWrapperEl, {
      y: isDesktop? (headerBlock.clientHeight - 32) / 2 : (headerBlock.clientHeight - 20) / 2,
    }, "-=1")
    .to(mainLogoEl, {
      // fontSize: `20rem`,
      fontSize : "".concat("20", "rem"),
      // fontSize: 20,
      transformOrigin: "0 0",
      height: `auto`,
      duration: 1,
      width: 'fit-content',
    }, "-=1")
    .to(subSmallEl, {
      opacity: 0,
      height: 0,
      // fontSize: `16rem`,
      // fontSize: "".concat("16", "rem"),
      y: `-${subSmallEl.clientheight}`
    }, "-=0.5")
    .to(
      subLogoEl, {
        opacity: 1,
        duration: 1
      }, "+=0.5")
})




function logo() {
  
 
}