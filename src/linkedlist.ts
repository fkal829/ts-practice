class Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length = 0;
    
    append(value: T): void {
       const newNode = new Node(value);
       if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
       } else {
           newNode.prev = this.tail;
           if (this.tail) {
               this.tail.next = newNode;
           }
           this.tail = newNode;
       }
       this.length++; 
    }

    delete(value: T): void {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    size(): number {
        return this.length;
    }

    search(value: T): T | null {    // T | null : 값이 없으면 null 반환
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    printList(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    printListReverse(): T[] {
        const result: T[] = [];
        let current = this.tail;
        while (current) {
            result.push(current.value);
            current = current.prev;
        }
        return result;
    }

    getFirst(): T | null {
        return this.head ? this.head.value : null;
    }

    getLast(): T | null {
        return this.tail ? this.tail.value : null;
    }
}