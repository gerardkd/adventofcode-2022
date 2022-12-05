import { readInput, readLine } from "../utilities/utilities";

const file = readInput(import.meta.url);

// const sampleStacks: string[][] = [["N", "Z"], ["D", "C", "M"], ["P"]];

const stacks: string[][] = [
  ["G", "P", "N", "R"],
  ["H", "V", "S", "C", "L", "B", "J", "T"],
  ["L", "N", "M", "B", "D", "T"],
  ["B", "S", "P", "V", "R"],
  ["H", "V", "M", "W", "S", "Q", "C", "G"],
  ["J", "B", "D", "C", "S", "Q", "W"],
  ["L", "Q", "F"],
  ["V", "F", "L", "D", "T", "H", "M", "W"],
  ["F", "J", "M", "V", "B", "P", "L"]
];

// Part I
{
  const sample = "CMZ";
  let result = "";

  readLine(file, (line: string) => {
    const [, count, , from, , to] = line.split(" ");
    for (let i = 0; i < +count; i++) {
      const crate = stacks[+from - 1].shift();

      if (crate) {
        stacks[+to - 1].unshift(...[crate]);
      }
    }
  });

  result = stacks.map((s) => s[0]).join("");
  console.log({ sample, result });
}

// Part II
{
  const sample = "MCD";
  let result = "";

  readLine(file, (line: string) => {
    const [, count, , from, , to] = line.split(" ");
    const crates = stacks[+from - 1].splice(0, +count);
    stacks[+to - 1].unshift(...crates);
  });

  result = stacks.map((s) => s[0]).join("");
  console.log({ sample, result });
}
