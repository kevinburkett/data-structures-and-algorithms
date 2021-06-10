let myAtoi = (s) => {
    let i = 0, sign = 1, res = 0
    const INT_MIN = - (2 ** 31), INT_MAX = - INT_MIN - 1

    while (s[i] === ' ') i++

    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1
        i++
    }

    while (s[i] >= '0' && s[i] <= '9') {
        res = (res * 10) + (s[i] - 0)
        if (res * sign < INT_MIN) return INT_MIN
        if (res * sign > INT_MAX) return INT_MAX
        i++
    }

    return res * sign
}