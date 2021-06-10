const fizzbuzz = number => {
    number = parseInt(number)
    if (number < 1) return null
    for (let i = 1; i < number + 1; i++) {
        if (i % 2 === 0 && i % 3 === 0) console.log('Fizz Buzz')
        else if (i % 2 === 0) console.log('Fizz')
        else if (i % 3 === 0) console.log('Buzz')
        else console.log(i)
    }
}
//fizzbuzz(9)
// fizzbuzz(6)
// fizzbuzz(1)
// fizzbuzz(0)
// fizzbuzz(-6)
// fizzbuzz(6.6)