let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log("Menu clicado!");
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Obter o modal e o vídeo
const modal = document.getElementById('videoModal');
const video = document.getElementById('video');
const videoSource = document.getElementById('videoSource');
const closeModal = document.getElementById('closeModal');

// Obter todos os botões de "Confira Aqui"
const buttons = document.querySelectorAll('.btn[data-video]');

// Ao clicar em qualquer botão, abrir o modal e carregar o vídeo
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o link padrão
        const videoFile = button.getAttribute('data-video'); // Pega o nome do vídeo
        videoSource.src = `assets/videos/${videoFile}`; // Atualiza a fonte do vídeo
        video.load(); // Carrega o novo vídeo
        modal.style.display = "flex"; // Exibe o modal
        video.play(); // Começa a reprodução do vídeo
    });
});

// Fechar o modal ao clicar no "X"
closeModal.addEventListener('click', function() {
    modal.style.display = "none"; // Oculta o modal
    video.pause(); // Pausa o vídeo
    video.currentTime = 0; // Reinicia o vídeo
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
});
