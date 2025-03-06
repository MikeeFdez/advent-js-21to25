/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  // Code here
  let result = 0;
  let loopStack = []; // Para almacenar las posiciones de []
  let conditionalStack = []; // Para almacenar la posición de {}
  const instructions = {
    '+': 1,
    '-': -1,
  }
  let jumps = {}; //Para almacenar los pares de índices de saltos.


  // Dado que > no me aporta nada, lo podemos quitar directamente de 
  const arr = code.split("").filter(value => value !== '>')

  // Ahora vamos completando el objeto jumps. Además comprobamos que el orden y la cantidad de [] y {} es correcta.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '[') {
      loopStack.push(i);
    } else if (arr[i] === ']') {
      if (loopStack.length === 0) throw new Error("Bucle desbalanceado");
      let openIndex = loopStack.pop();
      jumps[openIndex] = i;
      jumps[i] = openIndex;
    } else if (arr[i] === '{') {
      conditionalStack.push(i);
    } else if (arr[i] === '}') {
      if (conditionalStack.length === 0) throw new Error("Condicional desbalanceado");
      let openIndex = conditionalStack.pop();
      jumps[openIndex] = i;
      jumps[i] = openIndex;
    }
  }

  // Comprobamos que los arrays son pares y que no hay corchetes ni llaves sueltas:
  if (loopStack.length > 0 || conditionalStack.length > 0) {
    result = 0;
    throw new Error("Paréntesis desbalanceados");
  }

  //Si está todo correcto, podemos recorrer el bucle y obtener el resultado. 
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === '[') {
      if (result === 0) {
        i = jumps[i];
      } 
    } else if(arr[i] === ']') {
        if (result !== 0) {
          i = jumps[i] - 1;
        }
    } else if (arr[i] === '{') {
        if (result === 0) {
          i = jumps[i];
        }
    } else if (arr[i] === '}' ) {
    } else {
        result += instructions[arr[i]];
    }

    i++;
  }

  return result
}
