export class HashTable<K, V> {
  private table: Map<K, V>;

  constructor(initial?: Iterable<[K, V]>) {
    this.table = new Map(initial);
  }

  set(key: K, value: V): void {
    this.table.set(key, value);
  }

  get(key: K): V | undefined {
    return this.table.get(key);
  }

  has(key: K): boolean {
    return this.table.has(key);
  }

  clear(): void {
    this.table.clear();
  }

  delete(key: K): boolean {
    return this.table.delete(key);
  }

  entries(): [K, V][] {
    return Array.from(this.table.entries());
  }
}
