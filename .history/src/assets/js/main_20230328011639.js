window.addEventListener('load', function () {

});


window.addEventListener('resize', function () {
  // add();
});
let mm = gsap.matchMedia(),
  breakPoint = 992;

// console.log(typeof mm);

//setObj.add(값)
//object.add() >> {객체 속성 : 재 정의},

// >> mm의 {isMobile, isDesktop}

mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (context) => {
  console.log(context.conditions);
})