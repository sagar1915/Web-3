const crypto = require("crypto");
// const text = "100xdevs";
// const hash = crypto.createHash("sha256").update(text).digest("hex");
// console.log(hash);

// -------------------------------------------------------------------

// Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
// 	let input = 0;
// 	while (true) {
// 		let inputStr = input.toString();
// 		let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
// 		if (hash.startsWith(prefix)) {
// 			return { input: inputStr, hash: hash };
// 		}
// 		input++;
// 	}
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix("00000");
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);

// ----------------------------------------------------------------------

// Function to find an input string that produces a hash starting with '00000'

// function findHashWithPrefix(prefix) {
// 	let n = 0;
// 	let input = 0;
// 	while (true) {
// 		let inputStr =
// 			`
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
// ` + input.toString();
// 		let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
// 		n++;
// 		if (hash.startsWith(prefix)) {
// 			return { input: inputStr, hash: hash, num: n };
// 		}
// 		input++;
// 	}
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix("00000");
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);
// console.log(`num: ${result.num}`);

//---------------------------------------------------------------------

const startswithsagar = (prefix) => {
	let input = 0;
	while (true) {
		let inputstring = "sagar" + input.toString();
		const hash = crypto.createHash("sha256").update(inputstring).digest("hex");
		if (hash.startsWith(prefix)) {
			return { input: inputstring, hash: hash };
		}
		input++;
	}
};

const result = startswithsagar("0000000");
console.log(result.input);
console.log(result.hash);
