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
    <div className="app" lang="es">
      <aside className="sidebar" role="complementary" aria-label="Menú lateral de navegación">
        <div className="logo" aria-label="Logo del sitio"></div>
        <button className="bonus-button">Gana ahora $10 gratis</button>

        <nav className="menu" aria-label="Navegación principal">
          <ul className="menu-list">
            <li onClick={() => setActiveView('crash')}>
              <img src={naveIcon} alt="Icono del juego Crash" />
              <span>Crash</span>
            </li>
            <li onClick={() => setActiveView('double')}>
              <img src={doubleIcon} alt="Icono del juego Double" />
              <span>Double</span>
            </li>
            <li onClick={() => setActiveView('mines')}>
              <img src={minaIcon} alt="Icono del juego Minas" />
              <span>Minas</span>
            </li>
            <li onClick={() => setActiveView('dice')}>
              <img src={dadoIcon} alt="Icono del juego Dados" />
              <span>Dados</span>
            </li>
            <li onClick={() => setActiveView('tower')}>
              <img src={torreIcon} alt="Icono del juego Torre" />
              <span>Torre</span>
            </li>
          </ul>
        </nav>

        <div className="promo-card" aria-label="Promoción de registro">
          <p>Regístrate y gana ahora</p>
          <button>Registrarse</button>
        </div>

        <div className="footer-toggle">
          <label>
            <input type="checkbox" /> Tema oscuro
          </label>
        </div>
      </aside>

      <main className="main-content" role="main">
        <header className="top-bar">
          <div className="search-container">
            <button className="eye-button" aria-label="Mostrar/Ocultar búsqueda" />
            <input
              className="search"
              placeholder="Buscar juego..."
              aria-label="Buscar juego"
              type="text"
            />
          </div>
          <div className="lang-select" aria-label="Selector de idioma">ES ▼</div>
          <div className="auth-buttons">
            <p>
              💰 Dinero disponible: <strong>{dinero}</strong>
            </p>
            <button className="signup" aria-label="Nombre de usuario">Franco</button>
          </div>
        </header>

        <h1 className="visually-hidden">Juegos de azar en línea</h1>

        {activeView === 'mines' ? (
          <MinesGame dinero={dinero} setDinero={setDinero} />
        ) : (
          <>
            <section className="banners" aria-label="Banners promocionales">
              <div className="banner" aria-label="Banner promocional"></div>
              <div className="banner jackpot-banner" aria-label="Banner Jackpot"></div>
              <div className="banner" aria-label="Banner promocional"></div>
            </section>

            <section className="tabs" aria-label="Filtros de juegos">
              <button className="active">Todos los Juegos</button>
              <button>Más jugados</button>
              <button>Nuevos</button>
            </section>

            <section className="category" aria-labelledby="originales">
              <h3 id="originales">Originales</h3>
              <div className="game-grid">
                <div className="game-card minas" aria-label="Juego Minas"></div>
                <div className="game-card crash" aria-label="Juego Crash"></div>
                <div className="game-card double" aria-label="Juego Double"></div>
              </div>
            </section>

            <section className="category" aria-labelledby="tragamonedas">
              <h3 id="tragamonedas">Tragamonedas</h3>
              <div className="game-grid">
                <div className="game-card fruit-blaze" aria-label="Juego Fruit Blaze"></div>
                <div className="game-card sixteen-coins" aria-label="Juego Sixteen Coins"></div>
                <div className="game-card coins-alkemor" aria-label="Juego Coins Alkemor"></div>
                <div className="game-card coins-alkemor" aria-label="Juego Coins Alkemor"></div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
