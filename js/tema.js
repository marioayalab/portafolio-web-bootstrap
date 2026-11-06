// Modo día y modo noche. Guarda la elección en este navegador y la aplica antes de que se pinte la página.
(function () {
  var raiz = document.documentElement;

  function aplicar(tema) {
    if (tema === 'oscuro') {
      raiz.setAttribute('data-bs-theme', 'dark');
    } else {
      raiz.removeAttribute('data-bs-theme');
    }
  }

  var guardado = null;
  try {
    guardado = localStorage.getItem('tema');
  } catch (e) {}
  aplicar(guardado);

  document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('tema');
    if (!boton) return;

    function etiqueta() {
      var oscuro = raiz.getAttribute('data-bs-theme') === 'dark';
      boton.setAttribute('aria-label', oscuro ? 'Activar el modo día' : 'Activar el modo noche');
    }

    boton.hidden = false;
    etiqueta();

    boton.addEventListener('click', function () {
      var nuevo = raiz.getAttribute('data-bs-theme') === 'dark' ? 'claro' : 'oscuro';
      aplicar(nuevo);
      try {
        localStorage.setItem('tema', nuevo);
      } catch (e) {}
      etiqueta();
    });
  });
})();
