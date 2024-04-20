//creating a Guest List Arry
let guestList =["usman", "nida", "hayat", "amir"];

//Making Variable for those guest who cant come
let dontCome =guestList [0];

//print the name of guest who cant come 
console.log(dontCome,"nhi a sakhta");

//add or Remove Values from Guest List Arry
guestList.splice(0, 1, "amir");

//Message Print for Bigger Table
console.log("Good News ! we have found a Bigger Table For Dinner");

//Adding a new guest at starting of index of Arry
guestList.unshift("Ali");

//Adding a new guest at ending index of Arry
guestList.push("Zain");

//get a middle index of our guest list arrry 
let middleIndex: number =Math.floor(guestList.length/ 2);

//adding a new guest to middle index of Arry
guestList.splice(middleIndex,0, "osama");

//print message of Updated List
console.log("updated list of our Guests");

//sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me?`));

//Inform that only two guests can be Invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time,so I can only invit two guest to dinner with me");

//Using While-Loop use to remove guests from the Arry until only two name remain
while(guestList.length > 2){
    let RemovedGuest = guestList.pop();
    console.log(`sorry, ${RemovedGuest} I can invit you to dinner`);

//sending a invitation to the lasttwo guest on the list
}console.log("Invitation to the last 2 Guest");
guestList.forEach(lasttwo =>console.log(`lucky ${lasttwo},you are still invited to dinner`));

//Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);