const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


const idsArray = [];

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
	idsArray.push(id);
});

idsArray.forEach((id) => {
	if (!(idsArray.find((i) => i == id + 1) && idsArray.find((i) => i == id - 1))) console.log(id);
	/*
	 * With my input, this shows :
	 * 598
	 * 801
	 * 40
	 * 596
	 * So the answer is 597, because the previous id is 596 and the next is 598
	*/
});
