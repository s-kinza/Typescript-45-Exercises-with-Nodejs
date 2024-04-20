// Array of Current Users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// Array of New Users
var new_users = ["Hamza", "Kinza", "Ali", "Mahad", "Areeba"];
// loop through new_users to Check For UserName Avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition Variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Messages Using If_Else statments   
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
