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
      label: 'Uso da CPU',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: '#57b4ce',
      borderColor: '#57b4ce'
    },
    {
      label: 'Frequência da CPU',
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
        border: {},
        grid: {
          color: ['']
        }
      }
    }
  }
});

var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Download',
    data: [30,40,45,50,49,60,70,91,125]
  },{
    name: 'Upload',
    data: [22,4,5,40,79,20,10,41,25]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#Rede"), options);

chart.render();

var options2 = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Uso da Cpu',
    data: [30,40,45,50,49,60,70,91,125],
    color: "#dedada"
  },{
    name: 'Frequência da Cpu',
    data: [22,4,5,40,79,20,10,41,25]
  }],
    xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#Cpu"), options2);

chart.render();

