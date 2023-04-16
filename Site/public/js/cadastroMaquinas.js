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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (slideIndex == 1) {
      document.getElementById("btn-back").style.display = "none";
    } else {
      document.getElementById("btn-back").style.display = "block";
    }

    if (slideIndex == slides.length) {
      document.getElementById("btn-go").innerHTML = "Cadastrar";
    } else {
      document.getElementById("btn-go").innerHTML = "Próximo";
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var button1 = document.getElementById("addform");
var container1 = document.getElementById("container");

button1.addEventListener("click", function () {
  var div = document.createElement("div");
  div.className = "new-div";
  div.innerHTML = '<div class = "second-form"> <div class="first-column"> <label for="">Marca do Disco</label> <input type="text" placeholder="Digite a marca do disco"> <label for="">Modelo do Disco</label> <input type="text" placeholder="Digite o modelo do Disco"> <label for="">Número de Série</label> <input type="text" placeholder="Digite o número de série do disco"> </div> <div class="second-column"> <label for="">Tipo do Disco</label> <input type="text" placeholder="Ex: HD, SSD"> <label for="">Armazenamento do Disco</label> <select name="" class="select" id=""> <option value=""> Selecione a quantidade de armazenamento </option> <option value="256Gb">240-256Gb</option> <option value="512Gb">480-512Gb</option> <option value="1024Gb">980-1Tb</option> <option value="2048Gb">2Tb</option> </select> <label for="">Número de Série</label> <input type="text" placeholder="Digite o número de série do disco"> </div> </div>';
  container1.appendChild(div);
});

var button2 = document.getElementById("addformRAM");
var container2 = document.getElementById("container_RAM");

button2.addEventListener("click", function () {
  var div = document.createElement("div");
  div.className = "new-div";
  div.innerHTML = '<div class="second-form"> <div class="first-column"> <label for="">Marca da memória RAM</label> <input type="text" placeholder="Digite a marca da memória RAM"> <label for="">Modelo da memória RAM</label> <input type="text" placeholder="Digite o modelo da memória RAM"> <label for="">asjdhashjdbahsjd</label> <input type="text" placeholder=""> </div> <div class="second-column"> <label for="">Velocidade total</label> <select name="" class="select" id=""> <option class="placeholder" value=""> Selecione a quantidade de RAM </option> <option class="placeholder" value="4Gb">4Gb</option> <option class="placeholder" value="8Gb">8Gb</option> <option class="placeholder" value="16Gb">16Gb</option> </select> <label for="">Frequência</label> <input type="text" placeholder="Ex: 2133MHz, 2600MHz"> <label for="">Número de Série</label> <input type="text" placeholder="Digite o número de série da memória RAM"> </div> </div>';
  container2.appendChild(div);
});