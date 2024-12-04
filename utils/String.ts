String.prototype.lines = function(): string[] {
  return this.trim().split(/\r?\n/);
}

String.prototype.numbers = function(): number[] {
  return this.match(/\d+/g)?.map(Number) ?? [];
}
