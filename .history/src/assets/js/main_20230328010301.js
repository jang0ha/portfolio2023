window.addEventListener('load', function () {

});


window.addEventListener('resize', function () {
  // add();
});
let mm = gsap.matchMedia(),
  breakPoint = 992;

console.log( typeof mm);
// 
mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (contenxt) => {
  console.log(contenxt.conditions);
})