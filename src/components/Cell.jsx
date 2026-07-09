import React from 'react'
import '../styles/Cell.css'

const Cell = ({ type, onClick, onMouseEnter }) => {
  const getCellClassName = () => {
    const baseClass = 'cell'
    if (type === 'start') return `${baseClass} start`
    if (type === 'end') return `${baseClass} end`
    if (type === 'wall') return `${baseClass} wall`
    if (type === 'visited') return `${baseClass} visited`
    if (type === 'path') return `${baseClass} path`
    return baseClass
  }

  return (
    <div
      className={getCellClassName()}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseDown={onMouseEnter}
    />
  )
}

export default Cell
