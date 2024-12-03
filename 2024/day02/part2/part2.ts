import { parseTextFileNumbers } from "utils/parse.ts";
import { dropProduct } from "utils/array.ts";
import { safe } from "../part1/part1.ts";

export default function solve(path: string, verbose: boolean = false): number {
  const reports = parseTextFileNumbers(path);
  return reports.map(dropProduct).filter(as => as.some((a: number[]) => safe(a))).length;
}
