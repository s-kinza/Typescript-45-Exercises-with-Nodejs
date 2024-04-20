// Define a function with a rest parameter that accepts items arrangments representing our sandwich 

function makeSandwich(...item: string[]){

    console.log("\nMaking a sandwich with the following item:  \n");

    item.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments

makeSandwich("Chicken" , "Cheese" , "Mayo" , "Egg");

makeSandwich("Bread" , "Butter");

makeSandwich("Bread" , "Butter" ,"Chicken" , "Cheese" , "Mayo" , "Egg" , "Lettus" , "Tomato");