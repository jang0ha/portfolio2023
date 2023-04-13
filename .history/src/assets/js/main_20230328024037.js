window.addEventListener('load', function () {

});


window.addEventListener('resize', function () {
  // add();
});


console.log(mm);

// console.log(context.conditions);

// console.log(typeof mm);

//setObj.add(값) = 값 추가 

//object.add() >> {객체 속성 : 재 정의},

// >> mm의 {isMobile, isDesktop}속성을 재 정의 add({값을 추가-첫번째 인수, (함수)두번째인수}) >> 콜백함수(context:매개변수)=> 함수 실행 > context.conditions의 { isMobile, isDesktop } 속성 property 에 재할당
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