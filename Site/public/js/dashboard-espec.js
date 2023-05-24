var cpu = document.getElementById('status__cpu');
var memoria = document.getElementById('status__memoria');
var disco = document.getElementById('status__disco');
var chartCpu = document.getElementById("Cpu");
var chartMemoria = document.getElementById("Memoria");
var chartDisco = document.getElementById("Disco");

function changeStatus__cpu() {
  chartCpu.style.display = "none";
  chartMemoria.style.display = "block";
  chartDisco.style.display = "block"
}

function changeStatus__memoria() {
  chartCpu.style.display = "block";
  chartMemoria.style.display = "none";
  chartDisco.style.display = "block"
}

function changeStatus__disco() {
  chartCpu.style.display = "block";
  chartMemoria.style.display = "block";
  chartDisco.style.display = "none"
}


Chart.defaults.color = "#a1a1a1";



var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Download',
    data: [30,40,45,50,49,60,70,91,125],
    color: "#6d06c7"
  },{
    name: 'Upload',
    data: [22,4,5,40,79,20,10,41,25],
    color: "#57B4CE"
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
    color: "#6d06c7"
  },{
    name: 'Frequência da Cpu',
    data: [22,4,5,40,79,20,10,41,25],
    color: "#57B4CE"
  }],
    xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#Cpu"), options2);

chart.render();

var options3 = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Uso do Disco',
    data: [30,40,45,50,49,60,70,91,125],
    color: "#57B4CE"
  }],
    xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#Disco"), options3);

chart.render();

chart.render();

var options3 = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'Uso da memória',
    data: [30,40,45,50,49,60,70,91,125],
    color: "#57B4CE"
  }],
    xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#Memoria"), options3);

chart.render();