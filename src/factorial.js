const factorial = number => {
    return number < 2 ? 1 : number * factorial(number - 1);
};
let fact = factorial(5)
console.log(fact)