import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Pokemon.module.scss';

const Component = ({ className }) =>
  <main className={clsx(className, styles.root)}>
    Pokemon
  </main>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Pokemon,
};

