
//INICIALIZO LA CONSTANTE DE CONTENIDOS PARA CARGAR LOS DATOS EN EL HTML//

const divContenidos = document.getElementById("divContenidos")

const cardContenido = JSON.parse(localStorage.getItem('contenidos'))//LLamo al array de contenidos generados en el localStorage con el scriptAdmin

cardContenido.forEach(contenido =>{//Itero los datos del array y les asigno un lugar
    divContenidos.innerHTML +=`
        <div class="contenidos" id="divContenidos">
            <div class="img">
                <img src="${contenido.img}"class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contenido.nombre}</h5>
                    <p class="card-text">${contenido.categoria}</p>
                    <a href="#" class="btn btn-primary">Agregar</a>
                </div>
            </div>
        </div>
    `
})
