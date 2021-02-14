import PropTypes from 'prop-types';

export const propCard = {
  id: PropTypes.number,
  img: PropTypes.string,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  city: PropTypes.string
};

export const propReview = {
  id: PropTypes.number,
  hotelId: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number
};
