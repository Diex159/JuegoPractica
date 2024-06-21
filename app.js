// let titulo = document.querySelector(`h1`);

// titulo.innerHTML = "juego del numero secreto"

// let parrafo = document.querySelector(`p`);

// parrafo.innerHTML = "Indica un numero del 1 al 10"


// function intentoDeUsuario(){
//     alert("click desde la funcion");
// }


// let titulo = document.querySelector(`h1`)
 
// titulo.innerHTML = "Hora del Desafío"

// function clickUsuario(){
//     alert("el boton fue presionado")
// }



// let ciudad

// function clickEnPromt(){
//     ciudad = prompt("nombre de una ciudad de Brasil")
//     alert(`Estuve en ${ciudad} y me acordé de ti `)
// }

// function clickEnAlerta(){
//     alert("Yo amo JS")
// }

// let num1 
// let num2


// function sumaSuma(){
//    num1 = parseInt(prompt("Escribe el primer numero"))
//    num2 = parseInt(prompt("Escribe el segundo numero"))
    
//    num3 =(num1+num2)
   
//    alert(`la suma de los numeros es ${num3}`)
// }


// let numeroSecreto = generarNumeroSecreto();
// let intentos = 0;

// console.log(numeroSecreto);

// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }

// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
//     if (numeroDeUsuario === numeroSecreto) {
//         console.log('Acertaste el número!');
//     } 
//     return;
// }


// function generarNumeroSecreto() {
//     return Math.floor(Math.random()*10)+1;

// }

// asignarTextoElemento('h1','Juego del número secreto!');
// asignarTextoElemento('p',`Indica un número del 1 al 10`); 


// function hola(){
//     console.log("¡Hola, mundo!")
// }

// function mostrarTablaDeMultiplicar(numero) {
//     for (var i = 1; i <= 10; i++) {
//       var resultado = numero * i;
//       console.log(numero + " x " + i + " = " + resultado);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 7;
//   mostrarTablaDeMultiplicar(numero);

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();