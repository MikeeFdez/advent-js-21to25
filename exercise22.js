/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // Code here
  let results = []; // Aquí guardaremos todas las combinaciones posibles

  function backtrack(start, currentCombination) {
    if (currentCombination.length > 0) {
      results.push([...currentCombination]); // Guardamos la combinación actual
    }

    for (let i = start; i < gifts.length; i++) {
      currentCombination.push(gifts[i]); // Agregamos un juguete
      backtrack(i + 1, currentCombination); // Llamada recursiva con el siguiente índice
      currentCombination.pop(); // Backtracking: eliminamos el último agregado
    }
  }

  backtrack(0, []); // Iniciamos el backtracking
  results.sort((a, b) => a.length - b.length);
  return results;
}
