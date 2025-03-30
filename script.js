document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Proyecto 1",
            description: "Este es un ejemplo de proyecto donde utilicé procesamiento ETL para optimizar grandes volúmenes de datos.",
            link: "#"
        },
        {
            title: "Proyecto 2",
            description: "Desarrollé un sistema de integración de datos utilizando herramientas de base de datos avanzadas.",
            link: "#"
        },
        {
            title: "Proyecto 3",
            description: "Creación de un dashboard interactivo con visualización de datos para facilitar la toma de decisiones.",
            link: "#"
        }
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.link}">Ver más</a>
        `;
        projectList.appendChild(projectCard);
    });
});
