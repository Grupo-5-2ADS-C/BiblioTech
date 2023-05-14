function cadastrarFuncionario() {

    var nomeFuncionario = in_nomeFuncionario.value;
    var emailFuncionario = in_email.value;
    var celularFuncionario = in_celular.value;
    var cargoFuncionario = ''

    if (in_cargo.value == 'NOC') {
        cargoFuncionario = 1;
    } else if (in_cargo.value == 'Analista') {
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
  
          setTimeout(() => {
            window.location = "./Funcionarios.html";
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

    var login = in_nomeUsuario.value;
    var senha = in_senha.value;
    
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