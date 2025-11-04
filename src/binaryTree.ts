class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree<T> {
    root: Node | null = null;

    insert(value: number): void {
        const n = new Node(value);
        if (!this.root) {
            this.root = n;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = n;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = n;
                    return;
                }
                current = current.right;
            }
        }
    }

    remove(value: number): void {
        const removeNode = (node: Node | null, value: number): Node | null => {
            if (!node) {
                return null;
            }
            if (value === node.value) {
                // 0 children
                if (!node.left && !node.right) {
                    return null;
                }
                // 1 child
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }
                // 2 children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        };
        this.root = removeNode(this.root, value);
    }   

    search(value: number): number | null {
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return current.value;
            }
            current = value < current.value ? current.left : current.right;
        }
        return null;
    }

    inOrderTraversal(): number[] {
        const result: number[] = [];
        const traverse = (node: Node | null) => {
            if (node) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    preOrderTraversal(): number[] {
        const result: number[] = [];
        const traverse = (node: Node | null) => {
            if (node) {
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    postOrderTraversal(): number[] {
        const result: number[] = [];
        const traverse = (node: Node | null) => {
            if (node) {
                traverse(node.left);
                traverse(node.right);
                result.push(node.value);
            }
        };
        traverse(this.root);
        return result;
    }

    levelOrderTraversal(): number[] {
        const result: number[] = [];
        if (!this.root) return result;
        const queue: Node[] = [this.root];
        let idx = 0;

        while (idx < queue.length) {
            const node = queue[idx++];
            if (!node) continue;
            result.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }
}