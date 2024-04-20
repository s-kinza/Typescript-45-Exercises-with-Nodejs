// Array of Current Users
let current_users = ["Usman" , "ali" , "Areeba" , "Zain" , "Osama"] 

// Array of New Users
let new_users = ["Hamza" , "Kinza" , "Ali" , "Mahad" , "Areeba"]

// loop through new_users to Check For UserName Avaibility
new_users.forEach(new_one_user =>{
// Making a condition for username already exist and save in our_condition Variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
 // Print Different Messages Using If_Else statments   
    if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})


    