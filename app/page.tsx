import RecipeCalculator from "@/components/RecipeCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Calculadora de recetas
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Calcula cantidades de ingredientes a partir de
            porcentajes, masa total o número de piezas.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
        <RecipeCalculator />
      </div>
    </main>
  );
}