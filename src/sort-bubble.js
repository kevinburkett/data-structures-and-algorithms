class BubbleSort {
    sort(arr) {
        if (arr === undefined || typeof(arr) != "object") {
            throw 'Incorrect input, please pass an array.'
        }
        for (let i = 0; i < arr.length; i++) {
            let isSorted = true
            for (let j = 1; j < arr.length - i; j++) {
                if (arr[j] < arr[j - 1]) {
                    this.swap(arr, j, j - 1)
                    isSorted = false
                } 
            }
            if (isSorted) break
        }
        console.log(arr.toString())
    }
    swap(arr, idx1, idx2) {
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }
}

const s = new BubbleSort
s.sort([])
s.sort([4])
s.sort([4,7])
s.sort([4,8,2,9,3])
s.sort([4,4,4,4])