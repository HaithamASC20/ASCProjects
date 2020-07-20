let name = process.argv[2];
let age = process.argv[3];
let gender = process.argv[4];
let birthday = process.argv[5];
let phoneNumber = process.argv[6];
let num1 = parseInt(process.argv[7]);
let num2 = parseInt(process.argv[8]);

console.log("Name:", name);
console.log("Age:", age);
console.log("Gender:", gender);
console.log("DOB:", birthday);
console.log("Phone Number: ", phoneNumber);
console.log(num1, "+", num2, "=", num1+num2);