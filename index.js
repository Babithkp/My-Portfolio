AOS.init();

new Glide('.glide').mount();


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

var input = document.querySelector('.glide__track')

var glide = new Glide('.glide', {
  autoplay: input.value,
  hoverpause: false,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()