function longest(arr, n) {
    return arr
        .slice()
        .sort((a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b))[n - 1];
}

console.log(longest(["Hello", "World", "Codewars", "Katas"], 3)); 
console.log(longest(["a", "bbb", "cc", "dddd"], 2)); // "bbb"
console.log(longest(["apple", "banana", "cherry", "date"], 1)); 
console.log(longest(["one", "three", "five", "seven"], 4)); 
