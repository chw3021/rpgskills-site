import { CLASS_GUI_SLOTS } from '../data/classGuiSlots';
import type {
  ClassDetailDef,
  ClassSkillDef,
  ClassSkillSection,
  SkillIconId,
} from '../data/classDetails';

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

/** classGuiSlots lists sorted slot indices; legacy flatten-order arrays skip strict sort check. */
function isSortedAscending(slots: readonly number[]): boolean {
  for (let i = 1; i < slots.length; i++) {
    if (slots[i]! < slots[i - 1]!) return false;
  }
  return true;
}

function usesFlattenIndexMap(slots: readonly number[] | undefined, flatLength: number): boolean {
  if (!slots || slots.length !== flatLength) return false;
  return !isSortedAscending(slots);
}

export function buildSkillTree(detail: ClassDetailDef): PlacedSkill[] {
  const flat = flattenSkills(detail);
  const slots = CLASS_GUI_SLOTS[detail.id];
  const slotBySkillId = new Map<string, number>();

  const placed: PlacedSkill[] = flat.map((entry, index) => {
    let guiSlot: number;
    if (usesFlattenIndexMap(slots, flat.length)) {
      guiSlot = slots![index]!;
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
