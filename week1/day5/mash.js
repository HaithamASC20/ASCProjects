function mash(){
    if(getHome() == "Shack" && getTravelCount == 0 && getPet() == "Sock" && getCollege() == "McDonalds University" && getSalary == "10"){
        return "You got really unlucky :(";
    }else{
        return "You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries, and have a pet "+ getPet() + "!" + " You will also study at " + getCollege() + " and make " + getSalary() + " dollars!" ;
    }
    
}

solution = mash();
console.log(solution);

function randNumGenerator(randNum){
    randomNumber = Math.random() * randNum;
    return Math.floor(randomNumber);
}
let randNum = randNumGenerator(10);


function getHome(){
    let house;
    houseOptions = ["Mansion", "Castle","Shack","House"];
    houseOptions.push(process.argv[2]);
    if (process.argv[2] == ""){
        house = houseOptions[randNumGenerator(4)];
    } else{
        house = houseOptions[randNumGenerator(5)];
    }
        return house;

}

function getTravelCount(){
    let randNum = randNumGenerator(100);
    return Math.floor(randNum);
}
let number = getTravelCount();


function getPet(){
    let userPet = process.argv[3];
    let randNum = Math.floor(randNumGenerator(2));
    let pet;
    let randomPets = ["Donkey", "Charizard", "Whale", "Sock"];
    if(process.argv[3] == ""){
        if (randNum == 1){
            pet = userPet;
        } else{
            pet = randomPets[randNumGenerator(4)];
        }
    }else{
        pet = randomPets[randNumGenerator(4)];
    }
    return pet;
}

function getCollege(){
    let colleges = ["McDonalds University", "Harvard", "USC", "Oxford"];
    let college = colleges[randNumGenerator(colleges.length)];
    return college;
}

function getSalary(){
    let salaries = ["1000", "10", "10000","100000","1000000","10000000"];
    let salary = salaries[randNumGenerator(salaries.length)];
    return salary;
}
let numRuns = 0;
while (getHome() != "Shack" || getPet() != "Sock" || getCollege() != "McDonalds University" || getSalary != "10"){
    numRuns += 1
    
}
console.log(numRuns);