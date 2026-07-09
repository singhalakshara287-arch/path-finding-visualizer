import React from 'react'
import Cell from './Cell'
import '../styles/Grid.css'

const Grid = ({ grid, onCellClick, onCellMouseEnter }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              type={cell}
              onClick={() => onCellClick(rowIndex, colIndex)}
              onMouseEnter={() => onCellMouseEnter(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
