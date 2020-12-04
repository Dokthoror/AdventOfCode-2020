const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let numberOfTrees = 0;

const numberOfColumns = 31;
const toRight = 3;


let column = 0;
let lineNumber = 1;

lines.forEach((line) => {
	const squareData = line.split('');

	if (lineNumber != 1) {
		column += toRight;

		if (!squareData[column]) {
			column -= numberOfColumns;
		}

		if (squareData[column] == '#') numberOfTrees++;
	}

	lineNumber++;
});

console.log(numberOfTrees);
