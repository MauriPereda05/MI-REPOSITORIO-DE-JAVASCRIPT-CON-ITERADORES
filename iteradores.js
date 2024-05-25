// ITERADORES

console.log('bucle while que imprima los números del 1 al 5.');

let i = 1;

while(i <= 5){
    console.log(`Numero ${i}`);

    i++;
}

console.log('bucle for que imprima los elementos de un array de nombres.');

const nombres = ['Diego', 'Alex', 'Pedro', 'Juan'];

for(let i = 0; i < nombres.length; i++){
    console.log(`${nombres[i]}`);
}

console.log('forEach para imprimir los elementos de un array de números multiplicados por 2.');

const numeros = [15,20,18,17,14];

numeros.forEach(numero => {
    console.log("El resultado es: " + numero * 2);
})

console.log('Usa map para crear un nuevo array con los cuadrados de los números de un array dado.');

const numero2 = [5, 10, 15, 20, 25];

const cuadrado = numero2.map(numero => numero * numero);

console.log(cuadrado);

console.log('Usa find para encontrar el primer número mayor que 10 en un array de números.');

const mayor = [5, 8, 12, 3, 15, 7];

const primermayor = mayor.find(numero => numero > 10);

console.log("El numero mayor que 10 es: " + primermayor);

console.log('Usa some para verificar si hay algún número par en un array de números.')

const Numeropar = mayor.some(numero => numero % 2 === 0);

if(Numeropar) {
    console.log("Si hay al menos un número par en el array.");
} else {
    console.log("No hay ningún número par en el array.");
}

console.log('Usa filter para crear un nuevo array con los números impares de un array dado.');

const Impares = mayor.filter(numero => numero % 2 !== 0);

console.log("Los numeros impares son: " + Impares)

console.log('Combina filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado.')

const cuadradoImpares = mayor.filter(numero => numero % 2 !== 0).map(numero => numero * numero);

console.log("Los cuadrados de los numeros impares son: " + cuadradoImpares)

