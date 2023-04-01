var componentes_opcion1 = ['Modelo:GS1250r:', 'Año:2022','Color:gris', 'Motor:boxer 1250cc', 'HP178:', 'NM torque:168nm', 'Top sepeed:249 km/h', 'Factura original:si'];
var componentes_opcion2 = ['Modelo:F900R', 'Año:2022','Color:azul', 'Motor:lineal 889cc', 'HP162:', 'NM torque:138nm', 'Top sepeed:259 km/h', 'Factura original:si'];
var componentes_opcion3 = ['Modelo:HD-iron 883', 'Año:2019','Color:negro', 'Motor:en V 883cc', 'HP108:', 'NM torque:128nm', 'Top sepeed:218 km/h', 'Factura original:si'];
var componentes_opcion4 = ['Modelo:Panigale V4s', 'Año:2023','Color:rojo', 'Motor:V4 998cc', 'HP215:', 'NM torque:197nm', 'Top sepeed:299 km/h', 'Factura original:si'];
function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("componentes");

    if(opcion==1){
        nombre.innerHTML = "BMW 1250R"
        descripcion.innerHTML = "La mejor ADVENTURE del marcado";
        fotoPrincipal.src = "bmw 1250.jpg";
        circulo.style.backgroundColor = "#fff";
        componentes.innerHTML = "SEMI MOTO.html";
        for(x=0; x < componentes_opcion1.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = componentes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = " BMW F900R"
        descripcion.innerHTML = "¡Potencia y capacidad!";
        fotoPrincipal.src = "F900XR.jpg";
        circulo.style.backgroundColor = "#fff";
        componentes.innerHTML = "SEMI MOTO.html";
        for(x=0; x < componentes_opcion2.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = componentes_opcion2[x];
            li.appendChild(txt);
            componentes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Harely Davidson iron 883"
        descripcion.innerHTML = "Estilo ypotencia unico.";
        fotoPrincipal.src = "hd883";
        circulo.style.backgroundColor = "#fff";
        componentes.innerHTML = "SEMI MOTO.html";
        for(x=0; x < componentes_opcion3.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = componentes_opcion3[x];
            li.appendChild(txt);
            componentes_opcion1.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Ducati panigale V4s"
        descripcion.innerHTML = "Velovidad y exclusividad";
        fotoPrincipal.src = "v4s.webp";
        circulo.style.backgroundColor = "#fff";
        componentes.innerHTML = "SEMI MOTO.html";
        for(x=0; x < componentes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = componentes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    
}