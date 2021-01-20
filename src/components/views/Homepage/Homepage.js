import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Component = ({ className }) =>
  <main className={clsx(className, styles.root)}>
    Homepage
  </main>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Homepage,
};

