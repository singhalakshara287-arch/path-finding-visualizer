# 😂 Random Joke Generator

A fun and interactive React application that fetches random jokes from external APIs. Perfect for learning React API integration and showcasing in your SDE portfolio!

## Features ✨

- 🎭 **Multiple Joke Sources** - Different joke categories (General, Knock-Knock, Programming)
- 💳 **Beautiful Flip Card UI** - Interactive 3D flip animation
- 📋 **Copy Joke** - Copy jokes to clipboard with one click
- 📤 **Share Joke** - Share jokes via native share API
- 📚 **Joke History** - Keep track of last 20 jokes fetched
- 💾 **Persistent Storage** - History saved in localStorage
- ⚡ **Loading States** - Beautiful loading spinner during API calls
- 🎨 **Pure CSS Design** - No Tailwind, all custom styling
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🔄 **Error Handling** - Graceful error messages

## Tech Stack

- **React 18** - UI library
- **Fetch API** - Making HTTP requests
- **CSS3** - Custom styling with animations
- **localStorage** - Client-side data persistence

## Supported APIs

1. **Official Joke API** - https://official-joke-api.appspot.com/
   - General jokes
   - Knock-knock jokes
   - Programming jokes

2. **Joke API** - https://v2.jokeapi.dev/
   - General jokes

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd joke-generator
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

### Get a Joke
1. Select a joke type from the dropdown (Any, General, Knock-Knock, Programming)
2. Click "🎉 Get a Joke!" button
3. Wait for the joke to load
4. Click the card to flip it and see the full joke

### Copy a Joke
- Click the "📋 Copy" button to copy the joke to your clipboard

### Share a Joke
- Click the "📤 Share" button to share via native share API or copy to clipboard

### View History
- Click "📚 History" button to see your last 20 jokes
- Delete individual jokes or clear all history

## Project Structure

```
joke-generator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── JokeCard.js           # Main joke display card
│   │   ├── JokeHistory.js        # History modal
│   │   ├── LoadingSpinner.js     # Loading indicator
│   │   └── ErrorMessage.js       # Error display
│   ├── styles/
│   │   ├── index.css             # Global styles
│   │   ├── App.css               # Main app styles
│   │   ├── JokeCard.css          # Joke card flip animation
│   │   ├── JokeHistory.css       # History modal styles
│   │   ├── LoadingSpinner.css    # Spinner styles
│   │   └── ErrorMessage.css      # Error message styles
│   ├── App.js                    # Main component
│   └── index.js                  # React entry point
├── .gitignore
├── package.json
└── README.md
```

## Component Overview

### App.js (Main Component)
- State management for jokes, loading, error, history
- API integration and fetching logic
- Filter selection and joke type management
- LocalStorage integration for history persistence
- Copy, share, and delete functionality

### JokeCard.js
- 3D flip card animation
- Display joke content
- Action buttons (Copy, Share, Next)
- Interactivity with click to flip

### JokeHistory.js
- Modal overlay for displaying joke history
- Delete individual jokes
- Clear all history
- Responsive modal design

### LoadingSpinner.js
- Animated loading indicator
- Display during API calls
- Smooth fade-in animation

### ErrorMessage.js
- Error state display
- Shake animation on error
- Helpful error messages

## Key React Concepts Used

1. **Hooks**
   - `useState` - State management
   - `useEffect` - Side effects and localStorage sync

2. **API Integration**
   - Fetch API for HTTP requests
   - Error handling
   - Loading states

3. **Event Handling**
   - Click handlers
   - Select dropdowns
   - Form interactions

4. **Component Composition**
   - Parent-child components
   - Prop passing
   - Callback functions

5. **Conditional Rendering**
   - Show/hide based on state
   - Loading/error/success states

6. **localStorage**
   - Persist data
   - Retrieve on mount
   - Sync with state changes

## CSS Features Used

- **3D Transforms** - Flip card animation (transform-style: preserve-3d)
- **CSS Animation** - Bounce, spin, fade-in effects
- **Flexbox** - Layout and alignment
- **Grid** - Responsive button layout
- **Gradients** - Beautiful color transitions
- **Box Shadow** - Depth and elevation
- **Media Queries** - Responsive design
- **Transitions** - Smooth state changes
- **Pseudo-classes** - :hover, :focus, :active states

## API Documentation

### Official Joke API

**Random Joke:**
```
GET https://official-joke-api.appspot.com/random_joke
```

**Knock-Knock Joke:**
```
GET https://official-joke-api.appspot.com/jokes/knock-knock/random
```

**Programming Joke:**
```
GET https://official-joke-api.appspot.com/jokes/programming/random
```

### Joke API

**General Joke:**
```
GET https://v2.jokeapi.dev/joke/Any?format=txt
```

## Error Handling

- Network error handling
- Invalid API responses
- User-friendly error messages
- Graceful fallbacks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design Breakpoints

- Desktop: 600px+
- Tablet: 600px - 1200px
- Mobile: < 600px

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Runs test suite (if added).

## Performance Optimization

- Minimal re-renders
- Efficient state management
- CSS animations (not JS)
- Lazy loading support
- Optimized API calls

## Accessibility

- Semantic HTML
- Proper button labels
- Keyboard navigation support
- Clear focus states
- Color contrast compliance
- Screen reader friendly

## Future Enhancements 🚀

- [ ] Filter jokes by category
- [ ] Dark mode toggle
- [ ] Favorite jokes collection
- [ ] Custom joke input
- [ ] Joke rating system
- [ ] Multiple joke APIs
- [ ] Export history as JSON
- [ ] Share to social media
- [ ] Animated character reactions
- [ ] Joke search functionality
- [ ] Daily joke reminder
- [ ] Offline mode

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop build folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Push to gh-pages branch
```

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your branch
5. Open a pull request

## Author

Created for SDE interview preparation and portfolio showcase.

---

**Happy coding! 😂🚀**

Made with ❤️ for developers
