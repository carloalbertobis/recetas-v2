import type { Recipe } from "@/lib/recipe";

const sampleFocaccia: Recipe = {
  id: "sample-focaccia",
  name: "Sample - Focaccia",
  description: "Receta de prueba de focaccia.",

  ingredients: [
    {
      id: "sample-focaccia-flour",
      name: "Harina",
      percentage: 100,
    },
    {
      id: "sample-focaccia-water",
      name: "Agua",
      percentage: 75,
    },
    {
      id: "sample-focaccia-oil",
      name: "Aceite de oliva",
      percentage: 8,
    },
    {
      id: "sample-focaccia-salt",
      name: "Sal",
      percentage: 2.5,
    },
    {
      id: "sample-focaccia-yeast",
      name: "Levadura",
      percentage: 1,
    },
  ],

  steps: [
    {
      id: "sample-focaccia-step-1",
      order: 1,
      title: "Mezclado y amasado",
      description:
        "Mezclar la harina, el agua, la levadura y la sal. Amasar hasta obtener una masa homogénea y elástica.",
      duration: "10 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-focaccia-step-2",
      order: 2,
      title: "Reposo inicial",
      description:
        "Dejar reposar la masa cubierta para favorecer la hidratación y relajar el gluten.",
      duration: "30 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-focaccia-step-3",
      order: 3,
      title: "Pliegues",
      description:
        "Realizar varios pliegues durante la primera fermentación para desarrollar la estructura de la masa.",
      duration: "30 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-focaccia-step-4",
      order: 4,
      title: "Fermentación",
      description:
        "Dejar fermentar la masa hasta que aumente claramente de volumen.",
      duration: "2 h",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-focaccia-step-5",
      order: 5,
      title: "Formado",
      description:
        "Pasar la masa a una bandeja bien engrasada y extenderla suavemente sin desgasificarla en exceso.",
      duration: "10 min",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-focaccia-step-6",
      order: 6,
      title: "Segunda fermentación",
      description:
        "Dejar fermentar la masa en la bandeja hasta que esté aireada y ligera.",
      duration: "1 h",
      temperature: "Temperatura ambiente",
    },
    {
      id: "sample-focaccia-step-7",
      order: 7,
      title: "Horneado",
      description:
        "Añadir aceite de oliva y hornear hasta obtener una superficie dorada y una miga bien desarrollada.",
      duration: "20 min",
      temperature: "230 °C",
    },
  ],
};

export default sampleFocaccia;