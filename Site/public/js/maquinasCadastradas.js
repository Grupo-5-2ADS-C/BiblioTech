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

function limparSession() {
    sessionStorage.removeItem('ID_FUNCIONARIO');
    sessionStorage.removeItem('NOME');
    sessionStorage.removeItem('EMAIL');
    sessionStorage.removeItem('CELULAR');
    sessionStorage.removeItem('CARGO');
    sessionStorage.removeItem('LOGIN');
    sessionStorage.removeItem('SENHA');
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
                <button onclick="deletarMaquina(${idMaquina})">Deletar</button>
                <button onclick="editarMaquina('${sistemaOperacional}', '${setor}', '${login}', '${senha}', ${idMaquina})">Editar</button>
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
                <button onclick="deletarMaquina(${idMaquina})">Deletar</button>
                <button onclick="editarMaquina('${sistemaOperacional}', '${setor}', '${login}', '${senha}', ${idMaquina})">Editar</button>
            </div>
        </div>
        `
        }
    }
}

function editarMaquina(sistemaOperacional, setor, login, senha, idMaquina) {
    sessionStorage.SISTEMA_OPERACIONAL = sistemaOperacional;
    sessionStorage.SETOR = setor;
    sessionStorage.LOGIN = login;
    sessionStorage.SENHA = senha;
    sessionStorage.ID_MAQUINA = idMaquina;

    setTimeout(() => {
        window.location = "./editarMaquina.html"
    }, 0500);
}

function deletarMaquina(idMaquina) {

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
                fetch(`/maquinas/deletarMaquina/${idMaquina}/${sessionStorage.ID_USUARIO}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (resposta) {
            
                    if (resposta.ok) {
            
                        window.location = 'maquinasCadastradas.html'
            
                    } else if (resposta.status == 404) {
                        window.alert("Deu 404!");
                    } else {
                        throw ("Houve um erro ao tentar realizar o delete! Código da resposta: " + resposta.status);
                    }
                }).catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                })
        }
    })
}