const body = document.querySelector("body"),
sidebar = document.querySelector(".side"),
toggle = document.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
})

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
})