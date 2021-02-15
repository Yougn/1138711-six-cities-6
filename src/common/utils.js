const STEP = 20;

export const getRatingLevel = (level) => {
  return Math.round(level * STEP) + `%`;
};
