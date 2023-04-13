let contain = gsap.utils.toArray('.my-services-row');

contain.forEach((item, index) => {
var className = $(item).attr('class');
var left = item.querySelector('.' + className + ' .my-services-row__left');
var right = item.querySelector('.' + className + ' .my-services-row__right');
var card = item.querySelector('.' + className + ' .my-services-row__left' + '.my-services-row__left--card');
var extension = item.querySelector('.' + className + ' .card-extension');

const tl = new gsap.timeline({
  scrollTrigger: {
    trigger: item,
    scrub: .6,
    start: "top bottom",
    end: "center center",
  }
});

tl.fromTo(extension, {
  autoAlpha: 0,
  ease: "none",
}, {
  delay: .2,
  duration: .05,
  autoAlpha: 1,
  ease: "none",
}, 0);

tl.fromTo(left, {
  xPercent: "50",
  ease: "none",
}, {
  xPercent: 0,
  ease: "none",
}, 0);

tl.fromTo(right, {
  xPercent: -50,
  ease: "none",
}, {
  xPercent: 0,
  ease: "none",
}, 0);
});
