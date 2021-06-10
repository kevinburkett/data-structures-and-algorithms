/*
    Min Heap Binary Tree
         1        Root
        /  \
       2    3     Parent / Child
      / \  / \
     4  5 6       Leaf / Child

    Max Heap Binary Tree
         9        Root
        /  \
       3    7     Parent / Child
      / \  / \
     4  2 6       Leaf / Child
*/

class BinaryTree {
    constructor(){
        this.arr = []
    }
    add(item) {
        this.arr.add(item)
    }
    isEmpty() {
        return this.items.isEmpty()
    }
    indexOf(i) {
        return this.items[i]
    }
    parentIndex(i) {
        return (i - 1) / 2
    }
    leftChildIndex(i) {
        return 2 * index + 1
    }
    rightChildIndex(i) {
        return 2 * index + 2
    }
}