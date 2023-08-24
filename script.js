const contadorElemento = document.getElementById("contador");
const incrementarBoton = document.getElementById("incrementar");
const disminuirBoton = document.getElementById("disminuir");

let contador = 0;

function incrementarContador() {
  contador++;
  contadorElemento.textContent = contador;
}

function disminuirContador() {
  contador--;
  contadorElemento.textContent = contador;
}

incrementarBoton.addEventListener("click", incrementarContador);
disminuirBoton.addEventListener("click", disminuirContador);
