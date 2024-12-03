// Parse a string and return an array of word arrays with the whitespace removed.
export function parseWords(str: string): string[][] {
  const lines = str.trim().split(/\r?\n/);
  const words = lines.map((l: string) => l.trim().split(/\s+/));
  return words;
}

// Parse a string and return an array of number arrays.
export function parseNumbers(str: string): number[][] {
  const numbers = str.trim().split(/\r?\n/).map((line) => {
    const matches = line.match(/\d+/g);
    return matches ? matches.map(Number) : [];
  });
  return numbers;
}

// Parse a text file and return an array of word arrays with the whitespace removed.
export function parseTextFileWords(path: string): string[][] {
  const file = Deno.readTextFileSync(path);
  return parseWords(file);
}

// Parse a text file and return an array of number arrays.
export function parseTextFileNumbers(path: string): number[][] {
  const file = Deno.readTextFileSync(path);
  return parseNumbers(file);
}
