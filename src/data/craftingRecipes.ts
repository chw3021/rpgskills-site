export type CraftCell = 'material' | 'stick' | 'empty';

export type CraftRecipe = {
  id: string;
  /** 3×3 rows; each row up to 3 cells */
  grid: CraftCell[][];
};

export const CRAFTING_RECIPES: CraftRecipe[] = [
  {
    id: 'knuckle',
    grid: [
      ['material', 'stick', 'material'],
      ['empty', 'material', 'empty'],
    ],
  },
  {
    id: 'wand',
    grid: [
      ['material', 'empty', 'empty'],
      ['stick', 'empty', 'empty'],
      ['stick', 'empty', 'empty'],
    ],
  },
  {
    id: 'dagger',
    grid: [
      ['material', 'empty', 'empty'],
      ['stick', 'empty', 'empty'],
    ],
  },
];
