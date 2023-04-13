// gsap 플러그인 전역 등록 ()
gsap.registerPlugin(ScrollTrigger);


var html = document.querySelector("html");
var body = document.querySelector("body");
var headerBlock = document.querySelector("header");

// // pc/모바일 분기 처리
var Init = {
  defaults: function () {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  resize: function () {
    Init.getBrowserSize();
    Init.drawBreakPoint();
    Init.breakpoint = window.matchMedia("(min-width:992px)").matches;
    if (!Init.breakpoint) {
      html.classList.remove("desktop");
      html.classList.add("mobile");
    } else {
      html.classList.remove("mobile");
      html.classList.add("desktop");
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


//about 
var About = {
  activeTextEls: document.querySelectorAll(".active-text"),
  init: function () {
    this.observe();
  },
  observe: function () {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry) // entry is 'IntersectionObserverEntry'
        // 가시성의 변화가 있으면 관찰 대상 전체에 대한 콜백이 실행되므로,
        // 관찰 대상의 교차 상태가 false일(보이지 않는) 경우 실행하지 않음.
        if (!entry.isIntersecting) {
          return
        }
        // 관찰 대상의 교차 상태가 true일(보이는) 경우 실행.
        entry.target.classList.add("active");
      })
    },

      { threshold: 0.8 }
    )



    About.activeTextEls.forEach(el => io.observe(el))
  }
}

About.init();

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


console.log(typeof Common);


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
