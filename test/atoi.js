describe('myAtoi', () => {
    it('should return', () => {
        assert.equal(0, myAtoi("         "))
    })

    it('should return', () => {
        assert.equal(42, myAtoi("42"))
    })

    it('should return', () => {
        assert.equal(-42, myAtoi("   -42"))
    })

    it('should return', () => {
        assert.equal(4193, myAtoi("4193 with words"))
    })

    it('should return', () => {
        assert.equal(0, myAtoi("words and 987"))
    })

    it('should return', () => {
        assert.equal(-2147483648, myAtoi(-91283472332))
    })

    it('should return', () => {
        assert.equal(42, myAtoi("42"))
    })
})