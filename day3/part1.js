const fs = require('fs');

const testAnswer = 198;

function part1(data) {
    data = data.split('\n');
    const readingLength = data[0].length;
    const countBits = [];
    for (var i = 1; i <= readingLength; i++) {
        countBits.push({ 0: 0, 1: 0 });
    }

    for (const reading of data) {
        for (var i = 0; i < readingLength; i++) {
            countBits[i][reading.slice(i, i + 1)]++;
        }
    }
    let gammaRate = '';
    let epsilonRate = '';
    countBits.forEach((pair) => {
        if (pair[0] > pair[1]) {
            gammaRate += 0;
            epsilonRate += 1;
        } else {
            gammaRate += 1;
            epsilonRate += 0;
        }
    });
    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

const testData = fs.readFileSync('testinput', 'utf8');
const myTestAnswer = part1(testData);
if (myTestAnswer == testAnswer) {
    console.log('Test OK: ' + myTestAnswer);
    const data = fs.readFileSync('input', 'utf8');
    console.log(part1(data));
} else {
    console.log(
        'Wrong answer: ' + myTestAnswer + ' != ' + testAnswer,
    );
}
