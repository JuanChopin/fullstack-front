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

$("#size").on("change", function (){
    var size = this.value
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/checksize',
        data:{
            size
        },
        success:(response) => {
            if (response == "No disponible"){
                color = "red"
            }else {
                color = "green"
            }
            $("#resultado_tamano").text(response).css("color", color)
        }
    })
})