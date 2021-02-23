import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCityAC} from '../../redux/action';
import {CityName} from '../../common/utils';

const CitiesList = (props) => {

  const {name, changeCityName} = props;

  const choseCityName = (evt) => {
    const cityName = evt.target.innerText;
    changeCityName(cityName);
  };

  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item" onClick={choseCityName}>
        <a className={name === CityName.PARIS ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
          <span>{CityName.PARIS}</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className={name === `Cologne` ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
          <span>{CityName.COLOGNE}</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className={name === CityName.BRUSSELS ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
          <span>{CityName.BRUSSELS}</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className={name === CityName.AMSTERDAM ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}>
          <span>{CityName.AMSTERDAM}</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className={name === CityName.HAMBURG ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
          <span>{CityName.HAMBURG}</span>
        </a>
      </li>
      <li className="locations__item" onClick={choseCityName}>
        <a className={name === CityName.DUSSELDORF ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
          <span>{CityName.DUSSELDORF}</span>
        </a>
      </li>
    </ul>
  );
};

CitiesList.propTypes = {
  name: PropTypes.string.isRequired,
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
