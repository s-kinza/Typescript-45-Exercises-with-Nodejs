//Making a Array of Countries and Print its Orginal Order
let countriesToVisit: string [] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("orginal Order:", countriesToVisit);

//print the array in Alphabatical Order without modifying the actual Array list
console.log("Alphabatical Order:",[...countriesToVisit].sort());

//show that the Array is still in its orginal order
console.log("still in orginal order:",countriesToVisit);

//print the Array in Alphabatical Order
console.log("Reverse order:",[...countriesToVisit].reverse());


//show that the Array is still in its orginal order
console.log("still in orginal order:",countriesToVisit);

//we have changed the orginal Array Order now
console.log("Orginal Array Reversed:",countriesToVisit.reverse());

//print the Array to show that it's back to it's orginal order 
console.log("Back to Orginal Order:",countriesToVisit.reverse());

//print the Array to show that its order has been changed in Alphabatical order now
console.log("Sorted in Alphabatical Order:",countriesToVisit.sort());

//we have changed again the orginal Array Order now in reverse order again 
console.log("Orginal Array Reversed again:",countriesToVisit.reverse());