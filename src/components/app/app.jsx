import React from 'react';
import MainBoard from '../main-board/main-board';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cardsCount} = props;

  return (
    <MainBoard cardsCount={cardsCount} />
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
