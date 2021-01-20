import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './HomePage.module.scss';

const Component = ({ className }) =>
  <main className={clsx(className, styles.root)}>
    HomePage
  </main>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as HomePage,
};

