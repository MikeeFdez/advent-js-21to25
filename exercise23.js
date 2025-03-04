/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
  function findMissingNumbers(nums) {
  // Code here
  const updatedArray = [...new Set(nums)].sort((a,b) => a-b);
  let result = [];
  let n = updatedArray[updatedArray.length - 1]

  for (let i = 1; i <= n; i++) {
    if (updatedArray.find(number => number === i) === undefined) {
      result.push(i)
    }
  }
  return result
}
