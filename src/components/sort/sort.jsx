import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SortOffers = (props) => {

  const {choseSortType} = props;

  const [sortChoise, setUserChoise] = useState(false);

  const setFlag = () => {
    if (!sortChoise) {
      setUserChoise(true);
    } else if (sortChoise) {
      setUserChoise(false);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={setFlag}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={sortChoise ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`} >
        <li className="places__option places__option--active" tabIndex="0" onClick={choseSortType}>Popular</li>
        <li className="places__option" tabIndex="1" onClick={choseSortType}>Price: low to high</li>
        <li className="places__option" tabIndex="2" onClick={choseSortType}>Price: high to low</li>
        <li className="places__option" tabIndex="3" onClick={choseSortType}>Top rated first</li>
      </ul>
    </form>
  );
};

SortOffers.propTypes = {
  choseSortType: PropTypes.func.isRequired,
};

export default SortOffers;
