// Esperamos a que el DOM esté listo
$(document).ready(function () {

    // Evento click para cada pestaña
    $(".tab-titulo").click(function () {

        // -------------------------
        // Paso 1: Desactivar todas las pestañas
        // -------------------------
        $(".tab-titulo").removeClass("active");
        // Comentario tonto: "Fuera estrés, solo una pestaña puede mandar a la vez" 😅

        // Activar la pestaña clickeada
        $(this).addClass("active");
        // Comentario profesional: Permite cambiar el estilo visual de la pestaña activa

        // -------------------------
        // Paso 2: Animación
        // -------------------------
        // Ocultamos todo el contenido con slideUp (animación suave)
        $(".tab-content").slideUp(250);
        // Comentario tonto: "Todos los demás contenidos se esconden bajo la alfombra" 🧹

        // Mostramos el contenido correspondiente con slideDown
        var tabId = $(this).data("tab");  // Obtenemos el id del contenido
        $("#" + tabId).slideDown(250);
        // Comentario profesional: Uso de data attributes para asociar pestañas con contenido
        // Comentario tonto: "Solo el elegido puede salir a jugar al mundo visible" ⚽

    });

    // -------------------------
    // Paso 3: Mostrar el contenido de la primera pestaña al cargar
    // -------------------------
    $(".tab-content").first().show(); // Aunque el CSS lo oculta por defecto
});
