// Arreglo 1
let numeros = [1, 2, 3, 4, 5];

// Método filter
let numerosFiltrados = numeros.filter(num => num > 2);
console.log('Numeros filtrados (mayores que 2):', numerosFiltrados);

// Método forEach
console.log('Numeros multiplicados por 2:');
numeros.forEach(num => console.log(num * 2));

// Método map
let numerosCuadrados = numeros.map(num => num * num);
console.log('Numeros al cuadrado:', numerosCuadrados);

// Método reduce
let sumaNumeros = numeros.reduce((acum, num) => acum + num, 0);
console.log('Suma de numeros:', sumaNumeros);


// Arreglo 2
let palabras = ['perro', 'gato', 'pajaro', 'pez', 'caballo'];

// Método filter
let palabrasFiltradas = palabras.filter(palabra => palabra.length > 3);
console.log('Palabras filtradas (más de 3 letras):', palabrasFiltradas);

// Método forEach
console.log('Palabras en mayúsculas:');
palabras.forEach(palabra => console.log(palabra.toUpperCase()));

// Método map
let longitudesPalabras = palabras.map(palabra => palabra.length);
console.log('Longitudes de las palabras:', longitudesPalabras);

// Método reduce
let palabrasConcatenadas = palabras.reduce((acum, palabra) => acum + ' ' + palabra);
console.log('Palabras concatenadas:', palabrasConcatenadas);


// Arreglo 3
let booleanos = [true, false, true, false, true];

// Método filter
let booleanosVerdaderos = booleanos.filter(valor => valor === true);
console.log('Booleanos verdaderos:', booleanosVerdaderos);

// Método forEach
console.log('Valores contrarios:');
booleanos.forEach(valor => console.log(!valor));

// Método map
let booleanosNumeros = booleanos.map(valor => valor ? 1 : 0);
console.log('Booleanos como números:', booleanosNumeros);

// Método reduce
let contarVerdaderos = booleanos.reduce((acum, valor) => valor ? acum + 1 : acum, 0);
console.log('Cantidad de valores true:', contarVerdaderos);


// Arreglo 4
let decimales = [1.2, 2.3, 3.4, 4.5, 5.6];

// Método filter
let decimalesFiltrados = decimales.filter(valor => valor > 3);
console.log('Decimales filtrados (mayores que 3):', decimalesFiltrados);

// Método forEach
console.log('Decimales redondeados:');
decimales.forEach(valor => console.log(Math.round(valor)));

// Método map
let decimalesMultiplicados = decimales.map(valor => valor * 2);
console.log('Decimales multiplicados por 2:', decimalesMultiplicados);

// Método reduce
let sumaDecimales = decimales.reduce((acum, valor) => acum + valor, 0);
let promedioDecimales = sumaDecimales / decimales.length;
console.log('Promedio de los decimales:', promedioDecimales);


// Arreglo 5
let nombres = ['Ana', 'Luis', 'Pedro', 'Maria', 'Juan'];

// Método filter
let nombresFiltrados = nombres.filter(nombre => nombre.startsWith('P'));
console.log('Nombres que empiezan con P:', nombresFiltrados);

// Método forEach
console.log('Nombres con primera letra en minúscula:');
nombres.forEach(nombre => console.log(nombre.charAt(0).toLowerCase() + nombre.slice(1)));

// Método mapa
let longitudNombres = nombres.map(nombre => nombre.length);
console.log('Longitud de los nombres:', longitudNombres);

// Método reduce
let nombresConcatenados = nombres.reduce((acum, nombre) => acum + ', ' + nombre);
console.log('Nombres concatenados:', nombresConcatenados);
