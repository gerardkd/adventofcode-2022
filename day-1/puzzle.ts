import { readInput } from "../utilities/utilities";

const file = readInput(import.meta.url);

// Part I
{
  const sample = 24000;
  const result = file
    .split("\n\n")
    .map((v) => v.split("\n"))
    .map((v) => v.reduce((a, b) => a + Number(b), 0))
    .sort((a, b) => b - a)
    .shift();

  console.log({ sample, result });
}

// Part II
{
  const sample = 202585;
  const result = file
    .split("\n\n")
    .map((v) => v.split("\n"))
    .map((v) => v.reduce((a, b) => a + Number(b), 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, next) => prev + next, 0);

  console.log({ sample, result });
}
