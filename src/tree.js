/*
        Tree
         1        Root
        /  \
       2    3     Parent / Child
      / \  / \
     4  5 6   7   Leaf / Child
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function heightRecursive(node) {
    if (node == null) return 0
    const left = heightRecursive(node.left), right = heightRecursive(node.right)
    return Math.max(left, right) + 1
}

function isSymmetricIterative(node) {
    if (node == null) {
        return true
    }
    const q = []
    q.push(node.left)
    q.push(node.right)
    while (q.length > 0) {
        const l = q.shift()
        const r = q.shift()
        if (l == null && r == null) {
            return true
        } else if (l == null || r == null) {
            return false
        } else if (l.value === r.value) {
            q.push(l.left)
            q.push(r.right)
            q.push(l.right)
            q.push(r.left)
        } else {
            return false
        }
    }
}

function isSymmetricRecursive(node) {
    if (node == null) {
        return true
    }
    return isMirrorRecursive(node.left, node.right)
}

function isMirrorRecursive(x, y) {
    if (x == null && y == null) {
        return true
    } else if (x == null || y == null) {
        return false
    } else if (x.value === y.value) {
        return isMirrorRecursive(x.left, y.right) && isMirrorRecursive(x.right, y.left)
    } else {
        return false
    }
}

// Breadth First Search - Level Order Travesal - Iterative
function bfs(node) {
    if (node == null) return []
    const q = [], o = []
    q.push(node)
    while (q.length > 0) {
        const node = q.shift()
        o.push(node.value)
        if (node.left) q.push(node.left)
        if (node.right) q.push(node.right)
    } 
    return o
}

// Kth Distance from top
function kthdistance(node, kth) {
    if (node == null) return []
    const q = [], o = []
    q.push([node, 0])
    while (q.length > 0) {
        const obj = q.shift()
        if (kth === obj[1]) o.push(obj[0].value)
        if (obj[0].left) q.push([obj[0].left, obj[1] + 1])
        if (obj[0].right) q.push([obj[0].right, obj[1] + 1])
    } 
    return o
}

// Depth First Search - Pre/In/Post Order Traversal - Recursive
function dfs(node, type) {
    return (node != null) ? 
        [].concat(
            (type === 'pre') ?  node.value : [], 
            (node.left) ? dfs(node.left, type) : [], 
            (type === 'in') ?  node.value : [], 
            (node.right) ? dfs(node.right, type) : [],
            (type === 'post') ?  node.value : []
        ) : []
}

const root1 = new Node(1)
root1.left = new Node(2)
root1.right = new Node(3)
root1.left.left = new Node(4)
root1.left.right = new Node(5)
root1.right.left = new Node(6)
root1.right.right = new Node(7)
console.log('levelOrderTraversalIterative =>', bfs(root1).toString())
console.log('kthDistanceIterative level 1', kthdistance(root1, 1).toString())
console.log('kthDistanceIterative level 2', kthdistance(root1, 2).toString())
console.log('preOrderTraversalRecursive =>', dfs(root1, 'pre').toString())
console.log('inOrderTraversalRecursive =>', dfs(root1, 'in').toString())
console.log('postOrderTraversalRecursive =>', dfs(root1, 'post').toString())
console.log('heightRecursive =>', heightRecursive(root1))

const root2 = new Node(1)
root2.left = new Node(2)
root2.right = new Node(2)
root2.left.left = new Node(3)
root2.left.right = new Node(4)
root2.right.left = new Node(4)
root2.right.right = new Node(3)
console.log('isSymmetricRecursive =>', isSymmetricRecursive(root2))
console.log('isSymmetricIterative =>', isSymmetricIterative(root2))
root2.left.left.left = new Node(7)
console.log('isSymmetricRecursive =>', isSymmetricRecursive(root2))
console.log('isSymmetricIterative =>', isSymmetricIterative(root2))
console.log('height =>', heightRecursive(root2))