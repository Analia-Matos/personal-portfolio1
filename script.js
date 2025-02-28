// script.js

// Seleciona o modal e a imagem dentro dele
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Seleciona todas as imagens da galeria
const galleryImages = document.querySelectorAll(".gallery-image");

// Adiciona um evento de clique a cada imagem
galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block"; // Abre o modal
        modalImg.src = img.src; // Define a imagem no modal
    });
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});