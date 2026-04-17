// 1. Selección de elementos
const input = document.getElementById('agregarLista');
const boton = document.getElementById('btnAgregar');
const listaUI = document.getElementById('listaProductos');

// 2. Estado de la aplicación (Ahora es solo un array en memoria)
// Al recargar la página, se volverá a vaciar []
// USO LET PORQUE NO LO ESTOY DECLARANDO DE UNA
let arrayProductos = [];

// 3. Función para agregar
const agregarProducto = () => {
    const texto = input.value.trim();
    if (texto === "") return;

    arrayProductos.push(texto); // Guardamos en el array
    input.value = ""; 
    input.focus();
    renderizarLista(); // Dibujamos
};

// 4. Función para eliminar
const eliminarProducto = (index) => {
    arrayProductos.splice(index, 1); // Borra 1 elemento en esa posición
    renderizarLista();
    input.focus();
};

// 5. NUEVA: Función para editar
const editarProducto = (index) => {
    // Pedimos el nuevo nombre al usuario
    const nuevoNombre = prompt("Edita tu producto:", arrayProductos[index]);
    
    // Si el usuario no canceló y escribió algo, actualizamos
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        arrayProductos[index] = nuevoNombre.trim();
        renderizarLista();
    }
    input.focus();
};

// 6. Función para dibujar la lista en pantalla
const renderizarLista = () => {
    listaUI.innerHTML = ""; 

    arrayProductos.forEach((producto, index) => {
        const item = document.createElement('div');
        item.className = "elementoLista"; 
        
        item.innerHTML = `
            <li>${producto}</li>
            <div>
                <button class="btn btn-warning btn-sm" onclick="editarProducto(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
            </div>
        `;
        listaUI.appendChild(item);
    });
};

// 7. Eventos
boton.addEventListener('click', agregarProducto);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarProducto();
});