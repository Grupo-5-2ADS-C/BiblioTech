const divLoginSenha = document.getElementById('content__inputs3');
const sistemaOperacional = document.getElementById('in_sistemaOperacional');
const setor = document.getElementById('in_setorMaquina');
const senha = document.getElementById('in_senhaMaquina');
const login = document.getElementById('in_loginMaquina');
const checkbox = document.getElementById('cbx');

function popularInputs() {
    sistemaOperacional.value = sessionStorage.SISTEMA_OPERACIONAL;
    setor.value = sessionStorage.SETOR;
    login.value = sessionStorage.LOGIN;
    senha.value = sessionStorage.SENHA;
}

function limparSession() {
    sessionStorage.removeItem('ID_MAQUINA');
    sessionStorage.removeItem('SETOR');
    sessionStorage.removeItem('SISTEMA_OPERACIONAL');
    sessionStorage.removeItem('LOGIN');
    sessionStorage.removeItem('SENHA');
}

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

function editarMaquina() {

    fetch(`/maquinas/editarMaquina/${sessionStorage.ID_USUARIO}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            sistemaOperacional: sistemaOperacional.value,
            setor: setor.value,
            login: login.value,
            senha: senha.value,
        })
    }).then(function (resposta) {

        if (resposta.ok) {

            if (checkbox.checked) {
                editarSenhaFuncionario();
            }

            window.alert("Máquina atualizada com sucesso!");
            window.location = "maquinasCadastradas.html"
 
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


function voltarMaquina() {
    limparSession();
    window.location = "maquinasCadastradas.html"
}