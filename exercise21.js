/**
 * @param {Object | null} tree - El árbol binario
 * @returns {number} - La altura del árbol
 */
function treeHeight(tree) {
  if (!tree) return 0; // Un árbol vacío tiene altura 0
  
  // Recursividad: tomamos el máximo entre la altura del lado izquierdo y derecho
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}
