class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    addFirst(value) {
        let node = new Node(value)
        if (this.first == null) {
            this.first = this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
        this.length++
    }
    addLast(value) {
        let node = new Node(value)
        if (this.first == null) {
            this.first = this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.length++
    }
    clear() {
        this.first = null
        this.length = 0
    }
    getFirst() {
        return this.first
    }
    getNth(nth) {
        let nthNode = this.first, index = 1
        if (nthNode) {
            while (nthNode.next && nth > index) {
                nthNode = nthNode.next
                index++
            }
        }
        return nthNode
    }
    // getNthNodeFromEnd(n) {
    //     let i = this.first
    //     let j = this.first
    //     for (let x = 0; x < n - 1; x++) {
    //         j = j.next
    //     }
    //     while (j != this.last) {
    //         i = i.next
    //         j = j.next
    //     }
    //     return i
    // }
    getLast() {
        return this.last
    }
    print() {
        let node = this.first
        let arr = []
        while (node != null) {
            arr.push(node.value)
            if (node.next != null) {
                node = node.next
            } else {
                node = null
            }
        }
        console.log(arr)
    }
}

let ll = new LinkedList()
ll.addLast(3)
ll.addLast(4)
ll.addLast(5)
ll.addFirst(2)
ll.addFirst(1)
ll.print()
console.log(ll.getNth(2))
//console.log(ll.getNthNodeFromEnd(5))
