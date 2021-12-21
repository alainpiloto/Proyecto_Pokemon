import { useState } from "react"
import { useParams } from "react-router"
import "./style.css"
import pokeball from "../../../../images/pokebola-145x146.png"
import PokeLoading from "../../../../components/PokeLoading"
const PokeDetails = ({name, weight, height, stats}) => {
    
    const [imageLoaded, setImageLoaded] = useState(false)
    
    const {id} = useParams();
    const getId = () => {
        return id.toString().padStart(3, "0")
    }
    
    const idFormat = getId();

    const imageStyle = !imageLoaded ? {display : 'none'} : {};

    
    return (
        <div className="general-content" >
            <div className="name-container">
                <img src={pokeball} alt="Pokeball" className="pokeball-img"/>
                <div className="name-id">
                    <h2>{name}</h2>
                    <h2>Nº {id}</h2>
                </div>
            </div>
            <div>
                <div className="Info-container">
                    <div className="image-container">
                        {!imageLoaded && <div className="loading-container"><PokeLoading /></div>}
                         <img onLoad={()=> setTimeout(() => {setImageLoaded(true)}, 2000)} style={imageStyle} className="pokemon-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idFormat}.png`} alt={name}/>
                        
                    </div>
                    <div className="caracteristicas-container">
                        <div className="info-basica-container">
                            <h3>Información Básica</h3>
                            <div>
                                <p>Peso <br/>  <span>{weight} lbs.</span></p>
                                <p>Altura <br/>  <span>{height} ft.</span></p>
                            </div>
                        </div>
                        <div>
                        <h3>Estadísticas</h3>
                            <div className="Estadisticas-container">
                                {stats?.map( (stadistic, index) => 
                                <p className="stat-item" key={index}>{stadistic.stat.name} <br/> <span>{stadistic.base_stat}</span>  </p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 
        </div>
    )
}

export default PokeDetails;
