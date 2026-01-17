$(document).ready(function() {

    $(".toggle-desc").click(function() {

        var card = $(this).closest(".card");        // Card clickeada
        var fullDesc = card.find(".full-desc");     // Contenido largo de esta card
        var icon = $(this).find(".icon");           // Icono + / -

        // Si la card ya está visible → cerramos solo esta
        if (fullDesc.is(":visible")) {
            fullDesc.stop(true, true).slideUp(300).animate({opacity: 0}, {queue:false, duration:300});
            icon.text("+").removeClass("open");
            $(this).contents().filter(function() { return this.nodeType === 3; }).first().replaceWith("Ver más detalles ");
            return; // Terminamos aquí para no afectar otras cards
        }

        // -------------------------
        // Cerramos todas las demás cards
        // -------------------------
        $(".full-desc").not(fullDesc).stop(true, true).slideUp(300).animate({opacity: 0}, {queue:false, duration:300});
        $(".toggle-desc").not(this).each(function() {
            $(this).find(".icon").text("+").removeClass("open");
            $(this).contents().filter(function() { return this.nodeType === 3; }).first().replaceWith("Ver más detalles ");
        });

        // -------------------------
        // Abrimos la card clickeada
        // -------------------------
        fullDesc.stop(true, true).css("opacity",0).slideDown(300).animate({opacity: 1}, {queue:false, duration:300});
        icon.text("-").addClass("open");
        $(this).contents().filter(function() { return this.nodeType === 3; }).first().replaceWith("Ver menos detalles ");

    });

});
