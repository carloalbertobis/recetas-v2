import type { Recipe } from "@/lib/recipe";

const samplePizza: Recipe = {
  id: "sample-pizza",
  name: "Sample - Pizza",
  description: "Receta de prueba de pizza.",

  ingredients: [
    {
      id: "sample-pizza-flour-0",
      name: "Harina 0",
      percentage: 50,
    },
    {
      id: "sample-pizza-flour-00",
      name: "Harina 00",
      percentage: 50,
    },
    {
      id: "sample-pizza-water",
      name: "Agua",
      percentage: 30,
    },
    {
      id: "sample-pizza-oil",
      name: "Aceite",
      percentage: 10,
    },
    {
      id: "sample-pizza-sugar",
      name: "Azúcar",
      percentage: 5,
    },
    {
      id: "sample-pizza-salt",
      name: "Sal",
      percentage: 5,
    },
  ],

  steps: [
    {
      id: "sample-pizza-step-1",
      order: 1,
      title: "Amasado",
      description:
        "Amasar todos los ingredientes hasta obtener una masa homogénea y elástica.",
      duration: "10 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-pizza-step-2",
      order: 2,
      title: "Reposo",
      description:
        "Dejar reposar la masa cubierta para que se relaje.",
      duration: "30 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-pizza-step-3",
      order: 3,
      title: "División y formado",
      description:
        "Dividir la masa según el peso calculado y formar las piezas.",
      duration: "10 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-pizza-step-4",
      order: 4,
      title: "Fermentación",
      description:
        "Dejar fermentar las piezas hasta alcanzar el punto adecuado.",
      duration: "2 h",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-pizza-step-5",
      order: 5,
      title: "Horneado",
      description:
        "Hornear hasta conseguir el punto de cocción y dorado deseados.",
      duration: "10 min",
      temperature: "250 °C",
    },
  ],
};

export default samplePizza;