import {useEffect } from "react";
import { useParams } from "react-router"
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Loading";
import usePokemonsStore from "../../zustand/stores/pokemons";
import PokeDetails from "./components/PokeDetails";
import './style.css'
import backgroundImg from '../../images/pokemon-city-dark.png'
import HiddenButton from "../../components/Hidden-button";



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
        <div className="body-details" style={{backgroundImage : `url(${backgroundImg})`}}>
            <HiddenButton />
            {hasError ? <ErrorMessage message={errorMessage}/> : isLoading ? <Spinner /> : <PokeDetails {...pokemonDetails} /> }
        </div>
    )
}

export default PokeDetailsPage;
