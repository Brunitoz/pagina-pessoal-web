// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão pelo ID que demos a ele no HTML
    const botao = document.getElementById('botao-contato');

    // Adiciona um "ouvinte" de clique no botão
    botao.addEventListener('click', () => {
        // Ação que acontece ao clicar
        alert('Meu email é: seu-email@exemplo.com');
    });

});
