interface Stack<T> {
  readonly size: number;
  push: (value: T) => void;
  pop: () => T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stringStack = new StackImpl<string>(10);
stringStack.push("Ellie 1");
stringStack.push("Bob 2");
stringStack.push("Steve 3");
while (stringStack.size !== 0) {
  console.log(stringStack.pop());
}

const numberStack = new StackImpl<number>(10);
numberStack.push(123);
numberStack.push(456);
numberStack.push(789);
while (numberStack.size !== 0) {
  console.log(numberStack.pop());
}
