import PokemonContext from "."
import apiCall from "../../api";
import { useState} from "react";
const PokemonsProvider = ({children}) => {
    
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const getPokemons = async () => {
        try {
            setIsLoading(true)
            setHasError(false)

            const pokemonsData = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"})
    
            setPokemons(pokemonsData.results)
        } catch (error) {
            setPokemons([])
            setErrorMessage("Ha ocurrido un error al intentar descargar la lista de Pokemons")
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
        
    }
    
    const [pokemonDetails, setPokemonDetails] = useState({})
    
    const getPokemonDetails = async (id) => {
        if(!id) {Promise.reject('Id es Requerido')}
        try {
            setIsLoading(true)
            setHasError(false)
            const pokemonsData = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`})
            setPokemonDetails(pokemonsData)
        } catch(error) {
            setPokemonDetails({})
            setErrorMessage("Ha ocurrido un error al intentar descargar este Pokemon")
            setHasError(true)

        } finally {
            
            setIsLoading(false)
        }
    }

    return (
        <PokemonContext.Provider 
            value={{
                getPokemons,
                pokemons,
                getPokemonDetails,
                pokemonDetails,
                isLoading,
                hasError,
                setHasError,
                errorMessage}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonsProvider;