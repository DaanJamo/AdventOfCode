import { parseTextFileNumbers } from "utils";

export default function solve(path: string, verbose: boolean = false): number {
  const numbers = parseTextFileNumbers(path);
  const list1 = numbers.map(nums => nums[0]);
  const list2 = numbers.map(nums => nums[1]);

  if (verbose) {
    console.log("List 1: ", list1, "\nList2: ", list2);
  }

  return calculateDistance(list1, list2);
}

// Calculate the total distance between two lists,
// which defined as the difference between the sorted pairs
function calculateDistance(list1: number[], list2: number[]): number {
  list1.sort();
  list2.sort();
  if (list1.length != list2.length) {
    throw new Error("Lists are not of the same size!");
  }

  let distance = 0;
  for (let i = 0; i < list1.length; i++) {
    distance += Math.abs(list2[i] - list1[i]);
  }

  return distance;
}
