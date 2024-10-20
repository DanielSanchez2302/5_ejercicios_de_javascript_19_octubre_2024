
function displaySortedNumbers(...numbers) {
    
    numbers.sort((a, b) => b - a);
    
    
    console.table(numbers);
}


function getNumbers() {
    let numCount = prompt('¿Cuántos números deseas ingresar?');
    let numbers = [];
    
    
    if (isNaN(numCount) || numCount <= 0) {
        alert("Por favor, ingresa un número válido.");
        getNumbers(); 
    } else {
        for (let i = 0; i < numCount; i++) {
            let num = prompt(`Ingresa el número ${i + 1}:`);
            if (!isNaN(num)) {
                numbers.push(parseInt(num));
            } else {
                alert("Por favor, ingresa un número válido.");
                i--;
            }
        }
        displaySortedNumbers(...numbers); // Llamar a la función con los números ingresados
    }
}

// Iniciar la solicitud de números
getNumbers();

/*Explicación del Código
readline: Se utiliza para solicitar datos al usuario desde la consola.

displaySortedNumbers(...numbers): Esta función recibe un número variable de argumentos (gracias a rest), ordena los números de mayor a menor y los muestra en una tabla utilizando console.table().

getNumbers(): Esta función gestiona la entrada del usuario. Pide primero cuántos números desea ingresar, y luego solicita cada número uno por uno. Si se introduce un valor no válido, vuelve a pedir el número correspondiente.
Al final de la entrada de números, se llama a displaySortedNumbers(...) para mostrar los números ordenados.*/