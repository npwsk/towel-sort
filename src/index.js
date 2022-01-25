// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const row = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
    result.push(...row);
  }
  return result;
};
