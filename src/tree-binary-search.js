/*
    Binary Search Tree
         9        Root
        /  \
       7    15
      / \  / \
     6  8 14  16  Leaf
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    find(value) {
        let cur = this.root
        while (true) {
            if (value === cur.value) {
                return cur
            } else if (value < cur.value && cur.left != null) {
                cur = cur.left
            } else if (value > cur.value && cur.right != null) {
                cur = cur.right
            } else {
                return null
            }
        }
    }
    isSymmetric() {
        debugger
        const cur = this.root
        console.log(cur, cur.left, cur.right)
        this.isTreeEqual(cur.left, cur.right)
    }
    isTreeEqual(x, y) {
        if (x == null && y == null)
            return true
        else if (x == null || y == null)
            return false
        else if (x.value === y.value) {
            console.log(x.value)
            return isTreeEqual(x.left, y.left) && isTreeEqual(x.right, y.right)
        }
            
        else
            return false
    }
    insert(value) {
        let node = new Node(value)
        if (this.root === null) {
            this.root = node
            return
        }
        let cur = this.root
        while (true) {
            if (value < cur.value) {
                if (cur.left != null) {
                    cur = cur.left
                } else {
                    cur.left = node
                    break
                }
            } else {
                if (cur.right != null) {
                    cur = cur.right
                } else {
                    cur.right = node
                    break
                }
            } 
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(7)
bst.insert(4)
bst.insert(9)
bst.insert(1)
bst.insert(6)
bst.insert(8)
bst.insert(10)
console.log(bst.find(9))
console.log(bst.find(99))
