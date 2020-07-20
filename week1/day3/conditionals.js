/*let userGuess = process.argv[2];
let answer = 5;

if (userGuess == answer){
    console.log("Correct Guess");
}

else if (userGuess < answer){
    console.log("Too low");
}

else{
    console.log("Too high");
}
*/
let score = 0;
let answer = 5
let userGuess = process.argv[2];

if (userGuess == answer){
    console.log("Correct Answer");
    score += 5;
}
else if (userGuess < answer){
    console.log("Too low")
})