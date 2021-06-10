/*
    AVL Tree
         1        Root
        /  \
       2    3
      / \  / \
     4  5 6   7   Leaf
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class AvlTree {
    constructor() {
        this.root = null
    }
    isSymmetric() {
        this.isTreeEqual(this.root.left, this.root.right)
    }
    isTreeEqual(x, y) {
        if (x == null && y == null)
            return true
        else if (x == null || y == null)
            return false
        else if (x.value === y.value) 
            return isTreeEqual(x.left, y.left) && isTreeEqual(x.right, y.right)
        else
            return false
    }
    insert(value) {
        let node = new Node(value)
        
    }
}

const avl = new AvlTree(1)
avl.insert(1)
avl.insert(2)
avl.insert(2)
avl.insert(3)
avl.insert(4)
avl.insert(4)
avl.insert(3)
