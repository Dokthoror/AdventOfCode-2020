const execFileSync = require('child_process').execFileSync;
const fs = require('fs');


execFileSync('./format-data.sh');

const REQUIRED_FIELDS=['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];


const inputData = fs.readFileSync('tmp-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);

let countField = 0;
let goodPassports = 0;
const eyesColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

lines.forEach((line) => {
	if (line != '') {
		const dataType = line.split(':')[0];
		const data = line.split(':')[1];
		const dataArray = data.split('');

		switch (dataType) {
		case 'byr':
			if (Number(data) >= 1920 && Number(data) <= 2002) countField++;
			break;

		case 'iyr':
			if (Number(data) >= 2010 && Number(data) <= 2020) countField++;
			break;

		case 'eyr':
			if (Number(data) >= 2010 && Number(data) <= 2030) countField++;
			break;

		case 'hgt':
			let height;
			let hType;
			switch (dataArray.length) {
			case 5:
				height = dataArray.slice(0, 3).join('');
				hType = dataArray.slice(3).join('');
				if (Number(height) >= 150 && Number(height) <= 193 && hType == 'cm') countField++;
				break;
			case 4:
				height = dataArray.slice(0, 2).join('');
				hType = dataArray.slice(2).join('');
				if (Number(height) >= 59 && Number(height) <= 76 && hType == 'in') countField++;
				break;
			}
			break;

		case 'hcl':
			if (data.length == 7 && dataArray[0] == '#' && Number(`0x${dataArray.slice(1).join('')}`)) countField++;
			break;

		case 'ecl':
			eyesColors.forEach((color) => {
				if (data == color) countField++;
			});
			break;

		case 'pid':
			if (Number(data) && data.length == 9) countField++;
			break;

		default:
			break;
		}
	} else {
		if (countField == REQUIRED_FIELDS.length) goodPassports++;
		countField = 0;
	}
});

console.log(goodPassports);
