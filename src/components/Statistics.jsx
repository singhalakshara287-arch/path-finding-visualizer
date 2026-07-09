import React from 'react'
import '../styles/Statistics.css'

const Statistics = ({ stats }) => {
  return (
    <div className="statistics-panel">
      <h3>Algorithm Statistics</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <label>Algorithm:</label>
          <span>{stats.algorithm}</span>
        </div>
        <div className="stat-item">
          <label>Nodes Visited:</label>
          <span>{stats.visitedNodes}</span>
        </div>
        <div className="stat-item">
          <label>Path Length:</label>
          <span>{stats.pathLength}</span>
        </div>
        <div className="stat-item">
          <label>Time Elapsed:</label>
          <span>{stats.timeElapsed}</span>
        </div>
      </div>
    </div>
  )
}

export default Statistics
