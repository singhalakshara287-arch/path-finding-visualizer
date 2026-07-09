// A* algorithm
import { heuristic } from '../utils/heuristics'

export function astar(grid, startPoint, endPoint) {
  const rows = grid.length
  const cols = grid[0].length
  const openSet = [[heuristic(startPoint, endPoint), 0, startPoint.row, startPoint.col]]
  const visited = new Set()
  const gScore = {}
  const parent = {}
  const visitedOrder = []

  const key = (row, col) => `${row},${col}`
  const startKey = key(startPoint.row, startPoint.col)
  const endKey = key(endPoint.row, endPoint.col)

  gScore[startKey] = 0

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  while (openSet.length > 0) {
    openSet.sort((a, b) => a[0] - b[0])
    const [f, g, row, col] = openSet.shift()
    const currentKey = key(row, col)

    if (visited.has(currentKey)) continue
    visited.add(currentKey)
    visitedOrder.push({ row, col })

    if (currentKey === endKey) {
      return { visitedOrder, path: reconstructPath(parent, endPoint, startPoint) }
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc
      const newKey = key(newRow, newCol)

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] !== 'wall' &&
        !visited.has(newKey)
      ) {
        const newG = g + 1
        const h = heuristic({ row: newRow, col: newCol }, endPoint)
        const newF = newG + h

        if (!gScore[newKey] || newG < gScore[newKey]) {
          gScore[newKey] = newG
          parent[newKey] = currentKey
          openSet.push([newF, newG, newRow, newCol])
        }
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
