const iconBase = `${import.meta.env.BASE_URL}class-icons/`;

/** class id → icon filename (without extension) when asset name differs from id */
const ICON_FILE_ALIASES: Record<string, string> = {
  wrestler: 'wreltler',
};

export function classIconFile(classId: string): string {
  return ICON_FILE_ALIASES[classId] ?? classId;
}

export function classIconSrc(classId: string, ext: 'png' | 'webp' = 'webp'): string {
  return `${iconBase}${classIconFile(classId)}.${ext}`;
}

export const classIconExtensions = ['webp', 'png'] as const;
