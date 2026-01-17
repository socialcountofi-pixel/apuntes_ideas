$(document).ready(function () {

    // Mostrar el contenido de la primera pestaña al cargar
    $(".tab-content").first().slideDown(0);
    $(".tab-titulo").first().find(".toggle-icon").text("-");

    // Evento click para cada pestaña
    $(".tab-titulo").click(function () {

        var tabId = $(this).data("tab");
        var contenido = $("#" + tabId);
        var icon = $(this).find(".toggle-icon");

        // -------------------------
        // Caso 1: La pestaña ya estaba abierta → cerramos
        // -------------------------
        if (contenido.is(":visible")) {
            contenido.slideUp(300);       // Ocultamos contenido con animación
            $(this).removeClass("active"); // Quitamos clase activa
            icon.text("+");               // Cambiamos icono
            // Comentario tonto: "Pestaña cansada, se va a dormir" 😴
        } else {
            // -------------------------
            // Caso 2: La pestaña estaba cerrada → abrimos
            // -------------------------
            $(".tab-content").slideUp(300);             // Cerramos todas
            $(".tab-titulo").removeClass("active");     // Desactivamos todas
            $(".toggle-icon").text("+");                // Reiniciamos todos los iconos

            contenido.slideDown(300);                   // Mostramos la correcta
            $(this).addClass("active");                 // Activamos la pestaña
            icon.text("-");                             // Icono cambia
            // Comentario tonto: "La estrella de la pista entra en acción" 🌟
        }

    });

});
