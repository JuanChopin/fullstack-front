$("#formPedido").on("submit", function (event){
    if ($("#nombreCliente").val() == ""){
        $("#labelNombre").css("color", "red")
        event.preventDefault()
    }else {
        $("#labelNombre").css("color", "black")
    }
    if ($("#apellidoCliente").val() == ""){
        $("#labelApellido").css("color", "red")
        event.preventDefault()
    }else {
        $("#labelApellido").css("color", "black")
    }

});