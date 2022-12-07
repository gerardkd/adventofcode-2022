import { readInput } from "../utilities/utilities";

const file = readInput(import.meta.url);

enum MarkerType {
  Message,
  Packet
}

const addToBuffer = (buffer: string[], input: string, index: number, type: MarkerType = MarkerType.Packet): number | false => {
  // Remove first item from the buffer
  if (buffer.length > (type === MarkerType.Packet ? 3 : 13)) {
    buffer.shift();
  }

  // Add new item to the buffer
  buffer.push(input);

  // Check current buffer for unique items
  if (buffer.length === (type === MarkerType.Packet ? 4 : 14)) {
    const found = new Set<string>();

    for (const letter of buffer) {
      if (found.has(letter)) {
        return false;
      }
      found.add(letter);
    }

    // Return found starting position for the marker
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
    const response = addToBuffer(buffer, char, index, MarkerType.Message);

    if (typeof response === "number") {
      result = response;
      break;
    }
  }

  console.log({ sample, result });
}
