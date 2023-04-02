const body = document.querySelector("body"),
toggle = document.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch");

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
})

