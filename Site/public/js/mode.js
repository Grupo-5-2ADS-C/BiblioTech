const body = document.querySelector("body"),
toggle = document.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch");

let getMode = localStorage.getItem("mode");
if ( getMode === "dark") {
  body.classList.toggle("dark");
}

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode","dark");
    }else{
      localStorage.setItem("mode","light");
    }
})

