// const twoSum = (array, sum) => {
//     const pairs = [], map = new Map()
//     for (const part1 of array) {
//         const part2 = sum - part1
//         if (map.has(part2)) pairs.push([part1, part2])
//         map.set(part1)
//     }
//     return pairs
// }
// const two = twoSum([1, 2, 2, 3, 4], 4)
// console.log(JSON.stringify(two))



const twoSum = (array, sum) => {
    const pairs = [], map = new Map()
    for (let i = 0; i < array.length; i++) {
        const part1 = array[i]
        const part2 = sum - array[i]
        if (map.has(part2)) pairs.push([part1, part2])
        map.set(part1)
    }
    return pairs
}
const two = twoSum([2,7,11,15], 9)
console.log(JSON.stringify(two))