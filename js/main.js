////////////////////////* VARIABLES *//////////////////////////
const body = document.querySelector('body')
const personajes = document.querySelector('.personajes > img')
const nombre = document.querySelector('.nombre > span')
const botonSubir = document.querySelector('.btn-subir')


//posicion del nombre de la seccion 1
let nombrePosicion = nombre.getBoundingClientRect().bottom
//posicion de la seccion 2 de las casas
let casasAltura = document.querySelector('.dos').getBoundingClientRect().top


//fadein casas
//gryffindor
const escudoGryffindor = document.querySelector('.gryffindor > .imagen-escudo')
const contenidoGryffindor = document.querySelector('.gryffindor .contenido-casa')
let gryffindorPosicion = escudoGryffindor.getBoundingClientRect().y

//hufflepuff
const escudoHufflepuff = document.querySelector('.hufflepuff > .imagen-escudo')
const contenidoHufflepuff = document.querySelector('.hufflepuff .contenido-casa')
let hufflepuffPosicion = escudoHufflepuff.getBoundingClientRect().y

//Slytherin
const escudoSlytherin = document.querySelector('.slytherin > .imagen-escudo')
const contenidoSlytherin = document.querySelector('.slytherin .contenido-casa')
let slytherinPosicion = escudoSlytherin.getBoundingClientRect().y

//ravenclaw
const escudoRavenclaw = document.querySelector('.ravenclaw > .imagen-escudo')
const contenidoRavenclaw = document.querySelector('.ravenclaw .contenido-casa')
let ravenclawPosicion = escudoRavenclaw.getBoundingClientRect().y


////////////////////////* EVENTOS *//////////////////////////
window.addEventListener('scroll', mostrarBtnSubir)
window.addEventListener('scroll', cambioCabecera)
window.addEventListener('scroll', ralentizarPersonajes)
window.addEventListener('scroll', ralentizarNombre)

botonSubir.addEventListener('click', subirTop)

//fadein scroll
window.addEventListener('scroll', casaGryffindor)
window.addEventListener('scroll', casaHufflepuff)
window.addEventListener('scroll', casaSlytherin)
window.addEventListener('scroll', casaRavenclaw)


////////////////////////* FUNCIONES *//////////////////////////
//funcion para mostrar el boton
function mostrarBtnSubir() {
    if (window.scrollY >= 300) {
        botonSubir.classList.add('visible')
    } else {
        botonSubir.classList.remove('visible')
    }
}

//para que funcione el boton subir
function subirTop() {
    let distanciaScroll = window.scrollY
    if (distanciaScroll != 0) {
        setTimeout(() => {
            window.scrollTo(0, distanciaScroll - 30)
            subirTop()
        }, 5)
    }
}

//cambiar la cabecera al hacer scroll
function cambioCabecera() {
    if (window.scrollY >= 300){
        body.classList.add('cambio')
    } else {
        body.classList.remove('cambio')
    }
}

//realentizar personajes y titulo
function ralentizarPersonajes() {
    personajes.style.bottom = '-' + scrollY / 2 + 'px'
}

function ralentizarNombre() {
    nombre.style.bottom = '-' + scrollY / 3 + 'px'
}

//fadein casas
//gryffindor
function casaGryffindor() {
    let scrollGryffindor = gryffindorPosicion / 2.2
    if (window.scrollY >= scrollGryffindor){
        escudoGryffindor.classList.add('aparecer-escudo')
        contenidoGryffindor.classList.add('aparecer-info')
    }
}

function casaHufflepuff() {
    let scrollHufflepuff = hufflepuffPosicion / 1.7
    if (window.scrollY >= scrollHufflepuff){
        escudoHufflepuff.classList.add('aparecer-escudo')
        contenidoHufflepuff.classList.add('aparecer-info')
    }
}

function casaSlytherin() {
    let scrollSlytherin = slytherinPosicion / 1.4
    if (window.scrollY >= scrollSlytherin){
        escudoSlytherin.classList.add('aparecer-escudo')
        contenidoSlytherin.classList.add('aparecer-info')
    }
}

function casaRavenclaw() {
    let scrollRavenclaw = ravenclawPosicion / 1.3
    console.log(scrollRavenclaw)
    if (window.scrollY >= scrollRavenclaw){
        escudoRavenclaw.classList.add('aparecer-escudo')
        contenidoRavenclaw.classList.add('aparecer-info')
    }
}