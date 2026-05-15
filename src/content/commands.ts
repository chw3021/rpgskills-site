export const playerCommands = [
  { cmd: '/rpg dam (d, damage)', desc: 'Show current attack damage' },
  { cmd: '/rpg element (el)', desc: 'Display elemental power and resistance' },
  { cmd: '/rpg skill (s)', desc: 'Open skills GUI' },
  { cmd: '/rpg escape (es)', desc: 'End the current fight' },
  { cmd: '/rpg class (c)', desc: 'Open class GUI' },
  { cmd: '/rpg rank (r)', desc: 'Top 10 class proficiency rankings' },
  { cmd: '/rpg graph (g)', desc: 'Damage dealt to enemies' },
  { cmd: '/rpg gclear (gc)', desc: 'Clear recorded damage' },
  { cmd: '/smith', desc: 'Smith equipment in slot 1 using ingredient in slot 2' },
];

export const partyCommands = [
  { cmd: '/party create', desc: 'Create a party (you become owner)' },
  { cmd: '/party join', desc: 'Join an existing party' },
  { cmd: '/party password', desc: 'Lock party with password' },
  { cmd: '/party invite', desc: 'Invite a player (owner only)' },
  { cmd: '/party kick', desc: 'Kick a player (owner only)' },
  { cmd: '/party leave', desc: 'Leave current party' },
  { cmd: '/party assemble', desc: 'Teleport all members to owner (owner only)' },
  { cmd: '/party list', desc: 'List parties and owners' },
];

export const adminCommands = [
  { cmd: '/rpg exp [amount]', desc: 'Grant experience' },
  { cmd: '/rpg pro [amount]', desc: 'Grant proficiency points' },
  { cmd: '/rpg enchant [enchant] [level]', desc: 'Enchant main-hand item' },
  { cmd: '/rpg enchant clear', desc: 'Remove enchantments from main hand' },
  { cmd: '/rpg elements (elm)', desc: 'Open elements inventory' },
];
