function cadastrarFuncionario() {

    var nome = in_nome.value;
    var celular = in_celular.value;
    var email = in_email.value;
    var cargo = ''

    if (in_cargo.value == 'NOC') {
        cargo = 1;
    } else if (in_cargo.value == 'Analista') {
        cargo = 2;
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
            nomeServer: nome,
            celularServer: celular,
            emailServer: email,
            cargoServer: cargo,
            fkBibliotecaServer: sessionStorage.ID_USUARIO,
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