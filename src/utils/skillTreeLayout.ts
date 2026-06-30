import { CLASS_GUI_SLOTS } from '../data/classGuiSlots';
import type {
  ClassDetailDef,
  ClassSkillDef,
  ClassSkillSection,
  SkillIconId,
} from '../data/classDetails';

/**
 * In-game skill tree layout for class detail pages.
 * - Slot order: {@link CLASS_GUI_SLOTS} when its length matches flattened skills (e.g. vanguard).
 * - Vertical combos: `guiColumn` on {@link ClassSkillDef} keeps base → limit1 → limit2 in one column
 *   when slot maps are missing (see vanguard.ts, sapper.ts, gardener.ts).
 */

export type FlatSkill = {
  skill: ClassSkillDef;
  section: ClassSkillSection;
};

export type PlacedSkill = FlatSkill & {
  guiSlot: number;
  row: number;
  col: number;
  displayIcon: SkillIconId;
};

export const SKILL_TREE_COLS = 9;
export const SKILL_TREE_ROWS = 3;

export function flattenSkills(detail: ClassDetailDef): FlatSkill[] {
  return detail.skillSections.flatMap((section) =>
    section.skills.map((skill) => ({ skill, section })),
  );
}

function findSkill(detail: ClassDetailDef, skillId: string): ClassSkillDef | undefined {
  for (const section of detail.skillSections) {
    const found = section.skills.find((s) => s.id === skillId);
    if (found) return found;
  }
  return undefined;
}

function inferGuiSlot(
  entry: FlatSkill,
  index: number,
  flat: FlatSkill[],
  detail: ClassDetailDef,
  slotBySkillId: Map<string, number>,
): number {
  const sectionRow =
    entry.section.id === 'base' ? 0 : entry.section.id === 'limit1' ? 1 : 2;

  if (entry.skill.guiColumn != null) {
    return sectionRow * SKILL_TREE_COLS + entry.skill.guiColumn;
  }

  if (entry.skill.chainOf) {
    const parentSlot = slotBySkillId.get(entry.skill.chainOf);
    if (parentSlot != null) {
      const parentCol = parentSlot % SKILL_TREE_COLS;
      return sectionRow * SKILL_TREE_COLS + parentCol;
    }
    const parent = findSkill(detail, entry.skill.chainOf);
    if (parent) {
      const parentIndex = flat.findIndex((f) => f.skill.id === parent.id);
      if (parentIndex >= 0 && slotBySkillId.has(parent.id)) {
        const parentCol = slotBySkillId.get(parent.id)! % SKILL_TREE_COLS;
        return sectionRow * SKILL_TREE_COLS + parentCol;
      }
    }
  }

  if (sectionRow === 0) {
    const base = detail.skillSections.find((s) => s.id === 'base');
    const col = base?.skills.findIndex((s) => s.id === entry.skill.id) ?? index;
    return col;
  }

  const col = entry.section.skills.findIndex((s) => s.id === entry.skill.id);
  return sectionRow * SKILL_TREE_COLS + Math.max(0, col);
}

export function buildSkillTree(detail: ClassDetailDef): PlacedSkill[] {
  const flat = flattenSkills(detail);
  const slots = CLASS_GUI_SLOTS[detail.id];
  const slotBySkillId = new Map<string, number>();

  const placed: PlacedSkill[] = flat.map((entry, index) => {
    let guiSlot: number;
    if (slots && slots.length === flat.length && slots[index] != null) {
      guiSlot = slots[index]!;
    } else {
      guiSlot = inferGuiSlot(entry, index, flat, detail, slotBySkillId);
    }
    slotBySkillId.set(entry.skill.id, guiSlot);
    const row = Math.floor(guiSlot / SKILL_TREE_COLS);
    const col = guiSlot % SKILL_TREE_COLS;
    return {
      ...entry,
      guiSlot,
      row,
      col,
      displayIcon: entry.skill.icon,
    };
  });

  const baseIconByCol = new Map<number, SkillIconId>();
  for (const node of placed) {
    if (node.row === 0) {
      baseIconByCol.set(node.col, node.skill.icon);
    }
  }
  for (const node of placed) {
    const rootIcon = baseIconByCol.get(node.col);
    if (rootIcon) {
      node.displayIcon = rootIcon;
    }
  }

  return placed;
}

export function groupSkillsByColumn(placed: PlacedSkill[]): Map<number, PlacedSkill[]> {
  const byCol = new Map<number, PlacedSkill[]>();
  for (const node of placed) {
    const list = byCol.get(node.col) ?? [];
    list.push(node);
    byCol.set(node.col, list);
  }
  for (const list of byCol.values()) {
    list.sort((a, b) => a.row - b.row);
  }
  return byCol;
}
