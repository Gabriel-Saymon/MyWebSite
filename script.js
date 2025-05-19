function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Salvar o tema no localStorage
    localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
}

// Verificar o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        html.classList.add('light');
    }
});