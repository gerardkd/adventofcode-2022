import { readInput, readLine } from "../utilities/utilities";

const scores = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["X", 1],
  ["Y", 2],
  ["Z", 3]
]);

const file = readInput(import.meta.url);
const games: string[][] = [];
readLine(file, (val: string) => games.push(val.split(" ")));

// Part I
{
  const sample = 15;
  let result = 0;

  const play = (opponent: string, me: string) => {
    const myScore = scores.get(me) as number;

    if (scores.get(opponent) === myScore) {
      return 3 + myScore;
    }

    if ((me === "X" && opponent === "C") || (me === "Z" && opponent === "B") || (me === "Y" && opponent === "A")) {
      return 6 + myScore;
    }

    // lose
    return myScore;
  };

  for (const [opponent, me] of games) {
    result += play(opponent, me);
  }

  console.log({ sample, result });
}

// Part II
{
  const sample = 12;
  let result = 0;

  const moves: Record<string, [string, string]> = {
    A: ["Y", "Z"],
    B: ["Z", "X"],
    C: ["X", "Y"]
  };

  const play = (opponent: string, me: string): number => {
    // Draw
    if (me === "Y") {
      return 3 + scores.get(opponent)!;
    }

    return me === "X" ? scores.get(moves[opponent][1])! : scores.get(moves[opponent][0])! + 6;
  };

  for (const [opponent, me] of games) {
    result += play(opponent, me);
  }

  console.log({ sample, result });
}
