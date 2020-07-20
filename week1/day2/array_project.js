/*let scores = [85, 93, 65, 65, 92, 81, 93];
let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6];
console.log(total);
console.log("The average score is an", total/scores.length);
*/
let myArray = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray);
console.log("After #1:", myArray.reverse())

myArray = ['a', 'b', 'c', 'd'];
myArray.push(1);
myArray.push(2);
console.log("After #2:",myArray);

myArray = ['a', 'b', 'c', 'd'];
myArray.pop();
console.log("After #3:", myArray);

myArray = ['a', 'b', 'c', 'd'];
myArray[1] = "c";
myArray[2] = "d";
myArray[3] = "e";
console.log("After #4:", myArray);

myArray = ['a', 'b', 'c', 'd'];
myArray[3] = "e";
myArray.push("f");
console.log("After #5:", myArray.reverse());

myArray = ['Hi', 90, '90', [1, 2, 3, 4], ':p'];
myArray[3] = [1,2,3,4,5];
console.log(myArray.indexOf(2));
console.log(myArray);