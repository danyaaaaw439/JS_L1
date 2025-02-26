function whatCentury(year) {
    let century = Math.ceil(Number(year) / 100);
    let suffix = "th";

    if (century % 10 === 1 && century % 100 !== 11) suffix = "st";
    else if (century % 10 === 2 && century % 100 !== 12) suffix = "nd";
    else if (century % 10 === 3 && century % 100 !== 13) suffix = "rd";

    return century + suffix;
}

console.log(whatCentury("1999"));
console.log(whatCentury("2011"));
console.log(whatCentury("2154"));
console.log(whatCentury("2259"));
console.log(whatCentury("1124"));
console.log(whatCentury("2000"));
