interface Array<T> {
  sum(this: Array<number>): number;
  product(this: Array<number>): number;
  dropAt(index: number): T[];
  dropProduct(): T[][];
  transpose<T>(this: T[][]): T[][];
  diagonals<T>(this: T[][]): T[][];
}

interface String {
  lines(): string[];
  numbers(): number[];
}
