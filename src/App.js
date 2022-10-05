// DEPENDENCIES
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// STYLING
import './App.css';
import './Styles.css';

// COMPONENTS
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./pages/Main.js"
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';

// HOOKS
import GameHooks from './hooks/GameHooks';

function App() {
  
  const {compChoose, playerChoose, turn, turnCounter} = GameHooks()

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/easy"
          element={<Easy 
          compChoose={compChoose}
          playerChoose={playerChoose}
          turn={turn}
          turnCounter={turnCounter}
          />}
        />
        <Route 
          path="/medium"
          element={<Medium 
          compChoose={compChoose}
          playerChoose={playerChoose}
          turn={turn}
          turnCounter={turnCounter}
          />}
        />
        <Route 
          path="/hard"
          element={<Hard 
          compChoose={compChoose}
          playerChoose={playerChoose}
          turn={turn}
          turnCounter={turnCounter}
          />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
