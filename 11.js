function lottery(ticket, win) {
    let miniWins = ticket.reduce((count, [str, num]) => 
        count + (str.split('').some(char => char.charCodeAt(0) === num) ? 1 : 0), 0
    );
    return miniWins >= win ? 'Winner!' : 'Loser!';
}

console.log(lottery([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); // "Winner!"
console.log(lottery([['ABC', 66], ['HGR', 75], ['BYHT', 76]], 1)); // "Loser!"
console.log(lottery([['XYZ', 88], ['OPQ', 79], ['LMN', 76]], 0)); // "Winner!"
