$(document).ready(function() {

    $("#toggle-sidebar").click(function() {
        var sidebar = $("#sidebar");

        if(sidebar.hasClass("collapsed")) {
            // -------------------------
            // Expandimos el sidebar
            // -------------------------
            sidebar.removeClass("collapsed").addClass("open");
            // Comentario profesional: Sidebar expandido para mostrar menú completo
            // Comentario tonto: "Abierto como Messi recibiendo un pase perfecto" ⚽
        } else {
            // -------------------------
            // Colapsamos el sidebar
            // -------------------------
            sidebar.removeClass("open").addClass("collapsed");
            // Comentario profesional: Sidebar colapsado, más espacio para contenido
            // Comentario tonto: "Se esconde como Cristiano corriendo por la banda" 🏃‍♂️
        }
    });

});
