function hexStringToRGB(hexString) {
    let hex = hexString.replace('#', '');
    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
    };
}

console.log(hexStringToRGB("#FF9933")); 
console.log(hexStringToRGB("#ff9933")); 
console.log(hexStringToRGB("#00CCFF")); 
console.log(hexStringToRGB("#123456"));
