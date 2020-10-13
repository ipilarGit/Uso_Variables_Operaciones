/* 
1. Realizar diagrama de flujo para las operaciones Suma, Resta, División, Multiplicación y Módulo 
*/
function verImagenFlujo() {
     let diagrama = document.getElementById('diagrama');
     if (diagrama.style.display === 'none') {
          diagrama.style.display = 'block';
     } else {
          diagrama.style.display = 'none';
     }
}

/* 
2.- Calcular Suma, Resta, División, Multiplicación y Módulo de dos numeros ingresados
*/
function calcularOperaciones() {
     // Ingreso de valores por parte del usuario
     const num1 = +prompt('Ingrese un valor numerico ', 'Valor debe ser distinto de 0');
     const num2 = +prompt('Ingrese otor valor numerico', 'Valor debe ser distinto de 0');

     // Se suman ambas variables y el resultado se guarda en suma 
     let suma = num1 + num2;

     // Se restan ambas variables y el resultado se guarda en resta 
     let resta = num1 - num2;

     // Se dividen ambas variables y el resultado se guarda en division
     let division = num1 / num2;

     // Se multiplican ambas variables y el resultado se guarda en multiplica
     let multiplica = num1 * num2;

     // Se calcula el resto de ambos valores y se almacena en resto
     let resto = num1 % num2;

     // Se muestra el resultado en la consola
     console.log('Ejercicio N° 2')
     console.log(`La suma de ${num1} + ${num2} es: ${suma}`);
     console.log(`La resta de ${num1} - ${num2} es: ${resta}`);
     console.log(`La division de ${num1} / ${num2} es: ${division}`);
     console.log(`La multiplicación de ${num1} * ${num2} es: ${multiplica}`);
     console.log(`El resto de ${num1} % ${num2} es: ${resto}`);

     // Se muestra el resultado en el documento HTML
     document.getElementById("parrafo2").innerHTML = `La Suma de ${num1} + ${num2} es: ${suma} <br>`;
     document.getElementById("parrafo2").innerHTML += `La Resta de ${num1} - ${num2} es: ${resta} <br>`;
     document.getElementById("parrafo2").innerHTML += `La division de ${num1} / ${num2} es:  ${division} <br>`;
     document.getElementById("parrafo2").innerHTML += `La multiplicación de ${num1} * ${num2} es:  ${multiplica} <br>`;
     document.getElementById("parrafo2").innerHTML += `El resto de ${num1} % ${num2} es: ${resto}<br>`;
}

/* 
3. Calcular grados Kelvin y Fahrenheit 
*/
function calcularGrados() {
     // Ingreso de valor numerico grados celcius
     const gradosCelcius = +prompt('Ingrese temperatura en °Celsius', 'Valor debe ser un numero');
     // calculo de celcius a grados kelvin
     let gradosKelvin = gradosCelcius + 273.15;
     // calculo de celcius a grados fahrenheit
     let gradosFahrenheit = (gradosCelcius * (9 / 5)) + 32;

     // Se muestra el resultado en la consola de gradosKelvin y gradosFahrenheit
     console.log('Ejercicio N° 3');
     console.log(`La temperatura de ${gradosCelcius} °C a grados Kelvin es: ${gradosKelvin} °K`);
     console.log(`La temperatura en ${gradosCelcius} °C a grados Fahrenheit es: ${gradosFahrenheit} °F`);

     // Se muestra el resultado en HTML de gradosKelvin y gradosFahrenheit
     document.getElementById("parrafo3").innerHTML = `La temperatura de ${gradosCelcius} °C a grados Kelvin es: ${gradosKelvin} °K<br>`;
     document.getElementById("parrafo3").innerHTML += `La temperatura en ${gradosCelcius} °C a grados Fahrenheit es: ${gradosFahrenheit} °F<br>`;
}

/* 
4. Convertir cantidad de dias en años, meses, semanas y días
*/
function convertirDias() {
     // Ingreso de valor numerico correspondiente a dias
     // 373 dias = 1 año, 0 meses , 1 Semanas, 1 dia
     const diasIngresados = +prompt('Ingrese cantidad de días', 'Valor debe ser un número');

     let year = Math.floor(diasIngresados / 365); // 1 año
     console.log('Años ' + year);

     let diasRestantes = diasIngresados - (year * 365); // 
     console.log('dias restantes ' + diasRestantes);

     let meses = Math.floor(diasRestantes / 30); // 0 meses
     console.log('Meses ' + meses);

     diasRestantes = diasRestantes - (meses * 30); // 
     console.log('dias restantes ' + diasRestantes);

     let semanas = Math.floor(diasRestantes / 7); // 1 semanas
     console.log('Semanas ' + semanas);

     let dias = diasRestantes - (semanas * 7) // 1 dias
     console.log('Dias ' + dias);

     // Se muestra el resultado en la consola
     console.log('Ejercicio N° 3');
     console.log(`Los ${diasIngresados} dias equivalen a: ${year} años, ${meses} meses, ${semanas} semanas, ${dias} dias.`);

     // Se muestra el resultado en HTML de años, meses, semanas y dias
     document.getElementById("parrafo4").innerHTML = (`Los ${diasIngresados} días equivalen a: ${year} años, ${meses} meses, ${semanas} semanas, ${dias} días.`);

}

function obtenerSumaPromedio() {

     // Ingreso de 5 valores numericos
     function ingresarValores() {
          const valores = [];
          for (let i = 0; i < 5; i++) {
               const numero = +prompt('Ingrese un Numero', 'Valor debe ser un número');
               valores[i] = numero;
          }
          return valores;
     }

     const numeros = ingresarValores();
     // sumar los valores en el arreglo
     let suma = 0;
     let imprimirHTML = '';
     for (let i = 0; i < 5; i++) {
          suma = suma + numeros[i];
          imprimirHTML = imprimirHTML + ` ${numeros[i]}  `;
     }
     /*      console.log(imprimirHTML); */
     // calculo de promedio de valores
     const promedio = suma / 5;
     // Se muestra el resultado en la consola
     console.log('Ejercicio N° 4');
     console.log(`Los valores ingresados son: ${imprimirHTML}`);
     console.log(`La Suma de todos los números es: ${suma}`);
     console.log(`El promedio de todos los números es: ${promedio}`);

     // se muestra el resultado en el HTML
     document.getElementById("parrafo5").innerHTML = (`
               Los valores ingresados son: ${
                    imprimirHTML
               } <br> `);
     document.getElementById("parrafo5").innerHTML += (`
               La Suma de todos los números es: ${
                    suma
               } <br> `);
     document.getElementById("parrafo5").innerHTML += (`
               El Promedio de todos los números es: ${
                    promedio
               }
               `);

}