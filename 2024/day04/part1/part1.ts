import "utils"

export default function solve(path: string, verbose: boolean = false): number {
  const horizontal = Deno.readTextFileSync(path).lines();
  const vertical = horizontal.map(l => l.split("")).transpose().map(l => l.join(""));
  const diag_hor = horizontal.map(l => l.split("")).diagonals().map(l => l.join(""));
  const diag_vert = horizontal.map(l => l.split("").reverse()).diagonals().map(l => l.join(""));
  if (verbose) console.log("h:", horizontal, "v:", vertical, "dh:", diag_hor, "dv", diag_vert);

  const regex = /(?=(XMAS|SAMX))/g;
  const countMatches = (grid: string[]) => { return grid.map(l => [...l.matchAll(regex)].length).sum() }  

  return countMatches(horizontal) + countMatches(vertical) + countMatches(diag_hor) + countMatches(diag_vert);
}
