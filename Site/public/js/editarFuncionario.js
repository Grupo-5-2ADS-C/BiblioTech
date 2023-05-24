const divLoginSenha = document.getElementById('content__inputs3');
const checkbox = document.getElementById('cbx');
const nome = document.getElementById('in_nomeFuncionario');
const email = document.getElementById('in_emailFuncionario');
const celular = document.getElementById('in_celularFuncionario');
const cargo = document.getElementById('in_cargoFuncionario');
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
    nome.value = sessionStorage.NOME;
    email.value = sessionStorage.EMAIL;
    celular.value = sessionStorage.CELULAR;
    cargo.value = sessionStorage.CARGO;
    login.value = sessionStorage.LOGIN;
    senha.value = sessionStorage.SENHA;
    nomeFuncionario.innerHTML = sessionStorage.NOME
}

function editarFuncionario() {

    fetch(`/funcionarios/editarFuncionario/${sessionStorage.ID_FUNCIONARIO}/${sessionStorage.ID_USUARIO}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            celular: celular.value,
            cargo: cargo.value,
        })
    }).then(function (resposta) {

        if (resposta.ok) {

            if (checkbox.checked = true) {
                editarSenhaFuncionario();
            }

            window.alert("Funcionário atualizado com sucesso!");
            window.location = "funcionariosCadastrados.html"
 
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


function editarSenhaFuncionario() {

    fetch(`/funcionarios/editarSenhaFuncionario/${sessionStorage.ID_FUNCIONARIO}/${sessionStorage.ID_USUARIO}`, {
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
    sessionStorage.removeItem('ID_FUNCIONARIO');
    sessionStorage.removeItem('NOME');
    sessionStorage.removeItem('EMAIL');
    sessionStorage.removeItem('CELULAR');
    sessionStorage.removeItem('CARGO');
    sessionStorage.removeItem('LOGIN');
    sessionStorage.removeItem('SENHA');
}

function voltar() {
    limparSession();
    window.location = "funcionariosCadastrados.html"
}