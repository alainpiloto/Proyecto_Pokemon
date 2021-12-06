import Routes  from "./Routes";
import PokemonsProvider from "./context/Pokemons/Provider";

function App() {
  return (
    <PokemonsProvider>

      <Routes />
    </PokemonsProvider>

  )
}

export default App;
