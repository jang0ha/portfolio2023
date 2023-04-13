window.addEventListener('load', function () {

});


window.addEventListener('resize', function () {
  // add();
});
let mm = gsap.matchMedia(),
  breakPoint = 992;

// console.log(mm);

// console.log(context.conditions);

// console.log(typeof mm);

//setObj.add(값) = 값 추가 

//object.add() >> {객체 속성 : 재 정의},

// >> mm의 {isMobile, isDesktop}속성을 재 정의 add({값을 추가}) >> (context:매개변수) => 함수 실행 > context.conditions에  { isMobile, isDesktop } 속성 property 에 재할당

mm.add({
  isadd:'asdf', isRe:'ee'
  // isMobile: `(max-width: ${breakPoint - 1}px)` + "and (prefers-reduced-motion : no-preference)",
  // isDesktop: `(min-width: ${breakPoint}px)` + "and (prefers-reduced-motion : no-preference)",
}, (context) => {
  console.log(context.conditions);
  let { isadd, isRe } = context.conditions; // 구조 분해 할당
  console.log(isadd);
  console.log(isRe);
})

var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7