import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PokemonList.module.scss';

const Component = ({ className }) =>
  <main className={clsx(className, styles.root)}>
    PokemonList
  </main>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as PokemonList,
};

