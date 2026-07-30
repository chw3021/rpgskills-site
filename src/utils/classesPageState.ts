import type { ArchetypeId, RoleId } from '../data/classCatalog';

const STORAGE_KEY = 'rpgskills-classes-page';

export type ClassesPageTab = 'classes' | 'crafting';

export type ClassesPageState = {
  scrollY: number;
  tab: ClassesPageTab;
  archetypeFilter: ArchetypeId | 'all';
  roleFilter: RoleId | 'all';
};

const DEFAULT_STATE: ClassesPageState = {
  scrollY: 0,
  tab: 'classes',
  archetypeFilter: 'all',
  roleFilter: 'all',
};

function isTab(value: unknown): value is ClassesPageTab {
  return value === 'classes' || value === 'crafting';
}

export function loadClassesPageState(): ClassesPageState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...DEFAULT_STATE };
    }
    const parsed = JSON.parse(raw) as Partial<ClassesPageState>;
    return {
      scrollY: typeof parsed.scrollY === 'number' ? parsed.scrollY : 0,
      tab: isTab(parsed.tab) ? parsed.tab : 'classes',
      archetypeFilter: (parsed.archetypeFilter as ArchetypeId | 'all') ?? 'all',
      roleFilter: (parsed.roleFilter as RoleId | 'all') ?? 'all',
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveClassesPageState(state: ClassesPageState): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota / private mode
  }
}
