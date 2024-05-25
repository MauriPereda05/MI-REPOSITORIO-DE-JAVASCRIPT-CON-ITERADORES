# JAVASCRIPT - ITERADORES

Los iteradores en JavaScript son objetos que proporcionan un mecanismo para iterar sobre los elementos de una colección como un array. Permiten acceder a los elementos de la colección uno por uno generalmente a través de un bucle for,while o métodos como forEach(),map(),

## EJERCICIOS CON LOS ITERADORES Y METODOS

## Ejercicio 1: Escribe un bucle while que imprima los números del 1 al 5.

```javascript
let i = 1;

while(i <= 5){
    console.log(`Numero ${i}`);

    i++;
}
```

Este código crea un bucle while que imprime números del 1 al 5 en la consola. Comienza con ' i ' en 1 y se repite mientras ' i ' sea menor o igual a 5. En cada iteración y imprime el valor de ' i ' junto con el texto "Numero". Luego, ' i ' se incrementa en 1 antes de la siguiente iteración. Una vez que ' i ' alcanza 5 el bucle termina y el programa finaliza.

## Ejercicio 2: Escribe un bucle for que imprima los elementos de un array de nombres.

```javascript
const nombres = ['Diego', 'Alex', 'Pedro', 'Juan'];

for(let i = 0; i < nombres.length; i++){
    console.log(`${nombres[i]}`);
}
```

Este código utiliza un bucle for para recorrer el array nombres. Comienza con ' i ' en 0 y se ejecuta mientras ' i ' sea menor que la longitud(length) del array en cada iteración y se imprime el elemento en la posición ' i ' del array. Luego ' i ' se incrementa en 1. Una vez que ' i ' alcanza la longitud del array el bucle termina y el programa finaliza.

## Ejercicio 3: Usa forEach para imprimir los elementos de un array de números.

```javascript
const numeros = [15,20,18,17,14];

numeros.forEach(numero => {
    console.log("El resultado es: " + numero * 2);
})
```

Aqui utilizamos el método forEach() para iterar cada elemento del array numeros y multiplica el elemento actual por 2, luego imprime el resultado en la consola. 

La función de flecha (numero => {}) representa lo que se realizará en cada iteración del forEach(). imprime el resultado de la multiplicacion del numero por 2 en la consola.

## Ejercicio 4: Usa map para crear un nuevo array con los cuadrados de los números de un array dado.

```javascript
const numero2 = [5, 10, 15, 20, 25];

const cuadrado = numero2.map(numero => numero * numero);

console.log(cuadrado);
```

Utilizamos el método map() en donde creamos un nuevo array llamado cuadrado que contiene los cuadrados de cada número en el array numero2. Luego imprime el array cuadrado en la consola. 

La función de flecha (numero => numero * numero) se aplica a cada elemento del array numero2 calculando su cuadrado y el resultado se almacena en el array cuadrado.

## Ejercicio 5: Usa find para encontrar el primer número mayor que 10 en un array de números.

```javascript
const mayor = [5, 8, 12, 3, 15, 7];

const primermayor = mayor.find(numero => numero > 10);

console.log("El numero mayor que 10 es: " + primermayor);
```

Aqui estamos buscando el primer número mayor que 10 en el array llamada mayor y Utilizamos el método find() que devolvera el primer elemento del array que cumple con la condición. La función de flecha (numero => numero > 10) busca el primer número mayor que 10 y una vez que se encuentra el número se imprime el número encontrado en la consola.

## Ejercicio 6: Usa some para verificar si hay algún número par en un array de números.

```javascript
const mayor = [5, 8, 12, 3, 15, 7];

const Numeropar = mayor.some(numero => numero % 2 === 0);

if(Numeropar) {
    console.log("Si hay al menos un número par en el array.");
} else {
    console.log("No hay ningún número par en el array.");
}
```

Aqui utilizamos el método some() para verificar si hay al menos un número par en el array mayor. La función de flecha (numero => numero % 2 === 0) comprueba si cada número en el array es divisible por 2. Si al menos un número cumple esta condición,some() devuelve true indicando que hay al menos un número par en el array. En caso contrario devuelve false indicando que no hay ningun número par en el array. Luego se imprime un mensaje en la consola dependiendo del resultado.

## Ejercicio 7: Usa filter para crear un nuevo array con los números impares de un array dado.

```javascript
const mayor = [5, 8, 12, 3, 15, 7];

const Impares = mayor.filter(numero => numero % 2 !== 0);

console.log("Los numeros impares son: " + Impares)
```

Aqui utilizamos el método filter() para crear un nuevo array llamado Impares que contiene solo los números impares del array mayor. (numero => numero % 2 !== 0) filtra los números que no son divisibles por 2, es decir los números impares. Luego imprime los números impares en la consola.

## Ejercicio 8 (Extra) : Combina filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado.

```javascript
const cuadradoImpares = mayor.filter(numero => numero % 2 !== 0).map(numero => numero * numero);

console.log("Los cuadrados de los numeros impares son: " + cuadradoImpares)
```

Utiliza el método filter() para seleccionar solo los números impares del array mayor y luego empleamos map() para calcular el cuadrado de cada número impar seleccionado. Finalmente se imprime los cuadrados de los números impares en la consola.