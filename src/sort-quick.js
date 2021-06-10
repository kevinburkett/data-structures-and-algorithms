class QuickSort {
    sort(arr) {
        this.#sort(arr, 0, arr.length - 1)
        console.log(arr.toString())
    }
    #sort(arr, start, end) {
        if (arr.length < 2 || start >= end) return
        let boundary = this.#partition(arr, start, end)
        this.#sort(arr, start, boundary - 1)
        this.#sort(arr, boundary + 1, end)
    }
    #partition(arr, start, end) {
        let boundary = start - 1, pivot = arr[end]
        for (let i = start; i <= end; i++) 
            if (arr[i] <= pivot) 
                this.#swap(arr, i, ++boundary)
        return boundary
    }
    #swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

let s = new QuickSort()
s.sort([])
s.sort([15])
s.sort([15, 6])
s.sort([15, 6, 3, 1, 22, 10, 13])