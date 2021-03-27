import React from 'react';
import PropTypes from 'prop-types';


const PropertyInside = (props) => {

  const {good} = props;

  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
};

PropertyInside.propTypes = {
  good: PropTypes.string.isRequired
};

export default PropertyInside;
