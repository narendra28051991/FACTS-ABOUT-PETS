export const useBinary = (num) => {
    let binary = 0
    let remainder, i=1;

    while (num !== 0) {
        remainder = num % 2
        num = num / 2
        binary = binary + remainder * 1
        i = i*10
    }

    let binaryCount = (binary - 1) % 9 + 1
    let binaryLength = binary.toString().length

    if (binaryLength>=4 && binaryCount===binaryLength) {
        return true
    }
    else {
        return false
    }
}