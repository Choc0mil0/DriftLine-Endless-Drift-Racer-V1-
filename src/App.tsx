import { useState } from 'react'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import GameOverPage from './pages/GameOverPage'
import './App.css'

type PageState = 'home' | 'game' | 'gameOver'

interface GameResult {
  score: number
  distance: number
  coins: number
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home')
  const [gameResult, setGameResult] = useState<GameResult>({
    score: 0,
    distance: 0,
    coins: 0,
  })

  const handleStartGame = () => {
    setCurrentPage('game')
  }

  const handleGameOver = (result: GameResult) => {
    setGameResult(result)
    setCurrentPage('gameOver')
  }

  const handleRestartGame = () => {
    setCurrentPage('game')
  }

  const handleReturnHome = () => {
    setCurrentPage('home')
  }

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage onStartGame={handleStartGame} />
      )}
      {currentPage === 'game' && (
        <GamePage onGameOver={handleGameOver} />
      )}
      {currentPage === 'gameOver' && (
        <GameOverPage
          result={gameResult}
          onRestart={handleRestartGame}
          onHome={handleReturnHome}
        />
      )}
    </div>
  )
}

export default App
