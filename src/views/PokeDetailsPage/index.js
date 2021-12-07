import {useEffect } from "react";
import { useParams } from "react-router"
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Loading";
import usePokemonsStore from "../../zustand/stores/pokemons";
import PokeDetails from "./components/PokeDetails";


const PokeDetailsPage = () => {

    const {getPokemonDetails, pokemonDetails, isLoading, hasError, errorMessage} = usePokemonsStore( state => ({ 
        getPokemonDetails : state.getPokemonDetails,
        pokemonDetails : state.pokemonDetails,
        isLoading : state.isLoading,
        hasError : state.hasError,
        errorMessage : state.errorMessage }))

    const {id} = useParams()
        
    useEffect( () => {
        getPokemonDetails(id).catch(null)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
            <img src="../images/mew-home.png"/>
            {hasError ? <ErrorMessage message={errorMessage}/> : isLoading ? <Spinner /> : <PokeDetails {...pokemonDetails} /> }
        </div>
    )
}

export default PokeDetailsPage;
