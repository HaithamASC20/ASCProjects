
function combineStrings(string1,string2){
    let combinedString = string1 + string2;
    return combinedString;
}
let s1 = combineStrings("Pizza","Pineapple");
console.log(s1);

function checkAnswer(num1,num2,operator,answer){
    if(operator == "+"){
        if(num1 + num2 == answer){
            return true;
        }else {
            return false;
        }
    } else{
        if(num1 - num2 == answer){
            return true;
        }else {
            return false;
        }
    }
}

let b1 = checkAnswer(3,5,"+",8);
let b2 = checkAnswer(9,8,"+",15);
let b3 = checkAnswer(5,4,"-",1);
let b4 = checkAnswer(0,1,"-",-2);

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

function oddNumberCatcher(array){
    let oddNum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 1){
            oddNum = i;
            return oddNum;
        } else{
            oddNum = -1
        }
    }
    oddNum = -1;
    return oddNum;
}

let i1 = oddNumberCatcher([8,22,10,15,2,50,28]);
let i2 = oddNumberCatcher([1,2,3,4,5]);
let i3 = oddNumberCatcher([2,2,2,2,2,2,2,2]);
let i4 = oddNumberCatcher([]);

console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);