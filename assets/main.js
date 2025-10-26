/**
 * A parte abaixo adiciona um pequeno highlight em uma div
 * quando o cliente vme redirecionado de outra pagina.
 */
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;

    if (hash) {
        const target = document.querySelector(hash);

        if (target) {
        target.classList.add('highlight');

        // Remove o destaque depois de 2 segundos
        setTimeout(() => {
            target.classList.remove('highlight');
        }, 2000);
        }
    }
});

/**
 * A parte abaixo atualiza a cor do menu, deixando transparente
 * no topo e com cor caso contrario.
 */
const navbar = document.querySelector("nav.navbar");
const navbar_toggler = document.querySelector("button.navbar-toggler");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbar_toggler.style.filter = "none";
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar_toggler.style.filter = "invert(100%)";
  }
});