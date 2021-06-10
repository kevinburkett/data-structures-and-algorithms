class MergeSort {
    sort(arr) {
        if (arr.length < 2) return arr
        // Break up array into halves
        const middle = Math.floor(arr.length / 2)
        const left = arr.slice(0, middle), right = arr.slice(middle, arr.length)
        
        // Sort pieces
        this.sort(left)
        this.sort(right)
        
        // Combine results 
        this.merge(left, right, arr)
        return arr
    }
    merge(left, right, result) {
        let i = 0, j = 0, k = 0
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j])
                result[k++] = left[i++]
            else 
                result[k++] = right[j++]
        }

        while (i < left.length) 
            result[k++] = left[i++]

        while (j < right.length) 
            result[k++] = right[j++]
    }
}

const s = new MergeSort()
console.log(s.sort([]).toString())
console.log(s.sort([4]).toString())
console.log(s.sort([9,3]).toString())
console.log(s.sort([4,9,6,7,4]).toString())