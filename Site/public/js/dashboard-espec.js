function loadCharts() {
  changeStatus__cpu()
}

var cpu = document.getElementById('status__cpu');
var memoria = document.getElementById('status__memoria');
var disco = document.getElementById('status__disco');
var chartCpu = document.getElementById("Cpu");
var chartMemoria = document.getElementById("Memoria");
var chartDisco = document.getElementById("Disco");

function changeStatus__cpu() {
  cpu.classList.add('active-graph');
  memoria.classList.remove('active-graph');
  disco.classList.remove('active-graph');
  chartCpu.style.display = "block";
  chartMemoria.style.display = "none";
  chartDisco.style.display = "none"
}

function changeStatus__memoria() {
  cpu.classList.remove('active-graph');
  memoria.classList.add('active-graph');
  disco.classList.remove('active-graph');
  chartCpu.style.display = "none";
  chartMemoria.style.display = "block";
  chartDisco.style.display = "none"
}

function changeStatus__disco() {
  cpu.classList.remove('active-graph');
  memoria.classList.remove('active-graph');
  disco.classList.add('active-graph');
  chartCpu.style.display = "none";
  chartMemoria.style.display = "none";
  chartDisco.style.display = "block"
}

Chart.defaults.color = "#a1a1a1";



var ctx = document.getElementById('Cpu');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['hora','hora','hora','hora','hora'],
        datasets: [{
            label: ['Uso da Cpu'],
            data: [30,40,30,20,30],
            borderColor:"#4c1ba1",
            backgroundColor:"#4c1ba1"
        },
        {
            label: ['Frequência da Cpu'],
            data: [40,20,10,30,20,15],
            borderColor:"#57B4CE",
            backgroundColor:"#57B4CE"
        },
      ]
    },
    options: {
        legend: {
            position: 'right'
        },
        scales: {
            x: {
                grid: {
                    color: [''],
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

var ctx = document.getElementById('Memoria');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['hora','hora','hora','hora','hora'],
        datasets: [{
            label: ['Uso da Cpu'],
            data: [20,10,10,30,10],
            borderColor:"#4c1ba1",
            backgroundColor:"#4c1ba1"
        },
        {
            label: ['Frequência da Cpu'],
            data: [40,20,10,30,20,15],
            borderColor:"#57B4CE",
            backgroundColor:"#57B4CE"
        },
      ]
    },
    options: {
        legend: {
            position: 'right'
        },
        scales: {
            x: {
                grid: {
                    color: [''],
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

var ctx = document.getElementById('Disco');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
      'Uso %',
      'Livre %'
    ],
    datasets: [{
      data: [65, 35],
      backgroundColor: [
        '#f0304a',
        '#57b4ce'
      ],
      borderColor:'rgba(0,0,0,.0)',
      hoverOffset: 4,
    }]
  },

});


var ctx = document.getElementById('Rede');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['hora','hora','hora','hora','hora'],
      datasets: [{
          label: ['Uso da Cpu'],
          data: [30,40,30,20,30],
          borderColor:"#4c1ba1",
          backgroundColor:"#4c1ba1"
      },
      {
          label: ['Frequência da Cpu'],
          data: [40,20,10,30,20,15],
          borderColor:"#57B4CE",
          backgroundColor:"#57B4CE"
      },
    ]
  },
  options: {
    responsive:true,
      legend: {
          position: 'right'
      },
      scales: {
          x: {
              grid: {
                  color: [''],
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



// Funções web-data-viz ------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Gráficos de CPU -----------------------------------------------------------------------------------------------------------------------------------

function obterDadosIniciaisCpu(idMaquina) {
  var idMaquina = 12

  console.log("Entrando na função obter dados iniciais");
  fetch(`/maquinas/obterDadosIniciaisCpu/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log("DADOS DO OBTER DADOS INICIAIS");
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        resposta.reverse();

        if (options2.xaxis.categories.length == 0 && options2.series[0].data.length == 0) {
          resposta.forEach(element => {
            options2.xaxis.categories.push(element.horario);
            options2.series[0].data.push(element.uso.toFixed(0) + "%");
            options2.series[1].data.push(element.frequencia.toFixed(0) + "%")
          });

          chartCPU.render()

        } else {
          console.log("Ja foi apertado");
        }
        atualizarGraficoCpu(idMaquina);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function atualizarGraficoCpu(idMaquina) {
  fetch(`/maquinas/atualizarGraficoCpu/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function(novoRegistro) {

        console.log(`Dados recebidos: ${ JSON.stringify(novoRegistro) }`);
        console.log(`Dados atuais do gráfico:`);
        console.log(novoRegistro[0].horario);
        console.log(options2.xaxis.categories[options2.xaxis.categories.length - 1]);

        if (novoRegistro[0].horario == options2.xaxis.categories[options2.xaxis.categories.length - 1]) {
          console.log("---------------------------------------------------------------")
          console.log("Como não há dados novos para captura, o gráfico não atualizará.")
          console.log(novoRegistro[0].horario)

        } else {
          console.log("TEM DADO NOVO!");
          options2.xaxis.categories.shift();
          options2.xaxis.categories.push(novoRegistro[0].horario);

          options2.series[0].data.shift();
          options2.series[0].data.push(novoRegistro[0].uso);
        }

        chartCPU.render()

        setTimeout(() => atualizarGraficoCpu(idMaquina), 5000);
      });
    } else {
      setTimeout(() => atualizarGraficoCpu(idMaquina), 5000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p / gráfico: ${ error.message }`);
    });
}

// --------------------------------------------------------------------------------------------------------------------------------------------
// Gráficos de Memória ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------

function obterDadosIniciaisMemoria(idMaquina) {
  console.log("Entrando na função obter dados iniciais");
  fetch(`/maquinas/obterDadosIniciaisMemoria/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log("DADOS DO OBTER DADOS INICIAIS");
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        resposta.reverse();

        if (options3.xaxis.categories.length == 0 && options3.series[0].data.length == 0) {
          resposta.forEach(element => {
            options3.xaxis.categories.push(element.horario);
            options3.series[0].data.push(element.uso);
          });

          chartMemoria.render()

        } else {
          console.log("Ja foi apertado");
        }
        atualizarGraficoMemoria(idMaquina);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function atualizarGraficoMemoria(idMaquina) {
  fetch(`/maquinas/atualizarGraficoMemoria/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function(novoRegistro) {

        console.log(`Dados recebidos: ${ JSON.stringify(novoRegistro) }`);
        console.log(`Dados atuais do gráfico:`);
        console.log(novoRegistro[0].horario);
        console.log(options3.xaxis.categories[options3.xaxis.categories.length - 1]);

        if (novoRegistro[0].horario == options3.xaxis.categories[options3.xaxis.categories.length - 1]) {
          console.log("---------------------------------------------------------------")
          console.log("Como não há dados novos para captura, o gráfico não atualizará.")
          console.log(novoRegistro[0].horario)

        } else {
          console.log("TEM DADO NOVO!");
          options3.xaxis.categories.shift();
          options3.xaxis.categories.push(novoRegistro[0].horario);

          options3.series[0].data.shift();
          options3.series[0].data.push(novoRegistro[0].uso);
        }
        chartCPU.render()

        setTimeout(() => atualizarGraficoCpu(idMaquina), 5000);
      });
    } else {
      setTimeout(() => atualizarGraficoCpu(idMaquina), 5000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p / gráfico: ${ error.message }`);
    });
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Gráficos de Disco ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

function listarQtdProcessos() {
  var idMaquina = 12

  fetch(`/maquinas/listarQtdProcessos/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
          response.json().then(function (resultado) {
              console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

              qtdProcessos.innerHTML = resultado[0].total_processos
          });
      } else {
          console.error('Nenhum dado encontrado ou erro na API');
      }
  })
      .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
}

function obterEspecificacoesMaquina() {
  var idMaquina = 12

  fetch(`/maquinas/obterEspecificacoesMaquina/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
          response.json().then(function (resultado) {
              console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

              in_cpuEspecificacao.innerHTML = `CPU: ${resultado[2].descricao}`;
              in_memoriaEspecificacao.innerHTML = `Memória: ${(resultado[1].uso_maximo).toFixed(1)}gb `;
              in_discoEspecificacao.innerHTML = `Disco: ${(resultado[0].uso_maximo).toFixed(0)}`;
          });
      } else {
          console.error('Nenhum dado encontrado ou erro na API');
      }
  })
      .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
}