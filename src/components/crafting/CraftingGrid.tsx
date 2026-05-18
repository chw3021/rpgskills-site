import type { CraftCell } from '../../data/craftingRecipes';

type CraftingGridProps = {
  grid: CraftCell[][];
  materialLabel: string;
  stickLabel: string;
};

function cellLabel(cell: CraftCell, materialLabel: string, stickLabel: string): string {
  if (cell === 'material') return materialLabel;
  if (cell === 'stick') return stickLabel;
  return '';
}

export function CraftingGrid({ grid, materialLabel, stickLabel }: CraftingGridProps) {
  const cols = Math.max(...grid.map((row) => row.length), 3);

  return (
    <div className="crafting-grid" aria-hidden>
      {grid.map((row, ri) => (
        <div key={ri} className="crafting-row">
          {Array.from({ length: cols }, (_, ci) => {
            const cell = row[ci] ?? 'empty';
            const label = cellLabel(cell, materialLabel, stickLabel);
            return (
              <div
                key={ci}
                className={`crafting-cell crafting-cell--${cell}`}
                title={label || undefined}
              >
                {label ? <span>{label.charAt(0)}</span> : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
