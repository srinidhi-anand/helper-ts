import { generateTests, functionalTypes } from "ts-genai-test";
import path from "path";

/**
 * function to generate test cases for all the functions in the src folder
 */
async function main() {
  const promptDetail = {
    outDir: path.resolve(__dirname, "../__tests__/"),
    testFileName: "",
  };
  const inputPrompt: functionalTypes.PromptInput[] = [
    {
      ...promptDetail,
      folderPath: path.resolve(__dirname, "../src"),
      filePath: path.resolve(__dirname, "../src/isNull"),
      functionName: "isNull",
    },
    {
      ...promptDetail,
      folderPath: path.resolve(__dirname, "../src"),
      filePath: path.resolve(__dirname, "../src/isEmptyString"),
      functionName: "isEmptyString",
    },
    {
      ...promptDetail,
      folderPath: path.resolve(__dirname, "../src"),
      filePath: path.resolve(__dirname, "../src/isNullLike"),
      functionName: "isNullLike",
    },
    {
      ...promptDetail,
      folderPath: path.resolve(__dirname, "../src"),
      filePath: path.resolve(__dirname, "../src/isUndefined"),
      functionName: "isUndefined",
    },
  ];
  await generateTests(inputPrompt, true);
}
main();
