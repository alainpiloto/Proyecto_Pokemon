import { Link } from 'react-router-dom';

const PokemonListItem = ({name, url}) => {
    
    const getId = () => url.split("/")[6]
    return (
        <>
            <p>{name}</p>
                <button>
                 <Link to={`/pokemon/${getId()}`}>Ver Detalles</Link>
                </button>
        </>
    )
}

export default PokemonListItem;
