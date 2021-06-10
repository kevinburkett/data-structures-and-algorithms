let trans = [6, 5, 3, 10, 8]
function split_money(trans) {
    let total = 0, avg = 0, len = trans.length, payment = 0, remaining_payment = 0, remaining_owed = 0
    for (item in trans) total = total + trans[item]
    avg = total / len
    let sorted = trans.sort((a,b) => a - b)
    for (let i = 0; i < len; i++) {
        remaining_payment = avg - sorted[i]
        for (let j = len - 1; j > i && remaining_payment > 0; j--) {
            remaining_owed = sorted[j] - avg
            console.log(0, remaining_payment, remaining_owed)
            if (remaining_payment < remaining_owed) {
                payment = remaining_payment
                remaining_owed = remaining_owed - remaining_payment
                remaining_payment = 0
                console.log(1, remaining_payment, remaining_owed, payment)
            } else {
                payment = remaining_owed
                remaining_payment = remaining_payment - remaining_owed
                remaining_owed = 0
                console.log(2, remaining_payment, remaining_owed, payment)
            }
            if (payment > 0) console.log(`Person who paid $${sorted[i].toFixed(2)} owes $${payment.toFixed(2)} to Person who paid $${sorted[j].toFixed(2)}.`)
        }
    }
}
split_money(trans)
