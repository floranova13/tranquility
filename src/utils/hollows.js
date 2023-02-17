// TODO: Add constants for hollows

export const hollows = [
  {
    name: 'Light',
    threat: 0,
    description: '',
    stats: {
      health: 3,
      attack: 1,
      defense: 0,
    },
    key: 'light',
  },
  {
    name: 'Heavy',
    threat: 0,
    description: '',
    stats: {
      health: 4,
      attack: 1,
      defense: 1,
    },
    key: 'heavy',
  },
];

export const getHollow = () => {
  const tower = localStorage.getItem('tower');
  const hollows = tower.hollows[tower.currentFloor];
  return hollows[Math.floor(Math.random() * hollows.length)];
}