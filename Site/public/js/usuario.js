function mascaraCelular(celular) {
    var celularMascara = celular.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');

    return celularMascara;
}

function popularTexto(resultado) {

    identificacaoUsuario.innerHTML = resultado.nome;
    nomeUsuario.innerHTML = resultado.nome;
    emailUsuario.innerHTML = resultado.email;
    cargoUsuario.innerHTML = 'Admin';
    celularUsuario.innerHTML = mascaraCelular(resultado.telefone);

}

function listarUsuarioAdmin() {
    var idBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/usuarios/listarUsuarioAdmin/${idBiblioteca}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
               
                popularTexto(resultado[0]);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function editarUsuario() {
    sessionStorage.NOME_USUARIO = nomeUsuario.innerHTML;
    sessionStorage.EMAIL_USUARIO = emailUsuario.innerHTML;
    sessionStorage.CELULAR_USUARIO = celularUsuario.innerHTML;

    window.location = './edicaoUsuario.html'
}