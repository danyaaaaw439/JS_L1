function hasTwoCubeSums(n) {
    let pairs = [];
    
    for (let a = 1; a ** 3 < n; a++) {
        for (let b = a; a ** 3 + b ** 3 <= n; b++) {
            if (a ** 3 + b ** 3 === n) {
                pairs.push([a, b]);
                if (pairs.length > 1) return true;
            }
        }
    }
    
    return false;
}

console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(42));   
