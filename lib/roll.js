export { roll };

function roll(sides, dice, rolls) {
    const output = {"sides":sides,"dice":dice,"rolls":rolls,"results":[]}
    for (let i=0; i<rolls; i++) {
        var sum = 0;
        for (let j=0; j<dice; j++) {
            sum += Math.floor(1 + Math.random()*sides)
        }
        output.results[i] = sum; // add sum to array
    }
    return output;
}