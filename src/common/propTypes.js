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
  name: PropTypes.string
};

const user = {
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  isPro: PropTypes.bool,
  name: PropTypes.string,
};

export const propReview = {
  id: PropTypes.number,
  hotelId: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  user: PropTypes.shape(user)
};
