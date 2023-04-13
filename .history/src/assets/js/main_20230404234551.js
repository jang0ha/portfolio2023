let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// 모바일 체크
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


ScrollTrigger.saveStyles(".is-main .main-logo, .logo-area .logo-wrapper");



function saveStyles(elements) {
  let styles, matchedMedia;
  elements = gsap.utils.toArray(elements);
  ScrollTrigger.saveStyles(elements);
  ScrollTrigger.addEventListener("refreshInit", () => {
    matchedMedia = false;
    styles = elements.map(el => el.style.cssText);
  });
  ScrollTrigger.addEventListener("matchMedia", () => {
    matchedMedia = true;
  })
  ScrollTrigger.addEventListener("refresh", () => matchedMedia || elements.forEach((el, i) => el.style.cssText = styles[i]));
}



// ============= SMOOTH SCROLL AT ANCHOR FOR MOBILE ==============

let breakpoint = window.matchMedia("(min-width:992px)").matches;
$(window).resize(function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  ScrollTrigger.refresh();
  ScrollTrigger.update();
  gsap.matchMediaRefresh()

});


$(document).ready(function () {
  ScrollTrigger.refresh();
  ScrollTrigger.update();
  gsap.matchMediaRefresh()
});

document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.refresh();
  ScrollTrigger.update();
  gsap.matchMediaRefresh()

});



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
  // console.log(context.conditions);
  let {
    isMobile,
    isDesktop
  } = context.conditions;

  let ctx = gsap.context((context) => {});
  let projectItemEl = document.querySelectorAll('.project-item');


  // 모바일 일떄
  if (isMobile) {
    body.setAttribute("data-device", "isMobile");
  }

  // pc 일떄
  if (isDesktop) {
    body.setAttribute("data-device", "isDesktop");
  }

  logoEvent();

  //로고 이동 이벤트
  function logoEvent() {
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
        y: isDesktop ? (80 - 23) / 2 : (60 - 27) / 2,
      }, "-=1")
      .to(mainLogoEl, {
        // fontSize: `20rem`,
        // fontSize : "".concat("20", "rem"),
        fontSize: 20,
        transformOrigin: "0 0",
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
  }


})

  // 프로젝트 호버 이미지
  function projectHover() {
   
    
  }

// 모바일일떄
if (isMobileDevice()) {
  console.log('모바일');
  
}

// pc일때
if (!isMobileDevice()) {
  console.log('데스크')
  let projectItemEl = document.querySelectorAll('.project-item');
  var myProject = undefined;
  gsap.set('.project-item .thumb-img', {
    yPercent: -50,
    xPercent: -50
  })
  
  gsap.utils.toArray(".project-item").forEach((el) => {
    const image = el.querySelector('.thumb-img'),
      setX = gsap.quickSetter(image, "x", "px"),
      setY = gsap.quickSetter(image, "y", "px"),
      align = e => {
        setX(e.clientX);
        setY(e.clientY);
      },
      startFollow = () => document.addEventListener("mousemove", align),
      stopFollow = () => document.removeEventListener("mousemove", align),
      fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        onReverseComplete: stopFollow
      });
  
    el.addEventListener('mouseenter', (e) => {
      fade.play();
      startFollow();
      align(e);
    });
  
    el.addEventListener('mouseleave', () => fade.reverse());
  
  });
}