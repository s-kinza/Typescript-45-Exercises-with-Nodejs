// Creating a function with parameters which returns a values in string

function city_country(city: string, country: string): string{
    return `${city}, ${country}`;
}

//Calling a function and priny the returned value



console.log(city_country("karachi", "pakistan"));

console.log(city_country("tokyo", "japan"));

console.log(city_country("berlin", "germany"));