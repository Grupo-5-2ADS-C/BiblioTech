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

// ChartJS

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Métricas de Componente',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#57b4ce',
        borderColor: '#57b4ce',

      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Métricas de Rede',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#57b4ce',
        borderColor: '#57b4ce'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });