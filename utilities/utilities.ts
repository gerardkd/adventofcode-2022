import { readFileSync } from "fs";
import { fileURLToPath } from "node:url";

/**
 * Read the input.txt file and returns it as a string
 * @param path {string} path to the file
 * @param sample {boolean} read the sample input instead of the puzzle input
 */
export const readInput = (path: string, sample = false) => {
  return readFileSync(fileURLToPath(new URL(sample ? "input_sample.txt" : "input.txt", path)), "utf-8");
};

/**
 * Read input file per line
 * @param file the file contents to read
 * @param callback the function to run on each line
 */
export const readLine = (file: string, callback: (value: any, index: number, arr: any[]) => void) => {
  file.split("\n").forEach(callback);
};
