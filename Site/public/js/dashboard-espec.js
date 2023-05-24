var cpu = document.getElementById('status__cpu');
var memoria = document.getElementById('status__memoria');
var disco = document.getElementById('status__disco');

function changeStatus__cpu() {

  cpu.classList.add('active-graph');
  memoria.classList.remove('active-graph');
  disco.classList.remove('active-graph');
}

function changeStatus__memoria() {

  memoria.classList.add('active-graph');
  cpu.classList.remove('active-graph');
  disco.classList.remove('active-graph');
}

function changeStatus__disco() {

  disco.classList.add('active-graph');
  cpu.classList.remove('active-graph');
  memoria.classList.remove('active-graph');
}

Chart.defaults.color = "#a1a1a1";



const ctx = document.getElementById('myChartCpu');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['15:34:50', '15:35:50', '15:36:50', '15:37:50', '15:38:50', '15:39:50'],
    datasets: [{
      label: 'Uso da Cpu',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: '#57b4ce',
      borderColor: '#57b4ce'
    },
    {
      label: 'Fequência da Cpu',
      data: [1, 13, 13, 15, 7, 5],
      borderWidth: 1,
      backgroundColor: '#57b4ce',
      borderColor: '#57b4ce',
    }],
  },
  options: {
    scales: {
      x: {
        grid: {
          color: ['#f7f5f5'],
        }
      },
      y: {
        beginAtZero: true,
        border: {
        },
        grid: {
          color: ['']
        }

      }
    }
  }
});


const ctx2 = document.getElementById('myChartMemoria');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['15:34:50', '15:35:50', '15:36:50', '15:37:50', '15:38:50', '15:39:50'],
    datasets: [{
      label: 'Uso da Memoria',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: '#57b4ce',
      borderColor: '#57b4ce',

    }]
  },
  options: {
    scales: {
      x: {
        grid: {
          color: ['#f7f5f5'],
        }
      },
      y: {
        beginAtZero: true,
        border: {
        },
        grid: {
          color: ['']
        }

      }
    }
  }
});

const ctx3 = document.getElementById('myChartDisco');

new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['15:34:50', '15:35:50', '15:36:50', '15:37:50', '15:38:50', '15:39:50'],
    datasets: [{
      label: 'Uso do Disco',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: '#57b4ce',
      borderColor: '#57b4ce',

    }]
  },
  options: {
    scales: {
      x: {
        grid: {
          color: ['#f7f5f5'],
        }
      },
      y: {
        beginAtZero: true,
        border: {
        },
        grid: {
          color: ['']
        }

      }
    }
  }
});



const ctx4 = document.getElementById('myChartRede');

new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['15:34:50', '15:35:50', '15:36:50', '15:37:50', '15:38:50', '15:39:50'],
    datasets: [{
      label: 'Métricas de Rede',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: '#57b4ce',
      borderColor: '#57b4ce',

    }]
  },
  options: {
    scales: {
      x: {
        grid: {
          color: ['#f7f5f5'],
        }
      },
      y: {
        beginAtZero: true,
        border: {
        },
        grid: {
          color: ['']
        }

      }
    }
  }
});

