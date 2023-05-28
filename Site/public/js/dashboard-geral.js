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



// let config_geral = {
//     type: 'bar',
//     data: {
//         labels: ['Ociosas', 'Mau uso de hardware', 'Ok'],
//         datasets: [{
//             label: ['Ociosas', 'Mau uso de hardware', 'Ok'],
//             data: [30, 40, 30],
//             backgroundColor: ['#FFB257', '#FF6060', '#83F470'],
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 ticks: {
//                     color: '#FFF'
//                 },
//                 beginAtZero: true,
//                 type: 'linear',
//                 grid: {
//                     color: '#FFF'
//                 }
//             },
//             x: {
//                 ticks: {
//                     color: '#FFF'
//                 },
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             autocolors: false,
//             annotation: {
//                 annotations: {
//                     box1: {
//                         type: 'box',
//                         yMin: 23,
//                         yMax: 26,
//                         xMin: 0,
//                         xMax: 18,
//                         backgroundColor: 'rgba(112, 255, 99, 0.25)',
//                     }
//                 }
//             },
//             title: {
//                 display: true,
//                 text: `Temperatura média do data center no dia`,
//                 align: 'center',
//                 fullSize: false,
//                 color: '#FFF',
//                 font: {
//                     size: 20,
//                     weight: 600,
//                     lineHeight: 1.0,
//                 }
//             }
//         },
//     }
// };

// let myChart_geral = new Chart(
//     document.getElementById("myChart"),
//     config_geral
// );



Chart.defaults.color = "#a1a1a1";



var ctx = document.getElementById('uso');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
            label: ['Ociosas'],
            data: [30],
            backgroundColor: ['#FFB257'],
        },
        {
            label: ['Mau uso de hardware'],
            data: [40],
            backgroundColor: ['#FF6060'],
        },
        {
            label: ['Ok'],
            data: [30],
            backgroundColor: ['#83F470'],
        },]
    },
    options: {
        legend: {
            position: 'right'
        },
        scales: {
            x: {
                grid: {
                    color: ['#f7f5f5'],
                }
            },
            y:{
                border: {
                },
                grid: {
                color: ['#f7f5f5']
                }

            }
        },
    }

});



function listarUsoMaquinas() {
    var fkBiblioteca = sessionStorage.ID_USUARIO;

    fetch(`/maquinas/listarUsoMaquinas/${fkBiblioteca}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

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
                <ion-icon name="arrow-forward-outline" style="cursor: pointer" onclick="maquinaEspecifica(${resultado.Maquina})"></ion-icon>
            </th>
        </tr>`
        } else {
            data__table2.innerHTML +=
                `<tr class="table__sec">
            <th align="left">Máquina ${contador}</th>
            <th align="center">${resultado[i + 2].uso}%</th>
            <th align="center">${resultado[i + 1].uso}%</th>
            <th align="center">${resultado[i].uso}%</th>
            <th align="center">
            <ion-icon name="arrow-forward-outline" style="cursor: pointer" onclick="maquinaEspecifica(${resultado.Maquina})"></ion-icon>
            </th>
        </tr>`
        }
        contador++
    }
}

function maquinaEspecifica(idMaquina) {
    sessionStorage.ID_MAQUINA = idMaquina;
    window.location = 'dashboard-especifica.html'
}

// var cpu = document.getElementById('status__cpu');
// var memoria = document.getElementById('status__memoria');
// var disco = document.getElementById('status__disco');

// function changeStatus__cpu() {

//     cpu.classList.add('active-graph');
//     memoria.classList.remove('active-graph');
//     disco.classList.remove('active-graph');
// }

// function changeStatus__memoria() {

//     memoria.classList.add('active-graph');
//     cpu.classList.remove('active-graph');
//     disco.classList.remove('active-graph');
// }

// function changeStatus__disco() {

//     disco.classList.add('active-graph');
//     cpu.classList.remove('active-graph');
//     memoria.classList.remove('active-graph');
// }

// // ChartJS

// const ctx = document.getElementById('myChart');

//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: 'Métricas de Componente',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//         backgroundColor: '#57b4ce',
//         borderColor: '#57b4ce',

//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

//   const ctx2 = document.getElementById('myChart2');

//   new Chart(ctx2, {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: 'Métricas de Rede',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//         backgroundColor: '#57b4ce',
//         borderColor: '#57b4ce'
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

function onLoad() {
    obterAlertasOciosidade();
    obterAlertasHardware();
    listarUsoMaquinas();

    setInterval(() => {
        obterAlertasOciosidade();
        obterAlertasHardware();
        listarUsoMaquinas();
    }, 5000);
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



