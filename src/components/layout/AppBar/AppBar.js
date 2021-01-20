import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './AppBar.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

const Component = ({ className, children }) =>
  <div className={clsx(className, styles.root)}>
    <Logo className={styles.logo} />
    <Navigation className={styles.navigation} />
  </div>;

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as AppBar,
};

