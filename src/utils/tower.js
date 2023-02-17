// TODO: Generate hollow lists randomly and store them in memory
// TODO: Add constants for hollows lists

export const getNewTower = () => {
  const tower = {
    currentFloor: 0,
    hollows: ['light', 'heavy'],
  };
  const possibleThemes1 = ['insect', 'plant', 'undead', 'ooze'];
  const possibleThemes2 = [
    'insect',
    'plant',
    'undead',
    'construct',
    'ooze',
    'fey',
    'spinner',
  ];
  const possibleThemes3 = [
    'insect',
    'plant',
    'undead',
    'elemental',
    'construct',
    'nightmare',
    'ooze',
    'fey',
    'spinner',
  ];
  const possibleThemes = [possibleThemes1, possibleThemes2, possibleThemes3];

  const themeList = [[], [], []];

  for (let i = 0; i < 9; i++) {
    const themeTier = Math.floor(i / 3);
    // GET RANDOM THEME

    tower.hollows.push([]);
  }

  for (let i = 0; i < 9; i++) {
    const hollowThreatTier = Math.floor(i / 3);
    const newHollowList = [];

    for (let j = 0; j < 3; j++) {
      // GET RANDOM HOLLOWS BASED ON BIOME
    }

    tower.hollows.push([]);
  }

  return tower;
};


// ------------------------------
// Update
// ------------------------------

export const updateCurrentFloor = (newFloor) => {
  const newTower = JSON.parse(localStorage.getItem('tower'));
  newTower.currentFloor = newFloor;
  localStorage.setItem('tower', JSON.stringify(newTower));
};