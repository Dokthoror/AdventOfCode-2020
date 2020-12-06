const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let uniqueLetterArray = [];
let fullAnswerArray = [];
let answerSum = 0;
let lineNumber = 0;

lines.forEach((line) => {
	// With this condition, I need to add a blank line at the end of the input file to use the last lines
	if (line != '') {
		const lineArray = line.split('');
		lineNumber++;
		lineArray.forEach((letter) => {
			if (!uniqueLetterArray.find((l) => letter == l)) uniqueLetterArray.push(letter);
			fullAnswerArray.push(letter);
		});
	} else {
		uniqueLetterArray.forEach((letter) => {
			let count = 0;
			fullAnswerArray.forEach((l) => {
				if (l == letter) count++;
			});
			if (count == lineNumber) answerSum++;
		});
		lineNumber = 0;
		uniqueLetterArray = [];
		fullAnswerArray = [];
	}
});

console.log(answerSum);
