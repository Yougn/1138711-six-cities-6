import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCityAC} from '../../redux/action';
import CityName from '../../common/utils';

const CitiesList = (props) => {

  const {name, changeCityName} = props;
  console.log(name);
  const choseCityName = (evt) => {
    const cityName = evt.target.innerText;
    changeCityName(cityName);
  };

  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item" onClick={choseCityName}>
        <a className="locations__item-link tabs__item" href="#">
          <span>Paris</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className="locations__item-link tabs__item" href="#">
          <span>Cologne</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className="locations__item-link tabs__item" href="#">
          <span>Brussels</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className="locations__item-link tabs__item tabs__item--active">
          <span>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className="locations__item-link tabs__item" href="#">
          <span>Hamburg</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className="locations__item-link tabs__item" href="#">
          <span>Dusseldorf</span>
        </a>
      </li>
    </ul>
  );
};

CitiesList.propTypes = {
  changeCityName: PropTypes.func.isRequired
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeCityName: (name) => {
      dispatch(changeCityAC(name));
    }
  };
};

export default connect(null, mapDispatchToProps)(CitiesList);
