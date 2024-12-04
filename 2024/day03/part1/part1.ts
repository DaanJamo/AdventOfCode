export default function solve(path: string, verbose: boolean = false): number {
  const mul_exprs = Deno.readTextFileSync(path).match(/mul\(\d+,\d+\)/g)!;
  return mul_exprs.map(m => m.numbers().product()).sum();
}
