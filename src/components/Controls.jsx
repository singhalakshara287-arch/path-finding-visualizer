import React from 'react'
import '../styles/Controls.css'

const Controls = ({
  selectedAlgorithm,
  onAlgorithmChange,
  speed,
  onSpeedChange,
  isVisualizing,
  onVisualize,
  onClear,
  onReset,
  drawMode,
  onDrawModeChange,
}) => {
  const algorithms = [
    { id: 'bfs', name: 'Breadth-First Search (BFS)' },
    { id: 'dfs', name: 'Depth-First Search (DFS)' },
    { id: 'dijkstra', name: "Dijkstra's Algorithm" },
    { id: 'astar', name: 'A* (A-Star)' },
  ]

  return (
    <div className="controls-panel">
      <div className="control-group">
        <label htmlFor="algorithm-select">Algorithm:</label>
        <select
          id="algorithm-select"
          value={selectedAlgorithm}
          onChange={(e) => onAlgorithmChange(e.target.value)}
          disabled={isVisualizing}
        >
          {algorithms.map((algo) => (
            <option key={algo.id} value={algo.id}>
              {algo.name}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="speed-slider">Speed: {speed}%</label>
        <input
          id="speed-slider"
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={(e) => onSpeedChange(parseInt(e.target.value))}
          disabled={isVisualizing}
        />
      </div>

      <div className="control-group">
        <label>Draw Mode:</label>
        <div className="button-group">
          <button
            onClick={() => onDrawModeChange('start')}
            className={drawMode === 'start' ? 'active' : ''}
            disabled={isVisualizing}
          >
            Start
          </button>
          <button
            onClick={() => onDrawModeChange('end')}
            className={drawMode === 'end' ? 'active' : ''}
            disabled={isVisualizing}
          >
            End
          </button>
          <button
            onClick={() => onDrawModeChange('wall')}
            className={drawMode === 'wall' ? 'active' : ''}
            disabled={isVisualizing}
          >
            Walls
          </button>
        </div>
      </div>

      <div className="control-group">
        <button
          className="btn btn-primary"
          onClick={onVisualize}
          disabled={isVisualizing}
        >
          {isVisualizing ? 'Visualizing...' : 'Start Pathfinding'}
        </button>
        <button className="btn btn-secondary" onClick={onClear} disabled={isVisualizing}>
          Clear Path
        </button>
        <button className="btn btn-secondary" onClick={onReset} disabled={isVisualizing}>
          Reset Grid
        </button>
      </div>
    </div>
  )
}

export default Controls
