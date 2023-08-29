// nav bar position
let firstPage = document.querySelector(".pageContainer");
const navBar = document.querySelector("nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
    firstPage.classList.add("gap")
  } else {
    navBar.classList.remove("fix-nav");
  }
});

new TypeIt(".animate", { 
  lifeLike: false, 
  speed: 0 ,
  loop: true,
})
.type("D")
.pause(200)
.type("e")
.pause(200)
.type("s")
.pause(200)
.type("i")
.pause(200)
.type("g")
.pause(200)
.type("n")
.pause(200)
.type("e")
.pause(200)
.type("r")
.pause(1400)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.type("D")
.pause(200)
.type("e")
.pause(200)
.type("v")
.pause(200)
.type("e")
.pause(200)
.type("l")
.pause(200)
.type("o")
.pause(200)
.type("p")
.pause(200)
.type("e")
.pause(200)
.type("r")
.pause(1400)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.pause(10)
.delete(1)
.go();