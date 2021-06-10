const maxCharCount = string => {
    let cMap = new Map(), maxChar = null, maxCount = 0 
    for (const i of string) {
        if (cMap.has(i)) cMap.set(i, cMap.get(i) + 1)
        else cMap.set(i, 0)      
    }
    cMap.forEach((j, i) => {
        if (j > maxCount) {
            maxCount = j
            maxChar = i
        }
    })
    return maxChar
}
let test1 = maxCharCount('Hello World')
console.log(test1)
let test2 = maxCharCount('Heyyy There!!!')
console.log(test2)
