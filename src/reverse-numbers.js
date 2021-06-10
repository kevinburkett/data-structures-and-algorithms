let number = 12345
const reversal = number => {
    return number.toString().split('').reverse().join('')
}
let rev = reversal(number)
console.log(rev)