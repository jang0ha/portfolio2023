window.addEventListener('load', function () {

});

let mm = gsap.matchMedia(),
  breakPoint = 992;

mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (contenxt) => {
  console.log(context.conditions);
})