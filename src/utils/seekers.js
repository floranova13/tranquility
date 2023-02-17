import { clamp, chance } from './index';
// TODO: Add constants for seeker ranks

export const seekerRanks = [
  'Initiate',
  'Ardent',
  'Adept',
  'Champion',
  'Warden',
  'Blightbane',
];

export const getSeekerRank = (tier) => {
  let rankIndex = 0;

  if (chance(12 + tier * 6)) {
    rankIndex += 1;
  }
  if (chance(3 + tier * 3)) {
    rankIndex += 1;
  }
  if (chance(tier)) {
    rankIndex += 1;
  }
  if (chance(tier / 2)) {
    rankIndex += 1;
  }
  if (chance(tier / 3)) {
    rankIndex += 1;
  }

  return seekerRanks[rankIndex];
};

export const getNewSquad = () => {
  const newSquad = [];

  for (let i = 0; i < 6; i += 1) {
    newSquad.push(getNewSeeker(getSeekerRank()));
  }

  localStorage.setItem(JSON.stringify(newSquad));
};

export const getNewSeeker = (rank) => {
  let health = 12;
  let attack = 1;
  let defense = 0;
  let firstName = 'Seeker'; // TODO: Generate random name
  let lastName = Math.floor(Math.random() * 10000).toString(); // TODO: Generate random name

  switch (rank) {
    case 'Initiate':
      health = 12 + Math.floor(Math.random() * 3);
      attack = 1 + (chance(25) ? 1 : 0);
      defense = chance(10) ? 1 : 0;
      break;
    case 'Ardent':
      health = 15 + Math.floor(Math.random() * 6);
      attack = 1 + (chance(50) ? 1 : 0);
      defense = 1 + (chance(20) ? 1 : 0);
      break;
    case 'Adept':
      health = 21 + Math.floor(Math.random() * 9);
      attack = 1 + (chance(75) ? 1 : 0);
      defense = 2 + (chance(20) ? 1 : 0);
      break;
    case 'Champion':
      health = 30 + Math.floor(Math.random() * 12);
      attack = 2 + (chance(25) ? 1 : 0);
      defense = 3 + (chance(20) ? 1 : 0);
      break;
    case 'Warden':
      health = 45 + Math.floor(Math.random() * 15);
      attack = 2 + (chance(50) ? 1 : 0);
      defense = 4 + (chance(20) ? 1 : 0);
      break;
    case 'Blightbane':
      health = 75 + Math.floor(Math.random() * 18);
      attack = 2 + (chance(75) ? 1 : 0);
      defense = 6 + (chance(20) ? 1 : 0);
      break;
    default:
      break;
  }

  return {
    name: `${firstName} ${lastName}`,
    stats: {
      maxHealth: health,
      currentHealth: health,
      attack,
      defense,
    },
  };
};

export const getSeekers = () => {
  const seekers = JSON.parse(localStorage.getItem('seekers'));
  return seekers;
}

// ------------------------------
// Update
// ------------------------------

export const updateCurrentHealth = (newHealth) => {
  const seeker = localStorage.getItem('seeker');
  seeker.stats.currentHealth = clamp(newHealth, 0, seeker.stats.maxHealth);
  localStorage.setItem('seeker', seeker);
};
