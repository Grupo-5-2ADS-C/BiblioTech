const target = document.querySelectorAll('[data-move]');
const animationClass = 'animate'

function moveScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

moveScroll()

if (target.length) {
    window.addEventListener('scroll', function () {
        moveScroll();
    });
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "35%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "0%";
  }
  

