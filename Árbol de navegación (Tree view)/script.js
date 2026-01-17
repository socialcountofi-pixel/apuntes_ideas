$(document).ready(function() {

    $(".tree-toggle").click(function() {

        var folder = $(this).parent(".tree-folder");
        var children = folder.children(".tree-children");

        if(children.is(":visible")) {
            children.slideUp(200);
            folder.removeClass("open");
            // Comentario profesional: Carpeta cerrada, hijos ocultos
            // Comentario tonto: "Se cierra como un cofre lleno de secretos" 🗝️
        } else {
            children.slideDown(200);
            folder.addClass("open");
            // Comentario profesional: Carpeta abierta, hijos visibles
            // Comentario tonto: "Se abre como un cofre lleno de tesoros brillantes" 💎
        }

    });

});
