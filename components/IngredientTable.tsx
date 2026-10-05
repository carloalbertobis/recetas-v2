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
      <div className="overflow-hidden rounded-xl border border-[#E8DCCB]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F3EBDD] text-left text-sm font-semibold text-[#5C4935]">
              <th className="px-4 py-3">Ingrediente</th>
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
                className="border-t border-[#EFE5D7] hover:bg-[#FCF9F4]"
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
                    className="w-full rounded-lg border border-transparent bg-transparent px-2 py-2 text-[#3F3428] outline-none focus:border-[#D9B27A] focus:bg-white"
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
                    className="w-full rounded-lg border border-transparent bg-transparent px-2 py-2 text-right text-[#3F3428] outline-none focus:border-[#D9B27A] focus:bg-white"
                  />
                </td>

                <td className="px-2 py-2 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      onRemove(ingredient.id)
                    }
                    className="rounded-lg px-2 py-1 text-[#A8947D] hover:bg-[#FDF0E5] hover:text-red-500"
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
        className="mt-3 rounded-lg border border-[#D9C8B3] bg-white px-4 py-2 text-sm font-semibold text-[#6B5843] transition hover:bg-[#F8F1E8]"
      >
        + Añadir ingrediente
      </button>
    </div>
  );
}