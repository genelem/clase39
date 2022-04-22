window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let title = document.querySelector("#title");
let rating = document.querySelector("#rating");
let awards = document.querySelector("#awards");
let release = document.querySelector("#release_date");
let length = document.querySelector("#length");
let genre = document.querySelector("#genre_id");
let form = document.querySelector(".form")



title.focus()

form.addEventListener("submit", function(e){
    let errores = [];
    if (title.value == ""){
        title.classList.add("is-invalid")
        errores.push("El campo de título está vacío")
    }else{
        title.classList.remove("is-invalid")
        title.classList.add("is-valid")
    }

    if (rating.value <= 0 || rating.value >= 10 ){
        rating.classList.add("is-invalid")
        errores.push("El campo de calificación debe tener un valor entre 0 y 10")
    }else{
        rating.classList.remove("is-invalid")
        rating.classList.add("is-valid")
    }

    if (awards.value <= 0 || awards.value >= 10 ){
        awards.classList.add("is-invalid")
        errores.push("El campo de premios debe tener un valor entre 0 y 10")
    }else{
        awards.classList.remove("is-invalid")
        awards.classList.add("is-valid")
    }

    if (release.value == "" ){
        release.classList.add("is-invalid")
        errores.push("La fecha de estreno no puede estar vacía")
    }else{
        release.classList.remove("is-invalid")
        release.classList.add("is-valid")
    }

    if (length.value <= 60 || length.value >= 360 ){
        length.classList.add("is-invalid")
        errores.push("El campo de duración debe tener un valor entre 60 y 360 min")
    }else{
        length.classList.remove("is-invalid")
        length.classList.add("is-valid")
    }

    if (genre.value == ""){
        genre.classList.add("is-invalid")
        errores.push("El campo de genero no puede estar vacío")
    }else{
        genre.classList.remove("is-invalid")
        genre.classList.add("is-valid")
    }

    if (errores.length > 0){
        e.preventDefault();
        let ulErrores = document.querySelector(".errores");
        ulErrores.classList.add("alert-warning")
        console.log(ulErrores)
        ulErrores.innerHTML = "";
        console.log(ulErrores)
        errores.forEach(function(error){
            ulErrores.innerHTML += "<li>" + error +  "</li>"
        })
        console.log(ulErrores)
    }else{
        alert("La pelicula se guardo satisfactoriamente")
    }
})
}