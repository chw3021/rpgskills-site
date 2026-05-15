export type FeatureSection = {
  title: string;
  items: string[];
};

export const featureSections: FeatureSection[] = [
  {
    title: 'Combat & Monsters',
    items: [
      'Custom monsters with special abilities and biome-based scaling',
      'Combo system — at 5 stacks, additional monsters spawn; milestones trigger field bosses',
      'Elemental progression: Earth → Wind → Frost → Ocean → Dark → Hyper → Burning → Poison → Wild',
    ],
  },
  {
    title: 'Items & Skills',
    items: [
      'Custom weapons, armor sets, and resource-pack visuals (Beta)',
      'Class skills, proficiency rankings, and damage tracking (/rpg skill, /rpg rank, /rpg graph)',
      'Weapon enhancement with elemental fragments; /smith for equipment',
      'Custom crafting: Knuckle, Wand, Dagger, and alternate-material bows & tools',
    ],
  },
  {
    title: 'Quests & Raids',
    items: [
      'Quest NPCs appear after structure loot — tasks and objectives for players',
      'Boss raids in Jungle, Nether, End (EnderMimic), and Wither Raid (Beta)',
      'After reinstall, delete raid world folders: OverworldRaid, NethercoreRaid, EndercoreRaid, WitherRaid',
    ],
  },
  {
    title: 'Party & Configuration',
    items: [
      'Party system: create, join, invite, kick, password, assemble, list',
      'Multi-language support in config',
      'Per-world enable/disable',
    ],
  },
];
