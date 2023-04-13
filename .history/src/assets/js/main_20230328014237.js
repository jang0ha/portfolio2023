window.addEventListener('load', function () {

});


window.addEventListener('resize', function () {
  // add();
});
let mm = gsap.matchMedia(),
  breakPoint = 992;

console.log(mm);

// console.log(typeof mm);

//setObj.add(값) = 값 추가 

//object.add() >> {객체 속성 : 재 정의},

// >> mm의 {isMobile, isDesktop}속성을 재 정의 (인수) >> 매개변수로 받아서  ()=> 함수 실행 > context의 매개변수 isMobile, isDesktop 으로 재할당

mm.add({
  isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (context) => {
  console.log(context.conditions);
  let { isMobile, isDesktop } = context.conditions; // 구조 분해 할당
})

var a, b;

{a = 5, b = 7} = 1;
console.log(a); // 1
console.log(b); // 7