import './App.css';
import { Col } from 'antd';
import 'antd/dist/reset.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemmons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemmons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
