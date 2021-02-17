import React from 'react';
import PropTypes from 'prop-types';

const RoomPhoto = (props) => {
  const {img} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={img} alt="Photo studio" />
    </div>
  );
};

RoomPhoto.propTypes = {
  img: PropTypes.string.isRequired
};

export default RoomPhoto;
