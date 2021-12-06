import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import shallow from 'zustand/shallow'


import usePokemonsStore from "../../zustand/stores/pokemons";
import PokemonList from "./components/PokemontList"

const Home = () => {
    const {getPokemons, pokemons, hasError, errorMessage} = usePokemonsStore( state => ({
      getPokemons : state.getPokemons,
      pokemons : state.pokemons,
      hasError : state.hasError,
      errorMessage : state.errorMessage}));
  
    useEffect( () => {
      getPokemons().catch("error")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return (
        hasError ? <ErrorMessage message= { errorMessage }/> : <PokemonList pokemons={pokemons}/>
    )
}

export default Home;
