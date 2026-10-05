"use client";

import { Ingredient } from "@/lib/recipe";

type IngredientTableProps = {
  ingredients: Ingredient[];
  onChange: (
    id: string,
    field: "name" | "percentage",
    value: string
  ) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
};

export default function IngredientTable({
  ingredients,
  onChange,
  onAdd,
  onRemove,
}: IngredientTableProps) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left text-sm font-semibold text-slate-600">
              <th className="px-4 py-3">
                Ingrediente
              </th>

              <th className="w-36 px-4 py-3 text-right">
                % receta
              </th>

              <th className="w-12 px-2 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {ingredients.map((ingredient) => (
              <tr
                key={ingredient.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(event) =>
                      onChange(
                        ingredient.id,
                        "name",
                        event.target.value
                      )
                    }
                    className="w-full rounded-lg border border-transparent bg-transparent px-2 py-2 outline-none focus:border-blue-300 focus:bg-white"
                  />
                </td>

                <td className="px-4 py-2">
                  <input
                    type="number"
                    step="0.01"
                    value={ingredient.percentage}
                    onChange={(event) =>
                      onChange(
                        ingredient.id,
                        "percentage",
                        event.target.value
                      )
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.currentTarget.blur();
                      }
                    }}
                    className="w-full rounded-lg border border-transparent bg-transparent px-2 py-2 text-right outline-none focus:border-blue-300 focus:bg-white"
                  />
                </td>

                <td className="px-2 py-2 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      onRemove(ingredient.id)
                    }
                    className="rounded-lg px-2 py-1 text-slate-400 hover:bg-red-50 hover:text-red-500"
                    title="Eliminar ingrediente"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="mt-3 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
      >
        + Añadir ingrediente
      </button>
    </div>
  );
}