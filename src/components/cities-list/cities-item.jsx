import React from 'react';
import PropTypes from 'prop-types';

const CitiesItem = (props) => {
  const {name, city, changeCityName} = props;

  const choseCityName = (evt) => {
    const cityName = evt.target.innerText;
    changeCityName(cityName);
  };

  return (
    <li className="locations__item" onClick={choseCityName}>
      <a className={name === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCityName: PropTypes.func.isRequired
};

export default CitiesItem;
