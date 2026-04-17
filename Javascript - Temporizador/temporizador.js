// 1. Selección de elementos
const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const inicio = document.getElementById('btnIniciar');
const pausa = document.getElementById('btnDetener');
let id = null;
let id2 = null;


const iniciarTimer = () => {
    if (id !== null) return;
    if (id2 !== null) return;
    id = setInterval(aumentarSegundos, 1000);
    id2 = setInterval(aumentarMinutos, 60000);
}


const pausarTimer = () => {
    if (id === null) return;
    if (id2 === null) return;
    clearInterval(id);
    id = null;
    clearInterval(id2);
    id2 = null;
}

const aumentarSegundos = () => {
    let numero_actual = Number(segundos.innerHTML);
    let nuevo_valor = numero_actual + 1;

    if (nuevo_valor === 60) {
        nuevo_valor = 0;
    }

    segundos.innerHTML = String(nuevo_valor).padStart(2, '0');
}

const aumentarMinutos = () => {
    let numero_actual = Number(minutos.innerHTML);
    let nuevo_valor = numero_actual + 1;
    minutos.innerHTML = nuevo_valor;
}


inicio.addEventListener('click', iniciarTimer);
pausa.addEventListener('click', pausarTimer);