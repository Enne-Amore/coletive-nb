// Chamando a tag que representa o botão de ir pro topo
const topo = document.getElementById("topo");

// Adicionando os eventos
topo.addEventListener("click", function () {
  window.scrollTo(0, 0);
  document.getElementsByTagName("a")[7].focus();
});

// Aplicando a função de ocultar
document.addEventListener("scroll", ocultar);

// Funcção de ocultar
function ocultar() {
  if (innerWidth <= 1200 && innerWidth < innerHeight) { // portrait mobile
    if (window.scrollY > 7000) {
      topo.style.display = "flex";
    } else {
      topo.style.display = "none";
    }
  }

  if (innerWidth <= 1200 && innerWidth > innerHeight) {
    if (window.scrollY > 5000) { // landscape mobile
      topo.style.display = "flex";
    } else {
      topo.style.display = "none";
    }

  } else { // desktop
    if (window.scrollY > 6000) {
      topo.style.display = "flex";
    } else {
      topo.style.display = "none";
    }
  }
}

ocultar();
