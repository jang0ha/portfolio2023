window.addEventListener('load', function () {

});


$(window).resize(function() {
	ScrollTrigger.refresh();
	ScrollTrigger.update();
});


$(document).ready(function(){
	ScrollTrigger.refresh();
	ScrollTrigger.update();
});

document.addEventListener("DOMContentLoaded", () => {
	ScrollTrigger.refresh();
	ScrollTrigger.update();
});



ScrollTrigger.saveStyles(".mobile, .desktop, [data-device='isMobile'], [data-device='isDesktop'], .main-logo");

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


})




function logo() {
  
 
}