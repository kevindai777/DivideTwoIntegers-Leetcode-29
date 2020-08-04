//Objective is to divide two integers without the use of * or /

let dividend = 10
let divisor = 3


//O(n) solution (since worst case is divisor == 1) where we use repeated subtraction

if (dividend == -2147483648 && divisor == -1) {
    return 2147483647
}

let temp = Math.abs(dividend)
let temp2 = Math.abs(divisor)
let result = 0

while (temp >= temp2) {
    temp -= temp2
    result++
}

if (dividend < 0 && divisor < 0) {
    return result
} else if (dividend < 0 || divisor < 0) {
    return -result
} else {
    return result
}


//O(logn) solution where we repeatedly subtract powers of two and bit shift

if (dividend == -2147483648 && divisor == -1) {
    return 2147483647
}

let sign = dividend > 0 ^ divisor > 0 ? -1 : 1

let dvd = Math.abs(dividend)
let dvs = Math.abs(divisor)
let ans = 0

while (dvd >= dvs) {
    let temp = dvs
    let tempRes = 1
    
    while (temp << 1 <= dvd) {
        temp <<= 1
        tempRes <<= 1
    }
    dvd -= temp
    ans += tempRes
}    

return sign * ans