// Parse a string and return an array of word arrays with the whitespace removed.
export function parseWords(str: string): string[][] {
  return str.lines().map((l: string) => l.trim().split(/\s+/));
}

// Parse a string and return an array of number arrays.
export function parseNumbers(str: string): number[][] {
  return str.lines().map((l : string) => l.numbers());
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
