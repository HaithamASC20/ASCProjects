let randDecimal1 = Math.random();
let randDecimal2 = Math.random();
let randNum1 = randDecimal1 * 10;
let randNum2 = randDecimal2 * 10;
let randInt1 = Math.floor(randNum1);
let randInt2 = Math.floor(randNum2);
console.log("Random number #1:", randInt1);
console.log("Random number #2:", randInt2);
console.log("Sum:", randInt1 + randInt2);





let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];
randDecimal1 = Math.random();
randDecimal2 = Math.random();
randNum1 = randDecimal1 * 7;
randNum2 = randDecimal2 * 5;
randInt1 = Math.floor(randNum1);
randInt2 = Math.floor(randNum2);
console.log("Your lucky day:", days[randInt1])
console.log(reactions[randInt2])


console.log(Math.random([4,8]));
