import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ClassCard } from '../components/classes/ClassCard';
import { ImageLightbox } from '../components/ui/ImageLightbox';
import { CraftingGrid } from '../components/crafting/CraftingGrid';
import {
  ARCHETYPES,
  CLASSES,
  ROLES,
  type ArchetypeId,
  type RoleId,
} from '../data/classCatalog';
import { CRAFTING_RECIPES } from '../data/craftingRecipes';
import { useI18n } from '../i18n/useI18n';
import {
  loadClassesPageState,
  saveClassesPageState,
  type ClassesPageTab,
} from '../utils/classesPageState';

export function ClassesPage() {
  const { locale, t } = useI18n();
  const initial = useRef(loadClassesPageState()).current;
  const [tab, setTab] = useState<ClassesPageTab>(initial.tab);
  const [archetypeFilter, setArchetypeFilter] = useState<ArchetypeId | 'all'>(
    initial.archetypeFilter,
  );
  const [roleFilter, setRoleFilter] = useState<RoleId | 'all'>(initial.roleFilter);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const stateRef = useRef({ tab, archetypeFilter, roleFilter });
  stateRef.current = { tab, archetypeFilter, roleFilter };

  const filtered = useMemo(() => {
    return CLASSES.filter((c) => {
      if (archetypeFilter !== 'all' && c.archetype !== archetypeFilter) return false;
      if (roleFilter !== 'all' && c.role !== roleFilter) return false;
      return true;
    });
  }, [archetypeFilter, roleFilter]);

  const loc = locale === 'ko' ? 'ko' : 'en';

  useLayoutEffect(() => {
    const y = initial.scrollY;
    if (y > 0) {
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, y);
      document.documentElement.style.scrollBehavior = prev;
    }
    return () => {
      saveClassesPageState({
        ...stateRef.current,
        scrollY: window.scrollY,
      });
    };
  }, [initial.scrollY]);

  useEffect(() => {
    saveClassesPageState({
      tab,
      archetypeFilter,
      roleFilter,
      scrollY: window.scrollY,
    });
  }, [tab, archetypeFilter, roleFilter]);

  const toggleArchetype = (id: ArchetypeId) => {
    setArchetypeFilter((prev) => (prev === id ? 'all' : id));
  };

  const toggleRole = (id: RoleId) => {
    setRoleFilter((prev) => (prev === id ? 'all' : id));
  };

  return (
    <>
      <PageHeader title={t.classes.pageTitle} description={t.classes.pageDescription} />

      <div className="page-tabs" role="tablist" aria-label={t.classes.tabListLabel}>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'classes'}
          className={tab === 'classes' ? 'page-tab page-tab--active' : 'page-tab'}
          onClick={() => setTab('classes')}
        >
          {t.classes.tabClasses}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'crafting'}
          className={tab === 'crafting' ? 'page-tab page-tab--active' : 'page-tab'}
          onClick={() => setTab('crafting')}
        >
          {t.classes.tabCrafting}
        </button>
      </div>

      {tab === 'classes' && (
        <>
          <section className="guide-block">
            <h2>{t.classes.archetypesTitle}</h2>
            <div className="legend-grid">
              {ARCHETYPES.map((a) => {
                const active = archetypeFilter === a.id;
                return (
                  <button
                    key={a.id}
                    type="button"
                    className={active ? 'legend-card legend-card--active' : 'legend-card'}
                    aria-pressed={active}
                    onClick={() => toggleArchetype(a.id)}
                  >
                    <h3>{a[loc].name}</h3>
                    <p>{a[loc].desc}</p>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="guide-block">
            <h2>{t.classes.rolesTitle}</h2>
            <div className="legend-grid legend-grid--compact">
              {ROLES.map((r) => {
                const active = roleFilter === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    className={active ? 'legend-card legend-card--active' : 'legend-card'}
                    aria-pressed={active}
                    onClick={() => toggleRole(r.id)}
                  >
                    <h3>{r[loc].name}</h3>
                    <p>{r[loc].desc}</p>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="guide-block" id="class-roster">
            <h2>{t.classes.rosterTitle}</h2>
            <p className="meta">{t.classes.rosterHint}</p>
            <div className="class-filters">
              <label>
                {t.classes.filterArchetype}
                <select
                  value={archetypeFilter}
                  onChange={(e) => setArchetypeFilter(e.target.value as ArchetypeId | 'all')}
                >
                  <option value="all">{t.classes.filterAll}</option>
                  {ARCHETYPES.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a[loc].name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {t.classes.filterRole}
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value as RoleId | 'all')}
                >
                  <option value="all">{t.classes.filterAll}</option>
                  {ROLES.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r[loc].name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <p className="meta">
              {t.classes.showingCount.replace('{count}', String(filtered.length))}
            </p>
            <div className="class-grid">
              {filtered.map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </div>
          </section>
        </>
      )}

      {tab === 'crafting' && (
        <section className="guide-block">
          <h2>{t.crafting.title}</h2>
          <p>{t.crafting.intro}</p>
          <p className="notice">
            <strong>{t.crafting.smithTitle}</strong> {t.crafting.smithBody}
          </p>
          <p>{t.crafting.alternateTools}</p>
          <p className="meta">{t.crafting.mirrorNote}</p>
          <p className="meta">
            <strong>{t.crafting.legendMaterial}</strong> · <strong>{t.crafting.legendStick}</strong>
          </p>

          <div className="crafting-list">
            {CRAFTING_RECIPES.map((recipe) => {
              const name = t.crafting.recipeNames[recipe.id as keyof typeof t.crafting.recipeNames];
              return (
                <article key={recipe.id} className="crafting-card">
                  <h3>{name}</h3>
                  <CraftingGrid
                    grid={recipe.grid}
                    materialLabel={t.crafting.legendMaterialShort}
                    stickLabel={t.crafting.legendStickShort}
                  />
                </article>
              );
            })}
          </div>
        </section>
      )}
      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
