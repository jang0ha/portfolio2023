window.addEventListener('load', function () {

});


console.log(mm);

let mm = gsap.matchMedia(),
  breakPoint = 992;
mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (context) => {
  console.log(context.conditions);
  let { isMobile, isDesktop } = context.conditions; 
})
console.log(isMobile);
console.log(isDesktop);
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7