const divLoginSenha = document.getElementById('content__inputs3');
const checkbox = document.getElementById('cbx');
const email = document.getElementById('in_emailFuncionario');
const celular = document.getElementById('in_celularFuncionario');
const senha = document.getElementById('in_senhaFuncionario');
const login = document.getElementById('in_loginFuncionario');

function mudarDiv() {
    if (checkbox.checked) {
        divLoginSenha.classList.remove('disabled');
        divLoginSenha.classList.add('active');
        senha.disabled = false;
        login.disabled = false;
    } else {
        divLoginSenha.classList.remove('active');
        divLoginSenha.classList.add('disabled');
        senha.disabled = true;
        login.disabled = true;
    }
}

function checkboxOnLoad() {
    checkbox.checked = false;
    senha.disabled = true;
    login.disabled = true;
}


function popularInputs() {
    email.value = sessionStorage.EMAIL_USUARIO;
    celular.value = sessionStorage.CELULAR_USUARIO;
    login.value = sessionStorage.LOGIN_USUARIO;
    senha.value = sessionStorage.SENHA_USUARIO;
    nomeFuncionario.innerHTML = sessionStorage.NOME_USUARIO
}

function editarUsuario() {

    fetch(`/usuarios/editarUsuario/${sessionStorage.ID_USUARIO}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            telefone: celular.value,
        })
    }).then(function (resposta) {

        if (resposta.ok) {

            if (checkbox.checked = true) {
                editarUsuarioSenha();
            }

            window.alert("Usuário atualizado com sucesso!");
            window.location = "usuario.html"
 
            limparSession();

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a edição! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}


function editarUsuarioSenha() {

    fetch(`/usuarios/editarUsuarioSenha/${sessionStorage.ID_USUARIO}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login.value,
            senha: senha.value,
        })
    }).then(function (resposta) {

        if (resposta.ok) {

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a edição! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function limparSession() {
    sessionStorage.removeItem('NOME_USUARIO');
    sessionStorage.removeItem('EMAIL_USUARIO');
    sessionStorage.removeItem('CELULAR_USUARIO');
    sessionStorage.removeItem('LOGIN_USUARIO');
    sessionStorage.removeItem('SENHA_USUARIO');
}

function voltar() {
    limparSession();
    window.location = "usuario.html"
}