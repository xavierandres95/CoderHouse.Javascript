

let animales = [];

// Función para obtener datos de la API de perros
async function perrosAPI() {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random/20');
        const datos = await respuesta.json();
        animales = datos.message.map((imagen, index) => ({
            id: index + 1,
            nombre: `Perro ${index + 1}`,
            edad: Math.floor(Math.random() * 5) + 1, // Edad es aleatoria entre 1 y 5 y raza la misma porque el API no tiene más informacion
            raza: 'Desconocida',
            imagen: imagen,
        }));
        crearTarjetas();
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

// Función para llenar la sección HOME con las tarjetas de animales. 
function crearTarjetas() {
    const contenido = document.getElementById('contenido');

    animales.forEach(animal => {
      
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

     
        const imagen = document.createElement('img');
        imagen.src = animal.imagen;
        tarjeta.appendChild(imagen);

      
        const info = document.createElement('div');
        info.innerHTML = `<h2>${animal.nombre}</h2>
                          <p>Edad: ${animal.edad} años</p>
                          <p>Raza: ${animal.raza}</p>`;
        tarjeta.appendChild(info);

       
        contenido.appendChild(tarjeta);
    });
}

perrosAPI();

function modoOscuroOn() {
    document.body.classList.add('modo-oscuro');
}

function modoOscuroOff() {
    document.body.classList.remove('modo-oscuro');
}

function alternarModoOscuro() {
    document.body.classList.toggle('modo-oscuro'); //creas una palanca donde crear o eliminas la clase para que css cambie el diseño
}

const modoOscuroBtn = document.getElementById('modoOscuroBtn');

modoOscuroBtn.addEventListener('click', alternarModoOscuro);
