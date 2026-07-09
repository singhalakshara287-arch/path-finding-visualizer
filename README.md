# Path Finding Visualizer

An interactive path finding visualizer built with React and JavaScript. Visualize algorithms like BFS, DFS, Dijkstra's, and A* in real-time on a dynamic grid.

## Features

- **Multiple Algorithms**:
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Dijkstra's Algorithm
  - A* (A-Star)
  - Greedy Best-First Search
  - Bidirectional Search

- **Interactive Grid**:
  - Click to set start point (green)
  - Click to set end point (red)
  - Drag to draw obstacles (black)
  - Clear and reset functionality

- **Features**:
  - Speed control for animation
  - Step-by-step execution
  - Path reconstruction and highlighting
  - Statistics (nodes visited, path length, time taken)
  - Maze generation algorithms
  - Responsive design

## Tech Stack

- **Frontend**: React 18 with JavaScript (no Canvas)
- **Styling**: CSS3 with smooth transitions
- **State Management**: React Hooks
- **Build**: Vite for fast development

## Project Structure

```
path-finding-visualizer/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Grid.jsx       # Main grid component
│   │   ├── Controls.jsx   # Algorithm and speed controls
│   │   ├── Statistics.jsx # Display algorithm stats
│   │   └── Cell.jsx       # Individual grid cell
│   ├── algorithms/
│   │   ├── bfs.js         # Breadth-first search
│   │   ├── dfs.js         # Depth-first search
│   │   ├── dijkstra.js    # Dijkstra's algorithm
│   │   ├── astar.js       # A* algorithm
│   │   ├── greedy.js      # Greedy best-first
│   │   └── bidirectional.js # Bidirectional search
│   ├── utils/
│   │   ├── grid.js        # Grid operations
│   │   ├── heuristics.js  # Heuristic functions
│   │   └── maze.js        # Maze generation
│   ├── styles/
│   │   ├── App.css        # Main styles
│   │   ├── Grid.css       # Grid styles
│   │   └── Controls.css   # Control styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # React entry point
├── index.html             # HTML template
├── package.json
├── vite.config.js
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Set Start Point**: Click a cell (turns green)
2. **Set End Point**: Click another cell (turns red)
3. **Draw Obstacles**: Drag across cells to create walls (black)
4. **Select Algorithm**: Choose from dropdown menu
5. **Adjust Speed**: Use the speed slider
6. **Visualize**: Click "Start Pathfinding" to run
7. **View Results**: See the path (blue) and visited nodes (yellow)
8. **Reset**: Clear everything and start over

## Algorithm Details

- **BFS**: Explores all neighbors level by level, guarantees shortest path
- **DFS**: Explores deeply before backtracking, simple but not optimal
- **Dijkstra**: Finds shortest path with weighted edges, slower than A*
- **A***: Heuristic-based search, fastest for most cases
- **Greedy**: Fast but not guaranteed shortest path
- **Bidirectional**: Searches from start and end simultaneously

## License

MIT
