import { readInput, readLine } from "../utilities/utilities";

const file = readInput(import.meta.url, true);

// Part I
{
  const sample = 2;
  let result = 0;

  readLine(file, (line: string) => {
    const [start1, end1, start2, end2] = line.split(/[-,]/).map(Number);

    if ((start1 >= start2 && end1 <= end2) || (start2 >= start1 && end2 <= end1)) {
      result++;
    }
  });

  console.log({ sample, result });
}

// Part II
{
  const sample = 4;
  let result = 0;

  readLine(file, (line: string) => {
    const [start1, end1, start2, end2] = line.split(/[-,]/).map(Number);

    if (!(start1 > end2 || start2 > end1)) {
      result++;
    }
  });

  console.log({ sample, result });
}
