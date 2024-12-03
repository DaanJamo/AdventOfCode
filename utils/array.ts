export function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val);
}

export function product(arr: number[]): number {
  return arr.reduce((acc, val) => acc * val);
}

export function dropAt<T> (arr: T[], index: number): T[] {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function dropProduct<T> (arr: T[]): T[][] {
  return arr.map((_, i) => dropAt(arr, i));
}
