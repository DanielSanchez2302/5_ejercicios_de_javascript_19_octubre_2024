// Función para validar el tipo de tarjeta de crédito
function validarTarjeta(numeroTarjeta) {
    // Convertir el número a una cadena para facilitar la manipulación
    numeroTarjeta = numeroTarjeta.toString();
  
    // Validar si el número es numérico y positivo
    if (isNaN(numeroTarjeta) || numeroTarjeta <= 0) {
      return "Por favor, ingrese un número de tarjeta válido.";
    }
  
    // Validar la longitud del número
    if (numeroTarjeta.length > 16) {
      return "El número de tarjeta no puede tener más de 16 dígitos.";
    }
  
    // Validar el tipo de tarjeta
    switch (true) {
      case /^3[47]/.test(numeroTarjeta):
        return "American Express";
      case /^(300|301|302|303|304|305|36|38)/.test(numeroTarjeta):
        return "Diners Club";
      case /^6011/.test(numeroTarjeta):
        return "Discover";
      case /^5[1-5]/.test(numeroTarjeta):
        return "Mastercard";
      case /^4/.test(numeroTarjeta):
        return "Visa";
      default:
        return "Tipo de tarjeta no válido";
    }
  }
  
  // Solicitar el número de tarjeta al usuario
  let numero = prompt("Ingrese el número de su tarjeta de crédito:");
  
  // Llamar a la función de validación y mostrar el resultado
  const resultado = validarTarjeta(numero);
  alert(resultado);

  /*Explicación del código:

Función validarTarjeta:

Conversión a cadena: Se convierte el número de tarjeta a una cadena para poder utilizar métodos de cadenas como substring y expresiones regulares.
Validación numérica y positiva: Se verifica si el número es un número y si es mayor que cero.
Validación de longitud: Se asegura que el número no tenga más de 16 dígitos.
Validación del tipo de tarjeta: Se utiliza un switch con expresiones regulares para comparar los primeros dígitos del número con los patrones de cada tipo de tarjeta.
Solicitud de entrada y visualización del resultado:

Se utiliza prompt para solicitar el número de tarjeta al usuario.
Se llama a la función validarTarjeta y se muestra el resultado utilizando alert.
Ventajas de esta versión:

Simplicidad: No se utilizan módulos, lo que hace el código más fácil de entender para aquellos que están comenzando con JavaScript.
Directo: La lógica de validación está contenida en una sola función.
Eficiente: Las expresiones regulares proporcionan una forma rápida y concisa de validar los patrones de los números de tarjeta.
Consideraciones:

Interfaz de usuario: Para una mejor experiencia de usuario, podrías utilizar un formulario HTML en lugar de prompt y alert.
Algoritmo de Luhn: Para una validación más completa, podrías implementar el algoritmo de Luhn.
Manejo de errores: Puedes agregar más validaciones para manejar casos como números de tarjeta vacíos o con caracteres especiales.
Ejecutando el código:

Crear un archivo HTML: Guarda este código en un archivo HTML (por ejemplo, validar_tarjeta.html).
Abrir el archivo en un navegador web: El código se ejecutará y te pedirá que ingreses el número de tarjeta.
Personalización:

Puedes personalizar este código para:

Agregar más tipos de tarjetas.
Mostrar mensajes de error más específicos.
Integrarlo en un formulario web.
Implementar el algoritmo de Luhn para una mayor seguridad.*/