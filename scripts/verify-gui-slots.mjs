import { CLASS_GUI_SLOTS } from '../src/data/classGuiSlots.ts';
import { getClassDetail, getClassDetailIds } from '../src/data/classDetails/index.ts';

for (const id of getClassDetailIds()) {
  const detail = getClassDetail(id);
  const count = detail.skillSections.reduce((n, s) => n + s.skills.length, 0);
  const slots = CLASS_GUI_SLOTS[id];
  if (!slots) {
    console.log('MISSING MAP', id, 'skills', count);
    continue;
  }
  if (slots.length !== count) {
    console.log('MISMATCH', id, 'skills', count, 'slots', slots.length);
  }
}
