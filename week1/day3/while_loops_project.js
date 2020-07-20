/*let num = 100;
while(num >= 0){
    //console.log(num);
    num--;
}

let userInput = process.argv[2];

while(userInput>=0){
    console.log(userInput);
    userInput--;
}
*/
let num1 = 0;
let num2 = 1;
while(num1 != num2){
    num1 = Math.random() * 10
    num2 = Math.random() * 10
    num1 = Math.floor(num1)
    num2 = Math.floor(num2)
    console.log("Num1:", num1, "Num2:",  num2);
}
