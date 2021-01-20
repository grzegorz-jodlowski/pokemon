export const generateIcon = value => {
  if (!value || typeof value !== 'string') {
    return;
  } else {
    switch (value) {
      case 'attack':
        return 'fas fa-fist-raised';
      case 'defense':
        return 'fas fa-umbrella';
      case 'special-attack':
        return 'fas fa-meteor';
      case 'special-defense':
        return 'fas fa-shield-alt';
      case 'speed':
        return 'fas fa-tachometer-alt';

      default:
        return 'fas fa-meteor';
    }
  }
};
