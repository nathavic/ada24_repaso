// Hacer un programa que al apretar la tecla espacio, cambie el color de 
// fondo del body por un color aleatorio. Para eso, 
// crear una función obtenerColorAleatorio() que devuelva un string con 
// el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b 
// se generan aleatoriamente (con números del 1 al 255).

// math.random (aleatorio)

// window = ventana del navegador
// document = todo el documento

// escuchar cuando se hace click a la tecla espacio
const body = document.querySelector("body")
    // const body = document.body
    // console.log(body)

window.onkeypress = (e) => {
    if (e.keyCode === 32) {
        console.log(" 32 es keycode de espacio")
            // retornar la accion cuando hacer click en espacio
        const color = obtenerColorAleatorio()
            // asignar color al body 
        console.log(color)
        body.style.backgroundColor = color
    }
}

// crear 3 numeros al azar del 0 al 255

const obtenerColorAleatorio = () => {
    // numero aleatorio "0.6393746"
    // console.log(Math.random())
    // convertir en un numero entero "92" (floor)
    // console.log(Math.floor(Math.random() * 255))
    // crear 3 numeros aleatorios 
    const primerNumero = Math.floor(Math.random() * 255)
    const segundoNumero = Math.floor(Math.random() * 255)
    const tercerNumero = Math.floor(Math.random() * 255)
        // "343 2 34"
        // console.log(primerNumero, segundoNumero, tercerNumero)
        // hace un string rgb(num1, num2, num3)
    const nuevoColor = `rgb (${primerNumero}, ${segundoNumero}, ${tercerNumero})`

    return nuevoColor
}