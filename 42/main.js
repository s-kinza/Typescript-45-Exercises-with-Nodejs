// Define the  function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// funcion to make magicians great through .map()it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magacians names
var magicians_name = ["harry poter", "kinza", "hamza"];
// call make great function to modify magicians name
var great_magicians = make_great(magicians_name);
// call show magicians that show modified list of magicians
show_magicians(great_magicians);
