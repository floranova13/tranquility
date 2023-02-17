export const getNewPlayer = () => {
  return {
    title: 'Acolyte',
    spells: ['restore', 'rehabilitate'],
    personality: {
      savior: 0,
      malice: 0,
      veracity: 0,
    },
    possessions: {
      vira: 0,
      energy: 0,
      favor: 0,
      items: [],
    },
  };
};

export const getNewGameState = () => {
  return {
    floor: 0,
  };
};

export const restartGame = () => {
  localStorage.removeItem('player');
  localStorage.removeItem('tower');
  localStorage.setItem('player', JSON.stringify(getNewPlayer()));
};

// ------------------------------
// Title
// ------------------------------

export const updateTitle = (newTitle) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.title = newTitle;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

// ------------------------------
// Spells
// ------------------------------

export const updateSpells = (newSpells) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.spells = [...newPlayer.spells, newSpells];
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

// ------------------------------
// Personality
// ------------------------------

export const changeSavior = (amount) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.personality.savior += amount;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

export const changeMalice = (amount) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.personality.malice += amount;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

export const changeVeracity = (amount) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.personality.veracity += amount;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

// ------------------------------
// Possessions
// ------------------------------

export const changeVira = (amount) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.possessions.vira += amount;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

export const changeEnergy = (amount) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.possessions.energy += amount;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};

export const changeFavor = (amount) => {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  newPlayer.possessions.favor += amount;
  localStorage.setItem('player', JSON.stringify(newPlayer));
};
