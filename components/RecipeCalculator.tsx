"use client";

import { useState } from "react";

import {
  calculateRecipe,
  Ingredient,
  RecipeResult,
} from "@/lib/recipe";

import IngredientTable from "./IngredientTable";
import ResultTable from "./ResultTable";
import MetricCard from "./MetricCard";

type CalculationMethod = "total" | "pieces";

const initialIngredients: Ingredient[] = [
  {
    id: crypto.randomUUID(),
    name: "Harina 0",
    percentage: 50,
  },
  {
    id: crypto.randomUUID(),
    name: "Harina 00",
    percentage: 50,
  },
  {
    id: crypto.randomUUID(),
    name: "Agua",
    percentage: 30,
  },
  {
    id: crypto.randomUUID(),
    name: "Aceite",
    percentage: 10,
  },
  {
    id: crypto.randomUUID(),
    name: "Azúcar",
    percentage: 5,
  },
  {
    id: crypto.randomUUID(),
    name: "Sal",
    percentage: 5,
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function RecipeCalculator() {
  const [method, setMethod] =
    useState<CalculationMethod>("total");

  const [requestedMass, setRequestedMass] =
    useState<string>("10000");

  const [numberOfPieces, setNumberOfPieces] =
    useState<string>("10");

  const [pieceWeight, setPieceWeight] =
    useState<string>("1000");

  const [ingredients, setIngredients] =
    useState<Ingredient[]>(initialIngredients);

  const [result, setResult] =
    useState<RecipeResult | null>(null);

  const [error, setError] =
    useState<string>("");

  function updateIngredient(
    id: string,
    field: "name" | "percentage",
    value: string
  ) {
    setIngredients((current) =>
      current.map((ingredient) => {
        if (ingredient.id !== id) {
          return ingredient;
        }

        if (field === "name") {
          return {
            ...ingredient,
            name: value,
          };
        }

        const numericValue = Number(
          value.replace(",", ".")
        );

        return {
          ...ingredient,
          percentage: Number.isFinite(numericValue)
            ? numericValue
            : 0,
        };
      })
    );
  }

  function addIngredient() {
    setIngredients((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        name: "",
        percentage: 0,
      },
    ]);
  }

  function removeIngredient(id: string) {
    setIngredients((current) =>
      current.filter(
        (ingredient) => ingredient.id !== id
      )
    );
  }

  function calculate() {
    setError("");

    let mass = 0;

    if (method === "total") {
      mass = Number(
        requestedMass.replace(",", ".")
      );
    } else {
      const pieces = Number(
        numberOfPieces.replace(",", ".")
      );

      const weight = Number(
        pieceWeight.replace(",", ".")
      );

      mass = pieces * weight;
    }

    try {
      const calculated = calculateRecipe(
        ingredients,
        mass
      );

      setResult(calculated);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(
          "Se ha producido un error al calcular la receta."
        );
      }

      setResult(null);
    }
  }

  const percentageSum = ingredients.reduce(
    (sum, ingredient) =>
      sum + (Number.isFinite(ingredient.percentage)
        ? ingredient.percentage
        : 0),
    0
  );

  return (
    <div className="space-y-6">

      {/* CONFIGURACIÓN */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Configuración de la receta
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Define la cantidad final que quieres obtener.
          </p>
        </div>

        {/* MÉTODO */}
        <div className="grid gap-3 sm:grid-cols-2">

          <button
            type="button"
            onClick={() => setMethod("total")}
            className={`rounded-xl border p-4 text-left transition ${
              method === "total"
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <div className="font-semibold text-slate-800">
              Masa total
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Introducir directamente los gramos
              finales.
            </div>
          </button>

          <button
            type="button"
            onClick={() => setMethod("pieces")}
            className={`rounded-xl border p-4 text-left transition ${
              method === "pieces"
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <div className="font-semibold text-slate-800">
              Número de piezas
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Calcular a partir del número de piezas
              y su peso.
            </div>
          </button>

        </div>

        {/* INPUTS */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {method === "total" ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Masa total (g)
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={requestedMass}
                onChange={(event) =>
                  setRequestedMass(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.currentTarget.blur();
                  }
                }}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          ) : (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Número de piezas
                </label>

                <input
                  type="number"
                  min="1"
                  step="1"
                  value={numberOfPieces}
                  onChange={(event) =>
                    setNumberOfPieces(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.currentTarget.blur();
                    }
                  }}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Peso por pieza (g)
                </label>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={pieceWeight}
                  onChange={(event) =>
                    setPieceWeight(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.currentTarget.blur();
                    }
                  }}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </>
          )}

        </div>
      </section>

      {/* INGREDIENTES */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Ingredientes
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Introduce los porcentajes de la receta.
            </p>
          </div>

          <div className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-600">
            Suma: {formatNumber(percentageSum)} %
          </div>

        </div>

        <IngredientTable
          ingredients={ingredients}
          onChange={updateIngredient}
          onAdd={addIngredient}
          onRemove={removeIngredient}
        />

      </section>

      {/* BOTÓN CALCULAR */}
      <div className="flex flex-col gap-3">

        <button
          type="button"
          onClick={calculate}
          className="w-full rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
        >
          CALCULAR RECETA
        </button>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

      </div>

      {/* RESULTADOS */}
      {result && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Resultado
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Cantidades calculadas según los porcentajes
              introducidos.
            </p>
          </div>

          {/* MÉTRICAS */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <MetricCard
              label="Masa solicitada"
              value={`${formatNumber(
                result.requestedMass
              )} g`}
            />

            <MetricCard
              label="Suma porcentajes"
              value={`${formatNumber(
                result.percentageSum
              )} %`}
            />

            <MetricCard
              label="Coeficiente"
              value={formatNumber(
                result.coefficient
              )}
              highlight
            />

            <MetricCard
              label="Masa final"
              value={`${formatNumber(
                result.finalMassTotal
              )} g`}
            />

          </div>

          {/* TABLA */}
          <ResultTable
            ingredients={result.ingredients}
          />

        </section>
      )}

    </div>
  );
}