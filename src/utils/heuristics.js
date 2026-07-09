// Heuristic functions

// Manhattan distance heuristic
export function heuristic(point, endPoint) {
  return Math.abs(point.row - endPoint.row) + Math.abs(point.col - endPoint.col)
}

// Euclidean distance heuristic
export function euclideanHeuristic(point, endPoint) {
  return Math.sqrt(
    Math.pow(point.row - endPoint.row, 2) + Math.pow(point.col - endPoint.col, 2)
  )
}

// Chebyshev distance heuristic
export function chebyshevHeuristic(point, endPoint) {
  return Math.max(
    Math.abs(point.row - endPoint.row),
    Math.abs(point.col - endPoint.col)
  )
}
