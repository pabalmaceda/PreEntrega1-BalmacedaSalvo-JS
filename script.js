function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

let personas = cargarPersonasDesdeLocalStorage();

function cargarPersonasDesdeLocalStorage() {
  const personasGuardadas = localStorage.getItem('personas');

  if (personasGuardadas) {
    return JSON.parse(personasGuardadas);
  }

  return [];
}

function calcularPromedioEdades(personas) {
  let totalEdades = 0;

  for (let i = 0; i < personas.length; i++) {
    totalEdades += personas[i].edad;
  }

  return totalEdades / personas.length;
}

function filtrarPersonasMayores(personas, edadLimite) {
  return personas.filter(persona => persona.edad > edadLimite);
}

function encontrarPersonaMayorEdad(personas) {
  return personas.reduce((personaMayor, personaActual) => {
    return personaActual.edad > personaMayor.edad ? personaActual : personaMayor;
  });
}

function agregarPersona() {
  const nombreInput = document.querySelector('#nombre');
  const edadInput = document.querySelector('#edad');

  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value);

  if (!nombre || isNaN(edad) || edad <= 0) {
    alert("Por favor, ingrese datos válidos.");
    return;
  }

  const nuevaPersona = new Persona(nombre, edad);
  personas.push(nuevaPersona);

  localStorage.setItem('personas', JSON.stringify(personas));

  nombreInput.value = '';
  edadInput.value = '';
}

function realizarCalculo() {
  personas = cargarPersonasDesdeLocalStorage();

  if (personas.length === 0) {
    alert("Agregue al menos una persona antes de realizar el cálculo.");
    return;
  }

  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = "<h2>Resultados:</h2>";

  const promedio = calcularPromedioEdades(personas);
  resultadosDiv.innerHTML += `<p>El promedio de edades es: ${promedio.toFixed(2)}</p>`;

  resultadosDiv.innerHTML += "<h3>Información de las personas:</h3>";
  for (let i = 0; i < personas.length; i++) {
    resultadosDiv.innerHTML += `<p>Nombre: ${personas[i].nombre}, Edad: ${personas[i].edad}</p>`;
  }

  const nombresMayores = filtrarPersonasMayores(personas, 30).map(persona => persona.nombre);
  resultadosDiv.innerHTML += `<p>Nombres de personas mayores a 30 años: ${JSON.stringify(nombresMayores)}</p>`;

  const personaMayorEdad = encontrarPersonaMayorEdad(personas);
  resultadosDiv.innerHTML += `<p>Persona de mayor edad: ${JSON.stringify(personaMayorEdad)}</p>`;
}

function resetLocalStorage() {
  localStorage.removeItem('personas');
  alert('Local Storage reseteado.');
}