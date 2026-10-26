// src/components/MissionCard.jsx

// Creamos el componente recibiendo props (titulo, descripcion, recompensa)
function MissionCard({ titulo, descripcion, recompensa }) {
  return (
    <section className="mission-card">
      <h3>🎯 Misión: {titulo}</h3>
      <p>{descripcion}</p>
      <p><strong>Recompensa:</strong> {recompensa}</p>
    </section>
  );
}

// Exportamos el componente para usarlo en App.jsx
export default MissionCard;