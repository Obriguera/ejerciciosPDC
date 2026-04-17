const boton = document.getElementById("btn-sortear");
const tabla = document.getElementById("t-resultados");
const resultados = document.getElementById("resultados");

let numero_resultados = 0;
let numero_sorteos = 0;

const generarSorteo = (total_sorteos) => {
  numero_resultados++;
  const numeros = [];
  resultados.textContent = "";
  let cantidad = 0;

  const intervalo = setInterval(() => {
    const numero = Math.floor(Math.random() * 10);
    numeros.push(numero);
    resultados.textContent = numeros.join(" ");
    cantidad++;

    if (cantidad === 4) {
      clearInterval(intervalo);

      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${numero_resultados}</td>
        <td>${numeros.join(" ")}</td>
        <td>${numeros.join(" ")}</td>
      `;
      tabla.append(fila);

      // Después de 2 segundos, chequea si ya llegó a 20 sorteos
      setTimeout(() => {
        resultados.textContent = "";
        
        if (total_sorteos < 20) {
          // Sigue con el próximo sorteo
          generarSorteo(total_sorteos + 1);
        } else {
          // Ya completó 20, habilita el botón
          boton.disabled = false;
        }
      }, 2000); // 2000
    }
  }, 300); // 300
};

const iniciarSorteos = () => {
  boton.disabled = true;

  tabla.innerHTML="";
  if(numero_sorteos = 1)
  {
    boton.textContent = "Volver a Sortear";
  };

  numero_resultados = 0;
  generarSorteo(1); // Empieza el sorteo 1
  numero_sorteos++;

};

boton.addEventListener("click", iniciarSorteos);