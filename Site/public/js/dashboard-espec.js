function loadCharts() {
  chartCpu.style.display = "flex";
  chartMemoria.style.display = "none";
  chartDisco.style.display = "none"
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
  chartCpu.style.display = "flex";
  chartMemoria.style.display = "none";
  chartDisco.style.display = "none"
}

function changeStatus__memoria() {
  cpu.classList.remove('active-graph');
  memoria.classList.add('active-graph');
  disco.classList.remove('active-graph');
  chartCpu.style.display = "none";
  chartMemoria.style.display = "flex";
  chartDisco.style.display = "none"
}

function changeStatus__disco() {
  cpu.classList.remove('active-graph');
  memoria.classList.remove('active-graph');
  disco.classList.add('active-graph');
  chartCpu.style.display = "none";
  chartMemoria.style.display = "none";
  chartDisco.style.display = "flex";
}

Chart.defaults.color = "#a1a1a1";

let labelsGeralCpu = []

var ctx = document.getElementById('Cpu');
var myChartCpu = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsGeralCpu,
    datasets: [{
      label: ['Uso da Cpu'],
      data: [],
      borderColor: "#4c1ba1",
      backgroundColor: "#4c1ba1"
    },
    {
      label: ['Frequência da Cpu'],
      data: [],
      borderColor: "#57B4CE",
      backgroundColor: "#57B4CE"
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
      y: {
        border: {
        },
        grid: {
          color: ['#f7f5f5']
        }

      }
    },
  }

});

let labelsGeralMemoria = []

var ctx = document.getElementById('Memoria');
var myChartMemoria = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsGeralMemoria,
    datasets: [{
      label: ['Uso da Memória'],
      data: [],
      borderColor: "#4c1ba1",
      backgroundColor: "#4c1ba1"
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
      y: {
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
var myChartDisco = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      'Uso %',
      'Livre %'
    ],
    datasets: [{
      data: [],
      backgroundColor: [
        '#4c1ba1',
        '#57b4ce'
      ],
      borderColor: 'rgba(0,0,0,.0)',
      hoverOffset: 4,
    }]
  },

});

let labelsGeralRede = []

var ctx = document.getElementById('Rede');
var myChartRede = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsGeralRede,
    datasets: [{
      label: ['Download em Mb'],
      data: [],
      borderColor: "#4c1ba1",
      backgroundColor: "#4c1ba1"
    },
    {
      label: ['Upload em Mb'],
      data: [],
      borderColor: "#57B4CE",
      backgroundColor: "#57B4CE"
    },
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right'
    },
    scales: {
      x: {
        grid: {
          color: [''],
        }
      },
      y: {
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

  // console.log("Entrando na função obter dados iniciais");
  fetch(`/maquinas/obterDadosIniciaisCpu/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        // console.log("DADOS DO OBTER DADOS INICIAIS");
        // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        resposta.reverse();

        if (labelsGeralCpu.length == 0 && myChartCpu.data.datasets[1].data.length == 0) {
          resposta.forEach(element => {
            labelsGeralCpu.push(element.horario);
            myChartCpu.data.datasets[0].data.push(element.uso.toFixed(0))
            myChartCpu.data.datasets[1].data.push(element.frequencia.toFixed(0))
          });

          myChartCpu.update();

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
  fetch(`/maquinas/atualizarGraficoCpu/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {

        if (novoRegistro[0].horario == labelsGeralCpu[labelsGeralCpu.length - 1]) {
          // console.log("---------------------------------------------------------------")
          // console.log("Como não há dados novos para captura, o gráfico não atualizará.")
          // console.log(novoRegistro[0].horario)

        } else {
          console.log("TEM DADO NOVO!");

          labelsGeralCpu.shift();
          labelsGeralCpu.push(novoRegistro[0].horario);

          myChartCpu.data.datasets[0].data.shift()
          myChartCpu.data.datasets[0].data.push(novoRegistro[0].uso)

          myChartCpu.data.datasets[1].data.shift()
          myChartCpu.data.datasets[1].data.push(novoRegistro[0].frequencia)

        }

        myChartCpu.update()

        setTimeout(() => atualizarGraficoCpu(idMaquina), 5000);
      });
    } else {
      setTimeout(() => atualizarGraficoCpu(idMaquina), 5000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p / gráfico: ${error.message}`);
    });
}

// --------------------------------------------------------------------------------------------------------------------------------------------
// Gráficos de Memória ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------

function obterDadosIniciaisMemoria(idMaquina) {
  // console.log("Entrando na função obter dados iniciais");
  fetch(`/maquinas/obterDadosIniciaisMemoria/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        // console.log("DADOS DO OBTER DADOS INICIAIS");
        // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        resposta.reverse();

        if (labelsGeralMemoria.length == 0 && myChartMemoria.data.datasets[0].data.length == 0) {
          resposta.forEach(element => {
            labelsGeralMemoria.push(element.horario);
            myChartMemoria.data.datasets[0].data.push(element.uso.toFixed(0))
          });

          myChartMemoria.update();

        } else {
          // console.log("Ja foi apertado");
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
  fetch(`/maquinas/atualizarGraficoMemoria/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {

        if (novoRegistro[0].horario == labelsGeralMemoria[labelsGeralMemoria.length - 1]) {
          // console.log("---------------------------------------------------------------")
          // console.log("Como não há dados novos para captura, o gráfico não atualizará.")
          // console.log(novoRegistro[0].horario)

        } else {
          console.log("TEM DADO NOVO!");

          labelsGeralMemoria.shift();
          labelsGeralMemoria.push(novoRegistro[0].horario);

          myChartMemoria.data.datasets[0].data.shift()
          myChartMemoria.data.datasets[0].data.push(novoRegistro[0].uso)
        }

        myChartMemoria.update()

        setTimeout(() => atualizarGraficoMemoria(idMaquina), 5000);
      });
    } else {
      setTimeout(() => atualizarGraficoMemoria(idMaquina), 5000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p / gráfico: ${error.message}`);
    });
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Gráficos de Disco ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

function obterDadosIniciaisDisco(idMaquina) {
  // console.log("Entrando na função obter dados iniciais");
  fetch(`/maquinas/obterDadosIniciaisDisco/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        // console.log("DADOS DO OBTER DADOS INICIAIS");
        // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        resposta.reverse();

        if (myChartDisco.data.datasets[0].data.length == 0) {
          resposta.forEach(element => {
            myChartDisco.data.datasets[0].data.push(element.uso.toFixed(0))
          });

          myChartDisco.update();

        } else {
          // console.log("Ja foi apertado");
        }
        atualizarGraficoDisco(idMaquina);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function atualizarGraficoDisco(idMaquina) {
  fetch(`/maquinas/atualizarGraficoDisco/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {

        console.log("TEM DADO NOVO!");

        myChartDisco.data.datasets[0].data.shift()
        myChartDisco.data.datasets[0].data.shift()
        myChartDisco.data.datasets[0].data.push(novoRegistro[0].uso)
        myChartDisco.data.datasets[0].data.push(100 - novoRegistro[0].uso)

        myChartDisco.update()

        setTimeout(() => atualizarGraficoDisco(idMaquina), 15000);
      });
    } else {
      setTimeout(() => atualizarGraficoDisco(idMaquina), 15000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p / gráfico: ${error.message}`);
    });
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Gráficos de Rede ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

function obterDadosIniciaisRede(idMaquina) {

  // console.log("Entrando na função obter dados iniciais");
  fetch(`/maquinas/obterDadosIniciaisRede/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        // console.log("DADOS DO OBTER DADOS INICIAIS");
        // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        resposta.reverse();

        if (labelsGeralRede.length == 0 && myChartRede.data.datasets[1].data.length == 0) {
          resposta.forEach(element => {
            labelsGeralRede.push(element.horario);
            myChartRede.data.datasets[0].data.push(element.download)
            myChartRede.data.datasets[1].data.push(element.upload)
          });

          myChartRede.update();

        } else {
          console.log("Ja foi apertado");
        }
        atualizarGraficoRede(idMaquina);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function atualizarGraficoRede(idMaquina) {
  fetch(`/maquinas/atualizarGraficoRede/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {

        if (novoRegistro[0].horario == labelsGeralRede[labelsGeralRede.length - 1]) {
          // console.log("---------------------------------------------------------------")
          // console.log("Como não há dados novos para captura, o gráfico não atualizará.")
          // console.log(novoRegistro[0].horario)

        } else {
          console.log("TEM DADO NOVO!");

          labelsGeralRede.shift();
          labelsGeralRede.push(novoRegistro[0].horario);

          myChartRede.data.datasets[0].data.shift()
          myChartRede.data.datasets[0].data.push(novoRegistro[0].download)

          myChartRede.data.datasets[1].data.shift()
          myChartRede.data.datasets[1].data.push(novoRegistro[0].upload)

        }

        myChartRede.update()

        setTimeout(() => atualizarGraficoRede(idMaquina), 5000);
      });
    } else {
      setTimeout(() => atualizarGraficoRede(idMaquina), 5000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p / gráfico: ${error.message}`);
    });
}

function listarQtdProcessos() {
  var idMaquina = 12

  fetch(`/maquinas/listarQtdProcessos/${idMaquina}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resultado) {
        // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

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

  fetch(`/maquinas/obterEspecificacoesMaquina/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resultado) {
        // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);

        let memoria = 0

        memoria = resultado[1].descricao;

        in_cpuEspecificacao.innerHTML = `<b>CPU:</b> ${resultado[2].descricao}`;
        in_memoriaEspecificacao.innerHTML = `<b>Memória:</b> ${(memoria)}gb `;
        in_discoEspecificacao.innerHTML = `<b>Disco:</b> ${(resultado[0].uso_maximo).toFixed(0)}gb`;
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function listarTempoUtilizado() {

  fetch(`/maquinas/listarTempoUtilizado/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resultado) {
        // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
        let memoria = 0

        for (let index = 0; index < resultado.length; index++) {
          const element = resultado[index];

          memoria += element.tempo_de_sessão

        }

        let memoriaFinal = 0;
        console.log(memoria)
        memoriaFinal = (memoria / 60).toFixed(0);

        tempoUtilizado.innerHTML = memoriaFinal + " min"
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function listarAlertaMaquina() {

  fetch(`/maquinas/listarAlertaMaquina/${sessionStorage.ID_MAQUINA}/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resultado) {
        // console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
        
          plotarAlerta(resultado)
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarAlerta(resultado) {
  cardAlerta1.innerHTML = ''
  cardAlerta2.innerHTML = ''

  let tipoAlerta = ''
  let situacaoAlerta = ''
  let medidas = ''
  let tipoComponente = ''

  for (let i = 0; i < 4; i+=3) {
    const element = resultado[i];

    if (element.fk_tipo_alerta == 1) {
      tipoAlerta = 'Ociosidade'
    } else {
      tipoAlerta = 'Mau uso de Hardware'
    }

    if (element.fk_situacao_alerta == 1) {
      situacaoAlerta = '(Crítico)'
      medidas = '>= 90%'
      tipoComponente = element.tipo
    } else if (element.fk_situacao_alerta == 2) {
      situacaoAlerta = '(Risco alto)'
      medidas = '>= 70% e < 90%'
      tipoComponente = element.tipo
    } else if (element.fk_situacao_alerta == 3) {
      situacaoAlerta = '(Risco moderado)'
      medidas = '>= 50% e < 70%'
      tipoComponente = element.tipo
    } else {
      situacaoAlerta = '-'
      medidas = '< 2%'
      tipoComponente = ''
    }

    if (i % 2 == 0) {
      cardAlerta1.innerHTML = `
      <span class="card__title h1Alerta">${tipoAlerta}</span>
      <span class="texto__alerta">${tipoComponente} ${situacaoAlerta}</span>
      <span class="metrica__alerta">${medidas}</span>
      <span class="horario__metrica">${element.dia} ${element.horario}</span>
            `
    } else {
      cardAlerta2.innerHTML = `
        <span class="card__title h1Alerta">${tipoAlerta}</span>
        <span class="texto__alerta">${tipoComponente} ${situacaoAlerta}</span>
        <span class="metrica__alerta">${medidas}</span>
        <span class="horario__metrica">${element.dia} ${element.horario}</span>
              `
    }
  }
}


function onLoad() {
  loadCharts();
  obterEspecificacoesMaquina();
  obterDadosIniciaisCpu();
  obterDadosIniciaisMemoria();
  obterDadosIniciaisDisco();
  obterDadosIniciaisRede();
  listarTempoUtilizado();
  listarAlertaMaquina();

  setInterval(() => {
    listarAlertaMaquina();
    listarTempoUtilizado();
  }, 5000);
  idMaquina.innerHTML = sessionStorage.NUMERO_MAQUINA;
}