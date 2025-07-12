const html = document.body;
const radios = document.querySelectorAll('input[name="tema"]');

function aplicarTema(tema) {
  if (tema === 'dark') {
    html.classList.add('dark-mode');
    document.getElementById('btn-dark').checked = true;
  } else {
    html.classList.remove('dark-mode');
    document.getElementById('btn-light').checked = true;
  }
  localStorage.setItem('tema', tema);
}

// Detectar tema do sistema na primeira vez
function temaInicial() {
  const temaSalvo = localStorage.getItem('tema');
  const sistemaPrefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (temaSalvo === 'light' || temaSalvo === 'dark') {
    aplicarTema(temaSalvo);
  } else {
    aplicarTema(sistemaPrefereEscuro ? 'dark' : 'light');
  }
}

// Ouvir mudança do usuário
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    aplicarTema(radio.value);
  });
});

temaInicial();
