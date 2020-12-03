const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


const numberOfColumns = 31;
const toRight = [1, 3, 5, 7];


toRight.forEach((right) => {
    let numberOfTrees = 0;
    let column = 0;
    let lineNumber = 1;

    lines.forEach((line) => {
        const squareData = line.split('');

        if (lineNumber != 1) {
            column += right;

            if (!squareData[column]) {
                column -= numberOfColumns;
            }

            if (squareData[column] == '#') numberOfTrees++;
        }

        lineNumber++;
    });

    console.log(numberOfTrees);
});


let numberOfTrees = 0;
let lineNumber = 1;
let column = 0;

lines.forEach((line) => {
    const squareData = line.split('');

    if (lineNumber % 2 == 1 && lineNumber != 1) {
        column += 1;

        if (!squareData[column]) {
            column -= numberOfColumns;
        }

        if (squareData[column] == '#') numberOfTrees++;
    }

    lineNumber++;
});

// Need to multiply by hand the given values
console.log(numberOfTrees);
