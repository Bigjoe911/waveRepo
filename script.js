var hamB = document.querySelector(".hamburger-menu");
var firstSpan = document.querySelector(".first-span");
var secSpan = document.querySelector(".sec-span");
var navTwo = document.querySelector(".head-links1");
// var btnArea = document.querySelector(".button-area")
// var btn = document.querySelector(".button")
// var p = document.querySelector(".indication")
// var link = document.querySelectorAll("a")

hamB.addEventListener("click", () => {
    hamB.classList.toggle("active")
    navTwo.classList.toggle("show")
})

// btnArea.addEventListener("click", () => {
//     btnArea.classList.toggle("move");
//     btnArea.classList.toggle("change")
//     if(btnArea.classList.contains("move")) {
//         p.textContent = "dark";
//         p.style.color = "white";
//         btn.style.backgroundColor = "white";
//         document.body.style.backgroundColor = "black";
//         link.forEach((loop) => {
//             loop.style.color =  "white";
//         })

//     }else {
//         p.textContent = "light";
//         p.style.color = "black";
//         btn.style.backgroundColor = "black";
//         document.body.style.backgroundColor = "white";
//         link.forEach((loop) => {
//             loop.style.color =  "black";
//         })
//     }
// })