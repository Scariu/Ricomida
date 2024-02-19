//Tooltip
$(document).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
});

//Alert
$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });
});

//Cambio color títulos
$(document).ready(function(){
    $("section div div h3#title-ingrediente").dblclick(function(){
      $(this).addClass("cambio-rojo");   
    });
});
$(document).ready(function(){
    $("section div div h3#title-preparacion").dblclick(function(){
      $(this).addClass("cambio-rojo");   
    });
});

//Toggle
$(document).ready(function(){
    $(".card-title").click(function(){
      $(".card-text").toggle();
    });
});