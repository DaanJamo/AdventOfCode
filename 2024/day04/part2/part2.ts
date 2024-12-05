import "utils"

export default function solve(path: string, verbose: boolean = false): number {
  const grid = Deno.readTextFileSync(path).lines().map(r => r.split(""));
  let total = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (grid[i][j] === "A") {
        const l = [grid[i - 1][j - 1], grid[i + 1][j + 1]].sort().join("") === "MS";
        const r = [grid[i + 1][j - 1], grid[i - 1][j + 1]].sort().join("") === "MS";

        if (l && r) total++; 
      }
    }
  }
  return total;
}
