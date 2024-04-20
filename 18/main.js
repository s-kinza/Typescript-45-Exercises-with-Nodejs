var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of Countries and Print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("orginal Order:", countriesToVisit);
//print the array in Alphabatical Order without modifying the actual Array list
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
//show that the Array is still in its orginal order
console.log("still in orginal order:", countriesToVisit);
//print the Array in Alphabatical Order
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the Array is still in its orginal order
console.log("still in orginal order:", countriesToVisit);
//we have changed the orginal Array Order now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
//print the Array to show that it's back to it's orginal order 
console.log("Back to Orginal Order:", countriesToVisit.reverse());
//print the Array to show that its order has been changed in Alphabatical order now
console.log("Sorted in Alphabatical Order:", countriesToVisit.sort());
//we have changed again the orginal Array Order now in reverse order again 
console.log("Orginal Array Reversed again:", countriesToVisit.reverse());
