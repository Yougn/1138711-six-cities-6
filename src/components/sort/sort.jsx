import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SortOffers = (props) => {

  // eslint-disable-next-line react/prop-types
  const {handleSortListClick, sortType} = props;

  const [sortChoise, setUserChoise] = useState(false);

  const setFlag = () => {
    if (!sortChoise) {
      setUserChoise(true);
    } else if (sortChoise) {
      setUserChoise(false);
    }
  };

  const setSortValue = () => {
    switch (sortType) {
      case 1:
        return `Price: low to high`;
      case 2:
        return `Price: high to low`;
      case 3:
        return `Top rated first`;
    }
    return `Popular`;
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={setFlag}>
      <span className="places__sorting-caption">Sort by  </span>
      <span className="places__sorting-type" tabIndex="0">
        {setSortValue()}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={sortChoise ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`} >
        <li className="places__option places__option--active" tabIndex="0" onClick={handleSortListClick}>Popular</li>
        <li className="places__option" tabIndex="1" onClick={handleSortListClick}>Price: low to high</li>
        <li className="places__option" tabIndex="2" onClick={handleSortListClick}>Price: high to low</li>
        <li className="places__option" tabIndex="3" onClick={handleSortListClick}>Top rated first</li>
      </ul>
    </form>
  );
};

SortOffers.propTypes = {
  handleSortListClick: PropTypes.func.isRequired,
};

export default SortOffers;
