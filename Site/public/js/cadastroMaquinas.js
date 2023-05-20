// WEB DATA VIZ
function cadastrarMaquina() {

  var sistemaOperacional = in_soMaquina.value;
  var setor = in_setorMaquina.value;
  var login = in_loginMaquina.value;
  var senha = in_senhaMaquina.value;

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarMaquina", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        soServer: sistemaOperacional,
        setorServer: setor,
        loginServer: login,
        senhaServer: senha, 
        fkBibliotecaServer: sessionStorage.ID_USUARIO,
      })
    }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {

        setTimeout(() => {
          window.alert("Máquina cadastrada com sucesso!")
          window.location = "./maquinasCadastradas.html";
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