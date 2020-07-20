let score = 0;
let answer = Math.random() * 100;
answer = Math.floor(answer);
let userGuess = process.argv[2];
console.log(answer);
if (userGuess == answer){
    console.log("Correct Answer");
    ;
}
else if (userGuess < answer){
    console.log("Too low")
}
else {
    console.log("Too High")
}