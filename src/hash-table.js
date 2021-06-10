class HashTable{
    constructor(){
        this.values = {}
        this.length = 0
        this.size = 0
    }
    calcHash(key){
        // let i = 1
        // return (key.toString().length() + i * key.toString().length()) % this.size
        return key.toString().length % this.size
    }
    add(key, value){
        const hash = this.calcHash(key)
        if (!this.values.hasOwnProperty(hash)){
            this.values[hash] = {}
        }
        if(!this.values[hash].hasOwnProperty(key)){
            this.length++
        }
        this.values[hash][key] = value
    }
    search(key){
        const hash = this.calcHash(key)
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key]
        } 
        return null
    }
    toString() {

    }
}
let ht = new HashTable()
ht.add('a', 1)