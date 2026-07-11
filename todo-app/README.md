# React Todo App 📝

A beautiful, modern, and fully-functional Todo application built with **React and Pure CSS**. Perfect for learning React fundamentals and showcasing in your SDE portfolio.

## Features ✨

- ✅ **Add, Edit, Delete Todos** - Full CRUD operations
- 🔍 **Filter Todos** - View All, Active, or Completed tasks
- 💾 **Persistent Storage** - Data saved in browser's localStorage
- 📊 **Statistics Dashboard** - Track total, completed, active tasks, and progress
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts** - Edit: Enter to save, Escape to cancel
- 🚀 **Smooth Animations** - Delightful user experience
- 🎯 **Pure CSS** - No Tailwind, all custom CSS styling

## Tech Stack

- **React 18** - UI library
- **CSS3** - Custom styling with flexbox, grid, gradients, and animations
- **HTML5** - Semantic markup
- **localStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Usage

### Add a Todo
1. Type your task in the input field
2. Click the "➕ Add" button or press Enter

### Complete a Todo
- Click the checkbox next to a task to mark it as complete
- Strike-through text indicates completed tasks

### Edit a Todo
1. Hover over a task and click the ✏️ button
2. Modify the text
3. Press Enter or click ✓ to save
4. Press Escape or click ✕ to cancel

### Delete a Todo
- Hover over a task and click the 🗑️ button to remove it

### Filter Todos
- Click **All** to see all tasks
- Click **Active** to see incomplete tasks
- Click **Completed** to see finished tasks

### Clear Completed
- Click "🗑️ Clear Completed" to remove all finished tasks at once

## Project Structure

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.js      # Input component for adding todos
│   │   ├── TodoList.js      # Container for all todo items
│   │   ├── TodoItem.js      # Individual todo component
│   │   └── TodoStats.js     # Statistics dashboard
│   ├── styles/
│   │   ├── index.css        # Global styles
│   │   ├── App.css          # Main app container styles
│   │   ├── TodoForm.css     # Form styles
│   │   ├── TodoList.css     # List styles
│   │   ├── TodoItem.css     # Item styles
│   │   └── TodoStats.css    # Stats styles
│   ├── App.js               # Main component (state management)
│   └── index.js             # React entry point
├── .gitignore
├── package.json
└── README.md
```

## Component Overview

### App.js
- Manages global state for todos using `useState`
- Handles localStorage persistence with `useEffect`
- Implements core todo operations (add, edit, delete, toggle)
- Manages filter state
- Statistics calculations

### TodoForm.js
- Input component for creating new todos
- Form submission handling
- Input validation

### TodoList.js
- Renders list of filtered todos
- Maps over todo array
- Passes callbacks to TodoItem

### TodoItem.js
- Individual todo component
- Handles edit mode with inline editing
- Delete and toggle functionality
- Keyboard event handling (Enter/Escape)

### TodoStats.js
- Displays statistics cards
- Shows total, completed, active counts
- Calculates and displays progress percentage

## Key React Concepts Used

1. **Hooks**
   - `useState` - State management
   - `useEffect` - Side effects (localStorage sync)

2. **Component Composition**
   - Parent component (App) with child components
   - Proper prop drilling

3. **Event Handling**
   - Click events
   - Form submission
   - Keyboard events

4. **Array Methods**
   - `map()` - Rendering lists
   - `filter()` - Filtering todos

5. **Conditional Rendering**
   - Ternary operators
   - Empty state handling

6. **localStorage API**
   - Persisting data
   - Retrieving data on mount

## CSS Features

- **Flexbox** - Layout and alignment
- **CSS Grid** - Responsive stats layout
- **Gradients** - Beautiful color transitions
- **Animations** - Smooth transitions and keyframe animations
- **Media Queries** - Responsive design for mobile
- **CSS Variables** - Reusable colors and values
- **Box Shadow** - Depth and elevation
- **Transform** - Hover effects
- **Pseudo-classes** - :hover, :focus, :active states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The app is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Runs test suite (if added)

## Performance Optimization

- Efficient re-rendering with proper state management
- CSS animations over JavaScript
- Optimized event handlers
- Minimal re-renders with proper component structure

## Accessibility

- Semantic HTML
- Proper label associations
- Keyboard navigation support
- Clear focus states
- Color contrast compliance

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the build folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://yourusername.github.io/react-todo-app"
# "deploy": "npm run build && gh-pages -d build"
npm run deploy
```

## Future Enhancements 🚀

- [ ] Add categories/tags for todos
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Recurring todos
- [ ] Export todos to JSON/CSV
- [ ] Backend integration for cloud sync
- [ ] Collaborative todos (multi-user)
- [ ] Mobile app version

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -am 'Add feature'`)
5. Push to branch (`git push origin feature/improvement`)
6. Open a Pull Request

## Author

Created as a learning project for React and SDE interview preparation.

---

**Happy coding! 🚀**

Made with ❤️ for SDE interviews
