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