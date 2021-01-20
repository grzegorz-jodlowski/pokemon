export const capitalizeFirstLetter = value => {
  if (!value || typeof value !== 'string') {
    return;
  } else {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
};
