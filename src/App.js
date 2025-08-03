import React, { useState } from 'react';
import './App.css';
import MinesGame from './components/MinesGame';

const App = () => {
  const [activeView, setActiveView] = useState('home');
  const [dinero, setDinero] = useState(1000); // Monedas iniciales

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">👑</div>
        <button className="bonus-button">Gana ahora $10 gratis</button>

        <nav className="menu">
          <ul>
            <li onClick={() => setActiveView('crash')}>Crash</li>
            <li onClick={() => setActiveView('double')}>Double</li>
            <li onClick={() => setActiveView('mines')}>Minas</li>
            <li onClick={() => setActiveView('dice')}>Dados</li>
            <li onClick={() => setActiveView('tower')}>Torre</li>
          </ul>
        </nav>

        <div className="promo-card">
          <p>Regístrate y gana ahora</p>
          <button>Registrarse</button>
        </div>

        <div className="footer-toggle">
          <label>
            <input type="checkbox" /> Tema oscuro
          </label>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <input className="search" placeholder="Buscar juego..." />
          <div className="lang-select">ES ▼</div>
          <div className="auth-buttons">
            <p>💰 Dinero disponible: <strong>{dinero}</strong></p>
            <button className="signup">Franco</button>
          </div>
        </header>

        {/* Renderizado condicional */}
        {activeView === 'mines' ? (
          <MinesGame
            dinero={dinero}
            setDinero={setDinero}
          />
        ) : (
          <>
            <section className="banners">
              <div className="banner">[banner]</div>
              <div className="banner">JACKPOT</div>
              <div className="banner">[banner]</div>
            </section>

            <section className="tabs">
              <button className="active">Todos los Juegos</button>
              <button>Más jugados</button>
              <button>Nuevos</button>
            </section>

            <section className="category">
              <h3>Originales Gnobet</h3>
              <div className="game-grid">
                <div className="game-card">MINAS</div>
                <div className="game-card">CRASH</div>
                <div className="game-card">DOUBLE</div>
              </div>
            </section>

            <section className="category">
              <h3>Tragamonedas</h3>
              <div className="game-grid">
                <div className="game-card">MAJESTIC SAFARI</div>
                <div className="game-card">FRUIT BLAZE</div>
                <div className="game-card">16 COINS</div>
                <div className="game-card">COINS ALKEMOR</div>
                <div className="game-card">GREEK LEGENDS</div>
                <div className="game-card">SLOTS</div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
