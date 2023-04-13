let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

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



ScrollTrigger.saveStyles(".main-logo", ".logo-area .logo-wrapper");

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


  // 모바일 일떄
  if (isMobile) {
    body.setAttribute("data-device", "isMobile");

   
  }

  // pc 일떄
  if (isDesktop) {
    body.setAttribute("data-device", "isDesktop");

  
    // 프로젝트 호버 시 이미지 이동 이벤트
    // context.add("projectThumb", (e) => {
    //   let xpos = e.clientX,
    //       ypos = e.clientY;
      
    //   tl = gsap.timeline();
    //   tl.to(projectLinkThumbEl, {
    //     x: xpos,
    //     y: ypos,
    //     duration: 0.5,
    //     ease: Expo.ease
    //   });
    // })
  
    // // 프로젝트 호버 이벤트
    // context.add("projectHover", (e) => {
    //   if (e.type === "mouseenter") {
    //     let xpos = e.offsetX;
    //     let ypos = e.offsetY;
    //     let imgSrc = e.target.dataset.src; // 이미지 src저장
    //     let tl = gsap.timeline();
    //     tl.set(projectLinkEl, {
    //       x: xpos,
    //       y: ypos,
    //       attr: {src: imgSrc}
    //     }).to(projectLinkEl, {
    //       autoAlpha: 1,
    //       scale: 1,
    //       duration: 0.5,
    //     });
    //   } else if (e.type === "mouseleave") {
    //     let tl = gsap.timeline();
    //     tl.to(projectLinkEl, {
    //       autoAlpha: 0,
    //       scale:0.3,
    //       duration: 0.5,
    //     });
    //   }
    // })
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
      y: isDesktop ? (80 - 32) / 2 : (60 - 27) / 2,
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


})



// const projectSwiperEl = gsap.utils.toArray(".project-list"); 
// const projectItemEl = document.querySelector(".project-item");
// const projectLinkThumbEl = projectLinkEl.querySelector(".thumb-img");

const projectItemEl = document.querySelectorAll('.project-item');

projectItemEl.forEach((el) => {
  const projectThumbImage = el.querySelector('.thumb-img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(projectThumbImage, { 
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
      ease: Expo.ease
    })
  })
  
  el.addEventListener('mouseleave', (e) => {
    gsap.to(projectThumbImage, { 
      autoAlpha: 0,
      duration:0.5,
    })
  })
  
  el.addEventListener('mousemove', (e) => {
    gsap.set(projectThumbImage, { 
      x: e.offsetX,
      y: e.offsetY,
      duration: 0.5,
      ease: Expo.ease
    })
  })
})