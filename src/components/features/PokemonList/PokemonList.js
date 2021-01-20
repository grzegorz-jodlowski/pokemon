import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PokemonList.module.scss';

import { Pokemon } from '../Pokemon/Pokemon';

const Component = ({ className, pokemons }) =>
  <section className={clsx(className, styles.root)}>
    {pokemons.map(pokemon => <Pokemon key={`${pokemon.name} ${pokemon.url}`} pokemon={pokemon} />)}
  </section>;

Component.propTypes = {
  className: PropTypes.string,
  pokemons: PropTypes.array,
};

export {
  Component as PokemonList,
};

