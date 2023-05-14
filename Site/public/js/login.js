const cardErro = document.getElementById("cardErro");
const cardErroLogin = document.getElementById("cardErroLogin");

function entrar() {
    // aguardar();

    var loginVar = in_nomeUsuario.value;
    var senhaVar = in_senha.value;

    if (loginVar == "" || senhaVar == "") {
        cardErro.style.display = 'block';
        cardErro.classList.add('aparecerErro');
        sumirMensagem();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            loginServer: loginVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.ID_USUARIO = json.fk_biblioteca;

                div_loader.style.display = "flex";
                sumirCarregamento();

                // setInterval(function () {
                //     controleGif.style.display = "block"
                // }, 0100)

                setTimeout(function () {
                    window.location = "./dashboard-geral-ofc.html";
                }, 2000); // apenas para exibir o loading

            });

        } else {
            cardErroLogin.style.display = 'block';
            cardErroLogin.classList.add('aparecerErro');
            sumirMensagemLogin();

            console.log("Houve um erro ao tentar realizar o login!");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

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

function sumirCarregamento() {
    setTimeout(() => {
        div_loader.style.display = 'none';
    }, 2000);
}

function sumirMensagemLogin() {
    setTimeout(function () {
        cardErroLogin.classList.remove('aparecerErro');
        cardErroLogin.classList.add('desaparecerErro');
    }, 2000); // apenas para exibir o loading
    setTimeout(() => {
        cardErroLogin.classList.remove('desaparecerErro');
        cardErroLogin.style.display = 'none';
    }, 2500);
}

