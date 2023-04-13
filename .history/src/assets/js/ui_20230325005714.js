// gsap 플러그인 전역 등록 ()
gsap.registerPlugin(ScrollTrigger);
var html = document.querySelector("html");
var body = document.querySelector("body");

// pc/모바일 분기 처리


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
      html.classList.remove("is-desktop");
      html.classList.add("is-mobile");
    } else {
      html.classList.remove("is-mobile");
      html.classList.add("is-desktop");
    }
  },
  getBrowserSize: function () {
    this.bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    this.bodyWidth = Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
  },
  drawBreakPoint: function () {
    html.setAttribute("data-width", this.bodyWidth);
    html.setAttribute("data-height", this.bodyHeight);
  },
};