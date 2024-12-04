import { parseTextFileNumbers } from "utils";

export default function solve(path: string, verbose: boolean = false): number {
  const numbers = parseTextFileNumbers(path);
  const list1 = numbers.map(nums => nums[0]);
  const list2 = numbers.map(nums => nums[1]);

  if (verbose) {
    console.log("List 1: ", list1, "\nList 2: ", list2);
  }

  return similarity(list1, list2);
}

function similarity(list1: number[], list2: number[]): number {
  return list1.reduce((acc, num) => acc + num * list2.filter((n) => n===num).length, 0);
}
