/* Crear un temporizador donde el usuario pueda:
   1. Ingresar un tiempo en segundos.
   2. Iniciar la cuenta regresiva al hacer click en un botón.
   3. Pausar la cuenta regresiva.
   4. Restablecer el temporizador.
*/ 

let tiempo;
let tiemporesto;
let intervalo;
let minutos;
let segundos;

const input = document.getElementById('ingresar-tiempo');
const botonIniciar = document.getElementById('iniciar');
const botonPausar = document.getElementById('pausar');
const botonRestablecer = document.getElementById('restablecer');

const spanMinutos = document.getElementById('minutos');
const spanSegundos = document.getElementById('segundos');

botonIniciar.addEventListener('click', Iniciar)
botonPausar.addEventListener('click', Pausar)
botonRestablecer.addEventListener('click',Restablecer)

function Iniciar(){
    if(input.value){
        tiempo = parseInt(input.value);
        intervalo = setInterval(()=>{   /*Funcion para ir mostrando el tiempo que queda en el temporizador una vez se activa*/
            if(tiempo > 0){
                minutos = Math.trunc(tiempo / 60);   /*para obtener el entero de la división*/
                segundos = tiempo % 60;
                tiempo--;
                spanSegundos.innerHTML = segundos.toString().padStart(2, '0'); /*Para colocar un 0 a la izquierda cuando hay solo una cifra*/
                spanMinutos.innerHTML = minutos.toString().padStart(2, '0'); /*Para colocar un 0 a la izquierda cuando hay solo una cifra*/

            }else{
                clearInterval(intervalo);
                intervalo = null;
                spanSegundos.innerHTML = '00';
                spanMinutos.innerHTML = '00';
                alert('Tiempo completado')
            }
            return tiempo  /*devuelve el tiempo que falta por recorrer*/
        }, 1000);  /*cada 1000ms se ejecuta todo el código que contiene la función ()*/

    }else{ /*si no hay un valor en el input se pide que se agregue algo*/
        alert('Debes ingresar una tiempo en segundos')
    }
}

function Pausar(){
    clearInterval(intervalo);
    intervalo = null;
    input.value = tiempo;  /*Devolvemos el valor que faltaba por recorrer cuando se pauso en el input*/
}

function Restablecer(){
    clearInterval(intervalo);
    intervalo = null;
    spanSegundos.innerHTML = '00';
    spanMinutos.innerHTML = '00';
    input.value = '';
}
