export const titles = [
  {
    name: 'Acolyte',
    description: '',
    key: 'acolyte',
    spells: ['restore', 'rehabilitate'],
  },
];

export const getTitle = (key) =>
  titles.find((title) => title.key === key.toLowerCase());

export const getAvailableTitles = (seeker) => {
  /// seeker = {
  ///   title: 'Adept',
  ///   spells: ['restore', 'rehabilitate', 'protection', 'refuge'],
  ///   personality: {
  ///     savior: 2,
  ///     malice: 1,
  ///     veracity: 0,
  /// }
  const availableTitles = [];

  if (seeker.title === 'Acolyte') {
    availableTitles.push(getTitle('adept'));

    const saviorScore = seeker.personality.savior - seeker.personality.malice;

    if (saviorScore >= 3) {
      availableTitles.push(getTitle('altruist'));
    } else if (saviorScore <= 3) {
      availableTitles.push(getTitle('realist'));
    }
  } else if (['Adept', 'Altruist', 'Realist'].includes(seeker.title)) {
    availableTitles.push(getTitle('savant'));

    const saviorScore = seeker.personality.savior - seeker.personality.malice;

    if (saviorScore >= 12) {
      availableTitles.push(getTitle('savior'));
    } else if (saviorScore <= 12) {
      availableTitles.push(getTitle('controller'));
    } else if (saviorScore === 0 && seeker.personality.savior >= 9) {
      availableTitles.push(getTitle('awakened'));
    }
  } else if (seeker.title === 'Savant') {
    availableTitles.push(getTitle('sage'));
  } else if (seeker.title === 'Savior') {
    availableTitles.push(getTitle('sage'));
  } else if (seeker.title === 'Controller') {
    availableTitles.push(getTitle('sage'));
  } else if (seeker.title === 'Awakened') {
    availableTitles.push(getTitle('ascended'));
  }
};
