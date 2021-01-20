import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link } from 'react-router-dom';


import styles from './Logo.module.scss';

const Component = ({ className }) => <Link to={`${process.env.PUBLIC_URL}/`} className={clsx(className, styles.root)}>PokeSite</Link>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Logo,
};

