AOS.init();



// fix nav bar position
let firstPage = document.querySelector(".pageContainer");
const navBar = document.querySelector("nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("nav-fix");
  } else {
    navBar.classList.remove("nav-fix");
  }
});



function typeit(div){
new TypeIt(`.${div}`, { 
    lifeLike: false, 
    speed: 100,
    loop: true
  })
  .type("desiger")
  .pause(2000)
  .delete(220)
  .type("developer")
  .pause(2000)
  .go()
}

typeit("animate");
typeit("animates");

const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();