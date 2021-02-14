const RATING_STEP = 20;

export const getRatingLevel = (level) => {
  return (level * RATING_STEP) + `%`;
};
