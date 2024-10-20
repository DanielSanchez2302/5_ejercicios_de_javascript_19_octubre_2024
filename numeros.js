function calcular(numeros) {
    let suma = 0;
    let primos = 0;
    let pares = 0;
    let sumaPrimos = 0;
    let sumaPares = 0;
  
    for (let num of numeros) {
      suma += num;
      if (esPrimo(num)) {
        primos++;
        sumaPrimos += num;
      }
      if (num % 2 === 0) {
        pares++;
        sumaPares += num;
      }
    }
  
    const promedioPrimos = primos > 0 ? sumaPrimos / primos : 0;
    const promedioPares = pares > 0 ? sumaPares / pares : 0;
  
    return {
      suma,
      primos,
      pares,
      promedioPrimos,
      promedioPares
    };
  }
  
  function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Función principal
  function main() {
    const numeros = [];
    let numero;
  
    while (true) {
      numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
      if (numero === 0) break;
      numeros.push(numero);
    }
  
    const resultados = calcular(numeros);
  
    console.log("Suma total:", resultados.suma);
    console.log("Cantidad de números primos:", resultados.primos);
    console.log("Cantidad de números pares:", resultados.pares);
    console.log("Promedio de números primos:", resultados.promedioPrimos);
    console.log("Promedio de números pares:", resultados.promedioPares);
  }
  
  main();