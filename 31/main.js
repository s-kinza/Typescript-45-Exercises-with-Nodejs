var userNames = ["Mahad", "Ali", "Zeshan", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array In Empty We Need To Find Some Users!");
}
else {
    // using foreach loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
