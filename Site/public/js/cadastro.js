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

    if (slideIndex == 3) {
      document.getElementById("btn-go").style.display = "none";
      document.getElementById("btn-cadastrar").style.display = "block"
    } else {
      document.getElementById("btn-cadastrar").style.display = "none";
      document.getElementById("btn-go").style.display = "block"
      document.getElementById("btn-go").innerHTML = "Próximo";
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Function para receber os dados do endereço atraves do cep, ultilizando a "VIACEP" */
function consultaEndereco() {
  let cep = document.querySelector('#cep_input').value

  if (cep.length != 9) {
    alert('CEP invalido!');
    return;
  }
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
    });
  });

  fetch(url).then(function (response) {
    response.json().then(completarEndereco);
  });
}

/* Função para completar as inputs ultilizando o json retornado pela função anterior */

function completarEndereco(dados) {
  if (dados.erro) {
    alert('Não foi possivel encontrar o endereço!')
  } else {
    logradouro_input.value = dados.logradouro
    cidade_input.value = dados.localidade
    bairro_input.value = dados.bairro
  }
}

// Web-data-viz

const patterns = {
  CNPJ: /^(\d{2})(\d{3})(\d{3})(\d{0,4})(\d{2})/,
  CNPJ_8: /^(\d{2})(\d{3})(\d{3})(\d{0,4})/,
  CNPJ_5: /^(\d{2})(\d{3})/,
  CNPJ_2: /^(\d{2})/,

  PHONE_11: /^(\d{2})(\d{5})(\d{4})/,
  PHONE_6: /^(\d{2})(\d{4})/,
  PHONE_2: /^(\d{2})/,

  CEP: /^(\d{5})/
}

function maskCPF_CNPJ() {
  let document = in_CNPJ.value.replace(/\D+/g, "").trim()

  if (document.length > 14) {
      return false
  }

  if (document.length >= 12) {
      document = document.replace(patterns.CNPJ, "$1.$2.$3/$4-$5")
  } else if (document.length > 8) {
      document = document.replace(patterns.CNPJ_8, "$1.$2.$3/$4")
  } else if (document.length >= 5) {
      document = document.replace(patterns.CNPJ_5, "$1.$2.")
  } else if (document.length >= 2) {
      document = document.replace(patterns.CNPJ_2, "$1.")
  }

  in_CNPJ.value = document
}

function maskPhone() {
  let phone = in_telefone.value.replace(/\D+/g, "").trim()

  if (phone.length > 11) {
      return false
  }

  if (phone.length > 10) {
      phone = phone.replace(patterns.PHONE_11, "($1) $2-$3")
  }  else if (phone.length > 6) {
      phone = phone.replace(patterns.PHONE_6, "($1) $2-")
  } else if (phone.length > 1) {
      phone = phone.replace(patterns.PHONE_2, "($1) ")
  }

  in_telefone.value = phone
}

function maskCEP() {
  let cep = cep_input.value.replace(/\D+/g, "")

  if (cep.length > 8) {
      return false
  }

  if(cep.length > 5){
      cep = cep.replace(patterns.CEP, "$1-")
  }

  cep_input.value = cep
}

const cardErro = document.getElementById("cardErro");

const regexPattern = /[.\-/()]/g;

function cadastrar() {
  var nomeEmpresa = in_nomeEmpresa.value;
  // var cnpj = in_CNPJ.value;
  var cnpj = in_CNPJ.value.replace(regexPattern, "");
  var responsavel = in_responsavel.value;
  // var telefone = in_telefone.value;
  var telefone = in_telefone.value.replace(regexPattern, "");
  var email = in_email.value;
  var login = in_nomeUsuario.value;
  var senha = in_senha.value;
  var senhaConfirmacao = in_confirmacaoSenha.value;
  // var cep = cep_input.value;
  var cep = cep_input.value.replace(regexPattern, "");
  var logradouro = logradouro_input.value;
  var bairro = bairro_input.value;
  var cidade = cidade_input.value;
  var numero = in_numero.value;
  var complemento = in_complemento.value;

  var senhaCaracteres = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  var emailPadrao = /\S+@\S+\.\S+/;

  if (login == '' || email == '' || senha == '' || senhaConfirmacao == '' || nomeEmpresa == '' || cnpj == '' || responsavel == '' || telefone == '' || login == '' || cep == '' || logradouro == '' || bairro == '' || cidade == '' || numero == '') {
    // alert('Verifique o preenchimento dos campos!')
    cardErro.innerHTML = "Verifique o preenchimento dos campos"
    cardErro.style.display = 'block';
    cardErro.classList.add('aparecerErro');
    sumirMensagem();
  } else if (in_senha.value.match(senhaCaracteres) == null) {
    cardErro.innerHTML = "Sua senha deve ter caracteres especiais e alfanuméricos!"
    cardErro.style.display = 'block';
    cardErro.classList.add('aparecerErro');
    sumirMensagem();
  } else if (in_senha.value != in_confirmacaoSenha.value) {
    cardErro.innerHTML = "A senha e a confirmação de senha não coincidem!"
    cardErro.style.display = 'block';
    cardErro.classList.add('aparecerErro');
    sumirMensagem();
  } else if (emailPadrao.test(in_email.value) == false) {
    cardErro.innerHTML = "Digite seu email de forma correta!"
    cardErro.style.display = 'block';
    cardErro.classList.add('aparecerErro');
    sumirMensagem();
  } else if (cep.length > 8 || cep.length < 9) {
    cardErro.innerHTML = "Seu CEP está errado!"
    cardErro.style.display = 'block';
    cardErro.classList.add('aparecerErro');
    sumirMensagem();
  } else if (numero.length > 5) {
    cardErro.innerHTML = "Seu número de endereço está errado!"
    cardErro.style.display = 'block';
    cardErro.classList.add('aparecerErro');
    sumirMensagem();
  } else {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeEmpresa,
        CNPJServer: cnpj,
        responsavelServer: responsavel,
        telefoneServer: telefone,
        emailServer: email,
      })
    }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
        div_loader.style.display = 'block';

        cadastrarLogin();
        cadastrarEndereco();

        setTimeout(() => {
          window.location = "login.html";
        }, "2000")

        limparFormulario();
      } else {
        throw ("Houve um erro ao tentar realizar o cadastro!");
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

    return false;
  }
}

function sumirMensagem() {
  setTimeout(function () {
    cardErro.classList.remove('aparecerErro');
    cardErro.classList.add('desaparecerErro');
  }, 2000); // apenas para exibir o loading
  setTimeout(() => {
    cardErro.classList.remove('desaparecerErro');
    cardErro.style.display = 'none';
  }, 2500);
}

function sumirCarregamento() {
  setTimeout(() => {
    div_loader.style.display = 'none';
  }, 2000);
}

function cadastrarEndereco() {

  var cep = cep_input.value.replace(regexPattern, "");
  var logradouroVar = logradouro_input.value;
  var bairroVar = bairro_input.value;
  var cidadeVar = cidade_input.value;
  var numeroVar = in_numero.value;
  var complementoVar = in_complemento.value;

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrarEndereco", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      CEPServer: cepVar,
      logradouroServer: logradouroVar,
      bairroServer: bairroVar,
      cidadeServer: cidadeVar,
      numeroServer: numeroVar,
      complementoServer: complementoVar
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      limparFormulario();
    } else {
      throw ("Houve um erro ao tentar realizar o cadastro!");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}



