const input = document.getElementById('agregarLista');
const boton = document.getElementById('btnAgregar');
const listaUI = document.getElementById('listaProductos');

let arrayProductos = JSON.parse(localStorage.getItem('Compras')) || [];

const guardarYrenderizar = () => {
    localStorage.setItem('Compras', JSON.stringify(arrayProductos));
    renderizarLista();
}

const agregarProducto = () => {
    const texto = input.value.trim();
    if (texto === "") return alert("Escribe un producto");

    arrayProductos.push(texto);
    input.value = "";
    input.focus();
    guardarYrenderizar();
}

const eliminarProducto = (index) => {
    arrayProductos.splice(index, 1);
    guardarYrenderizar();
};

const renderizarLista = () => {
    listaUI.innerHTML = ""; // Limpiamos la lista antes de redibujar
    
    arrayProductos.forEach((producto, index) => {
        const item = document.createElement('div');
        item.className = "elementoLista"; // Clases de Bootstrap
        item.innerHTML = `
            <li>${producto}</li>
            <button class="btn btn-danger btn-sm ms-2" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        listaUI.appendChild(item);
    });
};

// --- EVENTOS ---

// Click en el botón
boton.addEventListener('click', agregarProducto);

// Tecla Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarProducto();
});

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', renderizarLista);