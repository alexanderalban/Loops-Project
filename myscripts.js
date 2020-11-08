// 1. Use a do...while lop to console.log the numbers from 1 to 1000

let loopNumber = 1;
const logThousand = () => {
    do {
        console.log("This number is " + loopNumber);
        loopNumber++;
    }
    while (loopNumber < 1000);
    console.log("This number is " + loopNumber);
};
logThousand();

// 2. Create an object (with keys and values) called person with the following data:

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

// 3. Create a function that logs out the keys of the object using Object.keys().

Object.keys(person);
console.log(Object.keys(person));

// 4. Create a function that logs out the keys and values of hte object using Object.entries

Object.entries(person);
console.log(Object.entries(person));

// 5. Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste 
// the person object you made above multiple times. Feel free to change the values to reflect 
//multiple people you might have in your database.

let tommy = {
    firstName: "Tommy",
    lastName: "Oliver",
    birthDate: "Jul 5, 1947",
    gender: "male"
};

let jason = {
    firstName: "Jason",
    lastName: "Scott",
    birthDate: "Jan 5, 1925",
    gender: "male"
};

let trini = {
    firstName: "Trini",
    lastName: "Kwan",
    birthDate: "October 4, 1950",
    gender: "female"
};

let zack = {
    firstName: "Zack",
    lastName: "Taylor",
    birthDate: "Jan 25, 1967",
    gender: "male"
};

let kimberly = {
    firstName: "Kimberly",
    lastName: "Hart",
    birthDate: "April 18, 1976",
    gender: "female"
};

let billy = {
    firstName: "Billy",
    lastName: "Cranston",
    birthDate: "Jan 5, 1980",
    gender: "male"
};

let arrayOfPersons = [tommy, jason, trini, zack, kimberly, billy];
console.log(arrayOfPersons);

// 6. Create a function that uses a for...of loop and an if statement to console.log the value
// associated with the key birthDate of each object if the birth year is an odd number

let addOdds = () => {
    for (let x of arrayOfPersons) {
        if (x["birthDate"].slice(-4) % 2) {
            console.log(x["birthDate"].slice(-4));
        }
    }
}
addOdds();

// 7. Use .map() to map over the arrayOfPersons and console.log() their information.

const mapLogger = (x) => {
    console.log(x);
}

arrayOfPersons.map(mapLogger);


// 8. Use .filter() to filter the persons array and console.log only males in the array.

const maleFilter = arrayOfPersons.filter((people => {
    if (people.gender === "male") {
        return people;
    }
}))

console.log(maleFilter);

// 9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.



//10. Use .filter() to filter the persons array and console.log only people that were born before 
// Jan 1, 1990.




//11. BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past

//12. BONUS - .filter() out the people in the array who are younger than 21

