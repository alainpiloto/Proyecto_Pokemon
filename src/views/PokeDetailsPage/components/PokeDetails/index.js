
const PokeDetails = ({name, weight, height, stats}) => {
    return (
        <>
            <div>
                <h2>Información General</h2>
                    <p>Name : {name}</p>
                    <p>Peso : {weight} lbs.</p>
                    <p>Heigth : {height} ft.</p>
            </div>
            <div>
                <h2>Estadísticas</h2>
                    <div>{stats?.map( (stadistic, index) => 
                    <p key={index}>{stadistic.stat.name} : {stadistic.base_stat}  </p>)
                    }</div>
            </div>
            <div>
                <img src={`https://img.pokemondb.net/sprites/go/normal/${name}.png`} alt={name}/>
            </div>       
        </>
    )
}

export default PokeDetails;
