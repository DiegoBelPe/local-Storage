const listapelicula = document.getElementById('lista-peliculas');

evento();

function evento() {
    document.getElementById('formulario').addEventListener('submit', agregarp);
    listapelicula.addEventListener('click', borrarp);

    document.addEventListener('DOMContentLoaded', cargarp);
}

function agregarp(p) {

    // para que no coja los datos por defecto
    p.preventDefault();

    // para que cuando el usuario ingrese las peliculas en el text area 

    const peliculas = document.getElementById('Peliculas').value;

    const listado = document.createElement('li');

    // cuando se escriba en pantalla quede en variable peliculas 

    listado.innerHTML = peliculas;

    // para agregar el listado de las peliculas que se agregue dentro del DOM

    listapelicula.appendChild(listado);

    // agregar boton borrar

    const borrar = document.createElement('a');
    borrar.classList = 'borrar-pelicula';
    borrar.innerText = 'X';

    listado.appendChild(borrar);

    agregandop(peliculas);
}

//  borrar pelicula 
function borrarp(p) {
    p.preventDefault();

    if (p.target.className === 'borrar-pelicula') {

        console.log(p.target.parentElement.remove());
        alert('Pelicula eliminada!');
        borrarpl(p.target.parentElement.innerText);
    }
}

// Agregar peliculas al local storage

function agregandop(peliculas) {
    let pelicula;

    pelicula = obteniendop();

    pelicula.push(peliculas);

    localStorage.setItem('peliculas', JSON.stringify(pelicula));
}

function obteniendop() {
    let pelicula;

    if (localStorage.getItem('peliculas') === null) {
        pelicula = [];

    } else {

        pelicula = JSON.parse(localStorage.getItem('peliculas'));
    }

    return pelicula;
}

function cargarp() {

    let pelicula;
    pelicula = obteniendop();

    pelicula.forEach(function(peliculas) {

        const listado = document.createElement('li');



        listado.innerHTML = peliculas;


        listapelicula.appendChild(listado);


        const borrar = document.createElement('a');
        borrar.classList = 'borrar-pelicula';
        borrar.innerText = 'X';

        listado.appendChild(borrar);



    });


}

function borrarpl(peliculas) {

    let pelicula, borrarpl;
    borrarpl = peliculas.substring(0, peliculas.length - 1);
    pelicula = obteniendop();


    pelicula.forEach((peliculas, index) => {
        if (borrarpl === peliculas) {
            pelicula.splice(index, 1);
        }

    });

    localStorage.setItem('peliculas', JSON.stringify(pelicula));

}