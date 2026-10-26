//Creamos un componente con la extension jsx. para que sea empleada como funcion en cualquier parte del codigo.
function PlayerCard({nombre, nivel, vidas}) {
    return (
        <section className="player-card">
            <h2>{nombre}</h2>
            <p>Nivel: {nivel}</p>
            <p>Vidas: {vidas}</p>
        </section>
    );
}

//Con este comando podemos llamar a nuestro componente desde cualquier parte del proyecto.
export default PlayerCard;