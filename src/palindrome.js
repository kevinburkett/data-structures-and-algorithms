let text = 'Cigar? Toss it in a can. It is so tragic'
const isPalindrome = string => { 
    let rev = string.split('').reverse().join('')
    return string === rev
}
const isPalindromeOptimized = string => { 
    const len = string.length
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false
        }
    }
    return true
}
let bool = isPalindrome(text)
console.log(bool);
let bool2 = isPalindromeOptimized(text)
console.log(bool2)