let lengthOfLongestSubstring = (s) => {
    let chars = [], left = 0, right = 0, res = 0
    while (right < s.length) {
        let r = s[right], idx = chars[r]
        left = (idx != null && idx >= left && idx < right) ? idx + 1 : left 
        res = Math.max(res, right - left + 1)
        chars[r] = right
        right++
        console.log(chars, left, right, res)
    }
    return res
}