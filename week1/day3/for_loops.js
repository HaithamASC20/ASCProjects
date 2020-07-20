let sports = ["Cricket", "Handball", "Soccer", "Water Polo", "Acrobatics"]
for (let i = 0; i < 5; i++) {
    console.log(i,sports[i]);

    if(sports[i] == "Water Polo"){
        console.log("Terminate the for loop...")
        break;
    }
 }