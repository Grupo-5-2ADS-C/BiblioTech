function listarUsuarioAdmin() {
    var fkBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/usuarios/listarFuncionarios/${fkBiblioteca}`, { cache: 'no-store' }).then(function (response) {
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

const cargo = cargoUsuario.innerHTML
const nome = nomeUsuario.innerHTML
const email = emailUsuario.innerHTML
const celular = celularUsuario.innerHTML
const usuario = usuario.innerHTML

function mascaraCelular(celular) {
    var celularMascara = celular.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');

    return celularMascara;
}

function popularTexto(resultado) {

    usuario = resultado.nome
    nome = resultado.nome
    email = resultado.email
    celular = resultado.celular
    cargo = resultado.cargo

    mascaraCelular(celular);
}