class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    print() {
        let result = "";
        let temp = this.head;
        while (temp) {
            result = result + ` ${temp.data}  `
            temp = temp.next;
        }
        return result;
    }


    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            return "Invalid Index";
        }

        if (index == 0) {
            this.insertAt(data);
            return;
        }

        let newNode = new Node(data);
        let temp = this.head;

        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
    }

    isEmpty() {
        return this.size === 0;
    }


    removeAtHead() {
        if (this.isEmpty()) {
            return "List is already empty";
        }

        this.head = this.head.next;
        this.size--;
    }



    removeElement(data) {
        if (this.isEmpty()) {
            return "List is already empty";
        }

        let current = this.head, prev = null;

        while (current) {
            if (current.data == data) {

                if (prev === null) {
                    this.head = current.next
                } else {
                    prev.next = current.next;
                }

                return current.element;
            }
            prev = current;
            current = prev.next;
        }
        return -1;

    }


    searchElement(data) {
        let curr = this.head;
        let index = 0;

        while (curr) {
            if (curr.data === data) {
                return index;
            }

            index++
            curr = curr.next;
        }

        return -1;
    }


}


let list = new LinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
list.insertAt(1, 10);
list.insertAt(1, 20);
// list.removeAtHead();
list.removeElement(10);
console.log(list);

console.log(list.print());
let node = new Node();
console.log(node);

console.log(list.searchElement(20));


