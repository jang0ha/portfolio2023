// gsap 플러그인 전역 등록 ()
gsap.registerPlugin(ScrollTrigger);


var html = document.querySelector("html");
var body = document.querySelector("body");

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

Init.defaults();



document.addEventListener('DOMContentLoaded', function () {
  deviceWidth();
});
window.addEventListener("resize", () => {
  deviceWidth()
})

//html 스크롤
function playScroll() {
  html.classList.remove("fixed");
}
//html 고정
function stopScroll() {
  html.classList.add("fixed");
}
