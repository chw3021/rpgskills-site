import fs from 'fs';
import path from 'path';

const javaRoot = path.resolve('c:/rpgskills.github.io/src/main/java/io/github/chw3021/classes');

function walk(d, files = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith('SkillsGui.java')) files.push(p);
  }
  return files;
}

const re = /,\s*(\d+)\s*,\s*skillsInv\s*\)/g;

for (const file of walk(javaRoot)) {
  const text = fs.readFileSync(file, 'utf8');
  const koEnd = text.indexOf('} else {');
  const koPart = koEnd > 0 ? text.slice(0, koEnd) : text;
  const slots = [];
  let m;
  while ((m = re.exec(koPart)) !== null) {
    const slot = Number(m[1]);
    if (slot <= 26) slots.push(slot);
  }
  const unique = [...new Set(slots)].sort((a, b) => a - b);
  console.log(path.basename(file), unique.join(','));
}
