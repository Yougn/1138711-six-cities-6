import PropTypes from 'prop-types';

export const propCard = {
  id: PropTypes.number,
  img: PropTypes.string,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string
};
