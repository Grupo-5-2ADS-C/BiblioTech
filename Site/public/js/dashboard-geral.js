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



// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [''],
//         datasets: [{
//             label: ['Ociosas'],
//             data: [30],
//             backgroundColor: ['#FFB257'],
//         },
//         {
//             label: ['Mau uso de hardware'],
//             data: [40],
//             backgroundColor: ['#FF6060'],
//         },
//         {
//             label: ['Ok'],
//             data: [30],
//             backgroundColor: ['#83F470'],
//         },]
//     },
//     options: {
//         legend: {
//             position: 'right'
//         },
//         scales: {
//             x: {
//                 grid: {
//                     color: ['#f7f5f5'],
//                 }
//             },
//             y:{
//                 border: {
//                 },
//                 grid: {
//                 color: ['#f7f5f5']
//                 }

//             }
//         },
//     }

// });

var gray = "#828282"

var options = {
    chart: {
        type: 'bar',
        height: "215rem"
    },
    series: [{
        name: 'Ociosas',
        data: [30],
        color: "#FFB257"
    }, {
        name: 'Hardware',
        data: [22],
        color: "#FF6060"
    },
    {
        name: 'Ok',
        data: [10],
        color: "#83F470"
    }],
    xaxis: {
        categories: ["Mau uso", "Ocioso", "Ok"],
        labels: {
            style: {
                colors: [gray]
            }
        }
    },
    yaxis: {
        show: false
    }
}

var chart = new ApexCharts(document.querySelector("#uso"), options);

chart.render();



for (let i = 0; i < 27; i++) {
    if (i % 2 == 0) {
        data__table2.innerHTML +=
            `<tr>
    <th align="left">Máquina XX</th>
    <th align="center">80%</th>
    <th align="center">80%</th>
    <th align="center">80%</th>
    <th align="center">80%</th>
    <th align="center">
        <a href="#"><ion-icon name="arrow-forward-outline"></ion-icon></a>
    </th>
</tr>`
    } else {
        data__table2.innerHTML +=
            `<tr class="table__sec">
    <th align="left">Máquina XX</th>
    <th align="center">80%</th>
    <th align="center">80%</th>
    <th align="center">80%</th>
    <th align="center">80%</th>
    <th align="center">
        <a href="#"><ion-icon name="arrow-forward-outline"></ion-icon></a>
    </th>
</tr>`
    }
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
    
    setInterval(() => {
        obterAlertasOciosidade();
        obterAlertasHardware();
    }, 5000);
}

function obterAlertasOciosidade() {

    fetch(`/maquinas/obterAlertasOciosidade/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

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
                console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

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

