import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Pokemon.module.scss';

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

import { ButtonLink } from '../../common/ButtonLink/ButtonLink';


const Component = ({ className, pokemon }) =>
  <article className={clsx(className, styles.root)}>
    <p className={styles.title} >{capitalizeFirstLetter(pokemon.name)}</p>
    <ButtonLink text='See more' href={`${process.env.PUBLIC_URL}/pokemons/${pokemon.name}`} className={styles.button} />
  </article>;

Component.propTypes = {
  className: PropTypes.string,
  pokemon: PropTypes.object,
};

export {
  Component as Pokemon,
};

