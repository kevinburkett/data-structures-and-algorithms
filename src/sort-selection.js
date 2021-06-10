class SelectionSort {
    sort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i])
                    this.swap(arr, j, j - 1)
            }
        }
        console.log(arr.toString())
    }
    swap(arr, idx1, idx2) {
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }
}

const s = new SelectionSort
s.sort([])
s.sort([4])
s.sort([4,7])
s.sort([4,8,2,9,3])
s.sort([4,4,4,4])