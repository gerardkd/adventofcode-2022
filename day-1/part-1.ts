import { readInput } from "../utilities/utilities";

const input = readInput(import.meta.url);

{
  const total = input
    .split("\n\n")
    .map((v) => v.split("\n"))
    .map((v) => v.reduce((a, b) => a + Number(b), 0))
    .sort((a, b) => b - a)
    .shift();

  console.log({ total });
}
