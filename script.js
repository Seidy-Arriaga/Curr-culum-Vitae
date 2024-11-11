document.addEventListener("DOMContentLoaded", function () {
    // Animación para mostrar el video cuando se carga la página
    const video = document.querySelector(".video-element");
    video.classList.add("show");

    // Mostrar y ocultar secciones al hacer clic en el título
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const title = section.querySelector("h2");
        const content = title.nextElementSibling;
        if (content) {
            title.addEventListener("click", () => {
                content.style.display = content.style.display === "none" ? "block" : "none";
                title.classList.toggle("active");
            });
        }
    });
});