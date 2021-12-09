import create from 'zustand';

import apiCall from '../../api';

const usePokemonsStore = create((set, get) => ({
    getPokemons : async () => {
        try {
            set({ isLoading : true, hasError : false, errorMessage : ""});
            const pokemonsData = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=1200"});
            set({pokemons :  pokemonsData.results});
        } catch (error) {
            set({pokemons : [], hasError : true, errorMessage : "Ha ocurrido un error al intentar descargar la de Pokemons"});
        } finally {
            set({isLoading : false});
        }
    },
    getPokemonDetails : async (id) => {
        if(!id) return;
        try {
            set({isLoading : true, hasError : false, errorMessage : ""})
            const pokemonsData = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`})
            set({pokemonDetails : pokemonsData})
        } catch (error) {
            set({hasError : true, errorMessage : "Ha ocurrido un error al intentar descargar el Pokemon"})
        } finally {
            set({isLoading : false})
        }
        
    },
    getPokemon : async (pokemon) => {
        try {
            
            const pokemonsData = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`})
            set({pokemonFound : pokemonsData})
            
        } catch (error) {
            set({hasError : true, errorMessage : "Ha ocurrido un error al intentar descargar el Pokemon"})
        }
    },
    pokemons : [],
    pokemonDetails : {},
    isLoading : false,
    hasError : false,
    errorMessage : "" 
}))

export default usePokemonsStore;

