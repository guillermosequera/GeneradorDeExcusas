window.onload = function() {        //funcion 'onload' que indica que al cargar la pagina se ejecutaran nuestras variales
    let who = [' The dog',' My granma',' His turtle',' My bird'];       //variable que contiene el arrays con nuestros sujetos para las excusas
    let what = [' eat',' pissed',' crushed',' broked'];             //variable que contiene el verbo de nuestras excusas
    let when = [' before the class',' right in time',' when I finished',' during my lunch',' while I was praying'];                 //variable que contienen el array con los articulos para completar nuestra excusa

    var prueba = Math.floor(Math.random() * who.length);            //variable para seleccionar un valor random de nuestro array
    var prueba2 = Math.floor(Math.random() * what.length);          //variable para seleccionar el valor random de nuestro array
    var prueba3 = Math.floor(Math.random() * when.length);          //variable para seleccionar un valor random de nuestro array

    var resultado = who[prueba] + what[prueba2] + when[prueba3];    //variable que suma los valores secleccionados por nuestras variables anteriores que implementaron la propiedad "Math.random"

    document.getElementById("excuse").innerHTML = resultado;
    console.log(who[prueba] + what[prueba2] + when[prueba3]);



}