// Dijkstra's algorithm
import { heuristic } from '../utils/heuristics'

export function dijkstra(grid, startPoint, endPoint) {
  const rows = grid.length
  const cols = grid[0].length
  const distances = {}
  const visited = new Set()
  const parent = {}
  const visitedOrder = []
  const pq = [[0, startPoint.row, startPoint.col]]

  const key = (row, col) => `${row},${col}`
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  distances[key(startPoint.row, startPoint.col)] = 0

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0])
    const [dist, row, col] = pq.shift()
    const currentKey = key(row, col)

    if (visited.has(currentKey)) continue
    visited.add(currentKey)
    visitedOrder.push({ row, col })

    if (row === endPoint.row && col === endPoint.col) {
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
        const newDist = dist + 1

        if (!distances[newKey] || newDist < distances[newKey]) {
          distances[newKey] = newDist
          parent[newKey] = currentKey
          pq.push([newDist, newRow, newCol])
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
