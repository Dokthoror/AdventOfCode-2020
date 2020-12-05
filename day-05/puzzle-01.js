const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let highestId = 0;

lines.forEach((line) => {
	const rows = line.split('').slice(0, 7);
	const columns = line.split('').slice(7);

	let minRow = 0;
	let maxRow = 128;
	let minColumn = 0;
	let maxColumn = 8;

	rows.forEach((row) => {
		switch (row) {
		case 'F':
			maxRow -= Math.floor((maxRow - minRow) / 2);
			break;
		case 'B':
			minRow += Math.ceil((maxRow - minRow) / 2);
			break;
		}
	});

	columns.forEach((column) => {
		switch (column) {
		case 'L':
			maxColumn -= Math.floor((maxColumn - minColumn) / 2);
			break;
		case 'R':
			minColumn += Math.ceil((maxColumn - minColumn) / 2);
			break;
		}
	});

	const id = (maxRow - 1) * 8 + (maxColumn - 1);
	if (id > highestId) highestId = id;
});

console.log(highestId);
