const iconBase = `${import.meta.env.BASE_URL}class-icons/`;

/** class id → icon filename (without extension) when asset name differs from id */
const ICON_FILE_ALIASES: Record<string, string> = {
  wrestler: 'wreltler',
};

export function classIconFile(classId: string): string {
  return ICON_FILE_ALIASES[classId] ?? classId;
}

/** Assets in public/class-icons are PNG; prefer png to avoid console 404s for missing webp. */
export function classIconSrc(classId: string, ext: 'png' | 'webp' = 'png'): string {
  return `${iconBase}${classIconFile(classId)}.${ext}`;
}

export const classIconExtensions = ['png', 'webp'] as const;
