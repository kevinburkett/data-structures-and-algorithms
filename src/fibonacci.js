const memoize = fn => {
    let cache = {}
    return (...args) => {
        if (cache[args]) return cache[args]
        const output = fn.apply(this, args)
        cache[args] = output
        return output
    }
}

const fibonacci = elem => (elem < 2) ? elem : mem_fib(elem - 1) + mem_fib(elem - 2)

const mem_fib = memoize(fibonacci)

let fib1 = fibonacci(120)
console.log(fib1)
