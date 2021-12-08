import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import mewHome from "../../images/mewHome.png"
import titulo from "../../images/tituloPokemon.png"
import pikachu from "../../images/pikachu.png"
import "./style.css"

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
      <div className="home">

          <img src={mewHome} alt="mew pokemon" className="mew-img"/>
          <div className="container">
            <img src={titulo} alt="titulo pagina" className="titulo-home"/>
            <input type="search" onChange={(e) => console.log(e.target.value)} placeholder="Ingrese el nombre de su Pokémon"/>
            <button>Encontrar</button>
          </div>
          <img src={pikachu} alt="pikachu pokemon" className="pikachu-img" />
          <p className="aviso">*  Es posible que las imagenes de <br/>algunos pokemons no esté disponible.</p>
      </div>
    )
}

export default Home;
