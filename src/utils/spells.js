export const spells = [
  {
    name: 'Restore',
    category: 'pure',
    energy: 0,
    isBuff: false,
    description: 'Heal one target.',
    key: 'restore',
  },
  {
    name: 'Rehabilitate',
    category: 'pure',
    energy: 0,
    isBuff: false,
    description: 'Heal the squad.',
    key: 'rehabilitate',
  },
  {
    name: 'Protection',
    category: 'benevolence',
    energy: 0,
    isBuff: false,
    description: 'Shield a target.',
    key: 'protection',
  },
  {
    name: 'Refuge',
    category: 'benevolence',
    energy: 0,
    isBuff: false,
    description: 'Shield the squad.',
    key: 'refuge',
  },
  {
    name: 'Persistance',
    category: 'benevolence',
    energy: 0,
    isBuff: false,
    description:
      'Apply a reactive shield to a target. The more attacks they withstand, the stronger the shield grows.',
    key: 'persistance',
  },
  {
    name: 'Recall',
    category: 'benevolence',
    energy: 0,
    isBuff: false,
    description:
      'Inspire the living with songs of the heroic fallen. Remind them that their lives and their deaths have meaning.',
    key: 'recall',
  },
  {
    name: 'Thorns',
    category: 'malice',
    energy: 0,
    isBuff: false,
    description: 'Harm attackers of the target.',
    key: 'thorns',
  },
  {
    name: 'Misdirect',
    category: 'malice',
    energy: 0,
    isBuff: false,
    description: 'Attract foes to attack the target instead of any of their squad members.',
    key: 'misdirect',
  },
  {
    name: '',
    category: 'malice',
    energy: 0,
    isBuff: false,
    description: '',
    key: '',
  },
  {
    name: '',
    category: 'malice',
    energy: 0,
    isBuff: false,
    description: '',
    key: '',
  },
  {
    name: '',
    category: 'veracity',
    energy: 0,
    isBuff: false,
    description: '',
    key: '',
  },
  {
    name: '',
    category: 'veracity',
    energy: 0,
    isBuff: false,
    description: '',
    key: '',
  },
  {
    name: '',
    category: 'veracity',
    energy: 0,
    isBuff: false,
    description: '',
    key: '',
  },
];

export const spellPersonalityEffects = {
  persistance: {
    savior: 1,
  },
  recall: {
    savior: 2,
  },
  sacrifice: {
    malice: 3,
  },
};

export const getSpell = (key) =>
  spells.find((spell) => spell.key === key.toLowerCase());

export const getAvailableSpells = (seeker) => seeker.spells.map((spell) => getSpell(spell));

export const increasePersonalityScore = (personality, key) => {
  if (spellPersonalityEffects[key]) {
    Object.entries(spellPersonalityEffects[key]).forEach((effect) => {
      personality[effect[0]] += effect[1];
    });
  }
  return personality;
};
