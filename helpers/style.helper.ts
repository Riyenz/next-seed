export const classes = (dynamic, classes = '') => {
  return Object.entries(dynamic)
    .filter((entry) => entry[1] && entry[0] !== 'undefined')
    .map((entry) => entry[0])
    .join(' ')
    .concat(' ')
    .concat(classes);
};
