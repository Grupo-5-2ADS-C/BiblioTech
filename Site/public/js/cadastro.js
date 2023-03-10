let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    if (slideIndex == 1) {
      document.getElementById("btn-back").style.display = "none";
    } else {
      document.getElementById("btn-back").style.display = "block";
    }

    if(slideIndex == 3) {
      document.getElementById("btn-go").innerHTML = "Cadastrar";
    } else {
      document.getElementById("btn-go").innerHTML = "Próximo";
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}