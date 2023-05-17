function listarFuncionarios() {
    var fkBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/funcionarios/listarFuncionarios/${fkBiblioteca}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                plotarFuncionarios(resultado);
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
        var cargo = resultadoAtual.cargo;
        const login = resultadoAtual.login;
        const senha = resultadoAtual.senha;

        if (cargo == 1) {
            cargo = 'NOC'
        } else {
            cargo = 'Analista'
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
                <h4>Cargo: <span id="cargo_funcionario">${cargo}</span></h4> 
                <h4>Login: <span id="login_funcionario">${login}</span></h4> 
                <h4>Senha: <span id="senha_funcionario">${senha}</span></h4> 
            </div>
            <div class="funcionarioCriado__buttons">
                <button>Deletar</button>
                <button>Editar</button>
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
                <h4>Cargo: <span id="cargo_funcionario">${cargo}</span></h4> 
                <h4>Login: <span id="login_funcionario">${login}</span></h4> 
                <h4>Senha: <span id="senha_funcionario">${senha}</span></h4> 
            </div>
            <div class="funcionarioCriado__buttons">
                <button>Deletar</button>
                <button>Editar</button>
            </div>
        </div>
        `
        }
    }
}