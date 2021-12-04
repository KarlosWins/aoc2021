const fs = require('fs');
const FORWARD = 'forward';
const UP = 'up';
const DOWN = 'down';
const testAnswer = 900;

function part2(data) {
    let position = [0, 0];
    let aim = 0;
    data = data.split('\n');
    data.forEach((instruction) => {
        instruction = instruction.split(' ');
        switch (instruction[0]) {
            case FORWARD:
                position[0] += parseInt(instruction[1]);
                position[1] += aim * parseInt(instruction[1]);
                break;
            case UP:
                aim -= parseInt(instruction[1]);
                break;
            case DOWN:
                aim += parseInt(instruction[1]);
                break;
            default:
        }
    });
    return Math.abs(position[0] * position[1]);
}

const testData = fs.readFileSync('testinput', 'utf8');
const myTestAnswer = part2(testData);
if (myTestAnswer == testAnswer) {
    console.log('Test OK: ' + myTestAnswer);
    const data = fs.readFileSync('input', 'utf8');
    console.log(part2(data));
} else {
    console.log('Wrong answer: ' + myTestAnswer + ' ' + testAnswer);
}
