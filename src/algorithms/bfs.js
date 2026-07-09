// Breadth-First Search algorithm
export function bfs(grid, startPoint, endPoint) {
  const rows = grid.length
  const cols = grid[0].length
  const visited = new Set()
  const queue = [[startPoint.row, startPoint.col, null]]
  const parent = {}
  const visitedOrder = []

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  while (queue.length > 0) {
    const [row, col, prev] = queue.shift()
    const key = `${row},${col}`

    if (visited.has(key)) continue
    visited.add(key)
    visitedOrder.push({ row, col })

    if (row === endPoint.row && col === endPoint.col) {
      return { visitedOrder, path: reconstructPath(parent, endPoint, startPoint) }
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc
      const newKey = `${newRow},${newCol}`

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited.has(newKey) &&
        grid[newRow][newCol] !== 'wall'
      ) {
        if (!parent[newKey]) {
          parent[newKey] = key
        }
        queue.push([newRow, newCol, key])
      }
    }
  }

  return { visitedOrder, path: [] }
}

function reconstructPath(parent, endPoint, startPoint) {
  const path = []
  let current = `${endPoint.row},${endPoint.col}`
  const startKey = `${startPoint.row},${startPoint.col}`

  while (current && current !== startKey) {
    const [row, col] = current.split(',').map(Number)
    path.unshift({ row, col })
    current = parent[current]
  }

  return path
}
