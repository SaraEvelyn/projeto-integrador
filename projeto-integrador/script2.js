document.addEventListener('DOMContentLoaded', function() {
  const dias = document.querySelectorAll('.dia');
  const salvarBtn = document.getElementById('salvar');
  const mensagem = document.getElementById('mensagem');

  const horarios = [
    '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'
  ];

  dias.forEach(dia => {
    const nomeDia = dia.textContent.trim();
    const horariosDia = [];
    horarios.forEach(horario => {
      const horarioDiv = document.createElement('div');
      horarioDiv.textContent = horario;
      horarioDiv.classList.add('horario');
      dia.appendChild(horarioDiv);
      horariosDia.push(horarioDiv);
    });
    dia.horariosDia = horariosDia;
  });

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('horario')) {
      event.target.classList.toggle('selected');
    }
  });

  salvarBtn.addEventListener('click', function() {
    const horariosSelecionadosPorDia = [];
    dias.forEach(dia => {
      const nomeDia = dia.textContent.trim();
      const horariosDiaSelecionados = dia.horariosDia.filter(horario => horario.classList.contains('selected')).map(horario => horario.textContent);
      if (horariosDiaSelecionados.length > 0) {
        horariosSelecionadosPorDia.push(`${nomeDia}: ${horariosDiaSelecionados.join(', ')}`);
      }
    });
    if (horariosSelecionadosPorDia.length > 0) {
      const loginBox = document.querySelector('.red');
      loginBox.classList.add('show');
      const loginBox3 = document.querySelector('.detalhes1');
      loginBox3.classList.add('show');
      
      
    } else {
      const loginBox = document.querySelector('.blue');
      loginBox.classList.add('show');
      const loginBox3 = document.querySelector('.detalhes2');
      loginBox3.classList.add('show');
      
    }
  });
});
function handleLogin() {
  const loginBox = document.querySelector('.red');
  loginBox.classList.add('hidden');
  const loginBox3 = document.querySelector('.detalhes1');
  loginBox3.classList.add('hidden');
}
function handleLogin2() {
  const loginBox = document.querySelector('.blue');
  loginBox.classList.add('hidden');
  const loginBox3 = document.querySelector('.detalhes2');
  loginBox3.classList.add('hidden');
}
