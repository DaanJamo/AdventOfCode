import { parseNumbers } from "utils/parse.ts";
import { sum, product } from "utils/array.ts";

export default function solve(path: string, verbose: boolean = false): number {
  const expr = Deno.readTextFileSync(path);
  let ignored = false;
  let total = 0;
  expr.match(/do\(\)|don't\(\)|mul\(\d+,\d+\)/gm)!.forEach(m => {
    if (m.match(/do\(\)/)) ignored = false;
    if (m.match(/don't\(\)/)) ignored = true;
    if (m.match(/mul\(\d+,\d+\)/) && !ignored) total += sum(parseNumbers(m).map(product));
  });
  return total;
}
