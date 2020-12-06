const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let answerArray = [];
let answerSum = 0;

lines.forEach((line) => {
	// With this condition, I need to add a blank line at the end of the input file to use the last lines
	if (line != '') {
		const lineArray = line.split('');
		lineArray.forEach((letter) => {
			if (!answerArray.find((l) => letter == l)) answerArray.push(letter);
		});
	} else {
		answerSum += answerArray.length;
		answerArray = [];
	}
});

console.log(answerSum);
