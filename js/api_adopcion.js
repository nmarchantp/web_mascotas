$(document).ready(function () {
    $("#adopcion_btn").click(function () {
        // esto sirve para limpiar la tabla cada vez que se consulte y se ingrese al boton de adocion btn
        $('#adopcion').empty();
        // esto sirve para traer la informacion de la api
        $.get("https://huachitos.cl/api/animales",
            function (data) {
                //console.log(data.data);
                $.each(data.data,function(i,item){     
                    var nombre = item.nombre;
                    var tipo = item.tipo;
                    var color = item.color;
                    var edad = item.edad;
                    var estado = item.estado;
                    var genero = item.genero;
                    var descripcion_fisica = item.desc_fisica;
                    var descripcion_personalidad = item.desc_personalidad;
                    var descripcion_adicional = item.adicional;
                    var esterilizado = item.esterilizado;
                    var vacunas = item.vacunas;
                    var imagen = item.imagen;
                    var region = item.region;
                    var comuna = item.comuna;
                    var url = item.url;               
                    console.log(item.id);
                    $("#adopcion").append("<tr><td>"+nombre+
                    "</td><td>"+tipo+"</td><td>"+
                    color+"</td><td>"+edad+"</td><td>"+
                    estado+"</td><td>"+genero+"</td><td>"+
                    descripcion_fisica+"</td><td>"+descripcion_personalidad
                    +"</td><td>"+descripcion_adicional+"</td><td>"+
                    esterilizado+"</td><td>"+vacunas+"</td><td><img src='"+
                    imagen+"'></td><td>"+
                    region+"</td><td>"+comuna+"</td><td>"+url+"</td></tr>")
                })
                
            });

    });
});

