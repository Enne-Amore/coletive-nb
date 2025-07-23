const html = document.body;
const prefs = window.matchMedia('(prefers-color-scheme: dark)');
const mobile_radios = document.querySelectorAll('input[name="mobile-theme"]');
const desktop_radios = document.querySelectorAll('input[name="desktop-theme"]');

function aplicarTema(tema) {
  html.classList.toggle('dark-mode', tema === 'dark');
  localStorage.setItem('tema', tema);
}

function temaInicial() {
  const salvo = localStorage.getItem('tema');
  if (salvo === 'light' || salvo === 'dark') {
    aplicarTema(salvo);
    document.querySelector(`input[name="mobile-theme"][value="${salvo}"]`).checked = true;
    document.querySelector(`input[name="desktop-theme"][value="${salvo}"]`).checked = true;
  } else {
    const sistema = prefs.matches ? 'dark' : 'light';
    aplicarTema(sistema);
    document.querySelector(`input[name="mobile-theme"][value="${sistema}"]`).checked = true;
    document.querySelector(`input[name="desktop-theme"][value="${sistema}"]`).checked = true;
  }
}

// Escutar mudança de qualquer um dos rádios
mobile_radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) aplicarTema(radio.value);
  });
});
desktop_radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) aplicarTema(radio.value);
  });
});

// Ajustar tema se a preferência do sistema mudar dinâmicamente
prefs.addEventListener('change', e => {
  const salvo = localStorage.getItem('tema');
  if (!salvo) {
    const novo = e.matches ? 'dark' : 'light';
    aplicarTema(novo);
    document.querySelector(`input[name="mobile-theme"][value="${novo}"]`).checked = true;
    document.querySelector(`input[name="desktop-theme"][value="${novo}"]`).checked = true;
  }
});

temaInicial();
