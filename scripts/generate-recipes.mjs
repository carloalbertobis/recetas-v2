import fs from "fs";
import path from "path";

const recipesDirectory = path.join(
  process.cwd(),
  "data",
  "recipes"
);

const outputFile = path.join(
  recipesDirectory,
  "generated.ts"
);

const recipeFiles = fs
  .readdirSync(recipesDirectory)
  .filter(
    (file) =>
      file.endsWith(".ts") &&
      file !== "generated.ts"
  )
  .sort();

const imports = recipeFiles.map((file, index) => {
  const variableName = `recipe${index}`;

  return {
    variableName,
    importLine: `import ${variableName} from "./${file.replace(".ts", "")}";`,
  };
});

const content = `${imports
  .map((item) => item.importLine)
  .join("\n")}

export const recipes = [
${imports.map((item) => `  ${item.variableName},`).join("\n")}
];
`;

fs.writeFileSync(outputFile, content, "utf8");

console.log(
  `✓ Recetas encontradas: ${recipeFiles.length}`
);

recipeFiles.forEach((file) => {
  console.log(`  - ${file}`);
});