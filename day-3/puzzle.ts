import { readInput, readLine } from "../utilities/utilities";

const dictionary = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const file = readInput(import.meta.url);

// Part I
{
  const sample = 157;
  let result = 0;

  readLine(file, (rucksack: string) => {
    const len = rucksack.length;
    const c1 = rucksack.substring(0, len / 2);
    const c2 = rucksack.substring(len / 2);

    for (const letter of c1) {
      if (c2.includes(letter)) {
        const low = letter.toLowerCase();
        result += dictionary.indexOf(low) + (low === letter ? 1 : 27);
        break;
      }
    }
  });

  console.log({ sample, result });
}

// Part II
{
  const sample = 70;
  let result = 0;

  const teams: string[][] = [];

  readLine(file, (rucksack: string, index: number) => {
    if (index % 3 === 0) {
      teams.push([rucksack]);
    } else {
      teams[teams.length - 1].push(rucksack);
    }
  });

  for (const [t1, t2, t3] of teams) {
    for (const letter of t1) {
      if (t2.includes(letter) && t3.includes(letter)) {
        const low = letter.toLowerCase();
        result += dictionary.indexOf(low) + (low === letter ? 1 : 27);
        break;
      }
    }
  }

  console.log({ sample, result });
}
