// Grid utility functions

export function isValid(row, col, rows, cols, grid) {
  return (
    row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== 'wall'
  )
}

export function getNeighbors(row, col, grid) {
  const rows = grid.length
  const cols = grid[0].length
  const neighbors = []
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  for (const [dr, dc] of directions) {
    const newRow = row + dr
    const newCol = col + dc
    if (isValid(newRow, newCol, rows, cols, grid)) {
      neighbors.push([newRow, newCol])
    }
  }

  return neighbors
}

export function clearPath(grid) {
  return grid.map((row) =>
    row.map((cell) => {
      if (cell === 'start' || cell === 'end' || cell === 'wall') {
        return cell
      }
      return null
    })
  )
}
