import { parseNumbers } from "utils/parse.ts";
import { sum, product } from "utils/array.ts";

export default function solve(path: string, verbose: boolean = false): number {
  const mul_exprs = Deno.readTextFileSync(path).match(/mul\(\d+,\d+\)/g)!;
  return sum(mul_exprs.flatMap(parseNumbers).map(product));
}
