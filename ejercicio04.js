// Función para encontrar la palabra mayor
function findLongestWord(...words) {
    let longestWord = '';

    for (let word of words) {
        // Comparar la longitud de las palabras
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Función para solicitar las palabras
function getWords() {
    let numCount = prompt('¿Cuántas palabras deseas ingresar?');
    let words = [];

    // Verificar si el número de entradas es válido
    if (isNaN(numCount) || numCount <= 0) {
        alert("Por favor, ingresa un número válido.");
        getWords(); // Volver a solicitar el conteo
    } else {
        for (let i = 0; i < numCount; i++) {
            let word = prompt(`Ingresa la palabra ${i + 1}:`);
            words.push(word);
        }
        let longestWord = findLongestWord(...words); // Llamar a la función con las palabras ingresadas
        alert(`La palabra más larga es: ${longestWord}`); // Mostrar la palabra más larga
    }
}

// Iniciar la solicitud de palabras
getWords();

/*Explicación del Código
findLongestWord(...words): Esta función recibe un número variable de palabras y determina cuál es la más larga comparando la longitud de cada palabra. Se inicializa longestWord como una cadena vacía, y se actualiza con la palabra más larga encontrada.

getWords(): Esta función gestiona la entrada del usuario. Primero, solicita cuántas palabras desea ingresar y luego pide cada palabra mediante prompt(). Si se introduce un valor no válido, muestra una alerta y vuelve a solicitar el conteo.

Uso de prompt(): Permite ingresar palabras a través de un cuadro de diálogo en el navegador, lo que elimina la necesidad de módulos adicionales.

Mostrar el resultado: Al final, se muestra una alerta con la palabra más larga ingresada.*/