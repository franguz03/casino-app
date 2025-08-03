// src/components/MinesGame.jsx
import React, { useState } from 'react';
import './MinesGame.css';

const TAMANO_GRILLA = 5;
const CANTIDAD_MINAS = 3;

const generarGrilla = () => {
  const totalCeldas = TAMANO_GRILLA * TAMANO_GRILLA;
  const minas = new Set();
  while (minas.size < CANTIDAD_MINAS) {
    const idx = Math.floor(Math.random() * totalCeldas);
    minas.add(idx);
  }

  return Array.from({ length: totalCeldas }, (_, i) => ({
    mina: minas.has(i),
    revelado: false,
  }));
};

const MinesGame = ({ dinero, setDinero }) => {
  const [grilla, setGrilla] = useState([]);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [ganaste, setGanaste] = useState(false);
  const [jugando, setJugando] = useState(false);
  const [apuesta, setApuesta] = useState('');
  const [mensaje, setMensaje] = useState('');

  const iniciarJuego = () => {
    const valorApuesta = parseInt(apuesta);
    if (isNaN(valorApuesta) || valorApuesta <= 0) {
      setMensaje("⚠️ Ingresa una apuesta válida.");
      return;
    }
    if (dinero < valorApuesta) {
      setMensaje("❌ No tienes suficiente dinero.");
      return;
    }

    setDinero(dinero - valorApuesta);
    setGrilla(generarGrilla());
    setJuegoTerminado(false);
    setGanaste(false);
    setJugando(true);
    setMensaje('');
  };

  const manejarClic = (index) => {
    if (!jugando || juegoTerminado || grilla[index].revelado) return;

    const nuevaGrilla = [...grilla];
    nuevaGrilla[index].revelado = true;

    if (nuevaGrilla[index].mina) {
      setJuegoTerminado(true);
      setGanaste(false);
      setJugando(false);
    } else {
      const reveladasSeguras = nuevaGrilla.filter(c => c.revelado && !c.mina).length;
      const totalSeguras = grilla.length - CANTIDAD_MINAS;

      if (reveladasSeguras === totalSeguras) {
        setJuegoTerminado(true);
        setGanaste(true);
        setDinero(prev => prev + parseInt(apuesta) * 2);
        setJugando(false);
      }
    }

    setGrilla(nuevaGrilla);
  };

  return (
    <div className="mines-container">
      <h2>💣 Juego de Minas</h2>
      <p>💰 Monedas disponibles: <strong>{dinero}</strong></p>

      {!jugando && (
        <div className="apostar">
          <label>
            ¿Cuánto quieres apostar?
            <input
              type="number"
              value={apuesta}
              onChange={(e) => setApuesta(e.target.value)}
              min="1"
            />
          </label>
          <button onClick={iniciarJuego}>Iniciar partida</button>
          {mensaje && <p className="mensaje">{mensaje}</p>}
        </div>
      )}

      {jugando && (
        <div>
          <p>Apuesta actual: <strong>{apuesta}</strong></p>
          <div className="mines-grid">
            {grilla.map((celda, index) => (
              <div
                key={index}
                className={`celda ${celda.revelado ? 'revelado' : ''}`}
                onClick={() => manejarClic(index)}
              >
                {celda.revelado && (celda.mina ? '💣' : '💎')}
              </div>
            ))}
          </div>
        </div>
      )}

      {juegoTerminado && (
        <div className="resultado">
          <h3>{ganaste ? '🎉 ¡Ganaste!' : '💥 ¡Perdiste!'}</h3>
        </div>
      )}
    </div>
  );
};

export default MinesGame;
