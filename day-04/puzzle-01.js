const execFileSync = require('child_process').execFileSync;
const fs = require('fs');


execFileSync('./format-data.sh');

const REQUIRED_FIELDS=['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];


const inputData = fs.readFileSync('tmp-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);

let countField = 0;
let goodPassports = 0;

lines.forEach((line) => {
	const dataType = line.split(':')[0];
	if (line != '') {
		REQUIRED_FIELDS.forEach((rField) => {
			if (dataType == rField.split(':')[0]) countField++;
		});
	} else {
		if (countField == REQUIRED_FIELDS.length) goodPassports++;
		countField = 0;
	}
});

console.log(goodPassports);
