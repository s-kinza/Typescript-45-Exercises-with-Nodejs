// Define the  function to show magicians name
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// funcion to make magicians great through .map()it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);  
}

// Define an array of magacians names
let magicians_name = ["harry poter", "kinza", "hamza"];

// call make great function to modify magicians name

let great_magicians = make_great(magicians_name);

// call show magicians that show modified list of magicians
show_magicians(great_magicians);