function primeFactors(n) {
    let result = "";
    for (let i = 2; i <= n; i++) {
        let count = 0;
        while (n % i === 0) {
            n /= i;
            count++;
        }
        if (count > 0) {
            result += count > 1 ? `(${i}**${count})` : `(${i})`;
        }
    }
    return result;
}

console.log(primeFactors(86240));
console.log(primeFactors(56));
console.log(primeFactors(100));
console.log(primeFactors(13));
