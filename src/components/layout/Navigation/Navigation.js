import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Navigation.module.scss';

const Component = ({ className }) =>
  <nav className={clsx(className, styles.root)}>
    <NavLink className={clsx(styles.navLink)} exact to={`${process.env.PUBLIC_URL}/`} activeClassName={styles.active}>Home</NavLink>
    <NavLink className={clsx(styles.navLink)} exact to={`${process.env.PUBLIC_URL}/blog`} activeClassName={styles.active}>Blog</NavLink>
    <NavLink className={clsx(styles.navLink)} exact to={`${process.env.PUBLIC_URL}/contact`} activeClassName={styles.active}>Contact</NavLink>
  </nav>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Navigation,
};

