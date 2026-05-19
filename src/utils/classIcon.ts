const iconBase = `${import.meta.env.BASE_URL}class-icons/`;

export function classIconSrc(classId: string, ext: 'png' | 'webp' = 'webp'): string {
  return `${iconBase}${classId}.${ext}`;
}

export const classIconExtensions = ['webp', 'png'] as const;
