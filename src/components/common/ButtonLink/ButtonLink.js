import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


import styles from './ButtonLink.module.scss';

const Component = ({ className, text, href }) =>
  <Link className={clsx(className, styles.root)} to={href} >
    {text}
  </Link>;

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

export {
  Component as ButtonLink,
};

