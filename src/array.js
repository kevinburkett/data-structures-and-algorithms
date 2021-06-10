let arr = [1, 2, 3]
let copy1 = []
console.log('print price')
arr.forEach(price => test(price))
function test(item) {
    console.log(item)
}
arr.forEach(price => copy1.push(price))
console.log('copy1')
console.log(copy1)
let copy2 = copy1.splice(1,1)
console.log('after splice')
console.log(copy1)
console.log('copy2')
console.log(copy2)
let copy3 = arr.slice()
console.log('copy3')
console.log(copy3)
