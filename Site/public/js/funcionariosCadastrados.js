const contentVazia = document.getElementById("contentVazio")

function listarFuncionarios() {
    var fkBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/funcionarios/listarFuncionarios/${fkBiblioteca}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                if (resultado.length == 0) {
                    contentVazia.classList.add("vazio")
                } else {
                    contentVazia.classList.remove("vazio")
                    plotarFuncionarios(resultado);
                }
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mascaraCelular(celular) {
    var celularMascara = celular.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');

    return celularMascara;
}

function plotarFuncionarios(resultado) {

    for (let index = 0; index < resultado.length; index++) {

        const resultadoAtual = resultado[index];

        const nome = resultadoAtual.nome;
        const email = resultadoAtual.email;
        var celular = resultadoAtual.celular;
        const cargo = resultadoAtual.fk_cargo;
        const login = resultadoAtual.login;
        const senha = resultadoAtual.senha;

        var cargoListar = '';

        if (cargo == 1) {
            cargoListar = 'NOC'
        } else {
            cargoListar = 'Analista'
        }

        if (index % 2 == 0) {
            content__funcionariosEsquerda.innerHTML += `
            <div class="content__funcionarioCriado">
            <div class="funcionarioCriado__title">
                <h2>Funcionário <span id="id_funcionario">${index + 1}</span></h2>
            </div>
            <div class="funcionarioCriado__especificacao">
                <h4>Nome: <span id="nome_funcionario">${nome}</span></h4> 
                <h4>E-mail: <span id="email_funcionario">${email}</span></h4> 
                <h4>Celular: <span id="celular_funcionario">${mascaraCelular(celular)}</span></h4> 
                <h4>Cargo: <span id="cargo_funcionario">${cargoListar}</span></h4> 
                <h4>Login: <span id="login_funcionario">${login}</span></h4> 
                <h4>Senha: <span id="senha_funcionario">${senha}</span></h4> 
            </div>
            <div class="funcionarioCriado__buttons">
                <button onclick="deletarLoginFuncionario(${resultadoAtual.id_funcionario})">Deletar</button>
                <button onclick="editar(${resultadoAtual.id_funcionario}, '${resultadoAtual.nome}', '${resultadoAtual.email}', '${resultadoAtual.celular}', ${cargo}, '${resultadoAtual.login}', '${resultadoAtual.senha}')">Editar</button>
            </div>
        </div>
        `
        } else {
            content__funcionariosDireita.innerHTML += `
            <div class="content__funcionarioCriado">
            <div class="funcionarioCriado__title">
                <h2>Funcionário <span id="id_funcionario">${index + 1}</span></h2>
            </div>
            <div class="funcionarioCriado__especificacao">
                <h4>Nome: <span id="nome_funcionario">${nome}</span></h4> 
                <h4>E-mail: <span id="email_funcionario">${email}</span></h4> 
                <h4>Celular: <span id="celular_funcionario">${mascaraCelular(celular)}</span></h4> 
                <h4>Cargo: <span id="cargo_funcionario">${cargoListar}</span></h4> 
                <h4>Login: <span id="login_funcionario">${login}</span></h4> 
                <h4>Senha: <span id="senha_funcionario">${senha}</span></h4> 
            </div>
            <div class="funcionarioCriado__buttons">
                <button onclick="deletarLoginFuncionario(${resultadoAtual.id_funcionario})">Deletar</button>
                <button onclick="editar(${resultadoAtual.id_funcionario}, '${resultadoAtual.nome}', '${resultadoAtual.email}', '${resultadoAtual.celular}', ${cargo}, '${resultadoAtual.login}', '${resultadoAtual.senha}')">Editar</button>
            </div>
        </div>
        `
        }
    }
}

function editar(id, nome, email, celular, cargo, login, senha) {
    sessionStorage.ID_FUNCIONARIO = id;
    sessionStorage.NOME = nome;
    sessionStorage.EMAIL = email;
    sessionStorage.CELULAR = celular;
    sessionStorage.CARGO = cargo;
    sessionStorage.LOGIN = login;
    sessionStorage.SENHA = senha;

    setTimeout(() => {
        window.location = "./editarFuncionario.html"
    }, 0500);
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

function deletarFuncionario(idFuncionario) {

    fetch(`/funcionarios/deletarFuncionario/${idFuncionario1}/${sessionStorage.ID_USUARIO}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar deletar o funcionário! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

let idFuncionario1 = '';

function deletarLoginFuncionario(idFuncionario) {

    Swal.fire({
        title: 'Tem certeza?',
        text: "Você não poderá reverter esta alteração!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#57B4CE',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
        if (result.isConfirmed) {
            idFuncionario1 = idFuncionario;
            fetch(`/funcionarios/deletarLoginFuncionario/${idFuncionario}/${sessionStorage.ID_USUARIO}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function (resposta) {

                if (resposta.ok) {

                    deletarFuncionario();
                    window.location = 'funcionariosCadastrados.html'

                } else if (resposta.status == 404) {
                    window.alert("Deu 404!");
                } else {
                    throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            })
        }
    })
}







