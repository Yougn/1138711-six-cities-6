import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCityActionCreator} from '../../redux/action';
import {cities} from '../../common/const';
import CitiesItem from './cities-item';


const CitiesList = (props) => {

  const {name, changeCityName} = props;

  const citiesNames = cities.map((city, index) => <CitiesItem name={name} city={city} changeCityName={changeCityName} key={index} />);

  return (
    <ul className="locations__list tabs__list">

      {citiesNames}

    </ul>
  );
};

CitiesList.propTypes = {
  name: PropTypes.string.isRequired,
  changeCityName: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCityName: (cityName) => {
      dispatch(changeCityActionCreator(cityName));
    }
  };
};

export default connect(null, mapDispatchToProps)(CitiesList);
