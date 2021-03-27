import React from 'react';
import PropTypes from 'prop-types';


const RoomPhoto = (props) => {

  const {image} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  );
};

RoomPhoto.propTypes = {
  image: PropTypes.string.isRequired
};

export default RoomPhoto;
