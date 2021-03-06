import React from 'react';
import { string, node, oneOfType } from 'prop-types';

const Alert = ({ classType, message }) => (
  message
    ? (
      <div className={`alert alert-${classType}`} role="alert">
        {message}
      </div>
    )
    : null
);
Alert.propTypes = {
  classType: string,
  message: oneOfType([string, node]),
};
Alert.defaultProps = {
  classType: 'primary',
  message: null,
};

export default Alert;
