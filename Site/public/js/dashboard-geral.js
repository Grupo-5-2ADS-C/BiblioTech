function getId(param) {
    console.log(document.getElementById(param))
    return document.getElementById(param);
}

function close(display) {
    display.classList.add('closed');
    display.classList.remove('open');
    menu__state.src = "img/up-arrow.png"
}

function open(display) {
    display.classList.add('open');
    display.classList.remove('closed');
    menu__state.src = "img/arrow-down-sign-to-navigate.png";
}

function open__menu(param) {
    var display = getId(param);

    if (display.classList.contains('closed')) {
        open(display);
    } else {
        close(display);
    }
}

Chart.defaults.color = "#a1a1a1";

var ctx = document.getElementById('uso');
var myChartMonitoramento = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
            label: ['Ociosas'],
            data: [],
            backgroundColor: ['#FFB257'],
        },
        {
            label: ['Mau uso de hardware'],
            data: [],
            backgroundColor: ['#FF6060'],
        },
        {
            label: ['Ok'],
            data: [],
            backgroundColor: ['#83F470'],
        },]
    },
});

const contentInativa = document.getElementById("contentInativa")

function listarUsoMaquinas() {
    var fkBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/maquinas/listarUsoMaquinas/${fkBiblioteca}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                if (resultado.length == 0) {
                    contentInativa.classList.add("inatividade")
                } else {
                    contentInativa.classList.remove("inatividade")
                    plotarMaquinas(resultado);

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

let mauUso = 0
let ociosidade = 0
let ok = 0

function plotarMaquinas(resultado) {
    mauUso = 0
    ociosidade = 0
    data__table2.innerHTML = ''
    var contador = 1

    for (let i = 0; i < resultado.length; i += 3) {

        if (i % 2 == 0) {
            data__table2.innerHTML +=
                `<tr>
            <th align="left">Máquina ${contador}</th>
            <th align="center">${resultado[i + 2].uso}%</th>
            <th align="center">${resultado[i + 1].uso}%</th>
            <th align="center">${resultado[i].uso}%</th>
            <th align="center">
                <ion-icon name="arrow-forward-outline" style="cursor: pointer" onclick="maquinaEspecifica(${resultado[i].Maquina}, ${contador})"></ion-icon>
            </th>
        </tr>`
            if (resultado[i + 2].uso > 70 || resultado[i + 1].uso > 70 || resultado[i].uso > 85) {
                mauUso++
            } else if (resultado[i + 2].uso <= 4 || resultado[i + 1].uso <= 4) {
                ociosidade++
            }
        } else {
            data__table2.innerHTML +=
                `<tr class="table__sec">
            <th align="left">Máquina ${contador}</th>
            <th align="center">${resultado[i + 2].uso}%</th>
            <th align="center">${resultado[i + 1].uso}%</th>
            <th align="center">${resultado[i].uso}%</th>
            <th align="center">
            <ion-icon name="arrow-forward-outline" style="cursor: pointer" onclick="maquinaEspecifica(${resultado[i].Maquina}, ${contador})"></ion-icon>
            </th>
        </tr>`
            if (resultado[i + 2].uso > 70 || resultado[i + 1].uso > 70 || resultado[i].uso > 85) {
                mauUso++
            } else if (resultado[i + 2].uso <= 2 || resultado[i + 1].uso <= 2) {
                ociosidade++
            }
        }
        contador++
    }
    sessionStorage.OCIOSIDADE = ociosidade;
    sessionStorage.MAU_USO = mauUso;
    sessionStorage.OK = maquinasAtual.innerHTML - ociosidade - mauUso;
}

function maquinaEspecifica(idMaquina, contador) {
    sessionStorage.NUMERO_MAQUINA = contador;
    sessionStorage.ID_MAQUINA = idMaquina;
    window.location = 'dashboard-especifica.html'
}

function plotarGrafico() {
    myChartMonitoramento.data.datasets[0].data.shift();
    myChartMonitoramento.data.datasets[1].data.shift();
    myChartMonitoramento.data.datasets[2].data.shift();
    
    
    myChartMonitoramento.data.datasets[0].data.push(sessionStorage.OCIOSIDADE);
    myChartMonitoramento.data.datasets[1].data.push(sessionStorage.MAU_USO);
    myChartMonitoramento.data.datasets[2].data.push(sessionStorage.OK);

    myChartMonitoramento.update();
}

function obterAlertasOciosidade() {

    fetch(`/maquinas/obterAlertasOciosidade/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                alertasOciosidade.innerHTML = resultado[0].qtdAlertasOciosidade
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function obterAlertasHardware() {

    fetch(`/maquinas/obterAlertasHardware/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                alertasHardware.innerHTML = resultado[0].qtdAlertasHardware
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function listarMaquinasAtivas() {

    fetch(`/maquinas/listarMaquinasAtivas/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                maquinasAtual.innerHTML = resultado[0].maquinas;
                qtdUtilizadores.innerHTML = resultado[0].maquinas;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function listarTotalMaquinas() {

    fetch(`/maquinas/listarTotalMaquinas/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                maquinasTotal.innerHTML = `/ ${resultado[0].total}`
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

let tempoMedio = 0

function calcularMediaTempoSessao(resultado) {
    for (let i = 0; i < resultado.length; i++) {
        const element = resultado[i];

        tempoMedio += element.tempoSessao;
    }
}

function listarTempoMedioUtilizador() {

    fetch(`/maquinas/listarTempoMedioUtilizador/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                if (resultado.length == 0) {
                    tempoMedioSessao.innerHTML = "0"
                } else {
                    calcularMediaTempoSessao(resultado);
                    tempoMedio = (tempoMedio / resultado.length) / 60
                    tempoMedioSessao.innerHTML = tempoMedio.toFixed(0) + " min"
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

function listarMediaRede() {

    fetch(`/maquinas/listarMediaRede/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                if (resultado[0].download == 0 && resultado[0].upload == 0) {
                    mediaUpload.innerHTML = 0;
                    mediaDownload.innerHTML = 0;
                } else {
                    mediaUpload.innerHTML = (resultado[0].upload).toFixed(2);
                    mediaDownload.innerHTML = (resultado[0].download).toFixed(2);
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

function listarRedeAtual() {

    fetch(`/maquinas/listarRedeAtual/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

                calcularRedeAtual(resultado);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

let download = 0
let upload = 0

function calcularRedeAtual(resultado) {
    download = 0
    upload = 0
    downloadAtual.innerHTML = ''
    uploadAtual.innerHTML = ''

    for (let i = 0; i < resultado.length; i++) {
        const element = resultado[i];
        
        download += element.velocidade_download
        upload += element.velocidade_upload
    }
 
    downloadAtual.innerHTML = download
    uploadAtual.innerHTML = upload
}

function onLoad() {
    obterAlertasOciosidade();
    obterAlertasHardware();
    listarUsoMaquinas();
    listarMaquinasAtivas();
    listarTotalMaquinas();
    listarTempoMedioUtilizador();
    plotarGrafico();
    listarMediaRede();
    listarRedeAtual();

    setInterval(() => {
        obterAlertasOciosidade();
        obterAlertasHardware();
        listarUsoMaquinas();
        plotarGrafico();
        listarMaquinasAtivas();
        listarTempoMedioUtilizador();
        listarMediaRede();
        listarRedeAtual();
    }, 5000);

}

