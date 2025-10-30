// Espera a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos los botones o enlaces de los proyectos
    const projectButtons = document.querySelectorAll('.proyecto-preview');

    // Asignamos la redirección a cada botón
    projectButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Extraemos el ID del botón y redirigimos a la página correspondiente
            const projectId = button.id;

            // Asociamos cada ID con su respectiva página
            const projectPages = {
                'proyecto-flow': 'flow.html',
                'proyecto-festival-gaitas': 'festival-gaitas.html',
                'proyecto-milky-pink': 'milky-pink.html',
                'proyecto-panelitas': 'panelitas.html'
            };

            // Verifica si el ID está en la lista de proyectos y redirige
            if (projectPages[projectId]) {
                window.location.href = projectPages[projectId];
            } else {
                console.error(`No se encontró la página para el proyecto con ID: ${projectId}`);
            }
        });
    });
});
