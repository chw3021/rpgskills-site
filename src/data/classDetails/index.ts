import type { ClassDetailDef } from './types';
import { swordmanDetail } from './swordman';

const CLASS_DETAILS_LIST: ClassDetailDef[] = [swordmanDetail];

const byId = new Map(CLASS_DETAILS_LIST.map((d) => [d.id, d]));

export function getClassDetail(classId: string): ClassDetailDef | undefined {
  return byId.get(classId);
}

export function getClassDetailIds(): string[] {
  return CLASS_DETAILS_LIST.map((d) => d.id);
}

export type { ClassDetailDef, ClassSkillDef, ClassSkillSection, SkillIconId } from './types';
