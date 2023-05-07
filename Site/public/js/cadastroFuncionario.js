function cadastrarFuncionario() {

    var responsavel = in_responsavel.value;
    var telefone = in_telefone.value;
    var email = in_email.value;
    var login = in_login.value;
    var senha = in_senha.value;
    var cargo = ''

    if (in_cargo.value == 'NOC') {
        cargo = 2;
    } else if (in_cargo.value == 'Analista') {
        cargo = 3;
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
            responsavelServer: responsavel,
            telefoneServer: telefone,
            emailServer: email,
            loginServer: login,
            senhaServer: senha,
            cargoServer: cargo
        })
      }).then(function (resposta) {
  
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
          div_loader.style.display = 'block';
  
          cadastrarEndereco();
  
          setTimeout(() => {
            window.location = "Funcionarios.html";
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