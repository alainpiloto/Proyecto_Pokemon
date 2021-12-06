import PokemonListItem from "../PokemonListItem";



const PokemonList = ({pokemons}) => {
    return (
        
        <div>
            <div>
          {pokemons?.map( (pokemon, index) => {
            
            
            return (
              <PokemonListItem key={index } {...pokemon}/>
            )
          })}
        </div>
        </div>
    )
}

export default PokemonList;
