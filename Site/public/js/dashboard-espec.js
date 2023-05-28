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

var gray = "#828282"

var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Download',
    data: [],
    color: "#293450"
  }, {
    name: 'Upload',
    data: [],
    color: "#57B4CE"
  }],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    labels: {
      style: {
        colors: []
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: []
      }
    }
  },
  labels: {
    enabled: true,
    style: {
      colors: ['#FF0000']
    }
  },
}

var chart = new ApexCharts(document.querySelector("#Rede"), options);
chart.render();

var options2 = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Uso da CPU',
    data: [],
    color: "#293450"
  }, {
    name: 'Frequência da CPU',
    data: [],
    color: "#57B4CE"
  }],
  xaxis: {
    categories: [],
    labels: {
      style: {
        colors: []
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: []
      }
    }
  },
}

var chartCPU = new ApexCharts(document.querySelector("#Cpu"), options2);
chartCPU.render();

var options1 = {
  series: [75],
  chart: {
    height: 380,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: 0,
          show: true,
          color: "#57B4CE",
          fontSize: "15px"
        },
        value: {
          color: "#FFF",
          fontSize: "25px",
          show: true
        }
      },
      track: {
        background: "rgba(51,51,51,0.0)"
      },
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ['Disco'],
};

var chartDisco1 = new ApexCharts(document.querySelector("#Disco"), options1);
chartDisco1.render();


var options3 = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Uso da memória',
    data: [],
    color: "#57B4CE"
  }],
  xaxis: {
    categories: [],
    labels: {
      style: {
        colors: []
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: []
      }
    }
  },
}

var chartMemoriaRam = new ApexCharts(document.querySelector("#Memoria"), options3);
chartMemoriaRam.render();


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