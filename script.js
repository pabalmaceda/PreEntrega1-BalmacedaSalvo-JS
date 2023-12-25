function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

function calcularPromedioEdades(personas) {
  let totalEdades = 0;

  for (let i = 0; i < personas.length; i++) {
    totalEdades += personas[i].edad;
  }

  return totalEdades / personas.length;
}

function mostrarInformacion(personas, promedio) {
  console.log("Información de las personas:");

  for (let i = 0; i < personas.length; i++) {
    console.log(`Nombre: ${personas[i].nombre}, Edad: ${personas[i].edad}`);
  }

  console.log(`El promedio de edades es: ${promedio}`);
}

function filtrarPersonasMayores(personas, edadLimite) {
  return personas.filter(persona => persona.edad > edadLimite);
}


function encontrarPersonaMayorEdad(personas) {
  return personas.reduce((personaMayor, personaActual) => {
    return personaActual.edad > personaMayor.edad ? personaActual : personaMayor;
  });
}

function calcularEdadPromedio() {
  const personas = [];
  let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que desea ingresar:"));

  while (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
    alert("Por favor, ingrese un número válido de personas.");
    cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que desea ingresar:"));
  }

  let continuar;

  do {
    let nombre = prompt("Ingrese el nombre de la persona:");
    let edad;

    do {
      edad = parseInt(prompt("Ingrese la edad de la persona:"));

      if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
      }
    } while (isNaN(edad) || edad <= 0);

    const nuevaPersona = new Persona(nombre, edad);
    personas.push(nuevaPersona);

    if (personas.length === cantidadPersonas) {
      continuar = false;
    } else {
      continuar = confirm("¿Desea ingresar otra persona?");
    }
  } while (continuar);

  const promedio = calcularPromedioEdades(personas);

  mostrarInformacion(personas, promedio);

  const personasMayores = filtrarPersonasMayores(personas, 30);
  console.log("Personas mayores a 30 años:", personasMayores);


  const personaMayorEdad = encontrarPersonaMayorEdad(personas);
  console.log("Persona de mayor edad:", personaMayorEdad);
}

calcularEdadPromedio();