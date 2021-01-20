import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SearchInput.module.scss';

const Component = ({ className, setSearchString }) =>
  <div className={clsx(className, styles.root)}>
    <input className={styles.input} type='text' placeholder='Search...' onChange={e => setSearchString(e.target.value)} />
  </div>;

Component.propTypes = {
  className: PropTypes.string,
  setSearchString: PropTypes.func,
};

export {
  Component as SearchInput,
};
