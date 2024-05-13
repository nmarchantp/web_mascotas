$(document).ready(function () {
    $("#adopcion_btn").click(function () {
        // esto sirve para limpiar la tabla cada vez que se consulte y se ingrese al boton de adocion btn
        $('#adopcion').empty();
        // esto sirve para traer la informacion de la api
        $.get("https://huachitos.cl/api/animales",
            function (data) {
                //console.log(data.data);
                $("#adopcion").append("<tr><td>FOTO</td><td>NOMBRE</td><td>TIPO</td><td>EDAD</td><td>GÉNERO</td><td>FICHA</td></tr>")
                $.each(data.data,function(i,item){     
                    var nombre = item.nombre;
                    var tipo = item.tipo;
                    var edad = item.edad;
                    var estado = item.estado;
                    var genero = item.genero;
                    var descripcion_fisica = item.desc_fisica;
                    var descripcion_personalidad = item.desc_personalidad;
                    var imagen = item.imagen;
                    var url = item.url;               
                    console.log(item.id);
                    $("#adopcion").append("<tr><td><img src='"+
                    imagen+"'></td><td>"+nombre+
                    "</td><td>"+tipo+"</td><td>"+edad+"</td><td>"+genero+"</td><td><button class='url-btn' data-url='" + url + "'>Adoptar</button></td></tr>") //para que la url se transforme en un boton, le sumamos un button y class -- El atributo data-url es una forma de almacenar datos personalizados en un elemento HTML utilizando el prefijo data-. En este caso, se está utilizando para almacenar la URL correspondiente a cada elemento de la tabla.
                })
                
            });

    });
// Agrega un evento clic a los botones de URL
$(document).on('click', '.url-btn', function () {
    // Obtiene la URL de los datos atributo
    var url = $(this).data('url');
    // Redirecciona a la URL
    window.location.href = url;
});
});

