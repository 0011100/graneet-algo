// Idee
//  1 - Trouver tous les chemins possibles
//  2 - Associer chaque chemin à son équivalent en nombre de brains
//  3 - Retourner le chemin avec le plus de grain

// 1
const findPaths = (matrix, _i = 0, _j = 0, _cursor = 0, _currentPath = [], _paths = []) => {
  const m = matrix.length
  const n = matrix[0].length
  if (_i == m - 1) {
    // We have reached the bottom of the
    // matrix, path can only move right
    let j_tmp = _j
    // Move j till right hand side is reached
    while (j_tmp < n) {
      // Todo: Add {_i, _j} to current path
      _currentPath[_cursor + j_tmp - _j] = { i: _i, j: j_tmp }
      j_tmp += 1
    }
    // We have reached bottom right corner
    // add this path to our paths
    _paths.push([..._currentPath])
  } else if (_j == n - 1) {
    // We have reached the right-hand side
    // of the matrix, path can only move down
    let i_tmp = _i
    // Move i till bottom is reached
    while (i_tmp < m) {
      // Todo: Add {_i, _j} to current path
      _currentPath[_cursor + i_tmp - _i] = { i: i_tmp, j: _j }
      i_tmp += 1
    }
    // We have reached bottom right corner
    // add this path to our paths
    _paths.push([..._currentPath])
  } else {
    _currentPath[_cursor] = { i: _i, j: _j }
    // Continue exploring path down ...
    findPaths(matrix, _i + 1, _j, _cursor + 1, _currentPath, _paths)
    // ... and right
    findPaths(matrix, _i, _j + 1, _cursor + 1, _currentPath, _paths)
  }
  return _paths
}

// 2 et 3
const findPathWithMostSeeds = (matrix) => {
  return findPaths(matrix).reduce((memory, path) => {
    const sum = memory.path.reduce((sum, { i, j }) => sum + matrix[i][j], 0)
    if (sum <= memory.maxSum) {
      return memory
    }
    return {
      path,
      maxSum: sum
    }
  }, {
    path: [],
    maxSum: -1
  })
}

console.log(findPathWithMostSeeds([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]))

console.log(findPathWithMostSeeds([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]))
