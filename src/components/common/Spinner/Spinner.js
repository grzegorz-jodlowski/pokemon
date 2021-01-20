import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Spinner.module.scss';

const Component = ({ className, full }) =>
  <div className={clsx(className, styles.root, full && styles.full)}>
    <div className={clsx(styles.spinner)}></div>
  </div>;

Component.propTypes = {
  className: PropTypes.string,
  full: PropTypes.bool,
};

export {
  Component as Spinner,
};
