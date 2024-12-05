Array.prototype.sum = function (): number {
  return this.reduce((acc, val) => acc + val);
}

Array.prototype.product = function (): number {
  return this.reduce((acc, val) => acc * val);
}

Array.prototype.dropAt = function <T>(index: number): T[] {
  return [...this.slice(0, index), ...this.slice(index + 1)];
}

Array.prototype.dropProduct = function <T>(): T[][] {
  return this.map((_, i) => this.dropAt(i));
}

Array.prototype.transpose = function <T>(this: T[][]): T[][] {
  return this[0].map((_, i) => this.map(r => r[i]));
}

Array.prototype.diagonals = function <T>(this: T[][]): T[][] {
  const diag: T[][] = [[]];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0]?.length || 0; j++) {
      const sum = i + j;
      if (!diag[sum]) diag[sum] = [];
      diag[sum].push(this[i][j]);
    }
  }
  return diag;
}
