const html = document.body;
const radios = document.querySelectorAll('input[name="tema"]');

// Mudar de tema pelas opções
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    aplicarTema(radio.value);
  });
});

// Detectar tema do sistema
function temaInicial() {
  const sistemaPrefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

  aplicarTema(sistemaPrefereEscuro ? 'dark' : 'light');
}

function aplicarTema(tema) {
  if (tema === 'dark') {
    html.classList.add('dark-mode');
    document.getElementById('btn-dark').checked = true;

  } else {
    html.classList.remove('dark-mode');
    document.getElementById('btn-light').checked = true;
  }
}

temaInicial();
