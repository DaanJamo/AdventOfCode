Array.prototype.sum = function (): number {
  return this.reduce((acc, val) => acc + val);
};

Array.prototype.product = function (): number {
  return this.reduce((acc, val) => acc * val);
};

Array.prototype.dropAt = function <T>(index: number): Array<T> {
  return [...this.slice(0, index), ...this.slice(index + 1)];
};

Array.prototype.dropProduct = function <T>(): Array<Array<T>> {
  return this.map((_, i) => this.dropAt(i));
}
