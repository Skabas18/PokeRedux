import './App.css';
import { Col } from 'antd';
import 'antd/dist/reset.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import { useEffect } from 'react';
import { getPokemon } from './api';
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonsActions } from './actions';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemmons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(setPokemonsActions(pokemonsRes));
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
