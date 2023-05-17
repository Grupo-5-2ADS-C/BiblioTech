function listarMaquinas() {
    var fkBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/maquinas/listarMaquinas/${fkBiblioteca}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
                
                plotarMaquinas(resultado);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarMaquinas(resultado) {

    for (let index = 0; index < resultado.length; index++) {

        const resultadoAtual = resultado[index];

        const idMaquina = resultadoAtual.id_maquina;
        const sistemaOperacional = resultadoAtual.sistema_operacional;
        const setor = resultadoAtual.setor;
        const login = resultadoAtual.login;
        const senha = resultadoAtual.senha;

        if (index % 2 == 0) {
            content__maquinasEsquerda.innerHTML += `
            <div class="content__maquinaCriada">
            <div class="maquinaCriada__title">
                <h2>Máquina <span id="id_maquina">${index + 1}</span></h2>
            </div>
            <div class="maquinaCriada__especificacao">
                <h4>S.O: <span id="so_maquina">${sistemaOperacional}</span></h4> 
                <h4>Setor: <span id="setor_maquina">${setor}</span></h4> 
                <h4>Login: <span id="login_maquina">${login}</span></h4> 
                <h4>Senha: <span id="senha_maquina">${senha}</span></h4> 
            </div>
            <div class="maquinaCriada__buttons">
                <button>Deletar</button>
                <button>Editar</button>
            </div>
        </div>
        `
        } else {
            content__maquinasDireita.innerHTML += `
            <div class="content__maquinaCriada">
            <div class="maquinaCriada__title">
                <h2>Máquina <span id="id_maquina">${index + 1}</span></h2>
            </div>
            <div class="maquinaCriada__especificacao">
                <h4>S.O: <span id="so_maquina">${sistemaOperacional}</span></h4> 
                <h4>Setor: <span id="setor_maquina">${setor}</span></h4> 
                <h4>Login: <span id="login_maquina">${login}</span></h4> 
                <h4>Senha: <span id="senha_maquina">${senha}</span></h4> 
            </div>
            <div class="maquinaCriada__buttons">
                <button>Deletar</button>
                <button>Editar</button>
            </div>
        </div>
        `
        }
    }
}