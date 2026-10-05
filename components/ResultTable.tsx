type ResultIngredient = {
  id: string;
  name: string;
  percentage: number;
  finalMass: number;
  finalMassPercentage: number;
};

type ResultTableProps = {
  ingredients: ResultIngredient[];
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function ResultTable({
  ingredients,
}: ResultTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-sm font-semibold text-slate-600">
            <th className="px-4 py-3 text-left">
              Ingrediente
            </th>

            <th className="px-4 py-3 text-right">
              % receta
            </th>

            <th className="px-4 py-3 text-right">
              Masa final (g)
            </th>

            <th className="px-4 py-3 text-right">
              % masa final
            </th>
          </tr>
        </thead>

        <tbody>
          {ingredients.map((ingredient) => (
            <tr
              key={ingredient.id}
              className="border-t border-slate-100"
            >
              <td className="px-4 py-3">
                {ingredient.name}
              </td>

              <td className="px-4 py-3 text-right">
                {formatNumber(ingredient.percentage)}
              </td>

              <td className="px-4 py-3 text-right font-medium">
                {formatNumber(ingredient.finalMass)}
              </td>

              <td className="px-4 py-3 text-right">
                {formatNumber(
                  ingredient.finalMassPercentage
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}