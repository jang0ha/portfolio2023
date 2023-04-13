import project form '../data/project'

// gsap 플러그인 전역 등록 ()
gsap.registerPlugin(ScrollTrigger, ResizeObserver, Observer);


var html = document.querySelector("html");
var body = document.querySelector("body");
let headerBlock = document.querySelector("header");

// // pc/모바일 분기 처리
var Init = {
  defaults: function () {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  resize: function () {
    Init.getBrowserSize();
    Init.drawBreakPoint();
    Init.drawBreakPoint();
    Init.breakpoint = window.matchMedia("(min-width:992px)").matches;
    if (!Init.breakpoint) {
      html.classList.remove("desktop");
      html.classList.add("mobile");
      Init.checkDevice();
    } else {
      html.classList.remove("mobile");
      html.classList.add("desktop");
      html.removeAttribute("data-device");
      if (body.classList.contains('open-menu')) {
        body.classList.remove('open-menu');
        playScroll();
      }
    }
  },
  getBrowserSize: function () {
    //정확한 문서 전체 높이 값을 얻으려면 아래 여섯 프로퍼티가 반환하는 값 중 최댓값
    this.bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    this.bodyWidth = Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
  },
  drawBreakPoint: function () {
    html.setAttribute("data-width", this.bodyWidth);
    html.setAttribute("data-height", this.bodyHeight);
  },
  checkDevice: function () {
    var varUA = navigator.userAgent.toLowerCase();

    if (varUA.indexOf("android") > -1) {
      html.setAttribute("data-device", "android");
    } else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
      //IOS
      html.setAttribute("data-device", "ios");
    } else {
      //아이폰, 안드로이드 외
      html.setAttribute("data-device", "others");
    }
  }
};


// 헤더
var Header = {
  menuButtonEl: document.querySelector(".menu-button"),
  gnbEl: document.querySelector("header .gnb"),
  gnbAnchrEl: document.querySelector("header .gnb a"),
  init: function () {
    this.menu();
  },

  menu: function () {
    Header.menuButtonEl.addEventListener("click", (event) => {
      event.stopPropagation();
      body.classList.toggle("open-menu");
      if (body.classList.contains("open-menu")) {
        stopScroll();
      } else {
        playScroll();
      }
      // Common.focusLoop(gnbEl);
      Common.focusLoop(headerBlock);
    })
  },

  scroll: function () {

  },
}




var Common = {
  init: function () {
    this.focusLoop();
    this.firstElementFocus();
  },
  focusLoop: function (element) {
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = element.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    var firstTabStop = focusableElements[0];
    var lastTabStop = focusableElements[focusableElements.length - 1];

    firstTabStop.focus();
    element.addEventListener("keydown", trapTabKey);

    function trapTabKey(e) {
      // Check for TAB key press
      if (e.keyCode === 9) {
        // SHIFT + TAB
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop.focus();
          }
          // TAB
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
          }
        }
      }
      // ESCAPE
      if (e.keyCode === 27) {
        //closeModal();
      }
    }
  },
  firstElementFocus: function (element) {
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = element.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    var firstTabStop = focusableElements[0];
    var lastTabStop = focusableElements[focusableElements.length - 1];

    firstTabStop.focus();
  },
}




// --------------------------------------------------------------
// --------------------------------------------------------------

Init.defaults();
Header.init();


// --------------------------------------------------------------
// --------------------------------------------------------------

//body 스크롤
function playScroll() {
  html.classList.remove("stop-scroll");
}
//body 고정
function stopScroll() {
  html.classList.add("stop-scroll");
}


// 모바일 체크
function isMobileDevice() {
  console.log('모바일 접속');
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

isMobileDevice()
/**
 * 프로젝트 렌더링
 */

let projectWrapperEl = document.querySelector(".project-list");

projectList.forEach(list => {
  const projectItemEl = document.createElement("li").classList.add(".project-item .swiper-slide");

  // 설명
  let descLists = '';
  list.descs.forEach(desc =>
    descLists += /*html */ `
      <p>${description.desc1}</p>
      <p>${description.desc2}</p>
    `
  )

  // 분류
  let sortLists = '';
  list.sorts.forEach(sort =>
    sortLists += /*html */ `
      <li>${sort.sort1}</li>
      <li>${sort.sort2}</li>
    `
  )


  projectItemEl.innerHTML = /*html */ `
  <a href="" title="${item.title} 프로젝트 이동" class="project-link">
      <h3 class="title">${item.title}</h3>
      <div class="description-wrapper">
        <div class="left-side">
         ${descLists}
        </div>
        <div class="right-side">
          <ul class="disc-style">
          ${sortLists}
          </ul>
        </div>
        <div class="date-side">
        ${item.date}
        </div>
      </div>
      <img src="@@webRoot/assets/images/thumbnail-oncare.png" alt="프로젝트 썸네일 이미지" class="thumb-img">
    </a>
`
projectWrapperEl.append(projectItemEl)
})