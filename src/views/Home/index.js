import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import mewHome from "../../images/mewHome.png"
import titulo from "../../images/tituloPokemon.png"
import pikachu from "../../images/pikachu.png"
import "./style.css"
import { Link } from "react-router-dom";

import usePokemonsStore from "../../zustand/stores/pokemons";
import NoEncontradoMensaje from "./components/NoEncontradoMensaje";
// import PokemonList from "./components/PokemontList"

const Home = () => {
    const {getPokemons, pokemons, } = usePokemonsStore( state => ({
      getPokemons : state.getPokemons,
      pokemons : state.pokemons,
      hasError : state.hasError,
      errorMessage : state.errorMessage}));
  
    useEffect( () => {
      getPokemons().catch("error")
       
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    console.log(pokemons)
    const [pokemonSearched, setPokemonSearched] = useState('')
    const [pokemonFound, setPokemonFounded] = useState({});
    const [id, setId] = useState('');
    const [notFound, setNotFound] = useState(undefined)
    // const searchPokemon = ({target : {value}}) => {
    //   setPokemonSearched(value);
    //   console.log(pokemonSearched)
    // }
    const findPokemon =  () => {
      const result = pokemons.find(el => 
        el.name === pokemonSearched
      )
      if(result === undefined) {
        setNotFound(true)
      } else {
        setPokemonFounded(result)
        setId(result.url.split("/")[6]) 
        setNotFound(false)  
      }
      
    }

    
    
    return (
      <div className="home">

          <img src={mewHome} alt="mew pokemon" className="mew-img"/>
          <div className="container">
            <img src={titulo} alt="titulo pagina" className="titulo-home"/>
            <input type="search" onChange={({target : {value}}) => {setPokemonSearched(value); console.log(pokemonSearched)}} placeholder="Ingrese el nombre de su Pokémon" />
            <button className={ pokemonSearched.length < 3 ? "disabled" : undefined} onClick={findPokemon} disabled={pokemonSearched.length < 3 && true} >Encontrar</button>
          {notFound === true && <NoEncontradoMensaje setNotFound={setNotFound}/>}  
          {notFound === false && <div className="pokemon-name">
            <p>{pokemonFound.name.charAt(0).toUpperCase() + pokemonFound.name.slice(1)}</p>
            {notFound === true ? undefined : 
              <button>
                <Link to={`/pokemon/${id}`}>Ver</Link>
              </button> }
          </div>
          }
          
          
          </div>
          <img src={pikachu} alt="pikachu pokemon" className="pikachu-img" />
          <p className="aviso">*  Es posible que las imagenes de <br/>algunos pokemons no esté disponible.</p>
      </div>

    )
}

export default Home;
