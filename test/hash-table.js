describe('myAtoi', () => {
    const ht = new HashTable()
    it('should return', () => {
        let val = 1
        ht.add('a', val)
        assert.equal(val, ht.search('a'))
    })
})