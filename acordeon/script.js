// Se asigna el evento click a cada elemento con la clase "accordion-titulo"
$(".accordion-titulo").click(function () {

    // Guarda el contenido del acordeón:
    // Se asume que el contenido está justo después del título (si no… mala suerte 😅)
    var contenido = $(this).next(".accordion-content");

    // Se verifica si el contenido está oculto
    // Preguntamos: "¿estás escondido o te haces?"
    if (contenido.css("display") == "none") { 
        // -------- ABRIR EL ACORDEÓN --------

        // Muestra el contenido con una animación elegante (250 ms, ni rápido ni lento)
        contenido.slideDown(250);

        // Marca visualmente el título como abierto
        $(this).addClass("open");

    } else { 
        // -------- CERRAR EL ACORDEÓN --------

        // Oculta el contenido suavemente (porque cerrar de golpe es feo)
        contenido.slideUp(250);

        // Quita la marca de abierto del título
        $(this).removeClass("open");
    }

});
