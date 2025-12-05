export class Heap<T> {
    private items: T[] = [];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    push(item: T): void {
        this.items.push(item);
        this.bubbleUp();
    }

    pop(): T | undefined {
        if (this.items.length === 0) {
            throw new Error("Heap is empty");
        }
        const top = this.items[0];
        const end = this.items.pop()!;
        if (this.items.length > 0) {
            this.items[0] = end;
            this.bubbleDown();
        }
        return top;
    }

    peek(): T | undefined {
        if (this.items.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.items[0];
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    private bubbleUp(): void {
        let index = this.items.length - 1;
        const item = this.items[index]!;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.items[parentIndex]!;

            if (this.comparator(item, parent) >= 0) break;

            this.items[index] = parent;
            index = parentIndex;
        }
        this.items[index] = item;
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.items.length;
        const item = this.items[0]!;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swapIndex: number | null = null;

            if (leftChildIndex < length) {
                const leftChild = this.items[leftChildIndex]!;
                if (this.comparator(leftChild, item) < 0) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                const rightChild = this.items[rightChildIndex]!;
                if (
                    (swapIndex === null && this.comparator(rightChild, item) < 0) ||
                    (swapIndex !== null && this.comparator(rightChild, this.items[swapIndex]!) < 0)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;

            this.items[index] = this.items[swapIndex]!;
            index = swapIndex;
        }
        this.items[index] = item;
    }
}