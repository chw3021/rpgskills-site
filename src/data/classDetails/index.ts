import type { ClassDetailDef } from './types';
import { archerDetail } from './archer';
import { boxerDetail } from './boxer';
import { chemistDetail } from './chemist';
import { fireMageDetail } from './fireMage';
import { berserkerDetail } from './berserker';
import { oceanKnightDetail } from './oceanKnight';
import { swordmanDetail } from './swordman';
import { hunterDetail } from './hunter';
import { sniperDetail } from './sniper';
import { tamerDetail } from './tamer';
import { illusionistDetail } from './illusionist';
import { forgerDetail } from './forger';
import { nobilityDetail } from './nobility';
import { daggerlistDetail } from './daggerlist';
import { cavalrymanDetail } from './cavalryman';
import { broilerDetail } from './broiler';
import { launcherDetail } from './launcher';
import { wrestlerDetail } from './wrestler';
import { vanguardDetail } from './vanguard';
import { gardenerDetail } from './gardener';
import { engineerDetail } from './engineer';
import { frostManDetail } from './frostMan';
import { witheristDetail } from './witherist';
import { sapperDetail } from './sapper';
import { paladinDetail } from './paladin';
import { medicDetail } from './medic';
import { taoistDetail } from './taoist';
import { musicianDetail } from './musician';
import { cookDetail } from './cook';
import { anglerDetail } from './angler';
import { witchDoctorDetail } from './witchDoctor';
import { standardBearerDetail } from './standardBearer';

const CLASS_DETAILS_LIST: ClassDetailDef[] = [
  swordmanDetail,
  archerDetail,
  boxerDetail,
  fireMageDetail,
  chemistDetail,
  oceanKnightDetail,
  berserkerDetail,
  vanguardDetail,
  hunterDetail,
  sniperDetail,
  tamerDetail,
  illusionistDetail,
  forgerDetail,
  nobilityDetail,
  daggerlistDetail,
  cavalrymanDetail,
  broilerDetail,
  launcherDetail,
  wrestlerDetail,
  gardenerDetail,
  engineerDetail,
  frostManDetail,
  witheristDetail,
  sapperDetail,
  paladinDetail,
  medicDetail,
  taoistDetail,
  musicianDetail,
  cookDetail,
  anglerDetail,
  witchDoctorDetail,
  standardBearerDetail,
];

const byId = new Map(CLASS_DETAILS_LIST.map((d) => [d.id, d]));

export function getClassDetail(classId: string): ClassDetailDef | undefined {
  return byId.get(classId);
}

export function getClassDetailIds(): string[] {
  return CLASS_DETAILS_LIST.map((d) => d.id);
}

export type {
  ClassDetailDef,
  ClassSkillDef,
  ClassSkillSection,
  SkillElement,
  SkillIconId,
} from './types';
