function findMissing(sequence) {
    let n = sequence.length + 1;
    let totalSum = (n * (sequence[0] + sequence[sequence.length - 1])) / 2;
    let givenSum = sequence.reduce((sum, num) => sum + num, 0);
    return totalSum - givenSum;
}

console.log(findMissing([1, 3, 5, 9, 11])); // 7
console.log(findMissing([2, 4, 8, 10])); // 6
console.log(findMissing([5, 10, 15, 25])); // 20
