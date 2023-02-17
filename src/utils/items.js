// TODO: Make constants for item types and items

export const items = [
  {
    name: 'Common Artifact',
    type: 'Artifact',
    value: '1',
    rarity: 'Common',
    description: 'A common artifact.',
  },
  {
    name: 'Uncommon Artifact',
    type: 'Artifact',
    value: '1',
    rarity: 'Uncommon',
    description: 'An uncommon artifact.',
  },
  {
    name: 'Rare Artifact',
    type: 'Artifact',
    value: '1',
    rarity: 'Rare',
    description: 'A rare artifact.',
  },
  {
    name: 'Common Artifact',
    type: 'Artifact',
    value: '1',
    rarity: 'Legendary',
    description: 'A legendary artifact.',
  },
];

export const getItemRarity = () => {
  const roll = Math.floor(Math.random() * 100);

  if (roll < 60) {
    return 'common';
  } else if (roll < 90) {
    return 'uncommon';
  } else if (roll < 99) {
    return 'rare';
  } else {
    return 'legendary';
  }
};

export const getItem = (rarity) => {
  const possibleItems = items.filter(
    (item) => item.rarity.toLowerCase() === rarity.toLowerCase()
  );
  const item = possibleItems[Math.floor(Math.random() * possibleItems.length)];
  return item;
};
