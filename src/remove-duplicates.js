var nums = [5,3,7,4,4,4,9,10.2]
function remove_duplicates(arr) {
    if (arr.length == 0) return
    let i = 0, sorted = arr.sort((a, b) => a - b)
    // sorted = [3,4,4,4,5,7,9,10.2]
    for (let j = 1; j < sorted.length; j++) {
        if (sorted[i] != sorted[j]) {
            i++
            sorted[i] = sorted[j]
        }
    }
    //return i + 1
    return sorted.splice(0, i + 1)
}
console.log(remove_duplicates(nums))