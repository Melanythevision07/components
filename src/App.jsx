// src/App.jsx
import GameHeader from './components/GameHeader';
import PlayerCard from './components/PlayerCard';
import MissionCard from './components/MissionCard';
import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* 1. Encabezado */}
      <GameHeader />

      {/* 3. Tarjetas de Personajes abajo */}
      <div className="players-container">
        <PlayerCard nombre="🪄 Maga Pixel" nivel={1} vidas="❤️ ❤️ ❤️" />
        <PlayerCard nombre="🛡️ Ninja" nivel={3} vidas="❤️ ❤️" />
        <PlayerCard nombre="🏰 Melany" nivel={5} vidas="❤️ ❤️ ❤️" />
        <PlayerCard nombre="🧙 Melina" nivel={5} vidas="❤️ ❤️ ❤️" />
      </div>

      {/* 2. Tarjeta de Misión centrada arriba */}
      <div className="mission-container">
        <MissionCard 
          titulo="Derrotar al Dragón" 
          descripcion="Encuentra la cueva en la montaña y vence al jefe final." 
          recompensa="500 Monedas de oro 🪙"
        />
      </div>
    </div>
  );
}

export default App;