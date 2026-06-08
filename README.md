# DriftLine — Endless Drift Racer V1

> A modern, mobile-friendly endless drifting game built with React, TypeScript, Vite, and HTML5 Canvas.

## 🎮 Gameplay

- **Auto-Forward Movement**: Your car drives automatically down an endless road
- **Tap & Hold to Drift**: Touch anywhere on the screen to initiate a drift around corners
- **Release to Grip**: Release to regain traction and drive straight
- **Collect Coins**: Grab coins for bonus points
- **Beat Your High Score**: Survive as long as possible and earn the highest score

## ✨ Features

### Core Mechanics
- ✅ Endless procedurally-generated road
- ✅ Simple, intuitive drift mechanic
- ✅ Collision detection system
- ✅ Score & distance tracking
- ✅ Coin collection mechanics
- ✅ High-score persistence

### Visual Design
- ✅ Premium minimalist aesthetic
- ✅ Dark background with neon highlights
- ✅ Glowing road edges
- ✅ Drift particle effects
- ✅ Smooth animations
- ✅ Responsive mobile-friendly UI

### User Interface
- ✅ Home screen with high score display
- ✅ Sound toggle
- ✅ Pause functionality during gameplay
- ✅ Game over screen with stats
- ✅ Responsive design for all devices

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Strong typing and type safety
- **Vite 5** - Lightning-fast build tool
- **HTML5 Canvas** - High-performance rendering
- **Local Storage** - Data persistence

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/Choc0mil0/DriftLine-Endless-Drift-Racer-V1-.git
cd DriftLine-Endless-Drift-Racer-V1-

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The game will open automatically at `http://localhost:3000`

## 🏗 Project Architecture

```
src/
├── components/       # Reusable React components
│   ├── Button.tsx    # Styled button component
│   └── Canvas.tsx    # Game canvas renderer
├── game/             # Core game engine & systems
│   ├── Car.ts        # Car physics & behavior
│   ├── RoadGenerator.ts    # Procedural road generation
│   ├── CollisionDetector.ts # Collision system
│   ├── ParticleSystem.ts    # Particle effects
│   ├── Renderer.ts   # Canvas rendering
│   └── GameEngine.ts # Main game orchestrator
├── hooks/            # Custom React hooks
│   ├── useGame.ts    # Game loop & state management
│   └── useLocalStorage.ts   # Local storage management
├── pages/            # Page components
│   ├── HomePage.tsx  # Main menu
│   ├── GamePage.tsx  # Active game
│   └── GameOverPage.tsx     # End screen
├── types/            # TypeScript definitions
│   └── game.ts       # Game type definitions
├── utils/            # Utility functions
│   └── math.ts       # Math helpers
├── assets/           # Images, sounds, etc (future)
├── App.tsx           # Root component
├── index.css         # Global styles
└── main.tsx          # Application entry point
```

## 🎯 TypeScript Best Practices

The project demonstrates:

- **Strong Typing**: All functions and variables have explicit type annotations
- **Interfaces**: Comprehensive interfaces for game objects (see `src/types/game.ts`)
- **Enums**: Game states and input actions as enums for type safety
- **Utility Types**: Extensive use of TypeScript utility types
- **Module Exports**: Proper module organization and exports
- **Strict Mode**: Enabled in `tsconfig.json` for maximum type safety

## ⚡ Performance Optimizations

- **RequestAnimationFrame Loop**: 60 FPS rendering loop in `useGame.ts`
- **Delta Time Updates**: Frame-rate independent physics calculations
- **Object Pooling**: Particle system reuses particle objects
- **Efficient Collision Checks**: Spatial partitioning and early exit strategies
- **Canvas Rendering**: Direct 2D rendering instead of DOM for better performance

## 💾 Data Persistence

The game stores the following using Local Storage:

- `driftline_highscore` - Best score achieved
- `driftline_sound` - Sound setting preference

Access these in the home page or through the `useLocalStorage` hook.

## 🎮 Controls

### Keyboard (Desktop)
- **Left Arrow** - Steer left
- **Right Arrow** - Steer right
- **Spacebar** - Drift/powerslide

### Touch (Mobile)
- **Tap & Hold** - Drift
- **Release** - Grip & drive straight

## 🚀 Future Roadmap

- [ ] Sound effects & background music
- [ ] Advanced drift combos & multipliers
- [ ] Dynamic road difficulty scaling
- [ ] Leaderboard system
- [ ] Multiple car skins
- [ ] Power-ups and special effects
- [ ] Progressive difficulty levels
- [ ] Mobile app deployment

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Choc0mil0** - [GitHub](https://github.com/Choc0mil0)

---

**Built with ❤️ for endless drifting fun**
