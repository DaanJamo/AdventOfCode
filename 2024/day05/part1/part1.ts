import { parseNumbers } from "utils";
import "utils";

export default function solve(path: string, verbose: boolean = false): number {
  const [ordStr, updStr] = Deno.readTextFileSync(path).split(/\n\s*\n/);
  const orderMap = new Map<number, number[]>();
  ordStr.lines().map((l) => l.numbers()).forEach(([value, key]) => {
    const values = orderMap.get(key) ?? [];
    values.push(value);
    orderMap.set(key, values);
  });
  const updates = parseNumbers(updStr);
  if (verbose) {
    console.log("ordering:", orderMap.entries(), "updates:", updates);
  }
  const correct = updates.filter((u) =>
    u.every((v, i) => {
      if (orderMap.get(v)) {
        return orderMap.get(v)?.every((r) => {
          return !(u.includes(r) && !u.slice(0, i).includes(r));
        });
      } else return true;
    })
  );
  if (verbose) console.log("correct reports:", correct);
  return correct.map((u) => u[Math.floor(u.length / 2)]).sum();
}
