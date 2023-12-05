function calcularEdadPromedio() {
  let continuar;
  
  do {

    let cantidadPersonas;

    do {
      cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas (debe ser más de 1):"));

      if (isNaN(cantidadPersonas) || cantidadPersonas <= 1) {
        alert("Por favor, ingrese un número válido de personas.");
      }
    } while (isNaN(cantidadPersonas) || cantidadPersonas <= 1);

    let totalDeEdades = 0;

    for (let i = 0; i < cantidadPersonas; i++) {
      let edad;

      do {
        edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));

        if (isNaN(edad) || edad <= 0) {
          alert("Por favor, ingrese una edad válida.");
        }
      } while (isNaN(edad) || edad <= 0);

      totalDeEdades += edad;
    }

    const promedio = totalDeEdades / cantidadPersonas;

    alert(`La edad promedio de las ${cantidadPersonas} personas registradas es: ${promedio}`);

    continuar = confirm ("¿Desea realizar otro cálculo?");
    }
  while (continuar)
}
  calcularEdadPromedio();