class Trie {
    constructor() {
        this.root = new Node(" ")
    }
    insert(word) {
        if (word == null) return 
        let current = this.root
        for (let letter of word)
            current = current.addChild(letter)
        current.isEndOfWord = true
    }
    contains(word) {
        if (word == null) return false
        let current = this.root
        for (let letter of word) {
            if (!current.hasChild(letter))
                return false
            current = current.getChild(letter)   
        }

        return current.isEndOfWord
    }
    traverse(type) {
        this.#traverse(this.root, type)
    }
    #traverse(node, type) {
        if (type === 'pre') console.log(node.letter)
        for (let child of node.getChildren())
            this.#traverse(child, type)
        if (type === 'post') console.log(node.letter)
    }
}

class Node {
    constructor(letter) {
        this.letter = letter
        this.children = new Map()
        this.isEndOfWord = false
    }
    hasChild(letter) {
        return this.children.has(letter)
    }
    getChild(letter) {
        if (this.hasChild(letter))
            return this.children.get(letter)
        return
    }
    addChild(letter) {
        if (!this.hasChild(letter))
            this.children.set(letter, new Node(letter))
        return this.getChild(letter)
    }
    getChildren() {
        return this.children.values()
    }
}

const trie = new Trie()
trie.insert("cat")
trie.insert("dog")
console.log(trie.contains("cat"))
console.log(trie.contains("ca"))
console.log(trie.contains("cattle"))
trie.traverse("pre")
trie.traverse("post")