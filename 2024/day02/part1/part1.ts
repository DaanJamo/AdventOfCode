import { parseTextFileNumbers } from "utils";

export default function solve(path: string, verbose: boolean = false): number {
  const reports = parseTextFileNumbers(path);
  if (verbose) console.log(reports.filter(report => !safe(report)));
  return reports.filter(safe).length;
}

// Test if a level is safe, which is the case if:
// - the levels are all increasing OR all decreasing
// - the levels differ by at least one and at most three
export function safe(report: number[]): boolean {
  if (report.length < 2) return true;
  const increasing = report[1] - report[0] > 0;
  // Define with fold/reduce instead?
  for (let i = 1; i < report.length; i++) {
    let diff = report[i] - report[i-1];
    if (!increasing) diff = -diff;
    if (1 > diff || diff > 3) return false;
  }
  return true;
}
