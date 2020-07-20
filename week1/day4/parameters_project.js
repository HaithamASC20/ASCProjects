function evenOrOdd(num){
    console.log("Your number is:", num);
    if (num % 2 == 0){
        console.log(num , "is even.");
    }else {
        console.log(num , "is odd.");
    }
    
}

//evenOrOdd(7);
//evenOrOdd(98);

function divisor(dividend, divisor){
    if (dividend % divisor == 0){
        console.log(dividend, "is divisible by", divisor);
    } else{
        console.log(dividend, "is NOT divisible by", divisor);
    }
}

//divisor(9,3);
//divisor(9,2);

function distanceCalc(x1,x2,y1,y2){
    let distance = (((x2-x1)**2) + ((y2-y1)**2))**.5;
    console.log("The two points are " + distance + " unit(s) away from eachother.");
}

//distanceCalc(4,5,5,7);

function arrayHandler(array){
    newArray = [];
    for (i = 0; i < array.length; i ++){
        if (typeof array[i] == "string"){
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}
arrayHandler([false,1, "i", "h", 6, "m"]);
