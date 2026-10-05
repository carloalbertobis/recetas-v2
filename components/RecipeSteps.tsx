import type { RecipeStep } from "@/lib/recipe";

type RecipeStepsProps = {
  steps: RecipeStep[];
};

export default function RecipeSteps({
  steps,
}: RecipeStepsProps) {
  if (!steps || steps.length === 0) {
    return null;
  }

  const orderedSteps = [...steps].sort(
    (a, b) => a.order - b.order
  );

  return (
    <section className="mt-8 border-t border-slate-200 pt-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-800">
          Proceso de elaboración
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Pasos recomendados para preparar esta receta.
        </p>
      </div>

      <div className="space-y-4">
        {orderedSteps.map((step) => (
          <div
            key={step.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8842B] text-sm font-bold text-white">
                {step.order}
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">
                  {step.title}
                </h4>

                <div className="text-xs text-slate-500">
                  ⏱ {step.duration} · 🌡 {step.temperature}
                </div>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}