import React, { useState, useCallback, useEffect } from 'react'
import Grid from './components/Grid'
import Controls from './components/Controls'
import Statistics from './components/Statistics'
import { bfs } from './algorithms/bfs'
import { dfs } from './algorithms/dfs'
import { dijkstra } from './algorithms/dijkstra'
import { astar } from './algorithms/astar'
import './styles/App.css'

const App = () => {
  const ROWS = 25
  const COLS = 50

  const [grid, setGrid] = useState(initializeGrid(ROWS, COLS))
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bfs')
  const [isVisualizing, setIsVisualizing] = useState(false)
  const [speed, setSpeed] = useState(50)
  const [statistics, setStatistics] = useState(null)
  const [startPoint, setStartPoint] = useState(null)
  const [endPoint, setEndPoint] = useState(null)
  const [drawMode, setDrawMode] = useState('wall') // 'wall', 'start', 'end'

  function initializeGrid(rows, cols) {
    return Array(rows)
      .fill()
      .map(() => Array(cols).fill(null))
  }

  const resetGrid = useCallback(() => {
    setGrid(initializeGrid(ROWS, COLS))
    setStatistics(null)
    setStartPoint(null)
    setEndPoint(null)
    setIsVisualizing(false)
  }, [ROWS, COLS])

  const clearPath = useCallback(() => {
    const newGrid = grid.map(row =>
      row.map(cell => {
        if (cell === 'start' || cell === 'end' || cell === 'wall') {
          return cell
        }
        return null
      })
    )
    setGrid(newGrid)
    setStatistics(null)
  }, [grid])

  const handleCellClick = useCallback(
    (row, col) => {
      if (isVisualizing) return

      const newGrid = grid.map(r => [...r])

      if (drawMode === 'start') {
        if (startPoint) {
          newGrid[startPoint.row][startPoint.col] = null
        }
        newGrid[row][col] = 'start'
        setStartPoint({ row, col })
        setDrawMode('wall')
      } else if (drawMode === 'end') {
        if (endPoint) {
          newGrid[endPoint.row][endPoint.col] = null
        }
        newGrid[row][col] = 'end'
        setEndPoint({ row, col })
        setDrawMode('wall')
      } else if (newGrid[row][col] !== 'start' && newGrid[row][col] !== 'end') {
        newGrid[row][col] = newGrid[row][col] === 'wall' ? null : 'wall'
      }

      setGrid(newGrid)
    },
    [grid, isVisualizing, drawMode, startPoint, endPoint]
  )

  const handleMouseEnter = useCallback(
    (row, col) => {
      if (!isVisualizing && drawMode === 'wall') {
        const newGrid = grid.map(r => [...r])
        if (newGrid[row][col] !== 'start' && newGrid[row][col] !== 'end') {
          if (newGrid[row][col] === null) {
            newGrid[row][col] = 'wall'
          }
        }
        setGrid(newGrid)
      }
    },
    [grid, isVisualizing, drawMode]
  )

  const handleVisualize = useCallback(async () => {
    if (!startPoint || !endPoint || isVisualizing) return

    setIsVisualizing(true)
    clearPath()

    // Select algorithm
    let algorithmFunc
    switch (selectedAlgorithm) {
      case 'bfs':
        algorithmFunc = bfs
        break
      case 'dfs':
        algorithmFunc = dfs
        break
      case 'dijkstra':
        algorithmFunc = dijkstra
        break
      case 'astar':
        algorithmFunc = astar
        break
      default:
        algorithmFunc = bfs
    }

    const startTime = Date.now()
    const result = algorithmFunc(grid, startPoint, endPoint)
    const { visitedOrder, path } = result

    // Animate visited nodes
    const delay = 101 - speed
    for (let i = 0; i < visitedOrder.length; i++) {
      await new Promise(resolve => setTimeout(resolve, delay))
      
      setGrid(currentGrid => {
        const newGrid = currentGrid.map(r => [...r])
        const { row, col } = visitedOrder[i]
        if (newGrid[row][col] !== 'start' && newGrid[row][col] !== 'end') {
          newGrid[row][col] = 'visited'
        }
        return newGrid
      })
    }

    // Animate path
    for (let i = 0; i < path.length; i++) {
      await new Promise(resolve => setTimeout(resolve, delay / 2))
      
      setGrid(currentGrid => {
        const newGrid = currentGrid.map(r => [...r])
        const { row, col } = path[i]
        if (newGrid[row][col] !== 'start' && newGrid[row][col] !== 'end') {
          newGrid[row][col] = 'path'
        }
        return newGrid
      })
    }

    const endTime = Date.now()
    setIsVisualizing(false)
    setStatistics({
      algorithm: selectedAlgorithm.toUpperCase(),
      visitedNodes: visitedOrder.length,
      pathLength: path.length,
      timeElapsed: `${endTime - startTime}ms`,
    })
  }, [startPoint, endPoint, isVisualizing, selectedAlgorithm, speed, grid, clearPath])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Path Finding Visualizer</h1>
        <p>Visualize pathfinding algorithms in action</p>
      </header>

      <Controls
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={setSelectedAlgorithm}
        speed={speed}
        onSpeedChange={setSpeed}
        isVisualizing={isVisualizing}
        onVisualize={handleVisualize}
        onClear={clearPath}
        onReset={resetGrid}
        drawMode={drawMode}
        onDrawModeChange={setDrawMode}
      />

      <div className="main-content">
        <Grid
          grid={grid}
          onCellClick={handleCellClick}
          onCellMouseEnter={handleMouseEnter}
        />
        {statistics && <Statistics stats={statistics} />}
      </div>
    </div>
  )
}

export default App
