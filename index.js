/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';
let answer = '';
for (let i = 0; i < H; i++) {
	const ROW = readline();
	T.split('').forEach((letter) => {
		const indexOf = letters.indexOf(letter.toUpperCase());
		let rowPosition = 0;
		if (indexOf >= 0) {
			rowPosition = indexOf * L;
		} else {
			rowPosition = (letters.length - 1) * L;
		}
		answer += ROW.substring(rowPosition, rowPosition + L);
	});
	answer += '\n';
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);
