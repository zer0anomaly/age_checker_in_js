const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question("What is your age:", function(age) {
let userage = age ;
if(userage >= 18){
	console.log("Welcome to the club");
}
else if (userage == 18){
	console.log("Welcome to the club");
}
else{
	console.log("Cant let minors");
}
rl.close();
});