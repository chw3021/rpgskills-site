import fs from 'fs';
import path from 'path';

const javaRoot = path.resolve('c:/rpgskills.github.io/src/main/java/io/github/chw3021/classes');
const outFile = path.resolve('c:/rpgskills-site/src/data/classGuiSlots.ts');

const CLASS_TO_GUI = {
  swordman: 'SwordSkillsGui',
  berserker: 'BerSkillsGui',
  hunter: 'HunSkillsGui',
  archer: 'ArchSkillsGui',
  sniper: 'SnipSkillsGui',
  launcher: 'LaunSkillsGui',
  boxer: 'BoxSkillsGui',
  wreltler: 'WreSkillsGui',
  tamer: 'TamSkillsGui',
  illusionist: 'IllSkillsGui',
  fireMage: 'FireSkillsGui',
  chemist: 'CheSkillsGui',
  forger: 'ForSkillsGui',
  nobility: 'NobSkillsGui',
  oceanKnight: 'OceSkillsGui',
  daggerlist: 'DaggerlistSkillsGui',
  broiler: 'BroSkillsGui',
  vanguard: 'VanguardSkillsGui',
  cavalryman: 'CavalrySkillsGui',
  gardener: 'GardSkillsGui',
  engineer: 'EngSkillsGui',
  frostMan: 'FrostSkillsGui',
  witherist: 'WitSkillsGui',
  sapper: 'SapperSkillsGui',
  paladin: 'PalSkillsGui',
  medic: 'MedSkillsGui',
  taoist: 'TaoSkillsGui',
  musician: 'MusSkillsGui',
  cook: 'CookSkillsGui',
  angler: 'AngSkillsGui',
  witchDoctor: 'WdcSkillsGui',
  standardBearer: 'BearerSkillsGui',
};

const slotRe = /,\s*(\d+)\s*,\s*skillsInv\s*\)/g;
const profGateRe = /if\s*\(\s*(?:Proficiency\.getpro\s*\(\s*p\s*\)|pro)\s*<\s*1\s*\)/;
const koStartRe = /ko_kr/;
const profFooterRe = /itemset\s*\(\s*"현재 숙련도"/;
const limit2ElseRe =
  /\}\s*else\s*if\s*\(\s*(?:Proficiency\.getpro\s*\(\s*p\s*\)|pro)\s*<\s*2(?:\s*&&\s*(?:Proficiency\.getpro\s*\(\s*p\s*\)|pro)\s*>=\s*1)?\s*\)\s*\{[\s\S]*?\}\s*else\s*\{([\s\S]*?)(?=\n\s*itemset\s*\(\s*"현재 숙련도")/;

function findGuiPath(basename) {
  for (const d of fs.readdirSync(javaRoot, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const p = path.join(d.name, `${basename}.java`);
    if (fs.existsSync(path.join(javaRoot, p))) return p;
  }
  return `${basename}.java`;
}

function slotsFrom(text) {
  const slots = [];
  let m;
  while ((m = slotRe.exec(text)) !== null) {
    const slot = Number(m[1]);
    if (slot >= 0 && slot <= 26) slots.push(slot);
  }
  return slots;
}

function extractKoBlock(text) {
  const start = text.search(koStartRe);
  if (start < 0) return text;
  const afterKo = text.slice(start);
  const footer = afterKo.indexOf('Obtained.itemset');
  const segment = footer >= 0 ? afterKo.slice(0, footer) : afterKo;
  const matches = [...segment.matchAll(/\}\s*else\s*\{/g)];
  if (matches.length === 0) return segment;
  const last = matches[matches.length - 1];
  return segment.slice(0, last.index);
}

function extractSlots(guiFile) {
  const file = path.join(javaRoot, findGuiPath(guiFile));
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, 'utf8');
  const ko = extractKoBlock(text);
  const gate = ko.search(profGateRe);
  if (gate < 0) {
    const footer = ko.search(profFooterRe);
    const flat = footer >= 0 ? ko.slice(0, footer) : ko;
    return slotsFrom(flat);
  }
  const basePart = ko.slice(0, gate);
  const limitMatch = ko.match(limit2ElseRe);
  const limitPart = limitMatch?.[1] ?? '';
  return [...slotsFrom(basePart), ...slotsFrom(limitPart)];
}

const lines = [
  '// Auto-generated from *SkillsGui.java (Korean, fully unlocked layout).',
  '// Regenerate: node scripts/generate-gui-slot-maps.mjs',
  '',
  '/** Inventory slot (loc) per skill in flatten order: base → limit1 → limit2 */',
  'export const CLASS_GUI_SLOTS: Record<string, readonly number[]> = {',
];

for (const [classId, gui] of Object.entries(CLASS_TO_GUI)) {
  const slots = extractSlots(gui);
  if (!slots?.length) {
    console.warn('Missing', gui);
    continue;
  }
  lines.push(`  ${classId}: [${slots.join(', ')}],`);
  console.log(classId, slots.length);
}

lines.push('};', '');
fs.writeFileSync(outFile, lines.join('\n'));
console.log('Wrote', outFile);
