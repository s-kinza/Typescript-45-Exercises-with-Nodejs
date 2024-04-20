"use strict";
//Making A Function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
//Calling a function with by_default values 
make_shirt();
//calling a function now with Medium size and default message
make_shirt("Medium");
// Calling a function now with small size and also different print message
make_shirt("small", "I Love JavaScript");
