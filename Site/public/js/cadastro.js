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

/* Function para receber os dados do endereço atraves do cep, ultilizando a "VIACEP" */
function consultaEndereco(){
  let cep = document.querySelector('#cep_input').value

  if(cep.length != 8){
   alert('CEP invalido!');
   return;
}
   let url = `https://viacep.com.br/ws/${cep}/json/`;

   fetch(url).then(function(response){
       response.json().then(function(data){
           console.log(data) 
       });
   });

   fetch(url).then(function(response){
       response.json().then(completarEndereco);
   });
}

/* Função para completar as inputs ultilizando o json retornado pela função anterior */

function completarEndereco(dados){
  if(dados.erro){
      alert('Não foi possivel encontrar o endereço!')
  } else {
  logradouro_input.value = dados.logradouro
  cidade_input.value = dados.localidade
  bairro_input.value = dados.bairro
  }
}