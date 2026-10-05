export type Ingredient = {
  id: string;
  name: string;
  percentage: number;
};

export type RecipeStep = {
  id: string;
  order: number;
  title: string;
  description: string;
  duration: string;
  temperature: string;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
};

export type RecipeResult = {
  ingredients: {
    id: string;
    name: string;
    percentage: number;
    finalMass: number;
    finalMassPercentage: number;
  }[];
  requestedMass: number;
  percentageSum: number;
  theoreticalCoefficient: number;
  coefficient: number;
  finalMassTotal: number;
};

export function calculateRecipe(
  ingredients: Ingredient[],
  requestedMass: number
): RecipeResult {
  const validIngredients = ingredients.filter(
    (ingredient) =>
      ingredient.name.trim() !== "" &&
      Number.isFinite(ingredient.percentage)
  );

  if (validIngredients.length === 0) {
    throw new Error("No hay ingredientes válidos.");
  }

  if (!Number.isFinite(requestedMass) || requestedMass <= 0) {
    throw new Error(
      "La masa solicitada debe ser mayor que 0."
    );
  }

  const percentageSum = validIngredients.reduce(
    (sum, ingredient) => sum + ingredient.percentage,
    0
  );

  if (percentageSum <= 0) {
    throw new Error(
      "La suma de los porcentajes debe ser mayor que 0."
    );
  }

  const theoreticalCoefficient =
    requestedMass / percentageSum;

  const coefficient = Math.ceil(
    theoreticalCoefficient
  );

  const calculatedIngredients = validIngredients.map(
    (ingredient) => ({
      id: ingredient.id,
      name: ingredient.name,
      percentage: ingredient.percentage,
      finalMass:
        ingredient.percentage * coefficient,
      finalMassPercentage: 0,
    })
  );

  const finalMassTotal =
    calculatedIngredients.reduce(
      (sum, ingredient) =>
        sum + ingredient.finalMass,
      0
    );

  const resultIngredients =
    calculatedIngredients.map((ingredient) => ({
      ...ingredient,
      finalMassPercentage:
        (ingredient.finalMass / finalMassTotal) *
        100,
    }));

  return {
    ingredients: resultIngredients,
    requestedMass,
    percentageSum,
    theoreticalCoefficient,
    coefficient,
    finalMassTotal,
  };
}