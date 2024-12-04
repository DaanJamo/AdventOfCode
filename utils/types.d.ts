interface Array<T> {
  sum(this: Array<number>): number;
  product(this: Array<number>): number;
  dropAt(index: number): Array<T>;
  dropProduct(): Array<Array<T>>;
  transpose(this: Array<Array<T>>): Array<Array<T>>;
  diagonals(this: Array<Array<T>>): Array<Array<T>>;
}

interface String {
  lines(): string[];
  numbers(): number[];
}
