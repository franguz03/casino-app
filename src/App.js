import React, { useState } from 'react';
import './App.css';
import MinesGame from './components/MinesGame';
import naveIcon from './assets/images/nave.png';
import doubleIcon from './assets/images/2x.png';
import minaIcon from './assets/images/mina.png';
import dadoIcon from './assets/images/dado.png';
import torreIcon from './assets/images/torre.png';



const App = () => {
  const [activeView, setActiveView] = useState('home');
  const [dinero, setDinero] = useState(1000); // Monedas iniciales

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo"></div>
        <button className="bonus-button">Gana ahora $10 gratis</button>

<nav className="menu">
  <ul className="menu-list">
    <li onClick={() => setActiveView('crash')}>
      <img src={naveIcon} alt="Crash" />
      <span>Crash</span>
    </li>
    <li onClick={() => setActiveView('double')}>
      <img src={doubleIcon} alt="Double" />
      <span>Double</span>
    </li>
    <li onClick={() => setActiveView('mines')}>
      <img src={minaIcon} alt="Minas" />
      <span>Minas</span>
    </li>
    <li onClick={() => setActiveView('dice')}>
      <img src={dadoIcon} alt="Dados" />
      <span>Dados</span>
    </li>
    <li onClick={() => setActiveView('tower')}>
      <img src={torreIcon} alt="Torre" />
      <span>Torre</span>
    </li>
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
  <div className="search-container">
    <button className="eye-button" />
    <input className="search" placeholder="Buscar juego..." />
    
  </div>
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
              <div className="banner"></div>
              <div className="banner jackpot-banner"></div>
              <div className="banner"></div>
            </section>

            <section className="tabs">
              <button className="active">Todos los Juegos</button>
              <button>Más jugados</button>
              <button>Nuevos</button>
            </section>

            <section className="category">
              <h3>Originales Gnobet</h3>
              <div className="game-grid">
                <div className="game-card minas"></div>
<div className="game-card crash"></div>
<div className="game-card double"></div>
              </div>
            </section>

            <section className="category">
              <h3>Tragamonedas</h3>
              <div className="game-grid">
               
<div className="game-card fruit-blaze"></div>
<div className="game-card sixteen-coins"></div>
<div className="game-card coins-alkemor"></div>
<div className="game-card coins-alkemor"></div>

              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
