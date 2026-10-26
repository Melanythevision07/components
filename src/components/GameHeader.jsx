//Creamos un componente con la extension jsx. para que sea empleada como funcion en cualquier parte del codigo.
function GameHeader() {
    return (
        <header style={{ textAlign: 'center', width: '100%', marginBottom: '30px' }}>
            <h1>Pixel Quest</h1>
            <p>¡Preparate para jugar!</p>
        </header>
    );
}

//Con este comando podemos llamar a nuestro componente desde cualquier parte del proyecto.
export default GameHeader;


