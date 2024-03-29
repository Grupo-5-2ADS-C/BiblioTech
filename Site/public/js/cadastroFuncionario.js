in_nomeFuncionario.value = ''
in_emailFuncionario.value = ''
in_celularFuncionario.value = ''
in_cargoFuncionario.value = ''
in_loginFuncionario.value = ''
in_senhaFuncionario.value = ''

function gerarChaveDeSeguranca() {
  let serialKey = ``;
  const caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

  for (let i = 0; serialKey.length < 10; i++) {
      serialKey += caracteres.charAt(parseInt(Math.random() * caracteres.length + 1));
  }

  in_senhaFuncionario.value = serialKey;
}

function cadastrarFuncionario() {

    var nomeFuncionario = in_nomeFuncionario.value;
    var emailFuncionario = in_emailFuncionario.value;
    var celularFuncionario = in_celularFuncionario.value;
    var cargoFuncionario = ''

    if (in_cargoFuncionario.value == 'NOC') {
        cargoFuncionario = 1;
    } else if (in_cargoFuncionario.value == 'Analista') {
        cargoFuncionario = 2;
    }
  
      //Recupere o valor da nova input pelo nome do id
      // Agora vá para o método fetch logo abaixo
  
      // Enviando o valor da nova input
      fetch("/usuarios/cadastrarFuncionario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeFuncionario,
            emailServer: emailFuncionario,
            celularServer: celularFuncionario,
            fkBibliotecaServer: sessionStorage.ID_USUARIO,
            cargoServer: cargoFuncionario,
        })
      }).then(function (resposta) {
  
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {

          cadastrarLoginFuncionario();
  
          window.alert("Funcionário cadastrado!")
          setTimeout(() => {
            window.location = "./funcionariosCadastrados.html";
          }, "1000")
  
          limparFormulario();
        } else {
          throw ("Houve um erro ao tentar realizar o cadastro!");
        }
      }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  
      return false;
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

  function cadastrarLoginFuncionario() {

    var login = in_loginFuncionario.value;
    var senha = in_senhaFuncionario.value;
    
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarLoginFuncionario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        loginServer: login,
        senhaServer: senha,
        fkBibliotecaFuncionarioServer: sessionStorage.ID_USUARIO,
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