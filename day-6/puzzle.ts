import { readInput } from "../utilities/utilities";

const file = readInput(import.meta.url);

enum Markertype {
  Message,
  Packet
}

const addToBuffer = (buffer: string[], input: string, index: number, type: Markertype = Markertype.Packet): number | false => {
  if (buffer.length > (type === Markertype.Packet ? 3 : 13)) {
    buffer.shift();
  }

  buffer.push(input);

  if (buffer.length === (type === Markertype.Packet ? 4 : 14)) {
    const found: string[] = [];

    for (const letter of buffer) {
      if (found.includes(letter)) {
        return false;
      }
      found.push(letter);
    }

    return index + 1;
  }

  return false;
};

// Part I
{
  const sample = 7;
  let result = 0;
  const buffer: string[] = [];

  for (const [index, char] of file.split("").entries()) {
    const response = addToBuffer(buffer, char, index);

    if (typeof response === "number") {
      result = response;
      break;
    }
  }

  console.log({ sample, result });
}

{
  const sample = 19;
  let result = 0;
  const buffer: string[] = [];

  for (const [index, char] of file.split("").entries()) {
    const response = addToBuffer(buffer, char, index, Markertype.Message);

    if (typeof response === "number") {
      result = response;
      break;
    }
  }

  console.log({ sample, result });
}
