// Define the  function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// funcion to make magicians great through .map()it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magacians names
var magician_names = ["harry poter", "kinza", "hamza"];
// Making a copy of original array through . slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both array orignal and copied
// Original
console.log("original array \n");
show_magicians(magician_names);
//copied
console.log("copied array\n");
show_magicians(copy_great_magicians);
