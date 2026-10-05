import type { Recipe } from "@/lib/recipe";

const sampleBrioche: Recipe = {
  id: "sample-brioche",
  name: "Sample - Brioche",
  description: "Receta de prueba de brioche.",

  ingredients: [
    {
      id: "sample-brioche-flour",
      name: "Harina",
      percentage: 100,
    },
    {
      id: "sample-brioche-milk",
      name: "Leche",
      percentage: 40,
    },
    {
      id: "sample-brioche-eggs",
      name: "Huevo",
      percentage: 30,
    },
    {
      id: "sample-brioche-butter",
      name: "Mantequilla",
      percentage: 25,
    },
    {
      id: "sample-brioche-sugar",
      name: "Azúcar",
      percentage: 15,
    },
    {
      id: "sample-brioche-salt",
      name: "Sal",
      percentage: 2,
    },
    {
      id: "sample-brioche-yeast",
      name: "Levadura",
      percentage: 2,
    },
  ],

  steps: [
    {
      id: "sample-brioche-step-1",
      order: 1,
      title: "Mezclado",
      description:
        "Mezclar la harina, la leche, los huevos, el azúcar y la levadura hasta integrar todos los ingredientes.",
      duration: "5 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-brioche-step-2",
      order: 2,
      title: "Amasado",
      description:
        "Amasar hasta desarrollar el gluten y obtener una masa lisa y elástica.",
      duration: "15 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-brioche-step-3",
      order: 3,
      title: "Incorporación de la mantequilla",
      description:
        "Añadir la mantequilla poco a poco y continuar amasando hasta que quede completamente integrada.",
      duration: "10 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-brioche-step-4",
      order: 4,
      title: "Primera fermentación",
      description:
        "Dejar fermentar la masa cubierta hasta que aumente claramente de volumen.",
      duration: "2 h",
      temperature: "24 °C",
    },
    {
      id: "sample-brioche-step-5",
      order: 5,
      title: "División y formado",
      description:
        "Dividir la masa según el peso deseado y formar las piezas.",
      duration: "15 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-brioche-step-6",
      order: 6,
      title: "Segunda fermentación",
      description:
        "Dejar fermentar las piezas hasta que estén aireadas y hayan aumentado notablemente de volumen.",
      duration: "1 h 30 min",
      temperature: "24 °C",
    },
    {
      id: "sample-brioche-step-7",
      order: 7,
      title: "Horneado",
      description:
        "Hornear hasta que el brioche esté bien dorado y completamente cocido en su interior.",
      duration: "20 min",
      temperature: "180 °C",
    },
  ],
};

export default sampleBrioche;