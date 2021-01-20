import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Copyright.module.scss';

const Component = ({ className }) => <p className={clsx(className, styles.root)}>{`Copyright © ${new Date().getFullYear()} Grzegorz Jodłowski`}</p>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Copyright,
};

