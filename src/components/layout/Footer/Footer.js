import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import { Copyright } from '../../common/Copyright/Copyright';

const Component = ({ className }) =>
  <footer id='contact' className={clsx(className, styles.root)}>
    <Copyright />
  </footer>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
};

