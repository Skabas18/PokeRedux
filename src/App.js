import './App.css';
import { Col } from 'antd';
import 'antd/dist/reset.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg'
import { useEffect } from 'react';
import { getPokemon } from './api';
import { connect } from 'react-redux'
import { setPokemonsActions } from './actions';

function App({ pokemons, setPokemons }) {
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
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
