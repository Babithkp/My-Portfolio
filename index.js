AOS.init();
// nav bar position
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