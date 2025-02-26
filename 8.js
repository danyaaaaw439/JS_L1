function expandedForm(num) {
    return num.toString()
        .split('')
        .map((digit, index, arr) => digit !== '0' ? digit + '0'.repeat(arr.length - index - 1) : '')
        .filter(x => x)
        .join(' + ');
}

console.log(expandedForm(12));
console.log(expandedForm(45));
console.log(expandedForm(70304));
console.log(expandedForm(900000));
console.log(expandedForm(1050));
